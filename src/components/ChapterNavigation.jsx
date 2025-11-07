import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const chapters = [
  { id: 'hero', label: 'Intro' },
  { id: 'chapter-1', label: 'Signal' },
  { id: 'chapter-2', label: 'Orbit' },
  { id: 'chapter-3', label: 'Awakening' },
];

export default function ChapterNavigation() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 }
    );

    chapters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {chapters.map((c) => (
        <button
          key={c.id}
          onClick={() => scrollTo(c.id)}
          className="group relative"
          aria-label={`Go to ${c.label}`}
        >
          <motion.span
            layout
            className={`block h-3 w-3 rounded-full border transition-colors ${
              active === c.id
                ? 'bg-fuchsia-500 border-fuchsia-400'
                : 'bg-white/20 border-white/30'
            }`}
          />
          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-black/70 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            {c.label}
          </span>
        </button>
      ))}
    </div>
  );
}
