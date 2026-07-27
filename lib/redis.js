// lib/redis.js
// Upstash Redis utilities for session management and data storage

import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// NAMESPACE PREFIX
const PREFIX = "elijahs:";

// SESSION MANAGEMENT
export async function createSession(email, tier) {
  const sessionId = Math.random().toString(36).substring(2, 15);
  const sessionKey = `${PREFIX}session:${sessionId}`;
  const emailKey = `${PREFIX}email:${email}`;
  
  try {
    await redis.set(sessionKey, JSON.stringify({ email, tier, createdAt: Date.now() }), {
      ex: 2592000, // 30 days
    });
    await redis.set(emailKey, sessionId, { ex: 2592000 });
    
    return sessionId;
  } catch (error) {
    console.error("Redis session creation error:", error);
    throw error;
  }
}

export async function getSession(sessionId) {
  const sessionKey = `${PREFIX}session:${sessionId}`;
  
  try {
    const data = await redis.get(sessionKey);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Redis session retrieval error:", error);
    return null;
  }
}

export async function deleteSession(sessionId) {
  const sessionKey = `${PREFIX}session:${sessionId}`;
  
  try {
    await redis.del(sessionKey);
  } catch (error) {
    console.error("Redis session deletion error:", error);
  }
}

// USER TIER MANAGEMENT
export async function setUserTier(email, tier) {
  const tierKey = `${PREFIX}user:${email}:tier`;
  
  try {
    await redis.set(tierKey, tier, { ex: 2592000 });
  } catch (error) {
    console.error("Redis tier update error:", error);
  }
}

export async function getUserTier(email) {
  const tierKey = `${PREFIX}user:${email}:tier`;
  
  try {
    return await redis.get(tierKey);
  } catch (error) {
    console.error("Redis tier retrieval error:", error);
    return null;
  }
}

// STRIPE CUSTOMER TRACKING
export async function setStripeCustomer(email, stripeCustomerId) {
  const key = `${PREFIX}stripe:${email}`;
  
  try {
    await redis.set(key, stripeCustomerId, { ex: 7776000 }); // 90 days
  } catch (error) {
    console.error("Redis stripe customer error:", error);
  }
}

export async function getStripeCustomer(email) {
  const key = `${PREFIX}stripe:${email}`;
  
  try {
    return await redis.get(key);
  } catch (error) {
    console.error("Redis stripe retrieval error:", error);
    return null;
  }
}

// Q&A TRACKING
export async function addQuestion(email, question) {
  const id = Math.random().toString(36).substring(2, 15);
  const key = `${PREFIX}question:${id}`;
  
  try {
    await redis.set(key, JSON.stringify({
      id,
      email,
      question,
      answered: false,
      answer: null,
      createdAt: Date.now()
    }), { ex: 7776000 });
    
    // Add to user's questions list
    await redis.lpush(`${PREFIX}user:${email}:questions`, id);
    
    return id;
  } catch (error) {
    console.error("Redis question storage error:", error);
    throw error;
  }
}

export async function getQuestion(id) {
  const key = `${PREFIX}question:${id}`;
  
  try {
    const data = await redis.get(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Redis question retrieval error:", error);
    return null;
  }
}

export async function answerQuestion(id, answer) {
  const key = `${PREFIX}question:${id}`;
  
  try {
    const question = await getQuestion(id);
    if (question) {
      question.answered = true;
      question.answer = answer;
      question.answeredAt = Date.now();
      await redis.set(key, JSON.stringify(question), { ex: 7776000 });
    }
  } catch (error) {
    console.error("Redis answer update error:", error);
  }
}

export async function getUserQuestions(email) {
  try {
    const ids = await redis.lrange(`${PREFIX}user:${email}:questions`, 0, -1);
    const questions = [];
    
    for (const id of ids) {
      const q = await getQuestion(id);
      if (q) questions.push(q);
    }
    
    return questions;
  } catch (error) {
    console.error("Redis user questions retrieval error:", error);
    return [];
  }
}

export async function getAllUnansweredQuestions() {
  try {
    // Get all question keys
    const keys = await redis.keys(`${PREFIX}question:*`);
    const questions = [];
    
    for (const key of keys) {
      const data = await redis.get(key);
      if (data) {
        const q = JSON.parse(data);
        if (!q.answered) questions.push(q);
      }
    }
    
    return questions.sort((a, b) => b.createdAt - a.createdAt);
  } catch (error) {
    console.error("Redis all questions retrieval error:", error);
    return [];
  }
}

// RATE LIMITING (for Q&A submissions)
export async function checkRateLimit(email, limit = 5) {
  const key = `${PREFIX}ratelimit:${email}`;
  
  try {
    const count = await redis.incr(key);
    
    if (count === 1) {
      await redis.expire(key, 3600); // 1 hour window
    }
    
    return count <= limit;
  } catch (error) {
    console.error("Redis rate limit error:", error);
    return true; // Allow on error
  }
}

export default redis;
