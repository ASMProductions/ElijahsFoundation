// pages/provenance.js

import Link from 'next/link';

export default function Provenance() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#8b7355', textAlign: 'center' }}>
        Authentication & Provenance
      </h1>
      
      <p style={{ fontSize: '1.1rem', color: '#666', textAlign: 'center', marginBottom: '3rem' }}>
        The manuscript is authenticated by Elijah Muhammad's own handwritten signature and address.
      </p>

      {/* SIGNATURE SECTION */}
      <section style={{
        background: '#f5f5f5',
        padding: '2rem',
        borderRadius: '8px',
        marginBottom: '3rem',
        border: '2px solid #8b7355'
      }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#8b7355' }}>
          The Handwritten Signature
        </h2>
        
        <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          On the opening cover of this Quran, Elijah Muhammad wrote his name in his own hand.
        </p>
        
        <p style={{
          fontSize: '1.1rem',
          fontStyle: 'italic',
          color: '#8b7355',
          fontWeight: 'bold',
          marginBottom: '1.5rem'
        }}>
          "Elijah Mohammed"
        </p>
        
        <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          The signature reads "Elijah Mohammed" with a double 'e'—a spelling that was updated to "Muhammad" in later years. This signature dates the manuscript's possession to the period when he used this spelling.
        </p>
        
        <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Below the signature, his address:
        </p>
        
        <p style={{
          fontSize: '1rem',
          fontStyle: 'italic',
          color: '#8b7355',
          marginBottom: '1.5rem'
        }}>
          6116 S. Michigan Ave.<br/>
          Chicago, Ill.
        </p>
        
        <p style={{ fontSize: '1rem', lineHeight: 1.8 }}>
          The address can be verified against historical records of his residence during this period, establishing both the place and approximate time of his custody of the manuscript.
        </p>
      </section>

      {/* WHAT THIS PROVES */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#8b7355' }}>
          What The Signature Establishes
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{
            background: 'white',
            border: '1px solid #e0e0e0',
            padding: '1.5rem',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#8b7355', marginBottom: '1rem', fontSize: '1.1rem' }}>
              Direct Ownership
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
              The signature proves that Elijah Muhammad himself held this Quran. Not a claim, not a story—his own hand on the manuscript.
            </p>
          </div>
          
          <div style={{
            background: 'white',
            border: '1px solid #e0e0e0',
            padding: '1.5rem',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#8b7355', marginBottom: '1rem', fontSize: '1.1rem' }}>
              Verifiable Authenticity
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
              Scholars can compare this signature to other authenticated samples of Elijah Muhammad's handwriting from different periods, establishing consistency and authenticity.
            </p>
          </div>
          
          <div style={{
            background: 'white',
            border: '1px solid #e0e0e0',
            padding: '1.5rem',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#8b7355', marginBottom: '1rem', fontSize: '1.1rem' }}>
              Historical Timeline
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
              The spelling "Mohammed" and the address establish when he possessed this Quran during his residence in Chicago. The timeline can be verified against documented biographical records.
            </p>
          </div>
          
          <div style={{
            background: 'white',
            border: '1px solid #e0e0e0',
            padding: '1.5rem',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#8b7355', marginBottom: '1rem', fontSize: '1.1rem' }}>
              Primary Source Documentation
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
              This is not a secondary account or scholarly inference. It is primary source material—the original artifact bearing his own mark.
            </p>
          </div>
          
          <div style={{
            background: 'white',
            border: '1px solid #e0e0e0',
            padding: '1.5rem',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#8b7355', marginBottom: '1rem', fontSize: '1.1rem' }}>
              No Hidden Claims
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
              The signature requires only eyes to verify. The evidence is on the first page, available for examination by any scholar or researcher.
            </p>
          </div>
          
          <div style={{
            background: 'white',
            border: '1px solid #e0e0e0',
            padding: '1.5rem',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#8b7355', marginBottom: '1rem', fontSize: '1.1rem' }}>
              Continuity of Custody
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
              His signature establishes his possession. Nathaniel's custody of it after 1975 continues the documented chain. The current custodian has completed 12 years of stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* SCHOLARLY SIGNIFICANCE */}
      <section style={{
        background: '#f5f5f5',
        padding: '2rem',
        borderRadius: '8px',
        marginBottom: '3rem'
      }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#8b7355' }}>
          Scholarly Significance
        </h2>
        
        <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          This manuscript is significant not only for its age and Islamic scholarship, but because it documents the direct connection between Master Fard Muhammad's teachings, Elijah Muhammad's leadership, and the establishment of Islam among Black people in North America.
        </p>
        
        <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          The handwritten signature authenticates this Quran as a primary source artifact—tangible evidence of how Elijah Muhammad engaged with the Islamic texts that formed the intellectual foundation of his teachings.
        </p>
        
        <p style={{ fontSize: '1rem', lineHeight: 1.8 }}>
          Researchers examining this manuscript can verify the authenticity of the signature, cross-reference the address to establish timeline, examine the marginalia (Urdu/Persian annotations), and study how Islamic scholarship was transmitted and applied within the context of the Nation of Islam's mission.
        </p>
      </section>

      {/* THE CHAIN OF CUSTODY */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#8b7355' }}>
          The Chain of Custody
        </h2>
        
        <div style={{
          border: '1px solid #8b7355',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: '#8b7355',
            color: 'white',
            padding: '1rem',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Master Fard Muhammad
          </div>
          <div style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>
            <p style={{ margin: 0, color: '#666' }}>
              Giver of the Quran to Elijah Muhammad (1930s era)
            </p>
          </div>
          
          <div style={{
            background: '#8b7355',
            color: 'white',
            padding: '1rem',
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: '0.5rem'
          }}>
            Elijah Muhammad
          </div>
          <div style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>
            <p style={{ margin: 0, color: '#666' }}>
              Custodian from Master Fard (1930s) through his lifetime (died 1975)<br/>
              <strong>Authentication:</strong> Handwritten signature on opening cover
            </p>
          </div>
          
          <div style={{
            background: '#8b7355',
            color: 'white',
            padding: '1rem',
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: '0.5rem'
          }}>
            Nathaniel Muhammad
          </div>
          <div style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>
            <p style={{ margin: 0, color: '#666' }}>
              Son of Elijah Muhammad<br/>
              Custodian from 1975 to 2012 (37 years)<br/>
              Entrusted to Amin Shabazz Muhammad in 2012
            </p>
          </div>
          
          <div style={{
            background: '#8b7355',
            color: 'white',
            padding: '1rem',
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: '0.5rem'
          }}>
            Amin Shabazz Muhammad
          </div>
          <div style={{ padding: '1rem' }}>
            <p style={{ margin: 0, color: '#666' }}>
              Current Custodian from 2012 to present<br/>
              Serving as steward, preserving and sharing the manuscript<br/>
              Maintaining the chain of custody unbroken
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section style={{
        background: '#8b7355',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          Examine the Evidence
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          View the opening cover with Elijah Muhammad's handwritten signature and address. The manuscript speaks for itself.
        </p>
        <Link href="/reader/1">
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
            View Page 1 (Signature)
          </button>
        </Link>
      </section>

      {/* QUESTIONS */}
      <section style={{
        background: '#f5f5f5',
        padding: '2rem',
        borderRadius: '8px'
      }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#8b7355' }}>
          Questions About This Manuscript?
        </h2>
        
        <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Have questions about the authentication, provenance, or scholarly significance of this Quran? Access the full manuscript and ask the custodian directly.
        </p>
        
        <Link href="/pricing">
          <button style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            background: '#8b7355',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            View Plans & Get Access
          </button>
        </Link>
      </section>
    </div>
  );
}
