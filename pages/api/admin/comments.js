import { Redis } from "@upstash/redis";

const NAMESPACE = "elijah:";
const redis = Redis.fromEnv();
const keyFor = (page) => `${NAMESPACE}comments:${page}`;

function authed(req) {
  const t = req.headers["x-admin-token"] || (req.body && req.body.token);
  return process.env.ADMIN_TOKEN && t === process.env.ADMIN_TOKEN;
}

export default async function handler(req, res) {
  if (!authed(req)) return res.status(401).json({ ok: false, error: "unauthorized" });

  try {
    if (req.method === "GET") {
      const keys = await redis.keys(`${NAMESPACE}comments:*`);
      const pending = [];
      for (const k of keys) {
        const page = parseInt(k.split(":").pop());
        const all = await redis.hgetall(k);
        if (!all) continue;
        for (const v of Object.values(all)) {
          const c = typeof v === "string" ? JSON.parse(v) : v;
          if (c.status === "pending") {
            const { token, ...rest } = c;
            pending.push({ ...rest, page });
          }
        }
      }
      pending.sort((a, b) => a.ts - b.ts);
      return res.status(200).json({ ok: true, pending });
    }

    if (req.method === "POST") {
      const { page, id, action } = req.body || {};
      const key = keyFor(page);
      const raw = await redis.hget(key, id);
      if (!raw) return res.status(404).json({ ok: false, error: "not found" });
      const c = typeof raw === "string" ? JSON.parse(raw) : raw;
      if (action === "approve") {
        c.status = "approved";
        await redis.hset(key, { [id]: JSON.stringify(c) });
      } else if (action === "reject") {
        await redis.hdel(key, id);
      } else {
        return res.status(400).json({ ok: false, error: "bad action" });
      }
      return res.status(200).json({ ok: true });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  } catch (e) {
    return res.status(500).json({ ok: false, error: "server error" });
  }
}
