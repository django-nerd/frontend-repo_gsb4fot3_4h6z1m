import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ChapterSection({
  title,
  subtitle,
  content,
  bgFrom = 'from-slate-950',
  bgTo = 'to-indigo-900',
  svg,
  flip = false,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-20% 0px -20% 0px', once: true });

  return (
    <section
      ref={ref}
      className={`relative min-h-screen w-full flex items-center ${
        flip ? 'md:flex-row-reverse' : 'md:flex-row'
      } flex-col gap-10 overflow-hidden bg-gradient-to-b ${bgFrom} ${bgTo}`}
    >
      {/* Parallax background highlights */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-600/30 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-6rem] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 gap-8 px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-lg md:text-xl text-white/80">{subtitle}</p>
          )}
          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70">
            {content}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          {/* Animated SVG illustration area */}
          <div className="relative aspect-[4/3] w-full max-w-xl mx-auto">
            <motion.svg
              viewBox="0 0 600 450"
              className="h-full w-full"
              initial={{ opacity: 0.6 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>
              <motion.path
                d="M50 300 C150 100, 250 100, 350 300 S550 500, 600 300"
                fill="none"
                stroke="url(#grad)"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              <motion.circle
                cx={100}
                cy={220}
                r={10}
                fill="#22d3ee"
                animate={inView ? { cx: [100, 300, 500], cy: [220, 120, 320] } : {}}
                transition={{ duration: 4, ease: 'easeInOut' }}
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
