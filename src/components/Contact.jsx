import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#0a0d13] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_10%_80%,rgba(56,189,248,0.08),transparent),radial-gradient(700px_300px_at_90%_20%,rgba(168,85,247,0.08),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight text-sky-100 sm:text-4xl"
        >
          Let's build something great
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-slate-300/90"
        >
          I'm always excited to collaborate on meaningful projects. Feel free to reach out or say hello.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-xl ring-1 ring-white/20 transition-colors hover:bg-white/15">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-xl ring-1 ring-white/20 transition-colors hover:bg-white/15">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-xl ring-1 ring-white/20 transition-colors hover:bg-white/15">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-xl ring-1 ring-white/20 transition-colors hover:bg-white/15">
            <Twitter className="h-4 w-4" /> Twitter
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
