import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Reader() {
  const router = useRouter();
  const { page } = router.query;
  const pageNum = parseInt(page) || 1;
  const totalPages = 144;
  const [activeTab, setActiveTab] = useState('translation');
  const [translationVersion, setTranslationVersion] = useState('maulana');

  const nextPage = () => {
    if (pageNum < totalPages) {
      router.push(`/reader/${pageNum + 1}`);
    }
  };

  const prevPage = () => {
    if (pageNum > 1) {
      router.push(`/reader/${pageNum - 1}`);
    }
  };

  const goToPage = (e) => {
    const num = parseInt(e.target.value);
    if (num >= 1 && num <= totalPages) {
      router.push(`/reader/${num}`);
    }
  };

  // Mock data - replace with actual content from lib/pages-data.js
  const pageData = {
    translationMaulana: `[Maulana Muhammad Ali translation for page ${pageNum}]`,
    translationYusuf: `[Yusuf Ali translation for page ${pageNum}]`,
    transliteration: `[Transliteration for page ${pageNum}]`,
    annotations: `[Scholarly annotations for page ${pageNum}]`,
    context: `[Historical context for page ${pageNum}]`,
  };

  return (
    <>
      <Head>
        <title>The First Quran - Page {pageNum}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div style={styles.container}>
        {/* PAGE NAVIGATION */}
        <div style={styles.navSection}>
          <div style={styles.navContent}>
            <button style={styles.navButton} onClick={prevPage} disabled={pageNum === 1}>
              ← Previous
            </button>

            <div style={styles.pageInfo}>
              <span>Page</span>
              <select value={pageNum} onChange={goToPage} style={styles.pageSelect}>
                {Array.from({ length: totalPages }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <span>of {totalPages}</span>
            </div>

            <button style={styles.navButton} onClick={nextPage} disabled={pageNum === totalPages}>
              Next →
            </button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div style={styles.readerContent}>
          {/* IMAGE */}
          <div style={styles.imageSection}>
            <img
              src={`/quran-pages/${String(pageNum).padStart(3, '0')}.jpeg`}
              alt={`Page ${pageNum}`}
              style={styles.manuscriptImage}
            />
          </div>

          {/* TABS */}
          <div style={styles.tabsSection}>
            <div style={styles.tabButtons}>
              <button
                style={{...styles.tabButton, ...(activeTab === 'translation' ? styles.tabButtonActive : {})}}
                onClick={() => setActiveTab('translation')}
              >
                Translation
              </button>
              <button
                style={{...styles.tabButton, ...(activeTab === 'transliteration' ? styles.tabButtonActive : {})}}
                onClick={() => setActiveTab('transliteration')}
              >
                Transliteration
              </button>
              <button
                style={{...styles.tabButton, ...(activeTab === 'annotations' ? styles.tabButtonActive : {})}}
                onClick={() => setActiveTab('annotations')}
              >
                Annotations
              </button>
              <button
                style={{...styles.tabButton, ...(activeTab === 'context' ? styles.tabButtonActive : {})}}
                onClick={() => setActiveTab('context')}
              >
                Context
              </button>
            </div>

            {/* TAB CONTENT */}
            <div style={styles.tabContent}>
              {activeTab === 'translation' && (
                <div style={styles.contentBox}>
                  <div style={styles.translationHeader}>
                    <h3>English Translation - Page {pageNum}</h3>
                    <select 
                      value={translationVersion} 
                      onChange={(e) => setTranslationVersion(e.target.value)}
                      style={styles.translationSelect}
                    >
                      <option value="maulana">Maulana Muhammad Ali (1934)</option>
                      <option value="yusuf">Yusuf Ali (1934)</option>
                    </select>
                  </div>
                  <p>
                    {translationVersion === 'maulana' 
                      ? pageData.translationMaulana 
                      : pageData.translationYusuf}
                  </p>
                </div>
              )}
              {activeTab === 'transliteration' && (
                <div style={styles.contentBox}>
                  <h3>Arabic Transliteration - Page {pageNum}</h3>
                  <p>{pageData.transliteration}</p>
                </div>
              )}
              {activeTab === 'annotations' && (
                <div style={styles.contentBox}>
                  <h3>Scholarly Annotations - Page {pageNum}</h3>
                  <p>{pageData.annotations}</p>
                </div>
              )}
              {activeTab === 'context' && (
                <div style={styles.contentBox}>
                  <h3>Historical Context - Page {pageNum}</h3>
                  <p>{pageData.context}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#fafaf8',
    color: '#1a1a1a',
  },
  navSection: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #e5e5e5',
    padding: '20px 0',
    position: 'sticky',
    top: 64,
    zIndex: 50,
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
  },
  navButton: {
    padding: '10px 20px',
    backgroundColor: '#b8860b',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  pageInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    fontWeight: '600',
  },
  pageSelect: {
    padding: '8px 12px',
    border: '1px solid #e5e5e5',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  readerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  imageSection: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  manuscriptImage: {
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '600px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    borderRadius: '4px',
  },
  tabsSection: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid #e5e5e5',
    overflow: 'hidden',
  },
  tabButtons: {
    display: 'flex',
    borderBottom: '1px solid #e5e5e5',
    overflowX: 'auto',
  },
  tabButton: {
    flex: 1,
    padding: '16px',
    backgroundColor: '#f5f5f5',
    border: 'none',
    borderRight: '1px solid #e5e5e5',
    fontSize: '14px',
    fontWeight: '600',
    color: '#666',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  },
  tabButtonActive: {
    backgroundColor: '#b8860b',
    color: '#fff',
  },
  tabContent: {
    padding: '40px',
    minHeight: '300px',
    lineHeight: '1.8',
  },
  contentBox: {
    maxWidth: '800px',
  },
  translationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  translationSelect: {
    padding: '8px 12px',
    border: '1px solid #e5e5e5',
    borderRadius: '6px',
    fontSize: '13px',
    cursor: 'pointer',
    backgroundColor: '#fff',
  },
};
