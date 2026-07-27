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
            padding: 20px;
            gap: 0;
          }
          .nav-link { padding: 12px 0; border-bottom: 1px solid #e5e5e5; }
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
          <div style={styles.headerLeft}>
            <Link href="/">
              <div style={styles.logo}>
                <div style={styles.logoText}>Elijah's Foundation</div>
              </div>
            </Link>
          </div>

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
              <div style={styles.navLink} className="nav-link" onClick={() => setMobileMenuOpen(false)}>Sign In</div>
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
    padding: '20px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    cursor: 'pointer',
  },
  logoText: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a1a1a',
    letterSpacing: '0.5px',
  },
  navLinks: {
    display: 'flex',
    gap: '40px',
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#666',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    textDecoration: 'none',
    paddingBottom: '4px',
    borderBottom: '2px solid transparent',
  },
  navLinkHover: {
    color: '#b8860b',
    borderBottomColor: '#b8860b',
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
