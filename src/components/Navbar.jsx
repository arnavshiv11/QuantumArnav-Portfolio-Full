import React from "react";
import { Menu, Rocket } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const links = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2">
            <div className="grid place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-violet-400 p-2 shadow-glow">
              <Rocket className="h-5 w-5 text-black" />
            </div>
            <span className="font-semibold tracking-wide">QuantumArnav</span>
          </a>

          <div className="hidden gap-6 md:flex">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {l.name}
              </a>
            ))}
          </div>

          <button className="md:hidden rounded-xl border border-white/10 p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      {open && (
        <div className="mx-4 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/90">
                {l.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
