import { getQuranPage, getMetadata } from "@/lib/quran-data";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps({ params }) {
  const pageNum = parseInt(params.page);
  if (pageNum < 1 || pageNum > 144) return { notFound: true };
  try {
    const pageData = getQuranPage(pageNum);
    return { props: { pageData, pageNum, totalPages: 144 }, revalidate: 86400 };
  } catch (error) {
    return { notFound: true };
  }
}

export default function ReaderPage({ pageData, pageNum, totalPages }) {
  const router = useRouter();
  const [translation, setTranslation] = useState("maulana");
  if (!pageData) return <div>Page not found</div>;
  return (
    <div className="reader-container">
      <h1>{pageData.title}</h1>
      {pageData.verses && <p>{pageData.verses}</p>}
      <img src={`/quran-pages/${pageData.image}`} alt={pageData.title} />
      <details>
        <summary>Annotations</summary>
        <p>{pageData.annotations}</p>
      </details>
      <details>
        <summary>Translations</summary>
        <select value={translation} onChange={(e) => setTranslation(e.target.value)}>
          <option value="maulana">Maulana Muhammad Ali 1934</option>
          <option value="yusuf">Yusuf Ali 1934</option>
        </select>
        <p>{translation === "maulana" ? pageData.translationMaulana : pageData.translationYusuf}</p>
      </details>
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
      <nav>
        <button onClick={() => router.push(`/reader/${pageNum - 1}`)} disabled={pageNum <= 1}>Previous</button>
        <input type="number" min="1" max="144" value={pageNum} onChange={(e) => router.push(`/reader/${e.target.value}`)} />
        <span>of {totalPages}</span>
        <button onClick={() => router.push(`/reader/${pageNum + 1}`)} disabled={pageNum >= 144}>Next</button>
      </nav>
    </div>
  );
}
