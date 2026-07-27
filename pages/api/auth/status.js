// pages/api/auth/status.js

import { getSessionFromCookies, verifySession } from '@/lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const sessionId = getSessionFromCookies(req);

    if (!sessionId) {
      return res.status(200).json({ authenticated: false, user: null });
    }

    const session = await verifySession(sessionId);

    if (!session) {
      return res.status(200).json({ authenticated: false, user: null });
    }

    return res.status(200).json({
      authenticated: true,
      user: {
        email: session.email,
        tier: session.tier
      }
    });
  } catch (error) {
    console.error('Status check error:', error);
    return res.status(200).json({ authenticated: false, user: null });
  }
}
