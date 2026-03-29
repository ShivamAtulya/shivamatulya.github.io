import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Portfolio } from './components/Portfolio';
import { SkillCloud } from './components/SkillCloud';
import { ResearchPublication } from './components/ResearchPublication';
import { Certificates } from './components/Certificates';

import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Add smooth scrolling to html
    document.documentElement.style.scrollBehavior = 'smooth';

    // Set base background and text color to root
    document.body.className = 'bg-[#0a0a0a] text-white antialiased font-sans selection:bg-teal-500/30 selection:text-teal-200';

    return () => {
      document.documentElement.style.scrollBehavior = '';
      document.body.className = '';
    };
  }, []);

  return (
    <main className="min-h-screen w-full overflow-x-hidden flex flex-col items-center selection:bg-teal-500/30">
      {/* Navigation - Gradient border navbar */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div
          className="relative p-[1px] rounded-xl md:rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #3b82f6)',
          }}
        >
          <nav
            className="flex items-center bg-[#0d0d0d] rounded-xl md:rounded-2xl px-1 py-1 overflow-x-auto scrollbar-hide"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {[
              { label: 'Home', href: '#' },
              { label: 'Experience', href: '#experience' },
              { label: 'Projects', href: '#portfolio' },
              { label: 'Skills', href: '#skills' },
              { label: 'Research', href: '#research' },
              { label: 'Certificates', href: '#certificates' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] md:text-xs lg:text-[13px] font-semibold tracking-wider uppercase text-gray-400 hover:text-white px-1.5 md:px-3 lg:px-5 py-1.5 md:py-2 lg:py-3 transition-colors duration-200 rounded-lg whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Sections */}
      <div className="w-full">
        <Hero />


        <div className="bg-[#0f0f11] py-12 border-t border-b border-white/5">
          <ExperienceTimeline />
        </div>

        <div className="bg-gradient-to-b from-[#0f0f11] to-[#0a0a0a] py-12">
          <Portfolio />
        </div>

        <div className="bg-[#0a0a0a] py-12 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
          <SkillCloud />
        </div>

        <div className="bg-[#0f0f11] py-12">
          <ResearchPublication />
        </div>

        <div className="bg-[#0a0a0a] py-12 border-t border-white/5">
          <Certificates />
        </div>



        <div className="bg-gradient-to-t from-[#050505] to-[#0a0a0a] relative">
          <Contact />
        </div>

        <Footer />
      </div>
    </main>
  );
}
