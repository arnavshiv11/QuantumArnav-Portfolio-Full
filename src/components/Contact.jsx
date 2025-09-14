import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <h2 className="mb-6 text-center text-3xl font-semibold sm:text-4xl">Contact</h2>
      <div className="card-glass mx-auto max-w-2xl p-6">
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="grid grid-cols-1 gap-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-white/70">Name</label>
              <input required name="name" className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none ring-brand-400/40 focus:ring-2" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <input required type="email" name="email" className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none ring-brand-400/40 focus:ring-2" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">Message</label>
            <textarea required name="message" rows="5" className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none ring-brand-400/40 focus:ring-2"></textarea>
          </div>
          <button className="mt-2 w-full rounded-xl bg-gradient-to-r from-brand-400 to-violet-400 px-5 py-3 font-medium text-black shadow-glow">
            Send Message
          </button>
          <p className="text-center text-xs text-white/50">Powered by Formspree — replace the form action with your ID.</p>
        </form>
      </div>
    </section>
  );
}
