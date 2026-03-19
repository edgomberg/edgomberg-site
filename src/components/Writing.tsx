import { motion } from 'framer-motion';

const articles = [
  {
    title: 'The Distraction Tracker',
    date: '2026',
    excerpt: 'About the moment I stopped tracking my habits and started tracking what pulls me off course. The insight wasn\'t productivity — it was self-knowledge.',
    url: 'https://www.linkedin.com/in/edgomberg/',
  },
];

const intro = "I write to think. The process is messy — stream of consciousness first, then find the structure in it. I don't wait until I've mastered something to share it. Sharing is how I learn.";

export default function Writing() {
  return (
    <div className="container-main py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-light dark:text-muted-dark mb-4">
          Writing
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-4">
          {intro}
        </p>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-10">
          The project is called <span className="font-semibold text-gray-900 dark:text-white">Show My Work</span>. I publish what I'm building, mid-process, with the rough edges intact. Teacher hat, not guru hat — "here's what I found" beats "here's what you need to know."
        </p>

        <div className="space-y-6">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
            >
              <div className="relative rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 group-hover:border-blue-500/30 dark:group-hover:border-blue-400/30 group-hover:shadow-lg group-hover:shadow-blue-500/5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium tracking-wider uppercase text-muted-light dark:text-muted-dark">
                      {article.date}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-1 mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

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
                    className="flex-shrink-0 mt-1 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </motion.svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
