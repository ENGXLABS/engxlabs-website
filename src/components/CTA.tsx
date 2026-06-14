"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ContactForm from "@/components/ContactForm";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative scroll-mt-24 py-20 md:py-28 lg:py-32 overflow-hidden">
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

          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
