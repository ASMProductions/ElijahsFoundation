// pages/reader/[page].js

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import QURAN_PAGES, { getFreePages, getPremiumPages } from '@/lib/pages-data';

export default function PageViewer({ user }) {
  const router = useRouter();
  const { page } = router.query;
  const pageNum = parseInt(page);
  
  const [currentPage, setCurrentPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!page) return;
    
    // Check access level
    const freePages = getFreePages();
    const freePageNumbers = freePages.map(p => p.pageNum);
    
    const isFreePage = freePageNumbers.includes(pageNum);
    const hasPremiumAccess = user && (user.tier === 'MONTHLY_BASIC' || user.tier === 'MONTHLY_PRO' || user.tier === 'LIFETIME');
    
    if (!isFreePage && !hasPremiumAccess) {
      setError('Premium access required to view this page');
      setLoading(false);
      return;
    }
    
    // Get page data
    const pageData = QURAN_PAGES.find(p => p.pageNum === pageNum);
    
    if (!pageData) {
      setError('Page not found');
      setLoading(false);
      return;
    }
    
    setCurrentPage(pageData);
    setLoading(false);
  }, [page, user]);

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading page...</div>;
  }

  if (error) {
    return (
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          background: '#fee',
          border: '1px solid #fcc',
          color: '#c00',
          padding: '1rem',
          borderRadius: '4px',
          marginBottom: '2rem'
        }}>
          <h3>Access Denied</h3>
          <p>{error}</p>
          {!user && (
            <Link href="/login">
              <button style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                background: '#8b7355',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Sign In to View
              </button>
            </Link>
          )}
          {user && (
            <Link href="/pricing">
              <button style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                background: '#8b7355',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Upgrade Your Plan
              </button>
            </Link>
          )}
        </div>
      </div>
    );
  }

  if (!currentPage) {
    return <div>No page data</div>;
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      
      {/* PAGE HEADER */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div>
          <h1 style={{ color: '#8b7355' }}>
            {currentPage.surahName ? `${currentPage.surahNum}. ${currentPage.surahName}` : 'Front Matter'}
          </h1>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            Page {currentPage.pageNum} of 144
          </p>
        </div>
        
        <Link href="/reader">
          <button style={{
            padding: '0.5rem 1rem',
            background: '#f5f5f5',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            ← Back
          </button>
        </Link>
      </div>

      {/* PAGE IMAGE */}
      <div style={{
        background: '#f5f5f5',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <img
          src={`/quran-pages/${currentPage.imageRef}`}
          alt={`Page ${currentPage.pageNum}`}
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        />
      </div>

      {/* PAGE CONTENT TABS */}
      <PageContentTabs page={currentPage} user={user} />

      {/* NAVIGATION */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        marginTop: '2rem',
        paddingTop: '2rem',
        borderTop: '1px solid #e0e0e0'
      }}>
        {pageNum > 1 ? (
          <Link href={`/reader/${pageNum - 1}`}>
            <button style={{
              padding: '0.75rem 1rem',
              background: '#8b7355',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              ← Previous Page
            </button>
          </Link>
        ) : (
          <div></div>
        )}
        
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {[...Array(5)].map((_, i) => {
            const p = Math.max(1, pageNum - 2) + i;
            return p <= 144 ? (
              <Link key={p} href={`/reader/${p}`}>
                <button style={{
                  padding: '0.5rem 0.75rem',
                  background: p === pageNum ? '#8b7355' : '#f5f5f5',
                  color: p === pageNum ? 'white' : '#333',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  {p}
                </button>
              </Link>
            ) : null;
          })}
        </div>
        
        {pageNum < 144 ? (
          <Link href={`/reader/${pageNum + 1}`}>
            <button style={{
              padding: '0.75rem 1rem',
              background: '#8b7355',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Next Page →
            </button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

function PageContentTabs({ page, user }) {
  const [activeTab, setActiveTab] = useState('image');
  
  const tabs = [
    { id: 'image', label: 'Image' },
    { id: 'transliteration', label: 'Transliteration', premium: true },
    { id: 'translation', label: 'Translation', premium: true },
    { id: 'annotations', label: 'Annotations', premium: true },
    { id: 'context', label: 'Context', premium: true }
  ];

  return (
    <div>
      {/* TAB BUTTONS */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        borderBottom: '2px solid #e0e0e0',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          const isPremium = tab.premium && (!user || (user.tier === 'FREE'));
          
          return (
            <button
              key={tab.id}
              onClick={() => !isPremium && setActiveTab(tab.id)}
              disabled={isPremium}
              style={{
                padding: '0.75rem 1rem',
                background: isActive ? '#8b7355' : 'transparent',
                color: isActive ? 'white' : '#666',
                border: 'none',
                borderBottom: isActive ? '3px solid #8b7355' : 'none',
                cursor: isPremium ? 'not-allowed' : 'pointer',
                opacity: isPremium ? 0.5 : 1,
                fontSize: '0.9rem'
              }}
            >
              {tab.label}
              {isPremium && <span style={{ marginLeft: '0.25rem' }}>🔒</span>}
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT */}
      <div style={{
        background: '#f5f5f5',
        padding: '1.5rem',
        borderRadius: '8px',
        minHeight: '200px'
      }}>
        {activeTab === 'image' && (
          <p style={{ color: '#666' }}>Page {page.pageNum} - Original manuscript image displayed above</p>
        )}
        
        {activeTab === 'transliteration' && (
          <div>
            <h3 style={{ marginBottom: '1rem', color: '#8b7355' }}>Arabic Transliteration</h3>
            {page.arabicTranslit ? (
              <p style={{ lineHeight: 1.8, whiteSpace: 'pre-wrap', fontFamily: 'Georgia, serif' }}>
                {page.arabicTranslit}
              </p>
            ) : (
              <p style={{ color: '#999' }}>No transliteration available for this page</p>
            )}
          </div>
        )}
        
        {activeTab === 'translation' && (
          <div>
            <h3 style={{ marginBottom: '1rem', color: '#8b7355' }}>
              Maulana Muhammad Ali Translation (1934)
            </h3>
            {page.englishTranslation ? (
              <p style={{ lineHeight: 1.8, whiteSpace: 'pre-wrap', fontFamily: 'Georgia, serif' }}>
                {page.englishTranslation}
              </p>
            ) : (
              <p style={{ color: '#999' }}>No translation available for this page</p>
            )}
          </div>
        )}
        
        {activeTab === 'annotations' && (
          <div>
            <h3 style={{ marginBottom: '1rem', color: '#8b7355' }}>Scholarly Annotations</h3>
            {page.manuscriptNotes && page.manuscriptNotes.length > 0 ? (
              page.manuscriptNotes.map((note, i) => (
                <div key={i} style={{
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: 'white',
                  borderLeft: '4px solid #8b7355',
                  borderRadius: '4px'
                }}>
                  <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                    <strong>Location:</strong> {note.location}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                    <strong>Original:</strong> {note.originalText}
                  </p>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Translation:</strong> {note.englishTranslation}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#999' }}>
                    <strong>Topic:</strong> {note.topic}
                  </p>
                </div>
              ))
            ) : (
              <p style={{ color: '#999' }}>No annotations available for this page</p>
            )}
          </div>
        )}
        
        {activeTab === 'context' && (
          <div>
            <h3 style={{ marginBottom: '1rem', color: '#8b7355' }}>Scholarly Context</h3>
            {page.scholarlyContext ? (
              <>
                {page.scholarlyContext.surahIntroduction && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#8b7355', marginBottom: '0.5rem' }}>Surah Introduction</h4>
                    <p>{page.scholarlyContext.surahIntroduction}</p>
                  </div>
                )}
                {page.scholarlyContext.versesSignificance && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#8b7355', marginBottom: '0.5rem' }}>Verses Significance</h4>
                    <p>{page.scholarlyContext.versesSignificance}</p>
                  </div>
                )}
                {page.scholarlyContext.historicalBackground && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#8b7355', marginBottom: '0.5rem' }}>Historical Background</h4>
                    <p>{page.scholarlyContext.historicalBackground}</p>
                  </div>
                )}
                {page.scholarlyContext.thematicConnections && (
                  <div>
                    <h4 style={{ color: '#8b7355', marginBottom: '0.5rem' }}>Thematic Connections</h4>
                    <p>{page.scholarlyContext.thematicConnections}</p>
                  </div>
                )}
              </>
            ) : (
              <p style={{ color: '#999' }}>No context available for this page</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
