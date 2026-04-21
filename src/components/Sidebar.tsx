import { useState, useEffect } from 'react';

const navItems = [
  { icon: 'home', label: 'Home', href: '/' },
  { icon: 'user', label: 'About', href: '/about' },
  { icon: 'briefcase', label: 'Projects', href: '/#projects' },
  { icon: 'pen', label: 'Writing', href: '/#writing' },
];

function NavIcon({ icon, size = 18 }: { icon: string; size?: number }) {
  const props = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (icon) {
    case 'home':
      return (
        <svg {...props}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'user':
      return (
        <svg {...props}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg {...props}>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case 'pen':
      return (
        <svg {...props}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      );
    default:
      return null;
  }
}

function ThemeIcon({ dark }: { dark: boolean }) {
  if (dark) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Sidebar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-5">
        {navItems.map((item) => (
          <a
            key={item.icon}
            href={item.href}
            title={item.label}
            className="p-2 rounded-lg text-[var(--color-charcoal-light)] dark:text-[var(--color-muted-dark)] hover:text-[var(--color-accent)] dark:hover:text-[var(--color-accent-light)] transition-colors duration-200"
          >
            <NavIcon icon={item.icon} />
          </a>
        ))}
        <div className="w-px h-6 bg-[var(--color-brown-muted)]/20 dark:bg-[var(--color-muted-dark)]/20" />
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="p-2 rounded-lg text-[var(--color-charcoal-light)] dark:text-[var(--color-muted-dark)] hover:text-[var(--color-accent)] dark:hover:text-[var(--color-accent-light)] transition-colors duration-200 cursor-pointer"
        >
          <ThemeIcon dark={dark} />
        </button>
      </nav>

      {/* Mobile top bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-[var(--color-cream)]/90 dark:bg-[var(--color-surface-dark)]/90 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.icon}
              href={item.href}
              title={item.label}
              className="p-1.5 text-[var(--color-charcoal-light)] dark:text-[var(--color-muted-dark)] hover:text-[var(--color-accent)] transition-colors"
            >
              <NavIcon icon={item.icon} size={16} />
            </a>
          ))}
        </div>
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="p-1.5 text-[var(--color-charcoal-light)] dark:text-[var(--color-muted-dark)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
        >
          <ThemeIcon dark={dark} />
        </button>
      </nav>
    </>
  );
}
