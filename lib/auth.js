// lib/auth.js
// Authentication and session utilities

import { getSession, setUserTier, getUserTier } from "./redis";

// COOKIE CONFIGURATION
export const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME || "elijahs_session";
export const SESSION_MAX_AGE = parseInt(process.env.SESSION_COOKIE_MAX_AGE) || 2592000; // 30 days

// GET SESSION FROM COOKIES
export function getSessionFromCookies(req) {
  const cookieHeader = req.headers.cookie || "";
  const cookies = {};
  
  cookieHeader.split(";").forEach(cookie => {
    const [name, value] = cookie.trim().split("=");
    cookies[name] = decodeURIComponent(value);
  });
  
  return cookies[SESSION_COOKIE_NAME];
}

// VERIFY SESSION
export async function verifySession(sessionId) {
  if (!sessionId) return null;
  
  const session = await getSession(sessionId);
  
  if (!session) return null;
  
  return {
    email: session.email,
    tier: session.tier,
    createdAt: session.createdAt
  };
}

// CHECK ACCESS LEVEL
export function canAccessPage(userTier, pageNum, freePages = 30) {
  // Free users can only access first N pages
  if (userTier === "FREE" || !userTier) {
    return pageNum <= freePages;
  }
  
  // Premium users can access all pages
  return true;
}

// CHECK FEATURE ACCESS
export function canAccessFeature(userTier, feature) {
  const features = {
    "FREE": ["view_pages"],
    "MONTHLY_BASIC": ["view_pages", "transcriptions", "transliterations", "translations", "annotations", "ask_questions"],
    "MONTHLY_PRO": ["view_pages", "transcriptions", "transliterations", "translations", "annotations", "ask_questions", "priority_support"],
    "LIFETIME": ["view_pages", "transcriptions", "transliterations", "translations", "annotations", "ask_questions", "priority_support", "future_updates"]
  };
  
  const allowedFeatures = features[userTier] || features["FREE"];
  return allowedFeatures.includes(feature);
}

// REDIRECT IF NOT AUTHENTICATED
export function requireAuth(res, redirectUrl = "/login") {
  res.statusCode = 302;
  res.setHeader("Location", redirectUrl);
  res.end();
}

// SET SESSION COOKIE IN RESPONSE
export function setSessionCookie(res, sessionId) {
  const cookieValue = `${SESSION_COOKIE_NAME}=${sessionId}; Path=/; Max-Age=${SESSION_MAX_AGE}; HttpOnly; Secure; SameSite=Strict`;
  res.setHeader("Set-Cookie", cookieValue);
}

// CLEAR SESSION COOKIE
export function clearSessionCookie(res) {
  const cookieValue = `${SESSION_COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict`;
  res.setHeader("Set-Cookie", cookieValue);
}

export default {
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE,
  getSessionFromCookies,
  verifySession,
  canAccessPage,
  canAccessFeature,
  requireAuth,
  setSessionCookie,
  clearSessionCookie
};
