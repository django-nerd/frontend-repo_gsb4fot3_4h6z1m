import { useEffect } from 'react';
import HeroSpline from './components/HeroSpline';
import ChapterSection from './components/ChapterSection';
import ChapterNavigation from './components/ChapterNavigation';
import ProgressBar from './components/ProgressBar';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for the whole document
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <ProgressBar />

      <div id="hero">
        <HeroSpline />
      </div>

      <ChapterNavigation />

      <div id="chapter-1">
        <ChapterSection
          title="Chapter I — The Signal"
          subtitle="A whisper in the static"
          content="The first ping arrives cloaked in violet noise. It threads the void like a silver wire, stirring the dormant protocols of an ancient browser. Every scroll pulls you closer—lines of light blossom into paths, and the fabric of memory starts to ripple."
          bgFrom="from-slate-950"
          bgTo="to-violet-900"
        />
      </div>

      <div id="chapter-2">
        <ChapterSection
          title="Chapter II — Elliptical Orbits"
          subtitle="Gravity bends around the unknown"
          content="You drift past neon constellations: nodes, links, and ghosted windows. Their parallax pull tugs at your balance—the closer you get, the slower time feels. Layers of color slide like tectonic plates, revealing hidden corridors of thought."
          bgFrom="from-violet-900"
          bgTo="to-indigo-900"
          flip
        />
      </div>

      <div id="chapter-3">
        <ChapterSection
          title="Chapter III — Awakening the Ribbon"
          subtitle="Touch the thread, rewrite the sky"
          content="The astronaut reaches out. The ribbon responds—iridescent, recursive, alive. Signals fold into meaning, and the interface blooms like a lucid dream. With one last breath, the system exhales: everything sharpens, and the horizon opens."
          bgFrom="from-indigo-900"
          bgTo="to-cyan-900"
        />
      </div>

      {/* Ending Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-900 to-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-500/10 to-transparent" />
        </div>
        <div className="relative z-10 max-w-3xl text-center px-6 py-24">
          <h3 className="text-3xl md:text-5xl font-bold">Fin — But Not the End</h3>
          <p className="mt-4 text-white/80 text-lg">
            The story persists wherever you take it. Share a link, change a color, or add a new chapter. The canvas is yours.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
