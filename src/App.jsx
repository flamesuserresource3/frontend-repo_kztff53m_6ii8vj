import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#090c12] text-white selection:bg-sky-500/20 selection:text-sky-100">
      {/* Header / Nav */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-wide text-sky-100">JD</a>
          <nav className="hidden items-center gap-6 text-sm text-slate-200/90 md:flex">
            <a href="#about" className="hover:text-white/90">About</a>
            <a href="#skills" className="hover:text-white/90">Skills</a>
            <a href="#projects" className="hover:text-white/90">Projects</a>
            <a href="#contact" className="hover:text-white/90">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/90 ring-1 ring-white/20 backdrop-blur-xl hover:bg-white/15">Let's talk</a>
        </div>
      </header>

      {/* Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/30 py-8 text-center text-xs text-slate-300/80">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
