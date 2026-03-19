import { motion } from 'framer-motion';

const headline = "Serial entrepreneur since 17. Two passports, six countries, everything in one bag.";
const subline = "I spent a decade knowing things I couldn't use. Now I write about that gap — the space between hearing something and actually being able to do something with it.";

function TextGenerateEffect({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(' ');
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.04, delayChildren: delay } },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          variants={{
            hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.35, ease: 'easeOut' } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Spotlight gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent blur-3xl dark:from-blue-500/15 dark:via-purple-500/8" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-amber-400/10 to-transparent blur-3xl dark:from-amber-400/8" />
      </div>

      <div className="container-main relative z-10 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm font-medium tracking-widest uppercase text-muted-light dark:text-muted-dark mb-6"
        >
          Ed Gomberg
        </motion.p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
          <TextGenerateEffect text={headline} delay={0.3} />
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-light dark:text-muted-dark leading-relaxed max-w-2xl mx-auto">
          <TextGenerateEffect text={subline} delay={1.2} />
        </p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase text-muted-light dark:text-muted-dark">
          Keep going
        </span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-light dark:text-muted-dark"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </motion.div>
    </div>
  );
}
