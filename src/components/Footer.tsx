export default function Footer() {
  return (
    <footer className="border-brown-muted/10 dark:border-muted-dark/10" style={{
      paddingTop: '3.5rem',
      paddingBottom: '3.5rem',
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      marginTop: '2rem',
    }}>
      <div className="text-charcoal-light dark:text-muted-dark" style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        fontSize: '14px',
      }}>
        <div>
          <p>Built by Ed Gomberg · Kazan → San Francisco</p>
          <p className="text-brown-muted/50 dark:text-muted-dark/50" style={{ fontSize: '12px', marginTop: '0.25rem' }}>
            Everything in one bag since 2019
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="/workflows" className="hover:text-accent transition-colors" style={{ color: 'inherit', textDecoration: 'none' }}>
            Workflows
          </a>
          <a href="mailto:edgomberg@gmail.com" className="hover:text-accent transition-colors" style={{ color: 'inherit', textDecoration: 'none' }}>
            Email
          </a>
          <a href="https://www.linkedin.com/in/edgomberg/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" style={{ color: 'inherit', textDecoration: 'none' }}>
            LinkedIn
          </a>
          <a href="https://www.instagram.com/edgomberg/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" style={{ color: 'inherit', textDecoration: 'none' }}>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
