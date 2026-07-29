import { Redis } from "@upstash/redis";

const NAMESPACE = "elijah:";
const redis = Redis.fromEnv();
const autoPublish = process.env.COMMENT_AUTO_PUBLISH === "true";
const keyFor = (page) => `${NAMESPACE}comments:${page}`;

function rid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
function clean(s) {
  return typeof s === "string" ? s.slice(0, 8000) : "";
}
function publicView(c) {
  const { token, ...rest } = c;
  return rest;
}

export default async function handler(req, res) {
  const page = parseInt(req.query.page);
  if (isNaN(page) || page < 1 || page > 144) {
    return res.status(400).json({ ok: false, error: "bad page" });
  }
  const key = keyFor(page);

  try {
    if (req.method === "GET") {
      const all = await redis.hgetall(key);
      const items = all
        ? Object.values(all)
            .map((v) => (typeof v === "string" ? JSON.parse(v) : v))
            .filter((c) => c.status === "approved")
            .sort((a, b) => a.ts - b.ts)
            .map(publicView)
        : [];
      return res.status(200).json({ ok: true, comments: items });
    }

    if (req.method === "POST") {
      const b = req.body || {};
      const translation = clean(b.translation);
      const transliteration = clean(b.transliteration);
      const commentary = clean(b.commentary);
      if (!translation.trim() && !transliteration.trim() && !commentary.trim()) {
        return res.status(400).json({ ok: false, error: "empty" });
      }
      const id = rid();
      const token = rid() + rid();
      const comment = {
        id, token,
        name: clean(b.name).slice(0, 120),
        translation, transliteration, commentary,
        status: autoPublish ? "approved" : "pending",
        ts: Date.now(),
      };
      await redis.hset(key, { [id]: JSON.stringify(comment) });
      return res.status(200).json({ ok: true, id, token, published: autoPublish });
    }

    if (req.method === "PATCH") {
      const b = req.body || {};
      const raw = await redis.hget(key, b.id);
      if (!raw) return res.status(404).json({ ok: false, error: "not found" });
      const c = typeof raw === "string" ? JSON.parse(raw) : raw;
      if (c.token !== b.token) return res.status(403).json({ ok: false, error: "not yours" });
      c.name = clean(b.name).slice(0, 120);
      c.translation = clean(b.translation);
      c.transliteration = clean(b.transliteration);
      c.commentary = clean(b.commentary);
      c.edited = Date.now();
      await redis.hset(key, { [b.id]: JSON.stringify(c) });
      return res.status(200).json({ ok: true });
    }

    if (req.method === "DELETE") {
      const b = req.body || {};
      const raw = await redis.hget(key, b.id);
      if (!raw) return res.status(200).json({ ok: true });
      const c = typeof raw === "string" ? JSON.parse(raw) : raw;
      if (c.token !== b.token) return res.status(403).json({ ok: false, error: "not yours" });
      await redis.hdel(key, b.id);
      return res.status(200).json({ ok: true });
    }

    res.setHeader("Allow", "GET, POST, PATCH, DELETE");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  } catch (e) {
    return res.status(500).json({ ok: false, error: "server error" });
  }
}
