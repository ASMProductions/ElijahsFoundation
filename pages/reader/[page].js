import { getQuranPage } from "@/lib/quran-data";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps({ params }) {
  const pageNum = parseInt(params.page);
  if (pageNum < 1 || pageNum > 144) return { notFound: true };
  try {
    const pageData = getQuranPage(pageNum);
    return { props: { pageData, pageNum, totalPages: 144 } };
  } catch (error) {
    return { notFound: true };
  }
}

export default function ReaderPage({ pageData, pageNum, totalPages }) {
  const router = useRouter();
  const [translation, setTranslation] = useState("maulana");
  if (!pageData) return <div>Page not found</div>;
  
  const imageSrc = `/quran-pages/${pageData.image}`;
  
  return (
    <div className="reader-container">
      <style>{`
        .reader-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .reader-nav {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .reader-nav button, .reader-nav input {
          padding: 10px 15px;
          font-size: 14px;
          border-radius: 4px;
          border: 1px solid #b8860b;
          background: white;
          color: #b8860b;
          cursor: pointer;
        }
        .reader-nav button:hover:not(:disabled) {
          background: #b8860b;
          color: white;
        }
        .reader-nav button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .reader-nav input {
          width: 60px;
          text-align: center;
        }
        .reader-image {
          width: 100%;
          max-width: 500px;
          margin: 20px auto;
          display: flex;
          justify-content: center;
        }
        .reader-image img {
          width: 100%;
          height: auto;
          max-height: 600px;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .reader-content {
          margin: 30px 0;
        }
        .reader-content details {
          margin: 15px 0;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .reader-content summary {
          cursor: pointer;
          font-weight: 500;
          padding: 8px 0;
        }
        .reader-content p, .reader-content select {
          margin: 12px 0 0 0;
          line-height: 1.6;
        }
      `}</style>
      
      <nav className="reader-nav">
        <button onClick={() => router.push(`/reader/${pageNum - 1}`)} disabled={pageNum <= 1}>← Previous</button>
        <input type="number" min="1" max="144" value={pageNum} onChange={(e) => router.push(`/reader/${e.target.value}`)} />
        <span style={{padding: '10px'}}>of {totalPages}</span>
        <button onClick={() => router.push(`/reader/${pageNum + 1}`)} disabled={pageNum >= 144}>Next →</button>
      </nav>

      <h1>{pageData.title}</h1>
      {pageData.verses && <p><strong>{pageData.verses}</strong></p>}
      
      <div className="reader-image">
        <img src={imageSrc} alt={pageData.title} />
      </div>
      
      <div className="reader-content">
        <details>
          <summary>Annotations</summary>
          <p>{pageData.annotations}</p>
        </details>
        {pageData.surah && (
          <details>
            <summary>Translations</summary>
            <select value={translation} onChange={(e) => setTranslation(e.target.value)}>
              <option value="maulana">Maulana Muhammad Ali 1934</option>
              <option value="yusuf">Yusuf Ali 1934</option>
            </select>
            <p>{translation === "maulana" ? pageData.translationMaulana : pageData.translationYusuf}</p>
          </details>
        )}
        <details>
          <summary>Transliteration</summary>
          <p>{pageData.transliteration}</p>
        </details>
        {pageData.context && (
          <details>
            <summary>Context</summary>
            <p>{pageData.context}</p>
          </details>
        )}
      </div>
    </div>
  );
}
