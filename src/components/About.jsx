import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative bg-[#0b0e14] py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight text-sky-100 sm:text-4xl"
        >
          About Me
        </motion.h2>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <p className="text-slate-300/90 leading-relaxed">
              I'm a creative developer and designer focused on building delightful digital products. My work blends performance, interaction design, and visual storytelling to craft experiences people remember.
            </p>
            <p className="mt-4 text-slate-300/80 leading-relaxed">
              I enjoy working across the stack with a strong eye for detail—carefully balancing animation, accessibility, and clean architecture.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-sky-500/10 to-fuchsia-500/20 blur-xl" aria-hidden />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(56,189,248,0.15),transparent),radial-gradient(400px_200px_at_80%_80%,rgba(168,85,247,0.15),transparent)]" />
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-10">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border border-white/10" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
