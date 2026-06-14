"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface Fields {
  name: string;
  company: string;
  email: string;
  message: string;
}

const INITIAL: Fields = { name: "", company: "", email: "", message: "" };

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `AI Transformation Inquiry${fields.company ? ` — ${fields.company}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${fields.name}\nCompany: ${fields.company}\nEmail: ${fields.email}\n\n${fields.message}`
    );
    window.location.href = `mailto:hello@engxlabs.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const inputClass =
    "w-full bg-white/[0.04] border border-white/[0.10] rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/50 focus:bg-white/[0.06] transition-all duration-200";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 py-10 text-center"
      >
        <div className="w-12 h-12 rounded-full bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-accent-blue">
            <path d="M4 11l5 5 9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-white font-semibold text-lg">Your email client is opening.</p>
        <p className="text-text-secondary text-sm max-w-xs">
          We'll reply within 24 hours. If nothing opened,{" "}
          <a href="mailto:hello@engxlabs.com" className="text-accent-blue hover:underline">
            email us directly.
          </a>
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-4 text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
            Name <span className="text-accent-blue">*</span>
          </label>
          <input
            name="name"
            required
            value={fields.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
            Company
          </label>
          <input
            name="company"
            value={fields.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
          Email <span className="text-accent-blue">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          value={fields.email}
          onChange={handleChange}
          placeholder="jane@acme.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
          How can we help?
        </label>
        <textarea
          name="message"
          rows={4}
          value={fields.message}
          onChange={handleChange}
          placeholder="Tell us about your AI transformation goals or the challenge you're trying to solve…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full sm:w-auto py-3.5 px-8 text-sm justify-center"
      >
        Send Message
        <Send size={15} />
      </button>

      <p className="text-xs text-text-muted pt-1 text-center sm:text-left">
        Response within 24 hours · No commitment required · NDA available on request
      </p>
    </form>
  );
}
