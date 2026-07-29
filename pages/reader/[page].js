import { getQuranPage } from "@/lib/quran-data";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const FIRST_PAGE = 2;
const LAST_PAGE = 144;

export async function getServerSideProps({ params }) {
  const pageNum = parseInt(params.page);
  if (pageNum < FIRST_PAGE || pageNum > LAST_PAGE) return { notFound: true };
  try {
    const pageData = getQuranPage(pageNum);
    return { props: { pageData, pageNum, totalPages: LAST_PAGE } };
  } catch (error) {
    return { notFound: true };
  }
}

export default function ReaderPage({ pageData, pageNum, totalPages }) {
  const router = useRouter();
  if (!pageData) return <div>Page not found</div>;

  const imageSrc = `/quran-pages/${pageData.image}`;

  return (
    <div className="reader-container">
      <style>{`
        .reader-container { max-width: 800px; margin: 0 auto; padding: 20px; font-family: sans-serif; }
        .reader-head { text-align: center; margin-bottom: 8px; }
        .reader-head .mus { font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; color: #8a6d3b; }
        .reader-head .pg { font-size: 12px; color: #999; margin-top: 4px; }
        .reader-nav { display: flex; gap: 10px; margin: 18px 0 24px; flex-wrap: wrap; justify-content: center; }
        .reader-nav button, .reader-nav input {
          padding: 10px 15px; font-size: 14px; border-radius: 4px;
          border: 1px solid #b8860b; background: white; color: #b8860b; cursor: pointer;
        }
        .reader-nav button:hover:not(:disabled) { background: #b8860b; color: white; }
        .reader-nav button:disabled { opacity: 0.5; cursor: not-allowed; }
        .reader-nav input { width: 60px; text-align: center; }
        .reader-image { width: 100%; max-width: 560px; margin: 20px auto; display: flex; justify-content: center; }
        .reader-image img {
          width: 100%; height: auto; max-height: 720px; object-fit: contain;
          border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
      `}</style>

      <div className="reader-head">
        <div className="mus">Surah Yāzdah</div>
        <div className="pg">Page {pageNum} of {totalPages}</div>
      </div>

      <nav className="reader-nav">
        <button onClick={() => router.push(`/reader/${pageNum - 1}`)} disabled={pageNum <= FIRST_PAGE}>← Previous</button>
        <input
          type="number"
          min={FIRST_PAGE}
          max={LAST_PAGE}
          value={pageNum}
          onChange={(e) => {
            const n = parseInt(e.target.value);
            if (n >= FIRST_PAGE && n <= LAST_PAGE) router.push(`/reader/${n}`);
          }}
        />
        <span style={{ padding: "10px" }}>of {totalPages}</span>
        <button onClick={() => router.push(`/reader/${pageNum + 1}`)} disabled={pageNum >= LAST_PAGE}>Next →</button>
      </nav>

      <div className="reader-image">
        <img src={imageSrc} alt={`Manuscript page ${pageNum}`} />
      </div>

      <Comments pageNum={pageNum} />
    </div>
  );
}

function ownTokens() {
  try { return JSON.parse(localStorage.getItem("elijah_tokens") || "{}"); }
  catch (e) { return {}; }
}
function rememberToken(id, token) {
  try {
    const t = ownTokens(); t[id] = token;
    localStorage.setItem("elijah_tokens", JSON.stringify(t));
  } catch (e) {}
}

function Comments({ pageNum }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", translation: "", transliteration: "", commentary: "" });
  const [status, setStatus] = useState("");
  const [editId, setEditId] = useState(null);
  const mine = ownTokens();

  async function load() {
    setLoading(true);
    try {
      const r = await fetch(`/api/comments/${pageNum}`);
      const d = await r.json();
      setList(Array.isArray(d.comments) ? d.comments : []);
    } catch (e) { setList([]); }
    setLoading(false);
  }
  useEffect(() => { load(); /* eslint-disable-next-line */ }, [pageNum]);

  function reset() {
    setForm({ name: "", translation: "", transliteration: "", commentary: "" });
    setEditId(null);
  }

  async function submit() {
    const { translation, transliteration, commentary } = form;
    if (!translation.trim() && !transliteration.trim() && !commentary.trim()) {
      setStatus("Please fill in at least one field.");
      return;
    }
    setStatus("Saving…");
    try {
      if (editId) {
        const r = await fetch(`/api/comments/${pageNum}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editId, token: mine[editId], ...form }),
        });
        const d = await r.json();
        if (!d.ok) throw new Error(d.error || "Edit failed");
        setStatus("Updated.");
      } else {
        const r = await fetch(`/api/comments/${pageNum}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const d = await r.json();
        if (!d.ok) throw new Error(d.error || "Submit failed");
        rememberToken(d.id, d.token);
        setStatus(d.published ? "Posted." : "Submitted — it will appear once approved.");
      }
      reset();
      load();
    } catch (e) { setStatus(e.message); }
  }

  function startEdit(c) {
    setEditId(c.id);
    setForm({
      name: c.name || "",
      translation: c.translation || "",
      transliteration: c.transliteration || "",
      commentary: c.commentary || "",
    });
    setStatus("Editing your entry.");
  }

  async function remove(c) {
    if (!confirm("Delete your entry?")) return;
    try {
      await fetch(`/api/comments/${pageNum}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: c.id, token: mine[c.id] }),
      });
      load();
    } catch (e) {}
  }

  const box = { width: "100%", boxSizing: "border-box", padding: "8px 10px", margin: "4px 0 12px", border: "1px solid #ddd", borderRadius: 4, fontFamily: "inherit", fontSize: 14 };
  const lbl = { fontSize: 12, fontWeight: 600, color: "#555", textTransform: "uppercase", letterSpacing: "0.05em" };

  return (
    <div style={{ margin: "32px 0", borderTop: "1px solid #eee", paddingTop: 20 }}>
      <h3 style={{ fontSize: 16, color: "#333" }}>Community annotation</h3>
      <p style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>
        Readers of Urdu, Persian, and Arabic are invited to contribute the translation,
        transliteration, and commentary for this page. You can edit or remove your own entry.
      </p>

      <div style={{ background: "#faf8f4", border: "1px solid #eee", borderRadius: 6, padding: 16, margin: "12px 0" }}>
        <div style={lbl}>Your name (optional)</div>
        <input style={box} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Anonymous" />

        <div style={lbl}>Translation</div>
        <textarea style={{ ...box, minHeight: 70 }} value={form.translation} onChange={(e) => setForm({ ...form, translation: e.target.value })} />

        <div style={lbl}>Transliteration</div>
        <textarea style={{ ...box, minHeight: 70 }} value={form.transliteration} onChange={(e) => setForm({ ...form, transliteration: e.target.value })} />

        <div style={lbl}>Commentary</div>
        <textarea style={{ ...box, minHeight: 70 }} value={form.commentary} onChange={(e) => setForm({ ...form, commentary: e.target.value })} />

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button onClick={submit} style={{ padding: "8px 18px", background: "#b8860b", color: "white", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 14 }}>
            {editId ? "Save changes" : "Submit"}
          </button>
          {editId && <button onClick={reset} style={{ padding: "8px 14px", background: "white", color: "#666", border: "1px solid #ddd", borderRadius: 4, cursor: "pointer", fontSize: 14 }}>Cancel</button>}
          {status && <span style={{ fontSize: 13, color: "#888" }}>{status}</span>}
        </div>
      </div>

      <div>
        {loading && <p style={{ fontSize: 13, color: "#999" }}>Loading…</p>}
        {!loading && list.length === 0 && <p style={{ fontSize: 13, color: "#999" }}>No annotations yet for this page.</p>}
        {list.map((c) => (
          <div key={c.id} style={{ border: "1px solid #eee", borderRadius: 6, padding: 14, margin: "10px 0" }}>
            <div style={{ fontSize: 12, color: "#999", marginBottom: 6 }}>
              {c.name ? c.name : "Anonymous"}
              {mine[c.id] && (
                <span style={{ marginLeft: 10 }}>
                  <a onClick={() => startEdit(c)} style={{ color: "#b8860b", cursor: "pointer", marginRight: 8 }}>edit</a>
                  <a onClick={() => remove(c)} style={{ color: "#c0392b", cursor: "pointer" }}>delete</a>
                </span>
              )}
            </div>
            {c.translation && <div style={{ margin: "6px 0" }}><span style={lbl}>Translation</span><div style={{ fontSize: 14, lineHeight: 1.6 }}>{c.translation}</div></div>}
            {c.transliteration && <div style={{ margin: "6px 0" }}><span style={lbl}>Transliteration</span><div style={{ fontSize: 14, lineHeight: 1.6 }}>{c.transliteration}</div></div>}
            {c.commentary && <div style={{ margin: "6px 0" }}><span style={lbl}>Commentary</span><div style={{ fontSize: 14, lineHeight: 1.6 }}>{c.commentary}</div></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
