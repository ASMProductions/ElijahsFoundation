import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Surah Yāzdah — A Digital Manuscript Archive</title>
        <meta name="description" content="A digital archive of an illuminated Surah Yāzdah manuscript, Lahore, early 20th century. Open for community translation and commentary." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <style>{`
        @media (max-width: 640px) {
          .hero { padding: 40px 16px !important; }
          .hero-title { font-size: 30px !important; line-height: 1.3 !important; }
          .hero-subtitle { font-size: 16px !important; }
          .meta-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .manuscript-image { max-width: 280px !important; }
          .specs-section { padding: 40px 16px !important; }
          .specs-grid { grid-template-columns: 1fr !important; }
          .cta-section { padding: 40px 16px !important; }
          .footer { padding: 24px 16px !important; }
        }
      `}</style>

      <div style={styles.container}>
        <section style={styles.hero} className="hero">
          <div style={styles.heroCenter}>
            <h1 style={styles.heroTitle} className="hero-title">Surah Yāzdah</h1>
            <p style={styles.heroSubtitle} className="hero-subtitle">
              An illuminated manuscript of eleven surahs with Urdu interlinear translation.
              A digital archive, open for community scholarship.
            </p>

            <div style={styles.heroMeta} className="meta-grid">
              <div style={styles.metaItem}>
                <div style={styles.metaLabel}>Pages</div>
                <div style={styles.metaValue}>144</div>
              </div>
              <div style={styles.metaItem}>
                <div style={styles.metaLabel}>Origin</div>
                <div style={styles.metaValue}>Lahore</div>
              </div>
              <div style={styles.metaItem}>
                <div style={styles.metaLabel}>Era</div>
                <div style={styles.metaValue}>Early 20th c.</div>
              </div>
            </div>

            <div style={styles.manuscriptSection}>
              <img src="/quran-pages/002.jpeg" alt="Illuminated title page" style={styles.manuscriptImage} className="manuscript-image" />
              <div style={styles.imageCaption}>Illuminated title page — Surah Yāzdah.</div>
            </div>

            <div style={{ marginTop: '40px' }}>
              <Link href="/reader/2"><button style={styles.ctaPrimaryButton}>Read the manuscript</button></Link>
            </div>
          </div>
        </section>

        <section style={styles.specsSection} className="specs-section">
          <h2 style={styles.sectionTitle} className="section-title">The Manuscript</h2>
          <div style={styles.specsGrid} className="specs-grid">
            <div style={styles.specCard}>
              <div style={styles.specLabel}>Binding</div>
              <div style={styles.specValue}>Hand-bound, leather with fur</div>
            </div>
            <div style={styles.specCard}>
              <div style={styles.specLabel}>Origin</div>
              <div style={styles.specValue}>Kutub Khana Din Muhammadi, Nabi Road, Lahore (~1900–1920s)</div>
            </div>
            <div style={styles.specCard}>
              <div style={styles.specLabel}>Text</div>
              <div style={styles.specValue}>Arabic with Urdu/Persian interlinear translation and khawas notes</div>
            </div>
            <div style={styles.specCard}>
              <div style={styles.specLabel}>Contents</div>
              <div style={styles.specValue}>A devotional compilation of eleven selected surahs</div>
            </div>
          </div>
        </section>

        <section style={styles.ctaSection} className="cta-section">
          <h2 style={styles.ctaTitle}>Contribute</h2>
          <p style={styles.ctaText}>
            Readers of Urdu, Persian, and Arabic are invited to help build the translation,
            transliteration, and commentary — page by page, directly on each image.
          </p>
          <div style={styles.ctaButtons}>
            <Link href="/reader/2"><button style={styles.ctaPrimaryButton}>Open the reader</button></Link>
          </div>
        </section>

        <footer style={styles.footer} className="footer">
          <p>Surah Yāzdah — a digital manuscript archive</p>
          <p style={{ fontSize: '14px', color: '#999', marginTop: '8px' }}>© 2026 ASM Productions LLC</p>
        </footer>
      </div>
    </>
  );
}

const styles = {
  container: { fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#fafaf8', color: '#1a1a1a', lineHeight: '1.6' },
  hero: { padding: '80px 40px', maxWidth: '1400px', margin: '0 auto' },
  heroCenter: { textAlign: 'center' },
  heroTitle: { fontSize: '52px', fontWeight: '700', margin: '0 0 16px 0', color: '#1a1a1a', lineHeight: '1.2' },
  heroSubtitle: { fontSize: '20px', color: '#666', margin: '0 0 48px 0', lineHeight: '1.5', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' },
  heroMeta: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', maxWidth: '600px', margin: '0 auto 60px auto' },
  metaItem: { borderLeft: '3px solid #b8860b', paddingLeft: '16px', textAlign: 'left' },
  metaLabel: { fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', marginBottom: '4px' },
  metaValue: { fontSize: '20px', fontWeight: '600', color: '#1a1a1a' },
  manuscriptSection: { textAlign: 'center', marginTop: '60px' },
  manuscriptImage: { maxWidth: '350px', height: 'auto', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', borderRadius: '4px' },
  imageCaption: { fontSize: '14px', color: '#666', marginTop: '16px', fontStyle: 'italic' },
  specsSection: { padding: '80px 40px', maxWidth: '1400px', margin: '0 auto' },
  sectionTitle: { fontSize: '36px', fontWeight: '600', margin: '0 0 48px 0', color: '#1a1a1a', textAlign: 'center' },
  specsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' },
  specCard: { backgroundColor: '#fff', padding: '32px', borderRadius: '6px', border: '1px solid #e5e5e5' },
  specLabel: { fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', marginBottom: '8px' },
  specValue: { fontSize: '16px', fontWeight: '500', color: '#1a1a1a' },
  ctaSection: { backgroundColor: '#1a1a1a', color: '#fff', padding: '80px 40px', textAlign: 'center' },
  ctaTitle: { fontSize: '42px', fontWeight: '700', margin: '0 0 16px 0', color: '#fff' },
  ctaText: { fontSize: '20px', color: '#ccc', maxWidth: '800px', margin: '0 auto 40px auto', lineHeight: '1.6' },
  ctaButtons: { display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' },
  ctaPrimaryButton: { padding: '14px 32px', backgroundColor: '#b8860b', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' },
  footer: { backgroundColor: '#f5f5f5', borderTop: '1px solid #e5e5e5', padding: '40px', textAlign: 'center', fontSize: '14px', color: '#666' },
};
