import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none; }
          .nav-links.open { 
            display: flex; 
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            flex-direction: column;
            background: #fff;
            border-bottom: 1px solid #e5e5e5;
            padding: 0;
            gap: 0;
          }
          .nav-link { 
            padding: 16px 20px; 
            border-bottom: 1px solid #e5e5e5;
            width: 100%;
            text-align: left;
          }
          .nav-link:last-child { border-bottom: none; }
          .menu-toggle { display: block; }
          .header-container { position: relative; }
        }
        
        @media (min-width: 641px) {
          .menu-toggle { display: none; }
          .nav-links { display: flex; }
        }
      `}</style>

      <header style={styles.header}>
        <div style={styles.headerContainer} className="header-container">
          <nav style={styles.navLinks} className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <Link href="/">
              <div style={styles.navLink} className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</div>
            </Link>
            <Link href="/provenance">
              <div style={styles.navLink} className="nav-link" onClick={() => setMobileMenuOpen(false)}>Authentication</div>
            </Link>
            <Link href="/pricing">
              <div style={styles.navLink} className="nav-link" onClick={() => setMobileMenuOpen(false)}>Plans</div>
            </Link>
            <Link href="/login">
              <button style={styles.signInButton} onClick={() => setMobileMenuOpen(false)}>Sign In</button>
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
    padding: '16px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  navLinks: {
    display: 'flex',
    gap: '24px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
  navLink: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#666',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    textDecoration: 'none',
    paddingBottom: '2px',
    borderBottom: '1px solid transparent',
  },
  signInButton: {
    padding: '10px 24px',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  menuToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#1a1a1a',
    padding: '8px',
  },
};
