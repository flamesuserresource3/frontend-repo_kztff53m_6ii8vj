import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import MatrixCode from './MatrixCode';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -60]);
  const y2 = useTransform(scrollY, [0, 600], [0, -120]);

  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'smooth';
    return () => { root.style.scrollBehavior = prev; };
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(1200px_800px_at_70%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(1000px_600px_at_-10%_20%,rgba(147,51,234,0.25),transparent)]">
      {/* Parallax gradient veils */}
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 via-sky-400/10 to-fuchsia-500/20 blur-3xl" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-sky-500/20 to-violet-500/20 blur-3xl" />
      </motion.div>

      {/* Spline Scene as immersive backdrop (updated asset) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Matrix / code rain overlay */}
        <MatrixCode opacity={0.18} speed={50} fontSize={14} />
        {/* Gentle grain overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-soft-light" />
        {/* Gradient veil to enhance contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-sky-100 backdrop-blur-xl ring-1 ring-white/20"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to opportunities
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
        >
          Creative Developer & Designer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mx-auto mt-4 max-w-2xl text-base text-slate-200/80 sm:text-lg"
          style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
        >
          I craft immersive, performant web experiences that blend elegant design with delightful interactions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-sky-900/20 transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-sky-400/50">
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-xl ring-1 ring-white/20 transition-colors hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400/50">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
