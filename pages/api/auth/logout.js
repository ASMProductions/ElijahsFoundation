// pages/api/auth/logout.js

import { deleteSession } from '@/lib/redis';
import { getSessionFromCookies, clearSessionCookie } from '@/lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const sessionId = getSessionFromCookies(req);

    if (sessionId) {
      await deleteSession(sessionId);
    }

    clearSessionCookie(res);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ error: 'Logout failed' });
  }
}
