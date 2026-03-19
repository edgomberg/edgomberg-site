import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const paragraphs = [
  "I started my first business at 17. Not a side project — an actual operating company. By 25 I was running two businesses across three countries, managing 125 people, and living out of a carry-on. Born in Russia, raised in England and the US, operated across Israel, the Philippines, Portugal. Two citizenships. Six countries. The kind of resume that sounds impressive at dinner parties and exhausting everywhere else.",
  "Here's what nobody told me: you can build the systems, hire the team, read every book, attend every retreat — and still run everything from survival mode. I did. For a decade. The gap between knowing something and being able to use it is the most underserved problem I've encountered — in business, in health, in relationships, in all of it. I call it integration. Most people call it \"why do I keep doing the thing I know I shouldn't do.\"",
  "I'm in therapy right now — not past tense, currently. I'm closing my last company deliberately, not because it failed but because I'm choosing to. I manage a chronic gut condition with a strict elimination diet and a 6-compartment supplement tray. I replaced my human executive assistant with an AI system I built myself. None of this is polished. I share mid-process because that's where the real material lives — not after the victory lap, but during the part where you're still figuring it out.",
  "I'm moving to San Francisco. Building in public. Writing about integration — the stuff that sits between the insight and the result. Teacher hat, not guru hat. If something here is useful to you, good. That's the whole point.",
];

function SpotlightCard({ children }: { children: React.ReactNode }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 sm:p-10 md:p-12 overflow-hidden group"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.08), transparent 60%)`,
        }}
      />
      <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <div className="container-main py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-light dark:text-muted-dark mb-8">
          About
        </h2>

        <SpotlightCard>
          <div className="prose dark:text-gray-300">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i, ease: 'easeOut' }}
                className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </SpotlightCard>
      </motion.div>
    </div>
  );
}
