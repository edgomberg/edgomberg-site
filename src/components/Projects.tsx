interface Project {
  title: string;
  status: 'Active' | 'Closing' | 'Building';
  description: string;
  url?: string;
}

const projects: Project[] = [
  {
    title: 'KamaRooms',
    status: 'Active',
    description: '108-room hotel turnaround in Tatarstan. Family business, acting CTO — 9.4 on Booking.com, 15 disconnected systems stitched together.',
  },
  {
    title: 'Welgo',
    status: 'Closing',
    description: 'US property management — short-term rentals across Arizona and Colorado. Closing deliberately. Not a failure story. A completion story.',
  },
  {
    title: 'Life OS',
    status: 'Building',
    description: 'Replaced my executive assistant with an AI system built on Claude — email triage, morning briefings, weekly reviews, persistent memory.',
  },
  {
    title: 'The Ed Letter',
    status: 'Building',
    description: 'Writing about integration — the gap between knowing something and being able to use it. Sharing what I\'m building while I\'m building it.',
    url: 'https://www.linkedin.com/in/edgomberg/',
  },
];

function statusBadgeClass(status: Project['status']): string {
  switch (status) {
    case 'Active': return 'badge badge-active';
    case 'Closing': return 'badge badge-closing';
    case 'Building': return 'badge badge-building';
  }
}

export default function Projects() {
  return (
    <section id="projects" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
      <h2 className="text-brown-muted dark:text-muted-dark" style={{
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '2rem',
      }}>
        Projects
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projects.map((project) => (
          <div key={project.title}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.375rem' }}>
              <h3 className="text-charcoal dark:text-text-dark" style={{ fontSize: '16px', fontWeight: 600 }}>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <span className={statusBadgeClass(project.status)}>
                {project.status}
              </span>
            </div>
            <p className="text-charcoal-light dark:text-muted-dark" style={{ fontSize: '14px', lineHeight: 1.7 }}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
