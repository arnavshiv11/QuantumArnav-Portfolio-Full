import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen text-white selection:bg-brand-400/30">
      {/* Animated gradient + subtle grid bg */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14] via-[#0a0a0a] to-black" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(34,211,238,0.15), transparent 40%), radial-gradient(circle at 80% 20%, rgba(167,139,250,0.12), transparent 40%), radial-gradient(circle at 50% 80%, rgba(34,211,238,0.1), transparent 40%)'
        }} />
        <div className="absolute inset-0 bg-grid bg-grid opacity-20" />
      </div>

      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
