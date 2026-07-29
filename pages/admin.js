import { useState } from "react";

export default function Admin() {
  const [token, setToken] = useState("");
  const [pending, setPending] = useState(null);
  const [msg, setMsg] = useState("");

  async function load(t) {
    setMsg("Loading…");
    try {
      const r = await fetch("/api/admin/comments", { headers: { "x-admin-token": t } });
      if (r.status === 401) { setMsg("Wrong token."); return; }
      const d = await r.json();
      setPending(d.pending || []);
      setMsg("");
    } catch (e) { setMsg("Error loading."); }
  }

  async function act(page, id, action) {
    try {
      await fetch("/api/admin/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, page, id, action }),
      });
      setPending((p) => p.filter((c) => !(c.page === page && c.id === id)));
    } catch (e) {}
  }

  const lbl = { fontSize: 11, fontWeight: 600, color: "#666", textTransform: "uppercase" };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: 24, fontFamily: "sans-serif" }}>
      <h2>Moderation</h2>
      {pending === null ? (
        <div>
          <input
            type="password"
            placeholder="Admin token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            style={{ padding: "8px 10px", border: "1px solid #ccc", borderRadius: 4, marginRight: 8 }}
          />
          <button onClick={() => load(token)} style={{ padding: "8px 16px", background: "#b8860b", color: "white", border: "none", borderRadius: 4, cursor: "pointer" }}>Enter</button>
          <div style={{ fontSize: 13, color: "#888", marginTop: 8 }}>{msg}</div>
        </div>
      ) : (
        <div>
          <p style={{ fontSize: 13, color: "#777" }}>{pending.length} pending</p>
          {pending.map((c) => (
            <div key={c.page + c.id} style={{ border: "1px solid #eee", borderRadius: 6, padding: 14, margin: "10px 0" }}>
              <div style={{ fontSize: 12, color: "#999" }}>Page {c.page} · {c.name || "Anonymous"}</div>
              {c.translation && <div style={{ margin: "6px 0" }}><span style={lbl}>Translation</span><div style={{ fontSize: 14 }}>{c.translation}</div></div>}
              {c.transliteration && <div style={{ margin: "6px 0" }}><span style={lbl}>Transliteration</span><div style={{ fontSize: 14 }}>{c.transliteration}</div></div>}
              {c.commentary && <div style={{ margin: "6px 0" }}><span style={lbl}>Commentary</span><div style={{ fontSize: 14 }}>{c.commentary}</div></div>}
              <div style={{ marginTop: 10 }}>
                <button onClick={() => act(c.page, c.id, "approve")} style={{ padding: "6px 14px", background: "#4a7c5e", color: "white", border: "none", borderRadius: 4, cursor: "pointer", marginRight: 8 }}>Approve</button>
                <button onClick={() => act(c.page, c.id, "reject")} style={{ padding: "6px 14px", background: "#c0392b", color: "white", border: "none", borderRadius: 4, cursor: "pointer" }}>Reject</button>
              </div>
            </div>
          ))}
          {pending.length === 0 && <p style={{ color: "#999" }}>Nothing waiting.</p>}
        </div>
      )}
    </div>
  );
}
