import { motion } from 'framer-motion';

export default function Connect() {
  return (
    <div className="container-main py-20 md:py-32 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-xl"
      >
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-light dark:text-muted-dark mb-10">
          Connect
        </h2>

        <div className="space-y-8">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          >
            <span className="text-xs font-medium tracking-wider uppercase text-muted-light dark:text-muted-dark block mb-1">
              Email
            </span>
            <a
              href="mailto:edgomberg@gmail.com"
              className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              edgomberg@gmail.com
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
          >
            <span className="text-xs font-medium tracking-wider uppercase text-muted-light dark:text-muted-dark block mb-1">
              LinkedIn
            </span>
            <a
              href="https://www.linkedin.com/in/edgomberg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
            >
              /in/edgomberg
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          >
            <span className="text-xs font-medium tracking-wider uppercase text-muted-light dark:text-muted-dark block mb-1">
              Location
            </span>
            <div className="flex items-center gap-3 text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              <span>Kazan</span>
              <motion.span
                className="inline-block text-blue-500 dark:text-blue-400"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                &rarr;
              </motion.span>
              <span>San Francisco</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
