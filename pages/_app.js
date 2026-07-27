// pages/_app.js

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    fetch('/api/auth/status')
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setUser(data.user);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f5f5f5' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header user={user} />
      <main style={{ flex: 1, maxWidth: '100%' }}>
        <Component {...pageProps} user={user} />
      </main>
      <Footer />
    </div>
  );
}

function Header({ user }) {
  const router = useRouter();

  return (
    <header style={{
      background: 'white',
      borderBottom: '1px solid #e0e0e0',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link href="/">
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8b7355', cursor: 'pointer' }}>
            elijahs.foundation
          </span>
        </Link>
        
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/">
            <span style={{ cursor: 'pointer' }}>Home</span>
          </Link>
          
          <Link href="/provenance">
            <span style={{ cursor: 'pointer' }}>Authentication</span>
          </Link>
          
          {user ? (
            <>
              <Link href="/reader">
                <span style={{ cursor: 'pointer' }}>Read</span>
              </Link>
              <Link href="/questions">
                <span style={{ cursor: 'pointer' }}>Questions</span>
              </Link>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>
                {user.email} ({user.tier})
              </span>
              <button
                onClick={() => {
                  fetch('/api/auth/logout', { method: 'POST' })
                    .then(() => router.push('/'))
                    .catch(console.error);
                }}
                style={{
                  padding: '0.5rem 1rem',
                  background: '#8b7355',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/pricing">
                <span style={{ cursor: 'pointer' }}>Plans</span>
              </Link>
              <Link href="/login">
                <button style={{
                  padding: '0.5rem 1rem',
                  background: '#8b7355',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Sign In
                </button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{
      background: '#1a1a1a',
      color: 'white',
      padding: '2rem',
      textAlign: 'center',
      marginTop: '4rem'
    }}>
      <p>The First Quran Given to Elijah Muhammad in North America</p>
      <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: 0.7 }}>
        © 2024 ASM Productions LLC. All rights reserved.
      </p>
    </footer>
  );
}

export default MyApp;
