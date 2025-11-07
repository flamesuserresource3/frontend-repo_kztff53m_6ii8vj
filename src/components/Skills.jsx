import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, PenTool, Cpu } from 'lucide-react';

const skills = [
  { icon: <Code2 className="h-5 w-5" />, title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'] },
  { icon: <Cpu className="h-5 w-5" />, title: 'Backend', items: ['Node.js', 'FastAPI', 'MongoDB', 'REST'] },
  { icon: <PenTool className="h-5 w-5" />, title: 'Design', items: ['Figma', 'Design Systems', 'Prototyping', 'Accessibility'] },
  { icon: <Sparkles className="h-5 w-5" />, title: 'Motion', items: ['Micro-interactions', 'Parallax', '3D & WebGL', 'Lottie'] },
];

const container = {
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="relative bg-[#0a0d13] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_20%,rgba(56,189,248,0.12),transparent),radial-gradient(600px_300px_at_90%_80%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight text-sky-100 sm:text-4xl"
        >
          Skills
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/[0.08]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 text-sky-200 ring-1 ring-inset ring-white/10">
                {s.icon}
              </div>
              <h3 className="text-lg font-medium text-slate-100">{s.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300/90">
                {s.items.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400/70" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
