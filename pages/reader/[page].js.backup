import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Reader() {
  const router = useRouter();
  const { page } = router.query;
  const pageNum = parseInt(page) || 1;
  const totalPages = 144;
  const [expandedSections, setExpandedSections] = useState({});
  const [translationVersion, setTranslationVersion] = useState('maulana');

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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
    annotations: `[Scholarly annotations for page ${pageNum} - handwritten notes, context, references]`,
    translationMaulana: `[Maulana Muhammad Ali translation for page ${pageNum}]`,
    translationYusuf: `[Yusuf Ali translation for page ${pageNum}]`,
    transliteration: `[Arabic transliteration for page ${pageNum}]`,
    context: `[Historical context for page ${pageNum}]`,
  };

  const sections = [
    { id: 'annotations', title: 'Annotations', icon: '📝' },
    { id: 'translation', title: 'Translation', icon: '🌍' },
    { id: 'transliteration', title: 'Transliteration', icon: '🔤' },
    { id: 'context', title: 'Context', icon: '📚' },
  ];

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

          {/* ACCORDION SECTIONS */}
          <div style={styles.accordionContainer}>
            {sections.map(section => (
              <div key={section.id} style={styles.accordionItem}>
                <button
                  style={styles.accordionHeader}
                  onClick={() => toggleSection(section.id)}
                >
                  <span style={styles.accordionIcon}>
                    {expandedSections[section.id] ? '▼' : '▶'}
                  </span>
                  <span style={styles.accordionTitle}>
                    {section.icon} {section.title}
                  </span>
                </button>

                {expandedSections[section.id] && (
                  <div style={styles.accordionContent}>
                    {section.id === 'annotations' && (
                      <p>{pageData.annotations}</p>
                    )}
                    {section.id === 'translation' && (
                      <>
                        <div style={styles.translationSelector}>
                          <label>Choose translation:</label>
                          <select 
                            value={translationVersion} 
                            onChange={(e) => setTranslationVersion(e.target.value)}
                            style={styles.select}
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
                      </>
                    )}
                    {section.id === 'transliteration' && (
                      <p>{pageData.transliteration}</p>
                    )}
                    {section.id === 'context' && (
                      <p>{pageData.context}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
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
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  imageSection: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  manuscriptImage: {
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '700px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    borderRadius: '4px',
  },
  accordionContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid #e5e5e5',
    overflow: 'hidden',
  },
  accordionItem: {
    borderBottom: '1px solid #e5e5e5',
  },
  accordionHeader: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  accordionHeaderHover: {
    backgroundColor: '#f0f0f0',
  },
  accordionIcon: {
    fontSize: '12px',
    color: '#b8860b',
  },
  accordionTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  accordionContent: {
    padding: '24px 20px',
    backgroundColor: '#fff',
    lineHeight: '1.8',
    color: '#333',
  },
  translationSelector: {
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  select: {
    padding: '8px 12px',
    border: '1px solid #e5e5e5',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#fff',
  },
};
