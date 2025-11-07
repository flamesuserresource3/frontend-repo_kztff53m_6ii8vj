import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Futuristic Dashboard',
    desc: 'A real-time analytics dashboard with elegant motion and glass UI.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#',
    img: 'https://images.unsplash.com/photo-1551281044-8d8d0d8c2bb0?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: '3D Interactive Landing',
    desc: 'Immersive landing with 3D interactions powered by Spline.',
    tags: ['Spline', 'WebGL', 'Animation'],
    link: '#',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Design System',
    desc: 'A scalable UI kit and design tokens for fast product iteration.',
    tags: ['Figma', 'Design Systems'],
    link: '#',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#0b0e14] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_30%,rgba(56,189,248,0.08),transparent),radial-gradient(700px_300px_at_80%_70%,rgba(168,85,247,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight text-sky-100 sm:text-4xl"
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <img src={p.img} alt="Project cover" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-fuchsia-500/10" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-lg font-medium text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300/90">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200 ring-1 ring-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
