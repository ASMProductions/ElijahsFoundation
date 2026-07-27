// pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      
      {/* HERO SECTION */}
      <section style={{
        textAlign: 'center',
        padding: '4rem 2rem',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '4rem'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#8b7355' }}>
          The First Quran Given to Elijah Muhammad
        </h1>
        
        <div style={{
          background: '#f5f5f5',
          border: '2px solid #8b7355',
          borderRadius: '8px',
          padding: '1rem 2rem',
          marginBottom: '2rem',
          display: 'inline-block'
        }}>
          <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#8b7355', margin: 0 }}>
            ✓ Authenticated by Elijah Muhammad's Handwritten Signature
          </p>
        </div>
        
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto 2rem' }}>
          A scholarly digital edition of the manuscript authenticated by the original custodian's own hand. The opening cover bears his signature and address, establishing direct ownership and custody.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/reader/1">
            <button style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              background: '#8b7355',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              View the Manuscript (Free Sample)
            </button>
          </Link>
          
          <Link href="/pricing">
            <button style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              background: '#f5f5f5',
              color: '#8b7355',
              border: '2px solid #8b7355',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              View Plans
            </button>
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#8b7355' }}>About This Manuscript</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ color: '#8b7355', marginBottom: '1rem' }}>✓ Authentication</h3>
            <p>
              The opening cover bears the handwritten signature and address of Elijah Muhammad in his own hand. Not a claim—documented fact. His signature is verifiable against other authenticated samples.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
              Primary source documentation requiring only examination to verify.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: '#8b7355', marginBottom: '1rem' }}>The Lineage</h3>
            <p>
              Master Fard Muhammad → Elijah Muhammad → Nathaniel Muhammad → Amin Shabazz Muhammad
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
              A direct chain of custody spanning nearly a century.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: '#8b7355', marginBottom: '1rem' }}>The Contents</h3>
            <p>
              144 pages of original Quranic text with Arabic, transliteration, Maulana Muhammad Ali's 1934 English translation, and original Urdu/Persian scholarly annotations.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: '#8b7355', marginBottom: '1rem' }}>The Mission</h3>
            <p>
              To preserve, study, and share the foundational teachings through which Islam came to Black people in North America—authenticated by the original custodian's own hand.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{
        background: '#f5f5f5',
        padding: '2rem',
        borderRadius: '8px',
        marginBottom: '4rem'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#8b7355' }}>What You'll Access</h2>
        
        <ul style={{
          columns: 2,
          columnGap: '2rem',
          listStyle: 'none'
        }}>
          <li style={{ marginBottom: '1rem', fontWeight: 'bold', color: '#8b7355' }}>✓ Handwritten signature authentication (Page 1)</li>
          <li style={{ marginBottom: '1rem' }}>✓ All 144 original manuscript pages</li>
          <li style={{ marginBottom: '1rem' }}>✓ Maulana Muhammad Ali's translation (1934)</li>
          <li style={{ marginBottom: '1rem' }}>✓ Arabic transliteration (Latin letters)</li>
          <li style={{ marginBottom: '1rem' }}>✓ Scholarly annotations and historical context</li>
          <li style={{ marginBottom: '1rem' }}>✓ Urdu and Persian tafsir translations</li>
          <li style={{ marginBottom: '1rem' }}>✓ Direct access to ask questions</li>
          <li style={{ marginBottom: '1rem' }}>✓ Provenance documentation and verification</li>
        </ul>
      </section>

      {/* PLANS PREVIEW SECTION */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#8b7355' }}>Plans</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          <PlanCard
            name="Free"
            price="$0"
            description="View sample pages"
            features={[
              'First 6 pages',
              'Sample images',
              'No full access'
            ]}
            cta="Get Started"
            href="/reader/1"
          />
          
          <PlanCard
            name="Monthly Essentials"
            price="$9.99"
            period="/month"
            description="Full access"
            features={[
              'All 144 pages',
              'Transcriptions & transliterations',
              'Translations',
              'Scholarly annotations',
              '5 questions/month'
            ]}
            cta="Choose Plan"
            href="/pricing"
          />
          
          <PlanCard
            name="Monthly Professional"
            price="$19.99"
            period="/month"
            description="Full access + Direct Q&A"
            features={[
              'All 144 pages',
              'Transcriptions & transliterations',
              'Translations',
              'Scholarly annotations',
              'Unlimited questions',
              'Priority response'
            ]}
            cta="Choose Plan"
            href="/pricing"
            featured={true}
          />
          
          <PlanCard
            name="Lifetime Access"
            price="$299"
            period="one-time"
            description="Permanent access"
            features={[
              'All 144 pages forever',
              'All transcriptions & translations',
              'Unlimited questions',
              'Priority response',
              'Future updates included',
              'No renewal needed'
            ]}
            cta="Choose Plan"
            href="/pricing"
          />
        </div>
        
        <p style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
          <Link href="/pricing">
            <span style={{ color: '#8b7355', fontWeight: 'bold', cursor: 'pointer' }}>View full plans →</span>
          </Link>
        </p>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section style={{
        background: '#8b7355',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center',
        borderRadius: '8px',
        marginBottom: '4rem'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Begin Your Study</h2>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
          Access the manuscript that shaped the spiritual discipline of a nation.
        </p>
        <Link href="/login">
          <button style={{
            padding: '1rem 2rem',
            fontSize: '1rem',
            background: 'white',
            color: '#8b7355',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Sign In or Create Account
          </button>
        </Link>
      </section>
    </div>
  );
}

function PlanCard({ name, price, period, description, features, cta, href, featured }) {
  return (
    <div style={{
      border: featured ? '2px solid #8b7355' : '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '2rem',
      background: featured ? '#f5f5f5' : 'white',
      position: 'relative',
      transform: featured ? 'scale(1.05)' : 'scale(1)'
    }}>
      {featured && (
        <div style={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#8b7355',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: 'bold'
        }}>
          Most Popular
        </div>
      )}
      
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#8b7355' }}>
        {name}
      </h3>
      
      <div style={{ marginBottom: '1rem' }}>
        <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b7355' }}>
          {price}
        </span>
        {period && <span style={{ color: '#666' }}>{period}</span>}
      </div>
      
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        {description}
      </p>
      
      <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
        {features.map((feature, i) => (
          <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
            ✓ {feature}
          </li>
        ))}
      </ul>
      
      <Link href={href}>
        <button style={{
          width: '100%',
          padding: '0.75rem 1rem',
          background: featured ? '#8b7355' : '#f5f5f5',
          color: featured ? 'white' : '#8b7355',
          border: featured ? 'none' : '1px solid #8b7355',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          {cta}
        </button>
      </Link>
    </div>
  );
}
