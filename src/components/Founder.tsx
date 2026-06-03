"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Ambient */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-violet-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: story */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Our Story</p>
            <h2 className="heading-lg text-white mb-8">
              Why ENGXLABS Was Created
            </h2>

            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                After spending more than a decade building automation platforms,
                quality engineering systems, and enterprise delivery frameworks
                across global technology organizations, one truth became
                undeniable:
              </p>
              <p className="text-white text-lg font-medium leading-relaxed pl-4 border-l-2 border-accent-blue">
                Artificial Intelligence will fundamentally transform how
                businesses operate — and most organizations are not ready for it.
              </p>
              <p>
                Most organizations understand the opportunity. But they lack the
                engineering expertise, the strategic clarity, and the execution
                capability to realize it. They get stuck between curiosity and
                transformation.
              </p>
              <p>
                ENGXLABS was created to close that gap — to be the partner that
                brings together deep AI engineering capability, business process
                understanding, and a relentless focus on measurable outcomes.
              </p>
              <p>
                Not another AI agency. Not another consulting firm. A true AI
                transformation partner for businesses that are serious about
                what comes next.
              </p>
            </div>
          </motion.div>

          {/* Right: founder card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="card-base p-8 max-w-sm w-full">
              {/* Avatar placeholder — elegant monogram */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-violet-500/20 border border-accent-blue/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold gradient-text-blue">S</span>
              </div>

              <div className="mb-6">
                <div className="text-lg font-bold text-white mb-1">Founder & CEO</div>
                <div className="text-sm text-text-secondary">ENGXLABS</div>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "10+ years enterprise engineering leadership",
                  "Deep expertise in automation & quality engineering",
                  "Global technology delivery background",
                  "AI adoption & transformation specialist",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <svg className="flex-shrink-0 text-accent-blue mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {point}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-bg-border">
                <p className="text-xs text-text-muted italic leading-relaxed">
                  "The businesses that move from AI awareness to AI execution in
                  the next 24 months will define their industries for the next
                  decade."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
