const posts = [
  {
    title: 'The Distraction Tracker',
    subtitle: 'About the moment I stopped tracking habits and started tracking what pulls me off course.',
    date: '2026',
    url: 'https://www.linkedin.com/in/edgomberg/',
  },
];

export default function Writing() {
  return (
    <section id="writing" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '2rem' }}>
        <h2 className="text-brown-muted dark:text-muted-dark" style={{
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          Posts
        </h2>
        <span className="text-brown-muted/50 dark:text-muted-dark/50" style={{ fontSize: '12px' }}>
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem' }}>
              <div style={{ minWidth: 0 }}>
                <h3
                  className="text-charcoal dark:text-text-dark group-hover:text-accent transition-colors"
                  style={{ fontSize: '15px', fontWeight: 600 }}
                >
                  {post.title}
                </h3>
                <p className="text-charcoal-light dark:text-muted-dark" style={{ fontSize: '13px', marginTop: '2px' }}>
                  {post.subtitle}
                </p>
              </div>
              <span className="text-brown-muted dark:text-muted-dark" style={{ fontSize: '12px', flexShrink: 0 }}>
                {post.date}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
