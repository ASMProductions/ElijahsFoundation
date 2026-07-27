import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        button { transition: background-color 0.2s ease; }
        button:hover { background-color: #a07b08; }
        
        @media (max-width: 768px) {
          .nav-links { 
            display: none !important;
          }
          .nav-links.open { 
            display: flex !important;
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            flex-direction: column;
            background: #fff;
            border-bottom: 1px solid #e5e5e5;
            padding: 16px;
            gap: 12px;
            z-index: 99;
          }
          .nav-button { 
            width: 100%;
            text-align: left;
          }
          .menu-toggle { 
            display: block !important;
          }
          .header-container {
            justify-content: space-between;
            padding: 12px 16px;
          }
        }
        
        @media (min-width: 769px) {
          .menu-toggle { 
            display: none !important;
          }
          .nav-links { 
            display: flex !important;
          }
          .header-container {
            justify-content: flex-end;
            padding: 16px 40px;
          }
        }
      `}</style>

      <header style={styles.header}>
        <div style={styles.headerContainer} className="header-container">
          <nav style={styles.navLinks} className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <Link href="/">
              <button style={styles.navButton} className="nav-button" onClick={() => setMobileMenuOpen(false)}>Home</button>
            </Link>
            <Link href="/provenance">
              <button style={styles.navButton} className="nav-button" onClick={() => setMobileMenuOpen(false)}>Authentication</button>
            </Link>
            <Link href="/pricing">
              <button style={styles.navButton} className="nav-button" onClick={() => setMobileMenuOpen(false)}>Plans</button>
            </Link>
            <Link href="/login">
              <button style={styles.navButton} className="nav-button" onClick={() => setMobileMenuOpen(false)}>Sign In</button>
            </Link>
          </nav>

          <button
            style={styles.menuToggle}
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </header>
    </>
  );
}

const styles = {
  header: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #e5e5e5',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  headerContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  navLinks: {
    display: 'flex',
    gap: '12px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
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
  menuToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#1a1a1a',
    padding: '8px',
    marginLeft: 'auto',
  },
};
