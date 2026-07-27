import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Pricing() {
  const router = useRouter();
  const [loading, setLoading] = useState(null);

  const tiers = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'Forever',
      description: 'Explore the manuscript',
      cta: 'Start Reading',
      ctaLink: '/reader/1',
      highlight: false,
      features: [
        { name: 'First 6 pages access', included: true },
        { name: 'Quranic images only', included: true },
        { name: 'Transcriptions', included: false },
        { name: 'Translations & annotations', included: false },
        { name: 'Q&A questions', included: false },
        { name: 'Download access', included: false },
        { name: 'Institutional license', included: false },
      ],
    },
    {
      id: 'monthly-basic',
      name: 'Monthly Essentials',
      price: '$9.99',
      period: '/month',
      description: 'Full manuscript access',
      cta: 'Subscribe',
      priceId: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_BASIC || 'price_1TxpxLH77dliihHd4UK8zjNk',
      highlight: false,
      features: [
        { name: 'All 144 pages', included: true },
        { name: 'Quranic images, transcriptions, translations', included: true },
        { name: 'Annotations & context', included: true },
        { name: '5 questions per month', included: true },
        { name: 'Unlimited Q&A', included: false },
        { name: 'Download access', included: false },
        { name: 'Institutional license', included: false },
      ],
    },
    {
      id: 'monthly-pro',
      name: 'Monthly Professional',
      price: '$19.99',
      period: '/month',
      description: 'Unlimited research access',
      cta: 'Subscribe',
      priceId: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PRO || 'price_1Txpy3H77dliihHdMGSyqNU2',
      highlight: true,
      features: [
        { name: 'All 144 pages', included: true },
        { name: 'Quranic images, transcriptions, translations', included: true },
        { name: 'Annotations & context', included: true },
        { name: 'Unlimited Q&A questions', included: true },
        { name: 'Priority response to questions', included: true },
        { name: 'Download access', included: false },
        { name: 'Institutional license', included: false },
      ],
    },
    {
      id: 'lifetime',
      name: 'Lifetime Access',
      price: '$299',
      period: 'one-time',
      description: 'Permanent ownership',
      cta: 'Buy Now',
      priceId: process.env.NEXT_PUBLIC_STRIPE_LIFETIME || 'price_1TxpydH77dliihHdNQYwPuyj',
      highlight: false,
      features: [
        { name: 'All 144 pages forever', included: true },
        { name: 'All content & translations', included: true },
        { name: 'Annotations & scholarship', included: true },
        { name: 'Unlimited Q&A access', included: true },
        { name: 'Priority response', included: true },
        { name: 'All future updates included', included: true },
        { name: 'Institutional license', included: false },
      ],
    },
    {
      id: 'institutional',
      name: 'Institutional Site License',
      price: '$799',
      period: '/year',
      description: 'For universities, libraries, research centers',
      cta: 'Contact Sales',
      priceId: process.env.NEXT_PUBLIC_STRIPE_INSTITUTIONAL || 'price_1Txq5OH77dliihHd4Un6pZmP',
      highlight: false,
      features: [
        { name: 'Unlimited concurrent users', included: true },
        { name: 'All 144 pages for institution', included: true },
        { name: 'All content & translations', included: true },
        { name: 'Unlimited Q&A access', included: true },
        { name: 'Priority response', included: true },
        { name: 'Site license (one domain)', included: true },
        { name: 'Annual renewal', included: true },
      ],
    },
  ];

  const handleCheckout = async (priceId, tierId) => {
    setLoading(tierId);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, tierId }),
      });
      
      if (!response.ok) throw new Error('Checkout failed');
      
      const { url } = await response.json();
      if (url) {
        router.push(url);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Error initiating checkout. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <>
      <Head>
        <title>Pricing - Elijah's Foundation</title>
        <meta name="description" content="Access the digitized Quran given to Elijah Muhammad. Choose your tier." />
      </Head>

      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Access the Manuscript</h1>
          <p style={styles.subtitle}>Choose the tier that fits your scholarship and research needs.</p>
        </div>

        <div style={styles.tiersGrid}>
          {tiers.map((tier) => (
            <div
              key={tier.id}
              style={{
                ...styles.tierCard,
                ...(tier.highlight ? styles.tierCardHighlight : {}),
              }}
            >
              {tier.highlight && <div style={styles.badge}>Recommended</div>}
              
              <h3 style={styles.tierName}>{tier.name}</h3>
              <p style={styles.tierDesc}>{tier.description}</p>
              
              <div style={styles.priceSection}>
                <div style={styles.price}>{tier.price}</div>
                <div style={styles.period}>{tier.period}</div>
              </div>

              {tier.id === 'free' ? (
                <Link href={tier.ctaLink}>
                  <button style={styles.ctaButton}>{tier.cta}</button>
                </Link>
              ) : tier.id === 'institutional' ? (
                <button
                  style={styles.ctaButton}
                  onClick={() => window.location.href = 'mailto:amin@elijahs.foundation?subject=Institutional%20License%20Inquiry'}
                >
                  {tier.cta}
                </button>
              ) : (
                <button
                  style={{
                    ...styles.ctaButton,
                    ...(loading === tier.id ? styles.ctaButtonLoading : {}),
                  }}
                  onClick={() => handleCheckout(tier.priceId, tier.id)}
                  disabled={loading === tier.id}
                >
                  {loading === tier.id ? 'Processing...' : tier.cta}
                </button>
              )}

              <div style={styles.featuresList}>
                {tier.features.map((feature, idx) => (
                  <div key={idx} style={styles.featureItem}>
                    <span style={styles.featureCheck}>
                      {feature.included ? '✓' : '—'}
                    </span>
                    <span style={{
                      ...styles.featureName,
                      opacity: feature.included ? 1 : 0.5,
                    }}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.faq}>
          <h2 style={styles.faqTitle}>Questions?</h2>
          <p style={styles.faqText}>
            Email us at{' '}
            <a href="mailto:amin@elijahs.foundation" style={styles.link}>
              amin@elijahs.foundation
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#fafafa',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: '42px',
    fontWeight: '700',
    margin: '0 0 16px 0',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: '18px',
    color: '#666',
    margin: '0',
  },
  tiersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '80px',
  },
  tierCard: {
    backgroundColor: '#fff',
    border: '1px solid #e5e5e5',
    borderRadius: '8px',
    padding: '32px 24px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'all 0.3s ease',
  },
  tierCardHighlight: {
    border: '2px solid #1a1a1a',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transform: 'scale(1.02)',
  },
  badge: {
    position: 'absolute',
    top: '-12px',
    left: '24px',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: '4px 12px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '600',
  },
  tierName: {
    fontSize: '20px',
    fontWeight: '600',
    margin: '0 0 8px 0',
    color: '#1a1a1a',
  },
  tierDesc: {
    fontSize: '14px',
    color: '#666',
    margin: '0 0 24px 0',
  },
  priceSection: {
    marginBottom: '24px',
  },
  price: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '0',
  },
  period: {
    fontSize: '14px',
    color: '#666',
    margin: '4px 0 0 0',
  },
  ctaButton: {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '24px',
    transition: 'background-color 0.2s ease',
  },
  ctaButtonLoading: {
    opacity: 0.7,
    cursor: 'not-allowed',
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    borderTop: '1px solid #e5e5e5',
    paddingTop: '24px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '14px',
  },
  featureCheck: {
    fontWeight: '600',
    width: '20px',
    color: '#1a1a1a',
  },
  featureName: {
    color: '#1a1a1a',
  },
  faq: {
    textAlign: 'center',
    paddingTop: '40px',
    borderTop: '1px solid #e5e5e5',
  },
  faqTitle: {
    fontSize: '24px',
    fontWeight: '600',
    margin: '0 0 12px 0',
    color: '#1a1a1a',
  },
  faqText: {
    fontSize: '16px',
    color: '#666',
    margin: '0',
  },
  link: {
    color: '#1a1a1a',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};
