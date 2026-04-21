import { useState } from 'react';

const credentials = [
  'Serial entrepreneur since 17, 3+ countries',
  '108-room hotel turnaround, 9.4 Booking rating',
  'Built AI EA that replaced human assistant',
  'Kazan → San Francisco, 2026',
  'Two passports, six countries, everything in one bag',
  'Currently closing a company — deliberately, not desperately',
];

export default function Hero() {
  const [showMore, setShowMore] = useState(false);
  const visibleCredentials = showMore ? credentials : credentials.slice(0, 4);

  return (
    <section style={{ paddingTop: '7rem', paddingBottom: '3.5rem' }}>
      <h1 className="text-charcoal dark:text-text-dark" style={{
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
        marginBottom: '1.5rem',
      }}>
        Ed Gomberg is showing his work on the gap between knowing and doing
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <p className="text-charcoal-light dark:text-muted-dark" style={{ fontSize: '15px', lineHeight: 1.7 }}>
          I spent a decade knowing things I couldn't use. Now I write about that gap — the space between hearing something and actually being able to do something with it.
        </p>
        <p className="text-charcoal-light dark:text-muted-dark" style={{ fontSize: '15px', lineHeight: 1.7 }}>
          Teacher hat, not guru hat. Mid-process, not post-victory-lap.{' '}
          <a
            href="/about"
            className="text-brown-link dark:text-accent-light hover:text-accent"
            style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            Read more »
          </a>
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {visibleCredentials.map((cred) => (
          <span
            key={cred}
            className="bg-cream-dark dark:bg-surface-dark-raised text-charcoal-light dark:text-muted-dark border-brown-muted/10 dark:border-muted-dark/15"
            style={{
              display: 'inline-block',
              fontSize: '13px',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            {cred}
          </span>
        ))}
        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="bg-cream-dark dark:bg-surface-dark-raised text-brown-link dark:text-accent-light border-brown-muted/10 dark:border-muted-dark/15 hover:bg-brown-muted/10"
            style={{
              display: 'inline-block',
              fontSize: '13px',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              borderWidth: '1px',
              borderStyle: 'solid',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            MORE
          </button>
        )}
      </div>
    </section>
  );
}
