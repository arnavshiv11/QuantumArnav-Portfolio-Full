import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-bold sm:text-6xl"
        >
          <span className="text-gradient">I build modern, animated</span><br/>
          <span className="text-white">web experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-8 max-w-2xl text-white/70"
        >
          Hi, I’m <span className="text-white font-semibold">Arnav</span> — I design and develop fast, mobile‑friendly websites
          with a futuristic dark aesthetic. Let’s ship your idea.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contact" className="rounded-xl bg-gradient-to-r from-brand-400 to-violet-400 px-5 py-3 font-medium text-black shadow-glow">
            Start a Project
          </a>
          <a href="#projects" className="rounded-xl border border-white/15 px-5 py-3 font-medium text-white/90 hover:bg-white/5">
            View Work
          </a>
        </motion.div>

        {/* Floating orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute -z-10 h-56 w-56 rounded-full bg-gradient-to-tr from-brand-400/30 to-violet-400/30 blur-3xl"
          style={{ top: "10%", left: "10%" }}
        />
      </div>
    </section>
  );
}
