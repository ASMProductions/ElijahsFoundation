import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>The First Quran Given to Elijah Muhammad - Scholarly Digital Edition</title>
        <meta name="description" content="Authenticated manuscript. 144 pages. Elijah Muhammad's handwritten signature." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <style>{`
        @media (max-width: 640px) {
          .hero { padding: 40px 16px !important; }
          .hero-title { font-size: 28px !important; line-height: 1.3 !important; }
          .hero-subtitle { font-size: 16px !important; }
          .meta-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .manuscript-image { max-width: 280px !important; }
          .section-title { font-size: 28px !important; }
          .auth-section { padding: 40px 16px !important; }
          .specs-section { padding: 40px 16px !important; }
          .specs-grid { grid-template-columns: 1fr !important; }
          .lineage-section { padding: 40px 16px !important; }
          .content-section { padding: 40px 16px !important; }
          .content-grid { grid-template-columns: 1fr !important; }
          .tiers-section { padding: 40px 16px !important; }
          .cta-section { padding: 40px 16px !important; }
          .footer { padding: 24px 16px !important; }
        }
      `}</style>

      <div style={styles.container}>
        <section style={styles.hero} className="hero">
          <div style={styles.heroCenter}>
            <h1 style={styles.heroTitle} className="hero-title">The First Quran Given to Elijah Muhammad</h1>
            <p style={styles.heroSubtitle} className="hero-subtitle">Authenticated by handwritten signature. A scholarly digital edition.</p>
            
            <div style={styles.heroMeta} className="meta-grid">
              <div style={styles.metaItem}>
                <div style={styles.metaLabel}>Pages</div>
                <div style={styles.metaValue}>144</div>
              </div>
              <div style={styles.metaItem}>
                <div style={styles.metaLabel}>Authentication</div>
                <div style={styles.metaValue}>Signature</div>
              </div>
              <div style={styles.metaItem}>
                <div style={styles.metaLabel}>Custody</div>
                <div style={styles.metaValue}>Documented</div>
              </div>
            </div>

            <div style={styles.manuscriptSection}>
              <img src="/quran-pages/001.jpeg" alt="The First Quran" style={styles.manuscriptImage} className="manuscript-image" />
              <div style={styles.imageCaption}>Elijah Muhammad's handwritten signature and 6116 S. Michigan Ave. address.</div>
            </div>
          </div>
        </section>

        <section style={styles.authSection} className="auth-section">
          <div style={styles.authContent}>
            <h2 style={styles.authTitle}>✓ Authenticated</h2>
            <p style={styles.authText}>
              The opening cover bears the <strong>handwritten signature of the Honorable Elijah Muhammad</strong> in his own hand, establishing direct ownership and custody of this Quran.
            </p>
          </div>
        </section>

        <section style={styles.specsSection} className="specs-section">
          <h2 style={styles.sectionTitle} className="section-title">The Manuscript</h2>
          <div style={styles.specsGrid} className="specs-grid">
            <div style={styles.specCard}>
              <div style={styles.specLabel}>Binding</div>
              <div style={styles.specValue}>Red animal skin with fur, hand-bound</div>
            </div>
            <div style={styles.specCard}>
              <div style={styles.specLabel}>Origin</div>
              <div style={styles.specValue}>Kutub Khana Din Muhammadi, Lahore (~1900-1920s)</div>
            </div>
            <div style={styles.specCard}>
              <div style={styles.specLabel}>Text</div>
              <div style={styles.specValue}>Arabic with Urdu/Persian tafsir annotations</div>
            </div>
            <div style={styles.specCard}>
              <div style={styles.specLabel}>Dedicatory Inscription</div>
              <div style={styles.specValue}>Mustapa Milham (Cincinnati) to Elijah Muhammad (Chicago)</div>
            </div>
          </div>
        </section>

        <section style={styles.lineageSection} className="lineage-section">
          <h2 style={styles.sectionTitle} className="section-title">Custodial Lineage</h2>
          <p style={styles.lineageText}>A direct chain of custody spanning nearly a century.</p>
          
          <div style={styles.lineageTimeline}>
            <div style={styles.timelineItem}>
              <div style={styles.timelineMarker}>1</div>
              <div>
                <div style={styles.timelineDate}>Early 1900s</div>
                <div style={styles.timelineName}>Master Fard Muhammad</div>
                <div style={styles.timelineDesc}>Gave the Quran to Elijah Muhammad as foundational text</div>
              </div>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineMarker}>2</div>
              <div>
                <div style={styles.timelineDate}>1934-1975</div>
                <div style={styles.timelineName}>The Honorable Elijah Muhammad</div>
                <div style={styles.timelineDesc}>Carried the Quran to the rostrum. His signature documents ownership.</div>
              </div>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineMarker}>3</div>
              <div>
                <div style={styles.timelineDate}>1975-2017</div>
                <div style={styles.timelineName}>Nathaniel Muhammad</div>
                <div style={styles.timelineDesc}>Eldest son. Kept both Qurans in custody for 42 years.</div>
              </div>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineMarker}>4</div>
              <div>
                <div style={styles.timelineDate}>2012-Present</div>
                <div style={styles.timelineName}>Amin Shabazz Muhammad</div>
                <div style={styles.timelineDesc}>Custodian and digital steward.</div>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.contentSection} className="content-section">
          <h2 style={styles.sectionTitle} className="section-title">What You Access</h2>
          <div style={styles.contentGrid} className="content-grid">
            <div style={styles.contentCard}>
              <div style={styles.contentIcon}>📖</div>
              <div style={styles.contentTitle}>All 144 Pages</div>
              <div style={styles.contentDesc}>High-resolution images, authenticated and indexed</div>
            </div>
            <div style={styles.contentCard}>
              <div style={styles.contentIcon}>🔤</div>
              <div style={styles.contentTitle}>Arabic Transliteration</div>
              <div style={styles.contentDesc}>Full Latin-letter transliteration</div>
            </div>
            <div style={styles.contentCard}>
              <div style={styles.contentIcon}>🌍</div>
              <div style={styles.contentTitle}>English Translation</div>
              <div style={styles.contentDesc}>Maulana Muhammad Ali's 1934 translation</div>
            </div>
            <div style={styles.contentCard}>
              <div style={styles.contentIcon}>📚</div>
              <div style={styles.contentTitle}>Scholarly Context</div>
              <div style={styles.contentDesc}>Historical background and annotations</div>
            </div>
            <div style={styles.contentCard}>
              <div style={styles.contentIcon}>🔍</div>
              <div style={styles.contentTitle}>Urdu & Persian Tafsir</div>
              <div style={styles.contentDesc}>Original handwritten margin notes translated</div>
            </div>
            <div style={styles.contentCard}>
              <div style={styles.contentIcon}>💬</div>
              <div style={styles.contentTitle}>Direct Q&A</div>
              <div style={styles.contentDesc}>Ask questions about text and provenance</div>
            </div>
          </div>
        </section>

        <section style={styles.tiersSection} className="tiers-section">
          <h2 style={styles.sectionTitle} className="section-title">Access the Manuscript</h2>
          <p style={styles.tiersSubtitle}>Choose how you want to engage with this text.</p>

          <div style={styles.tiersGrid}>
            <div style={styles.tierCard}>
              <div style={styles.tierLabel}>Free Sample</div>
              <div style={styles.tierPrice}>$0</div>
              <div style={styles.tierDesc}>First 6 pages</div>
              <Link href="/reader/1"><button style={styles.tierButton}>View Sample</button></Link>
              <ul style={styles.tierFeatures}>
                <li>✓ Pages 1-6</li>
                <li>✓ Images only</li>
                <li>— Translations</li>
              </ul>
            </div>

            <div style={styles.tierCard}>
              <div style={styles.tierLabel}>Monthly</div>
              <div style={styles.tierPrice}>$9.99<span style={styles.tierPeriod}>/mo</span></div>
              <div style={styles.tierDesc}>Complete access</div>
              <Link href="/pricing"><button style={styles.tierButton}>Subscribe</button></Link>
              <ul style={styles.tierFeatures}>
                <li>✓ All 144 pages</li>
                <li>✓ Full content</li>
                <li>✓ 5 Q&A/month</li>
              </ul>
            </div>

            <div style={{...styles.tierCard, ...styles.tierCardHighlight}}>
              <div style={styles.tierBadge}>Most Popular</div>
              <div style={styles.tierLabel}>Monthly Pro</div>
              <div style={styles.tierPrice}>$19.99<span style={styles.tierPeriod}>/mo</span></div>
              <div style={styles.tierDesc}>Unlimited access</div>
              <Link href="/pricing"><button style={{...styles.tierButton, ...styles.tierButtonHighlight}}>Subscribe</button></Link>
              <ul style={styles.tierFeatures}>
                <li>✓ All 144 pages</li>
                <li>✓ Unlimited Q&A</li>
                <li>✓ Priority response</li>
              </ul>
            </div>

            <div style={styles.tierCard}>
              <div style={styles.tierLabel}>Lifetime</div>
              <div style={styles.tierPrice}>$299<span style={styles.tierPeriod}>once</span></div>
              <div style={styles.tierDesc}>Permanent access</div>
              <Link href="/pricing"><button style={styles.tierButton}>Purchase</button></Link>
              <ul style={styles.tierFeatures}>
                <li>✓ All 144 pages</li>
                <li>✓ Forever access</li>
                <li>✓ All updates</li>
              </ul>
            </div>

            <div style={styles.tierCard}>
              <div style={styles.tierLabel}>Institution</div>
              <div style={styles.tierPrice}>$799<span style={styles.tierPeriod}>/yr</span></div>
              <div style={styles.tierDesc}>For organizations</div>
              <a href="mailto:amin@elijahs.foundation"><button style={styles.tierButton}>Contact Sales</button></a>
              <ul style={styles.tierFeatures}>
                <li>✓ Unlimited users</li>
                <li>✓ Site license</li>
                <li>✓ Admin panel</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={styles.ctaSection} className="cta-section">
          <h2 style={styles.ctaTitle}>Begin Your Study</h2>
          <p style={styles.ctaText}>Access the manuscript authenticated by the original custodian's own hand.</p>
          <div style={styles.ctaButtons}>
            <Link href="/reader/1"><button style={styles.ctaPrimaryButton}>View Sample (Free)</button></Link>
            <Link href="/pricing"><button style={styles.ctaSecondaryButton}>Explore Plans</button></Link>
          </div>
        </section>

        <footer style={styles.footer} className="footer">
          <p>The First Quran Given to Elijah Muhammad in North America</p>
          <p style={{fontSize: '14px', color: '#999', marginTop: '8px'}}>© 2024 ASM Productions LLC</p>
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
  authSection: { backgroundColor: '#fff', padding: '60px 40px', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' },
  authContent: { maxWidth: '900px', margin: '0 auto' },
  authTitle: { fontSize: '32px', fontWeight: '600', margin: '0 0 24px 0', color: '#1a1a1a' },
  authText: { fontSize: '16px', color: '#333', margin: '0', lineHeight: '1.8' },
  specsSection: { padding: '80px 40px', maxWidth: '1400px', margin: '0 auto' },
  sectionTitle: { fontSize: '36px', fontWeight: '600', margin: '0 0 48px 0', color: '#1a1a1a', textAlign: 'center' },
  specsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' },
  specCard: { backgroundColor: '#fff', padding: '32px', borderRadius: '6px', border: '1px solid #e5e5e5' },
  specLabel: { fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', marginBottom: '8px' },
  specValue: { fontSize: '16px', fontWeight: '500', color: '#1a1a1a' },
  lineageSection: { backgroundColor: '#fff', padding: '80px 40px', borderTop: '1px solid #e5e5e5' },
  lineageText: { fontSize: '18px', color: '#666', textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' },
  lineageTimeline: { maxWidth: '900px', margin: '0 auto' },
  timelineItem: { display: 'grid', gridTemplateColumns: '80px 1fr', gap: '40px', marginBottom: '50px', alignItems: 'start' },
  timelineMarker: { width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#b8860b', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '600', flexShrink: 0 },
  timelineDate: { fontSize: '14px', color: '#999', marginBottom: '4px' },
  timelineName: { fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' },
  timelineDesc: { fontSize: '16px', color: '#666', lineHeight: '1.6' },
  contentSection: { padding: '80px 40px', maxWidth: '1400px', margin: '0 auto' },
  contentGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  contentCard: { backgroundColor: '#fff', padding: '40px 30px', borderRadius: '8px', border: '1px solid #e5e5e5', textAlign: 'center' },
  contentIcon: { fontSize: '48px', marginBottom: '16px' },
  contentTitle: { fontSize: '18px', fontWeight: '600', margin: '0 0 12px 0', color: '#1a1a1a' },
  contentDesc: { fontSize: '14px', color: '#666', margin: '0' },
  tiersSection: { padding: '80px 40px', maxWidth: '1400px', margin: '0 auto' },
  tiersSubtitle: { fontSize: '18px', color: '#666', textAlign: 'center', maxWidth: '800px', margin: '-24px auto 60px auto' },
  tiersGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '48px' },
  tierCard: { backgroundColor: '#fff', padding: '40px 32px', borderRadius: '8px', border: '1px solid #e5e5e5', position: 'relative' },
  tierCardHighlight: { borderColor: '#b8860b', borderWidth: '2px', boxShadow: '0 8px 32px rgba(184, 134, 11, 0.15)' },
  tierBadge: { position: 'absolute', top: '-14px', left: '32px', backgroundColor: '#b8860b', color: '#fff', padding: '6px 14px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' },
  tierLabel: { fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', marginBottom: '8px' },
  tierPrice: { fontSize: '42px', fontWeight: '700', color: '#1a1a1a', margin: '8px 0 4px 0' },
  tierPeriod: { fontSize: '16px', fontWeight: '400', color: '#666' },
  tierDesc: { fontSize: '14px', color: '#666', marginBottom: '24px' },
  tierButton: { width: '100%', padding: '12px 16px', backgroundColor: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginBottom: '24px' },
  tierButtonHighlight: { backgroundColor: '#b8860b' },
  tierFeatures: { listStyle: 'none', padding: '0', margin: '0', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '12px' },
  ctaSection: { backgroundColor: '#1a1a1a', color: '#fff', padding: '80px 40px', textAlign: 'center' },
  ctaTitle: { fontSize: '42px', fontWeight: '700', margin: '0 0 16px 0', color: '#fff' },
  ctaText: { fontSize: '20px', color: '#ccc', maxWidth: '800px', margin: '0 auto 40px auto', lineHeight: '1.6' },
  ctaButtons: { display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' },
  ctaPrimaryButton: { padding: '14px 32px', backgroundColor: '#b8860b', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' },
  ctaSecondaryButton: { padding: '14px 32px', backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff', borderRadius: '6px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' },
  footer: { backgroundColor: '#f5f5f5', borderTop: '1px solid #e5e5e5', padding: '40px', textAlign: 'center', fontSize: '14px', color: '#666' },
};
