import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto mt-10 max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center text-sm text-white/60 backdrop-blur-xl">
        © {new Date().getFullYear()} QuantumArnav — Web Design. Built with React, Tailwind & Framer Motion.
      </div>
    </footer>
  );
}
