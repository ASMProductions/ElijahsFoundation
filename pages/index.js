import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [hoveredTier, setHoveredTier] = useState(null);

  return (
    <>
      <Head>
        <title>The First Quran Given to Elijah Muhammad - Scholarly Digital Edition</title>
        <meta name="description" content="Authenticated manuscript. 144 pages. Elijah Muhammad's handwritten signature. The definitive record of Islam's arrival in North America." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <style>{`
        @media (max-width: 1024px) {
          .hero-title { font-size: 36px !important; }
          .hero-subtitle { font-size: 18px !important; }
          .meta-grid { gap: 20px !important; }
          .specs-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .content-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .tiers-grid { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 640px) {
          body { font-size: 14px; }
          .hero { padding: 40px 16px !important; }
          .hero-title { font-size: 28px !important; line-height: 1.3 !important; }
          .hero-subtitle { font-size: 16px !important; }
          .meta-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .section-title { font-size: 28px !important; }
          .auth-section { padding: 40px 16px !important; }
          .auth-title { font-size: 24px !important; }
          .specs-section { padding: 40px 16px !important; }
          .specs-grid { grid-template-columns: 1fr !important; }
          .lineage-section { padding: 40px 16px !important; }
          .timeline-item { grid-template-columns: 50px 1fr !important; gap: 20px !important; }
          .timeline-marker { width: 50px !important; height: 50px !important; font-size: 18px !important; }
          .content-section { padding: 40px 16px !important; }
          .content-grid { grid-template-columns: 1fr !important; }
          .tiers-section { padding: 40px 16px !important; }
          .tier-card { padding: 24px 20px !important; }
          .tier-price { font-size: 32px !important; }
          .cta-section { padding: 40px 16px !important; }
          .cta-title { font-size: 28px !important; }
          .cta-text { font-size: 16px !important; }
          .cta-buttons { flex-direction: column !important; }
          .cta-buttons button { width: 100% !important; }
          .footer { padding: 24px 16px !important; font-size: 12px !important; }
          .manuscript-image { max-width: 80% !important; }
          .image-caption { font-size: 12px !important; }
          .view-all-plans { font-size: 14px !important; }
        }
      `}</style>

      <div style={styles.container}>
        <section style={styles.hero} className="hero">
          <div style={styles.heroCenter}>
            <h1 style={styles.heroTitle} className="hero-title">The First Quran Given to Elijah Muhammad</h1>
            <p style={styles.heroSubtitle} className="hero-subtitle">Authenticated by handwritten signature. A scholarly digital edition of a manuscript that shaped the spiritual discipline of a nation.</p>
            
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
              <img src="/quran-pages/001.jpeg" alt="The First Quran - Opening Cover with Elijah Muhammad's Signature" style={styles.manuscriptImage} className="manuscript-image" />
              <div style={styles.imageCaption} className="image-caption">Elijah Muhammad's handwritten signature and address, establishing direct ownership and custody of this manuscript.</div>
            </div>
          </div>
        </section>

        <section style={styles.authSection} className="auth-section">
          <div style={styles.authContent}>
            <h2 style={styles.authTitle} className="auth-title">✓ Authenticated</h2>
            <p style={styles.authText}>
              Not a claim. Not a reproduction. The opening cover bears the <strong>handwritten signature of the Honorable Elijah Muhammad</strong> in his own hand, establishing direct ownership and custody of this Quran. His signature can be compared to other authenticated samples. His address—6116 S. Michigan Ave., Chicago—can be verified against historical records.
            </p>
            <p style={{...styles.authText, marginTop: '16px', fontStyle: 'italic', fontSize: '16px'}}>
              "This Quran does not require belief. It requires only eyes."
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
          <p style={styles.lineageText}>A direct chain of custody spanning nearly a century:</p>
          
          <div style={styles.lineageTimeline}>
            <div style={styles.timelineItem} className="timeline-item">
              <div style={styles.timelineMarker} className="timeline-marker">1</div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineDate}>Early 1900s</div>
                <div style={styles.timelineName}>Master Fard Muhammad</div>
                <div style={styles.timelineDesc}>Gave the Quran to Elijah Muhammad as foundational text of the Nation of Islam</div>
              </div>
            </div>

            <div style={styles.timelineItem} className="timeline-item">
              <div style={styles.timelineMarker} className="timeline-marker">2</div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineDate}>1934-1975</div>
                <div style={styles.timelineName}>The Honorable Elijah Muhammad</div>
                <div style={styles.timelineDesc}>Carried the Quran to the rostrum. His signature on the opening cover documents ownership and care.</div>
              </div>
            </div>

            <div style={styles.timelineItem} className="timeline-item">
              <div style={styles.timelineMarker} className="timeline-marker">3</div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineDate}>1975-2017</div>
                <div style={styles.timelineName}>Nathaniel Muhammad</div>
                <div style={styles.timelineDesc}>Eldest son of Elijah Muhammad. Kept both Qurans in his custody for 42 years.</div>
              </div>
            </div>

            <div style={styles.timelineItem} className="timeline-item">
              <div style={styles.timelineMarker} className="timeline-marker">4</div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineDate}>2012-Present</div>
                <div style={styles.timelineName}>Amin Shabazz Muhammad</div>
                <div style={styles.timelineDesc}>Received the Quran directly from Nathaniel Muhammad in 2012. Custodian and digital steward.</div>
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
              <div style={styles.contentDesc}>High-resolution images of the complete manuscript, authenticated and indexed</div>
            </div>

            <div style={styles.contentCard}>
              <div style={styles.contentIcon}>🔤</div>
              <div style={styles.contentTitle}>Arabic Transliteration</div>
              <div style={styles.contentDesc}>Full Latin-letter transliteration for non-Arabic readers</div>
            </div>

            <div style={styles.contentCard}>
              <div style={styles.contentIcon}>🌍</div>
              <div style={styles.contentTitle}>English Translation</div>
              <div style={styles.contentDesc}>Maulana Muhammad Ali's 1934 public-domain translation</div>
            </div>

            <div style={styles.contentCard}>
              <div style={styles.contentIcon}>📚</div>
              <div style={styles.contentTitle}>Scholarly Context</div>
              <div style={styles.contentDesc}>Historical background, thematic connections, original manuscript annotations</div>
            </div>

            <div style={styles.contentCard}>
              <div style={styles.contentIcon}>🔍</div>
              <div style={styles.contentTitle}>Urdu & Persian Tafsir</div>
              <div style={styles.contentDesc}>Original handwritten margin notes translated and contextualized</div>
            </div>

            <div style={styles.contentCard}>
              <div style={styles.contentIcon}>💬</div>
              <div style={styles.contentTitle}>Direct Q&A</div>
              <div style={styles.contentDesc}>Ask questions about the text, provenance, or scholarship</div>
            </div>
          </div>
        </section>

        <section style={styles.tiersSection} className="tiers-section">
          <h2 style={styles.sectionTitle} className="section-title">Access the Manuscript</h2>
          <p style={styles.tiersSubtitle}>Choose how you want to engage with this foundational text.</p>

          <div style={styles.tiersGrid} className="tiers-grid">
            <div style={styles.tierCard} className="tier-card">
              <div style={styles.tierLabel}>Free Sample</div>
              <div style={styles.tierPrice} className="tier-price">$0</div>
              <div style={styles.tierDesc}>Explore the first 6 pages</div>
              
              <Link href="/reader/1">
                <button style={styles.tierButton}>View Sample</button>
              </Link>

              <ul style={styles.tierFeatures}>
                <li>✓ Pages 1-6 access</li>
                <li>✓ Elijah Muhammad's signature page</li>
                <li>✓ Images only</li>
                <li>— Transcriptions & translations</li>
                <li>— Questions</li>
              </ul>
            </div>

            <div style={styles.tierCard} className="tier-card">
              <div style={styles.tierLabel}>Monthly</div>
              <div style={styles.tierPrice} className="tier-price">$9.99<span style={styles.tierPeriod}>/mo</span></div>
              <div style={styles.tierDesc}>Complete access, metered questions</div>
              
              <Link href="/pricing">
                <button style={styles.tierButton}>Subscribe</button>
              </Link>

              <ul style={styles.tierFeatures}>
                <li>✓ All 144 pages</li>
                <li>✓ Images & transcriptions</li>
                <li>✓ Translations & annotations</li>
                <li>✓ 5 questions/month</li>
                <li>— Unlimited Q&A</li>
              </ul>
            </div>

            <div 
              style={{
                ...styles.tierCard,
                ...styles.tierCardHighlight,
              }}
              className="tier-card"
            >
              <div style={styles.tierBadge}>Most Scholars Choose This</div>
              <div style={styles.tierLabel}>Monthly Pro</div>
              <div style={styles.tierPrice} className="tier-price">$19.99<span style={styles.tierPeriod}>/mo</span></div>
              <div style={styles.tierDesc}>Unlimited research & direct access</div>
              
              <Link href="/pricing">
                <button style={{...styles.tierButton, ...styles.tierButtonHighlight}}>Subscribe</button>
              </Link>

              <ul style={styles.tierFeatures}>
                <li>✓ All 144 pages</li>
                <li>✓ Complete content</li>
                <li>✓ Unlimited Q&A questions</li>
                <li>✓ Priority response</li>
                <li>✓ Direct custodian access</li>
              </ul>
            </div>

            <div style={styles.tierCard} className="tier-card">
              <div style={styles.tierLabel}>Lifetime</div>
              <div style={styles.tierPrice} className="tier-price">$299<span style={styles.tierPeriod}>once</span></div>
              <div style={styles.tierDesc}>Permanent ownership, all updates</div>
              
              <Link href="/pricing">
                <button style={styles.tierButton}>Purchase</button>
              </Link>

              <ul style={styles.tierFeatures}>
                <li>✓ All 144 pages forever</li>
                <li>✓ Unlimited questions & access</li>
                <li>✓ Priority response</li>
                <li>✓ All future updates included</li>
                <li>✓ No renewal needed</li>
              </ul>
            </div>

            <div style={styles.tierCard} className="tier-card">
              <div style={styles.tierLabel}>Institution</div>
              <div style={styles.tierPrice} className="tier-price">$799<span style={styles.tierPeriod}>/yr</span></div>
              <div style={styles.tierDesc}>For universities, libraries, centers</div>
              
              <a href="mailto:amin@elijahs.foundation?subject=Institutional%20License%20Inquiry">
                <button style={styles.tierButton}>Contact Sales</button>
              </a>

              <ul style={styles.tierFeatures}>
                <li>✓ Unlimited users</li>
                <li>✓ Site license</li>
                <li>✓ Institutional admin panel</li>
                <li>✓ All content & updates</li>
                <li>✓ Direct support</li>
              </ul>
            </div>
          </div>

          <Link href="/pricing">
            <div style={styles.viewAllPlans} className="view-all-plans">View complete feature comparison →</div>
          </Link>
        </section>

        <section style={styles.ctaSection} className="cta-section">
          <h2 style={styles.ctaTitle} className="cta-title">Begin Your Study</h2>
          <p style={styles.ctaText} className="cta-text">Access the manuscript that shaped the spiritual discipline of a nation—authenticated by the original custodian's own hand.</p>
          
          <div style={styles.ctaButtons} className="cta-buttons">
            <Link href="/reader/1">
              <button style={styles.ctaPrimaryButton}>View Sample (Free)</button>
            </Link>
            <Link href="/pricing">
              <button style={styles.ctaSecondaryButton}>Explore Plans</button>
            </Link>
          </div>
        </section>

        <footer style={styles.footer} className="footer">
          <div style={styles.footerContent}>
            <p>The First Quran Given to Elijah Muhammad in North America</p>
            <p style={{fontSize: '14px', color: '#999', marginTop: '8px'}}>© 2024 ASM Productions LLC. Custodian: Amin Shabazz Muhammad</p>
          </div>
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
  authText: { fontSize: '16px', color: '#333', margin: '0 0 16px 0', lineHeight: '1.8' },
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
  timelineContent: {},
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
  tiersGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' },
  tierCard: { backgroundColor: '#fff', padding: '40px 32px', borderRadius: '8px', border: '1px solid #e5e5e5', position: 'relative', transition: 'all 0.3s ease' },
  tierCardHighlight: { borderColor: '#b8860b', borderWidth: '2px', boxShadow: '0 8px 32px rgba(184, 134, 11, 0.15)' },
  tierBadge: { position: 'absolute', top: '-14px', left: '32px', backgroundColor: '#b8860b', color: '#fff', padding: '6px 14px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.5px' },
  tierLabel: { fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', marginBottom: '8px' },
  tierPrice: { fontSize: '42px', fontWeight: '700', color: '#1a1a1a', margin: '8px 0 4px 0' },
  tierPeriod: { fontSize: '16px', fontWeight: '400', color: '#666' },
  tierDesc: { fontSize: '14px', color: '#666', marginBottom: '24px' },
  tierButton: { width: '100%', padding: '12px 16px', backgroundColor: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginBottom: '24px', transition: 'background-color 0.2s ease' },
  tierButtonHighlight: { backgroundColor: '#b8860b' },
  tierFeatures: { listStyle: 'none', padding: '0', margin: '0', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '12px' },
  viewAllPlans: { textAlign: 'center', fontSize: '16px', color: '#b8860b', cursor: 'pointer', fontWeight: '600', marginTop: '40px' },
  ctaSection: { backgroundColor: '#1a1a1a', color: '#fff', padding: '80px 40px', textAlign: 'center' },
  ctaTitle: { fontSize: '42px', fontWeight: '700', margin: '0 0 16px 0', color: '#fff' },
  ctaText: { fontSize: '20px', color: '#ccc', maxWidth: '800px', margin: '0 auto 40px auto', lineHeight: '1.6' },
  ctaButtons: { display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' },
  ctaPrimaryButton: { padding: '14px 32px', backgroundColor: '#b8860b', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' },
  ctaSecondaryButton: { padding: '14px 32px', backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff', borderRadius: '6px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' },
  footer: { backgroundColor: '#f5f5f5', borderTop: '1px solid #e5e5e5', padding: '40px', textAlign: 'center', fontSize: '14px', color: '#666' },
  footerContent: { maxWidth: '1400px', margin: '0 auto' },
};
