"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Ambient */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-violet-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: story */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Founder Credibility</p>
            <h2 className="heading-lg text-white mb-8">
              Built by Enterprise Engineering Leaders
            </h2>

            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                ENGXLABS was founded by technology leaders with more than a
                decade of experience delivering automation, quality
                engineering, and large-scale software systems across global
                organizations.
              </p>
              <p className="text-white text-lg font-medium leading-relaxed pl-4 border-l-2 border-accent-blue">
                We help leadership teams move from AI experimentation to
                enterprise execution with clear operating models and measurable
                outcomes.
              </p>
              <p>
                Experience includes EPAM Systems, Navi, Rakuten, OkCredit, and
                Altisource, with direct ownership of global delivery teams,
                enterprise transformation initiatives, automation platforms, and
                quality engineering leadership.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "EPAM Systems",
                "Navi",
                "Rakuten",
                "OkCredit",
                "Altisource",
              ].map((org) => (
                <span
                  key={org}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.10] text-text-secondary"
                >
                  {org}
                </span>
              ))}
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
                  "Automation platforms and quality engineering at scale",
                  "Global delivery and cross-functional transformation",
                  "AI operating model and adoption leadership",
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
