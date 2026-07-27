// pages/api/auth/login.js

import { createSession, setUserTier } from '@/lib/redis';
import { setSessionCookie } from '@/lib/auth';
import { sendWelcomeEmail } from '@/lib/email';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // NOTE: In production, verify password against hashed password in database
    // For now, we'll allow any email to access free tier, require subscription for premium

    // Determine tier based on email/subscription status
    // In production: query Stripe/database for actual tier
    let tier = 'FREE';

    // Create session
    const sessionId = await createSession(email, tier);

    // Set user tier in Redis
    await setUserTier(email, tier);

    // Send welcome email (optional)
    // await sendWelcomeEmail(email, tier);

    // Set session cookie
    setSessionCookie(res, sessionId);

    return res.status(200).json({
      success: true,
      user: { email, tier }
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Login failed' });
  }
}
