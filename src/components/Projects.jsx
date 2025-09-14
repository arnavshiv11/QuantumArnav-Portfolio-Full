import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Nova Gym — Business Site",
    desc: "High‑contrast landing page with pricing and contact.",
    link: "#",
    image: "/assets/demo1.svg",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "ShopX — E‑commerce Demo",
    desc: "Product grid, cart preview, and checkout screens.",
    link: "#",
    image: "/assets/demo2.svg",
    tags: ["React", "Tailwind"],
  },
  {
    title: "Creatorfolio — Portfolio",
    desc: "Clean gallery with hover effects and contact form.",
    link: "#",
    image: "/assets/demo3.svg",
    tags: ["React", "Tailwind"],
  },
];

function Tag({ children }) {
  return <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/70">{children}</span>;
}

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <h2 className="mb-8 text-center text-3xl font-semibold sm:text-4xl">Projects</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="card-glass group block overflow-hidden"
          >
            <div className="aspect-video overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="mb-1 font-medium">{p.title}</h3>
              <p className="mb-3 text-sm text-white/70">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
