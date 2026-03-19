import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  accent: string;
  accentGlow: string;
  borderGradient: string;
}

const projects: Project[] = [
  {
    title: 'Welgo',
    description: 'US property management — short-term rentals across Arizona and Colorado. $24K/month in rent obligations, distributed team across three time zones. Closing it deliberately. Not a failure story. A completion story.',
    accent: 'text-blue-500 dark:text-blue-400',
    accentGlow: 'rgba(59,130,246,0.15)',
    borderGradient: 'from-blue-500 via-blue-400 to-cyan-400',
  },
  {
    title: 'KamaRooms',
    description: '108-room hotel turnaround in Tatarstan. Family business, acting CTO — 9.4 on Booking.com, 15 disconnected systems stitched together with spreadsheets and stubbornness.',
    accent: 'text-amber-500 dark:text-amber-400',
    accentGlow: 'rgba(245,158,11,0.15)',
    borderGradient: 'from-amber-500 via-orange-400 to-yellow-400',
  },
  {
    title: 'Life OS',
    description: 'Replaced my executive assistant with an AI system built on Claude — email triage, morning briefings, weekly reviews, persistent memory. The bottleneck was never the tool. It was knowing myself well enough to tell the tool what matters.',
    accent: 'text-purple-500 dark:text-purple-400',
    accentGlow: 'rgba(168,85,247,0.15)',
    borderGradient: 'from-purple-500 via-violet-400 to-fuchsia-400',
  },
  {
    title: 'The Ed Letter',
    description: 'Writing about integration — the gap between knowing something and being able to use it. Published on LinkedIn. Sharing what I\'m building while I\'m building it, not after.',
    accent: 'text-emerald-500 dark:text-emerald-400',
    accentGlow: 'rgba(16,185,129,0.15)',
    borderGradient: 'from-emerald-500 via-green-400 to-teal-400',
  },
];

function BentoCard({ project, index }: { project: Project; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative rounded-2xl overflow-hidden group h-full"
      >
        {/* Animated gradient border */}
        <div
          className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${project.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
        />

        {/* Static border */}
        <div className="absolute inset-0 rounded-2xl border border-gray-200/60 dark:border-white/10 group-hover:border-transparent transition-colors duration-500" />

        {/* Card content */}
        <motion.div
          className="relative rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 sm:p-8 h-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Mouse spotlight */}
          {isHovered && (
            <div
              className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300"
              style={{
                background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, ${project.accentGlow}, transparent 60%)`,
              }}
            />
          )}

          {/* Accent dot */}
          <div className={`w-2 h-2 rounded-full mb-4 ${project.accent.replace('text-', 'bg-')}`} />

          <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${project.accent}`}>
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
            {project.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div className="container-main py-20 md:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-sm font-medium tracking-widest uppercase text-muted-light dark:text-muted-dark mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project, i) => (
          <BentoCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
