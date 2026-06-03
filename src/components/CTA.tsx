"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-blue/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold px-3 py-1.5 rounded-full mb-10 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            Start Your Transformation
          </div>

          <h2 className="heading-xl text-white mb-6">
            Your AI Transformation Journey Starts Here
          </h2>

          <p className="body-lg text-lg max-w-2xl mx-auto mb-12">
            Whether you're exploring AI for the first time or looking to scale
            existing initiatives, ENGXLABS can help you move from ideas to
            measurable outcomes — with engineering depth and strategic clarity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="mailto:hello@engxlabs.com?subject=AI Transformation Assessment" className="btn-primary py-4 px-8 text-base">
              Book a Free AI Transformation Assessment
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="mailto:hello@engxlabs.com?subject=Discovery Call" className="btn-secondary py-4 px-8 text-base">
              Schedule a Discovery Call
            </a>
          </div>

          {/* Trust signals */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { icon: "⚡", text: "Response within 24 hours" },
              { icon: "🎯", text: "No commitment required" },
              { icon: "🔒", text: "NDA available on request" },
            ].map((item) => (
              <div key={item.text} className="flex items-center justify-center gap-2 text-sm text-text-muted">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
