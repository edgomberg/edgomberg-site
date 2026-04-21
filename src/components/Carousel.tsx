const items = [
  {
    category: 'Travel',
    caption: 'Pyramids at sunset',
    color: 'var(--color-accent)',
    placeholder: 'Giza, Egypt',
    gradient: 'linear-gradient(135deg, #D4A574 0%, #C4956A 50%, #B88B60 100%)',
  },
  {
    category: 'Life',
    caption: 'Burning Man — the hippie side',
    color: 'var(--color-brown-muted)',
    placeholder: 'Black Rock City',
    gradient: 'linear-gradient(135deg, #E8C9A0 0%, #D4B088 50%, #C09870 100%)',
  },
  {
    category: 'Building',
    caption: 'KamaRooms lobby renovation',
    color: 'var(--color-blue)',
    placeholder: 'Kazan, Russia',
    gradient: 'linear-gradient(135deg, #B8C4D4 0%, #A0B0C4 50%, #8898AC 100%)',
  },
  {
    category: 'Places',
    caption: 'Morning workspace, carry-on life',
    color: 'var(--color-green)',
    placeholder: 'Somewhere portable',
    gradient: 'linear-gradient(135deg, #B8C8B0 0%, #A4B89C 50%, #90A888 100%)',
  },
  {
    category: 'Travel',
    caption: 'Morocco — Wholy Brothers Vol. 1',
    color: 'var(--color-accent)',
    placeholder: 'Marrakech',
    gradient: 'linear-gradient(135deg, #D4956A 0%, #C48050 50%, #B07040 100%)',
  },
  {
    category: 'Places',
    caption: 'San Francisco, next chapter',
    color: 'var(--color-amber)',
    placeholder: 'California',
    gradient: 'linear-gradient(135deg, #D4C4A0 0%, #C4B490 50%, #B4A480 100%)',
  },
];

export default function Carousel() {
  return (
    <section style={{ paddingTop: '1rem', paddingBottom: '2.5rem' }}>
      <div className="lo" style={{ marginBottom: '1.25rem' }}>
        <h2 className="text-brown-muted dark:text-muted-dark" style={{
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          Snapshots
        </h2>
      </div>

      <div className="carousel-scroll">
        <div className="carousel-track">
          {items.map((item, i) => (
            <div key={i} style={{ flexShrink: 0, width: '240px' }}>
              <div style={{
                aspectRatio: '4/3',
                borderRadius: '0.5rem',
                background: item.gradient,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginBottom: '0.625rem',
                overflow: 'hidden',
                padding: '0.75rem',
              }}>
                <span style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                }}>
                  {item.placeholder}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.125rem' }}>
                <span style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: item.color,
                }}>
                  {item.category}
                </span>
              </div>
              <p className="text-charcoal dark:text-text-dark" style={{ fontSize: '14px' }}>
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
