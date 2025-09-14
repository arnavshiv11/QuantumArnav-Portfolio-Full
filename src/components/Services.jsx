import React from "react";
import { Code2, Layout, ShoppingBag, Sparkles } from "lucide-react";

const items = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Business Websites",
    desc: "Modern, mobile‑first websites for gyms, restaurants, shops and startups.",
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "E‑commerce Stores",
    desc: "Fast product pages, checkout flows, and admin dashboards.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Web Apps",
    desc: "Dashboards, forms, and interactive tools with React.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Animations & UX",
    desc: "Framer Motion micro‑interactions for premium feel.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16">
      <h2 className="mb-8 text-center text-3xl font-semibold sm:text-4xl">Services</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="card-glass p-5 hover:shadow-glow transition-shadow">
            <div className="mb-4 inline-flex rounded-xl bg-white/10 p-2 text-brand-300">{it.icon}</div>
            <h3 className="mb-1 font-medium">{it.title}</h3>
            <p className="text-sm text-white/70">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
