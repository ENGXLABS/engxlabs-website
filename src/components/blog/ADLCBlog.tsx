"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Target,
  Lightbulb,
  BarChart3,
  Plug,
  Wrench,
  Rocket,
  RefreshCw,
  Shield,
  CheckCircle2,
  Eye,
  BookOpen,
  ArrowRight,
  Zap,
  Layers,
  Lock,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const phases = [
  {
    id: "01",
    icon: Target,
    label: "Opportunity",
    color: "blue" as const,
    tagline: "Find the right problem",
    description:
      "Before building anything, you pick the right job for your AI agent. Think of it like deciding what superpower your robot helper should have. Ask: Who has a problem? What's their current workflow? What would 'great' look like?",
    analogy: "Like choosing what sport to play before buying equipment.",
    keyQuestions: [
      "Who is affected by this problem?",
      "What does the current workflow look like?",
      "What outcome would mean success?",
    ],
  },
  {
    id: "02",
    icon: Lightbulb,
    label: "Design",
    color: "cyan" as const,
    tagline: "Draw the blueprint",
    description:
      "Now you design what the agent will do, what it won't do, and how it will behave. Like writing the rules of a game before you start playing. You define the agent's responsibilities, timing, and clear scope boundaries.",
    analogy: "Like drawing a map before going on a treasure hunt.",
    keyQuestions: [
      "What tasks does the agent own?",
      "What are the explicit scope limits?",
      "What information does it need?",
    ],
  },
  {
    id: "03",
    icon: BarChart3,
    label: "Performance",
    color: "violet" as const,
    tagline: "Set the scorecard",
    description:
      "How do we know if the agent is doing a good job? You set clear goals with numbers — like scoring 90 out of 100 on tests before it's allowed to help real people. These are called KPIs (Key Performance Indicators).",
    analogy: "Like setting a passing score before a test.",
    keyQuestions: [
      "What does 'good enough' look like with real numbers?",
      "How will we measure quality?",
      "What signals show something is wrong?",
    ],
  },
  {
    id: "04",
    icon: Plug,
    label: "Context",
    color: "emerald" as const,
    tagline: "Give it the right tools",
    description:
      "Your agent needs information and tools to do its job. Like packing a backpack before school — you only bring what's needed. Identify the minimum data sources, tools, and examples required.",
    analogy: "Like packing only the right books for the right class.",
    keyQuestions: [
      "What data sources does the agent need?",
      "What tools or APIs will it use?",
      "What feedback signals does it need?",
    ],
  },
  {
    id: "05",
    icon: Wrench,
    label: "Develop",
    color: "orange" as const,
    tagline: "Build and test it",
    description:
      "Now you actually build the agent! You write code, test it with example scenarios (called 'golden examples'), and fix bugs. Then you let a small group of friendly testers try it out — this is called a pilot.",
    analogy: "Like rehearsing a school play before performing on stage.",
    keyQuestions: [
      "Which execution model fits the task?",
      "Does it pass all golden examples?",
      "What did design partners discover?",
    ],
  },
  {
    id: "06",
    icon: Rocket,
    label: "Launch",
    color: "pink" as const,
    tagline: "Release to the world",
    description:
      "Launch is treated like a major change event — not just pressing a button. You gradually give access to more users, train people how to use it, and add safety guardrails so it can't do anything dangerous.",
    analogy: "Like opening a new store — you train staff before opening day.",
    keyQuestions: [
      "Who gets access first?",
      "What training do users need?",
      "What guardrails prevent misuse?",
    ],
  },
  {
    id: "07",
    icon: RefreshCw,
    label: "Monitor & Improve",
    color: "blue" as const,
    tagline: "Keep making it better",
    description:
      "After launch, you never stop watching and improving. Dashboards show how the agent is performing. When something goes wrong, you fix it. The insights loop back to earlier stages to make the agent smarter.",
    analogy: "Like checking your grades after every test and studying more.",
    keyQuestions: [
      "Is the agent hitting its KPIs?",
      "What incidents need investigation?",
      "What improvements should loop back to Design?",
    ],
  },
];

type ColorKey = "blue" | "cyan" | "violet" | "emerald" | "orange" | "pink";

const colorMap: Record<
  ColorKey,
  { num: string; bg: string; border: string; icon: string; dot: string }
> = {
  blue: {
    num: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: "bg-blue-500/20",
    dot: "bg-blue-400",
  },
  cyan: {
    num: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    icon: "bg-cyan-500/20",
    dot: "bg-cyan-400",
  },
  violet: {
    num: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    icon: "bg-violet-500/20",
    dot: "bg-violet-400",
  },
  emerald: {
    num: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    icon: "bg-emerald-500/20",
    dot: "bg-emerald-400",
  },
  orange: {
    num: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    icon: "bg-orange-500/20",
    dot: "bg-orange-400",
  },
  pink: {
    num: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    icon: "bg-pink-500/20",
    dot: "bg-pink-400",
  },
};

const flywheelSteps = [
  {
    angle: 0,
    icon: Zap,
    label: ["Live &", "Simulate"],
    desc: "Gradual rollouts + parallel stress-testing",
    color: "#3B82F6",
  },
  {
    angle: 90,
    icon: Eye,
    label: ["Identify", "Failures"],
    desc: "Surface patterns, brittleness, and edge cases",
    color: "#06B6D4",
  },
  {
    angle: 180,
    icon: CheckCircle2,
    label: ["Enhance", "Evals"],
    desc: "Feed discoveries back into behavioral tests",
    color: "#8B5CF6",
  },
  {
    angle: 270,
    icon: ArrowRight,
    label: ["Experiment", "& Improve"],
    desc: "Ship updates grounded in metrics",
    color: "#10B981",
  },
];

const sdlcVsAdlc = [
  {
    aspect: "Core Nature",
    sdlc: "Deterministic — same input always gives same output",
    adlc: "Probabilistic — agent reasons, so output can vary",
  },
  {
    aspect: "Testing",
    sdlc: "Unit tests with clear pass/fail answers",
    adlc: "Behavioral eval suites with scores and tolerances",
  },
  {
    aspect: "Planning",
    sdlc: "Heavy upfront design and requirements",
    adlc: "Lighter upfront planning, heavier iterative tuning",
  },
  {
    aspect: "Failure Mode",
    sdlc: "Code throws a clear error — visible immediately",
    adlc: "Agent gives a wrong or harmful answer — subtle",
  },
  {
    aspect: "Governance",
    sdlc: "Code reviews, approvals, and deployments",
    adlc: "Real-time automated oversight + human checkpoints",
  },
  {
    aspect: "Improvement",
    sdlc: "Bug fixes and feature releases",
    adlc: "Flywheel: observe → evaluate → tune → repeat",
  },
];

const bigIdeas = [
  {
    icon: Shield,
    title: "Governance",
    color: "blue" as const,
    description:
      "Rules that keep the agent safe and within boundaries. Like a fence around a playground — the agent can have fun, but not run into the street.",
    points: ["Policy enforcement", "Access controls", "Audit trails", "Real-time monitoring"],
  },
  {
    icon: CheckCircle2,
    title: "Evaluation (Evals)",
    color: "violet" as const,
    description:
      "A set of tests that check if the agent is doing its job correctly. The better your eval suite, the more confident you are that your agent is reliable.",
    points: ["Golden examples", "Edge case coverage", "Regression testing", "Performance scoring"],
  },
  {
    icon: Eye,
    title: "Observability",
    color: "cyan" as const,
    description:
      "Tools that let you see inside the agent's 'brain' — watching what it decides, why, and how long it takes. Like a camera in the kitchen to see how food is being cooked.",
    points: ["Reasoning traces", "KPI dashboards", "Incident detection", "Performance trends"],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="section-label">{label}</p>
      <h2 className="heading-md text-white">{title}</h2>
    </div>
  );
}

function BlogSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  );
}

function PhaseStepper() {
  const [activePhase, setActivePhase] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const phase = phases[activePhase];
  const c = colorMap[phase.color];
  const PhaseIcon = phase.icon;

  return (
    <div ref={ref}>
      {/* Phase pills — scrollable on mobile */}
      <div className="-mx-4 px-4 overflow-x-auto mb-8">
        <div className="flex items-center gap-2 min-w-max pb-2">
          {phases.map((p, i) => {
            const pc = colorMap[p.color];
            const IconComponent = p.icon;
            return (
              <motion.button
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06 }}
                onClick={() => setActivePhase(i)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border flex-shrink-0 ${
                  activePhase === i
                    ? `${pc.bg} ${pc.border} ${pc.num}`
                    : "bg-transparent border-white/[0.06] text-text-muted hover:border-white/10 hover:text-text-secondary"
                }`}
              >
                <IconComponent size={14} />
                <span>{p.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Phase detail card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className={`card-base border ${c.border} ${c.bg} p-6 sm:p-8`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center flex-shrink-0`}>
                  <PhaseIcon size={24} className={c.num} />
                </div>
                <div>
                  <div className={`text-2xl font-black ${c.num}`}>{phase.id}</div>
                  <div className="text-xs text-text-muted uppercase tracking-widest">Phase</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{phase.label}</h3>
              <p className="text-text-secondary leading-relaxed mb-4">{phase.description}</p>
              <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg ${c.bg} border ${c.border}`}>
                <span className="text-xs font-medium text-text-secondary italic">{phase.analogy}</span>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
                Key Questions to Answer
              </div>
              <ul className="space-y-3">
                {phase.keyQuestions.map((q) => (
                  <li key={q} className="flex items-start gap-3 text-sm text-text-secondary">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${c.dot}`} />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function FlywheelDiagram() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const cx = 160;
  const cy = 160;
  const r = 88;
  const labelR = r + 48;

  return (
    <div ref={ref} className="flex flex-col lg:flex-row items-center gap-8">
      {/* SVG Flywheel */}
      <div className="relative flex-shrink-0 w-[300px] h-[300px] sm:w-[320px] sm:h-[320px]">
        <svg width="100%" height="100%" viewBox="0 0 320 320">
          {/* Ambient outer glow ring */}
          <circle cx={cx} cy={cy} r={r + 22} fill="none" stroke="rgba(59,130,246,0.05)" strokeWidth="42" />
          {/* Static track ring */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
          {/* Animated dashed ring */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="rgba(59,130,246,0.35)"
            strokeWidth="1.5"
            strokeDasharray="8 5"
            style={{ animation: "flowdash 5s linear infinite" }}
          />
          {/* Center hub */}
          <circle cx={cx} cy={cy} r={30} fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />
          <text x={cx} y={cy - 5} textAnchor="middle" fill="#60A5FA" fontSize="10" fontWeight="800">
            ADLC
          </text>
          <text x={cx} y={cy + 9} textAnchor="middle" fill="#71717A" fontSize="8">
            Flywheel
          </text>

          {/* Nodes */}
          {flywheelSteps.map((step, i) => {
            const rad = ((step.angle - 90) * Math.PI) / 180;
            const nx = cx + r * Math.cos(rad);
            const ny = cy + r * Math.sin(rad);
            const isActive = activeStep === i;
            return (
              <motion.g
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: i * 0.18 + 0.3 }}
                style={{ cursor: "pointer" }}
                onClick={() => setActiveStep(isActive ? null : i)}
              >
                <circle
                  cx={nx}
                  cy={ny}
                  r={isActive ? 22 : 18}
                  fill={isActive ? step.color : "#141414"}
                  stroke={step.color}
                  strokeWidth={isActive ? 2 : 1.5}
                  style={{
                    transition: "all 0.3s",
                    filter: isActive ? `drop-shadow(0 0 10px ${step.color})` : "none",
                  }}
                />
                <foreignObject
                  x={nx - 9}
                  y={ny - 9}
                  width="18"
                  height="18"
                  style={{ pointerEvents: "none" }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <step.icon size={12} color="white" />
                  </div>
                </foreignObject>
              </motion.g>
            );
          })}

          {/* Labels */}
          {flywheelSteps.map((step, i) => {
            const rad = ((step.angle - 90) * Math.PI) / 180;
            const lx = cx + labelR * Math.cos(rad);
            const ly = cy + labelR * Math.sin(rad);
            const isActive = activeStep === i;
            return (
              <motion.g
                key={`lbl-${i}`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.18 + 0.5 }}
              >
                <text
                  x={lx}
                  y={ly - 4}
                  textAnchor="middle"
                  fill={isActive ? "#FFFFFF" : "#A1A1AA"}
                  fontSize="8"
                  fontWeight="600"
                  style={{ transition: "fill 0.3s" }}
                >
                  {step.label[0]}
                </text>
                <text
                  x={lx}
                  y={ly + 8}
                  textAnchor="middle"
                  fill={isActive ? "#FFFFFF" : "#A1A1AA"}
                  fontSize="8"
                  fontWeight="600"
                  style={{ transition: "fill 0.3s" }}
                >
                  {step.label[1]}
                </text>
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* Step list */}
      <div className="flex-1 space-y-3 w-full">
        {flywheelSteps.map((step, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 + 0.4 }}
            onClick={() => setActiveStep(activeStep === i ? null : i)}
            className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
              activeStep === i
                ? "border-blue-500/40 bg-blue-500/10"
                : "border-white/[0.06] bg-white/[0.02] hover:border-white/10"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${step.color}20`, border: `1px solid ${step.color}40` }}
              >
                <step.icon size={16} color="white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{step.label.join(" ")}</div>
                <div className="text-xs text-text-muted mt-0.5">{step.desc}</div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function SDLCComparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="overflow-x-auto rounded-2xl border border-white/[0.06]">
      <table className="w-full text-sm min-w-[600px]">
        <thead>
          <tr className="border-b border-white/[0.06]">
            <th className="text-left px-5 py-4 text-text-muted font-semibold text-xs uppercase tracking-widest w-1/4">
              Aspect
            </th>
            <th className="text-left px-5 py-4 font-semibold text-xs uppercase tracking-widest w-[37.5%]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-500 inline-block" />
                <span className="text-zinc-400">Traditional SDLC</span>
              </div>
            </th>
            <th className="text-left px-5 py-4 font-semibold text-xs uppercase tracking-widest w-[37.5%]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                <span className="text-blue-400">ADLC for AI Agents</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sdlcVsAdlc.map((row, i) => (
            <motion.tr
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
            >
              <td className="px-5 py-4 font-semibold text-white text-xs">{row.aspect}</td>
              <td className="px-5 py-4 text-text-muted text-sm">{row.sdlc}</td>
              <td className="px-5 py-4 text-text-secondary text-sm">{row.adlc}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BigIdeasGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-6">
      {bigIdeas.map((idea, i) => {
        const c = colorMap[idea.color];
        const IconComponent = idea.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.14 }}
            className={`card-base border ${c.border} ${c.bg} p-6`}
          >
            <div className={`w-10 h-10 rounded-lg ${c.icon} flex items-center justify-center mb-4`}>
              <IconComponent size={20} className={c.num} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{idea.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">{idea.description}</p>
            <ul className="space-y-1.5">
              {idea.points.map((pt, j) => (
                <li key={j} className="flex items-center gap-2 text-xs text-text-muted">
                  <div className={`w-1 h-1 rounded-full flex-shrink-0 ${c.dot}`} />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

export default function ADLCBlog() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <article className="relative min-h-screen bg-bg-primary overflow-x-hidden">
      {/* Background grid */}
      <div className="bg-grid fixed inset-0 pointer-events-none opacity-40" />

      {/* Top nav */}
      <nav className="relative z-10 max-w-4xl mx-auto px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors"
        >
          ← Back to ENGXLABS
        </Link>
      </nav>

      {/* Hero */}
      <header ref={heroRef} className="relative py-16 md:py-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent-blue/[0.06] blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="section-label">Deep Dive</span>
              <span className="text-text-muted text-xs">·</span>
              <span className="text-xs text-text-muted">12 min read</span>
              <span className="text-text-muted text-xs">·</span>
              <span className="text-xs text-text-muted">June 2026</span>
            </div>

            <h1 className="heading-xl text-white mb-6">
              What is{" "}
              <span className="gradient-text-blue">ADLC?</span>
              <br />
              The Agent Development
              <br />
              Lifecycle Explained
            </h1>

            <p className="body-lg max-w-2xl mb-8">
              AI agents are not regular software — they reason, make decisions, and can fail in subtle ways. ADLC is the structured playbook for building them reliably, from idea to production and beyond.
            </p>

            <div className="flex flex-wrap gap-2">
              {["AI Agents", "ADLC", "LLMOps", "Governance", "Evaluation"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Article body */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-32 space-y-24">

        {/* ── 1. Introduction / Analogy ── */}
        <BlogSection>
          <SectionHeader label="Let's Start Simple" title="Imagine a Robot Homework Helper" />
          <div className="space-y-4">
            <p className="body-lg">
              Imagine you build a robot that helps 10-year-olds with their homework. You program it to answer math questions. It works great in your bedroom — it gets every practice question right!
            </p>
            <p className="body-lg">
              But when real students use it, they ask in unexpected ways: <em className="text-text-primary not-italic font-medium">&ldquo;what is 7 times the number of legs on a spider?&rdquo;</em> The robot gets confused. Or worse — it gives a confidently wrong answer.
            </p>

            <div className="card-base border border-yellow-500/20 bg-yellow-500/5 p-5 flex gap-4">
              <Zap size={24} className="text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white mb-1">This is the core problem ADLC solves.</div>
                <p className="text-sm text-text-secondary">
                  Building AI agents that work perfectly on test examples but fail in messy real-world scenarios is the #1 reason agent projects stall.
                </p>
              </div>
            </div>

            <p className="body-lg">
              <strong className="text-white">ADLC</strong> — the Agent Development Lifecycle — is the structured system for building AI agents that actually work reliably in the real world.
            </p>
          </div>
        </BlogSection>

        {/* ── 2. Definition ── */}
        <BlogSection>
          <SectionHeader label="The Definition" title="What Exactly Is ADLC?" />
          <div className="space-y-6">
            <div className="card-base border border-accent-blue/30 bg-accent-blue/[0.06] p-6 sm:p-8">
              <p className="text-lg text-white font-medium leading-relaxed">
                &ldquo;ADLC is a structured framework for designing, building, testing, deploying, and continuously improving AI agents — accounting for the unique challenges of probabilistic, reasoning-based systems.&rdquo;
              </p>
              <p className="text-text-muted text-xs mt-3">
                — Synthesized from Arthur.ai, Salesforce, Glean, EPAM, and IBM
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Layers,
                  label: "Built for AI",
                  desc: "Designed around the unique way LLMs and agents think and behave",
                },
                {
                  icon: RefreshCw,
                  label: "Iterative by Nature",
                  desc: "Never truly 'done' — continuous improvement is baked in",
                },
                {
                  icon: Lock,
                  label: "Enterprise-Grade",
                  desc: "Governs agents at scale across teams and organizations",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="card-base border border-white/[0.06] bg-white/[0.02] p-5 text-center">
                    <Icon size={24} className="text-accent-blue mx-auto mb-3" />
                    <div className="font-semibold text-white text-sm mb-1">{item.label}</div>
                    <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </BlogSection>

        {/* ── 3. SDLC vs ADLC ── */}
        <BlogSection>
          <SectionHeader label="Comparison" title="SDLC vs ADLC — What's Different?" />
          <p className="body-lg mb-6">
            You have probably heard of SDLC (Software Development Lifecycle). ADLC builds on it, but adds entirely new layers to handle the unique nature of AI agents.
          </p>
          <SDLCComparison />
        </BlogSection>

        {/* ── 4. 7 Phases ── */}
        <BlogSection>
          <SectionHeader label="The 7 Phases" title="Building an Agent Step by Step" />
          <p className="body-lg mb-8">
            Think of ADLC like building a really good school project. You do not just write the report the night before — you plan, research, draft, test, improve, and present. Click any phase below to explore it.
          </p>
          <PhaseStepper />
        </BlogSection>

        {/* ── 5. Flywheel ── */}
        <BlogSection>
          <SectionHeader label="The Improvement Engine" title="The Agent Development Flywheel" />
          <p className="body-lg mb-8">
            After launch, ADLC does not stop. The &ldquo;Flywheel&rdquo; is a continuous cycle that keeps making your agent smarter over time. Every failure is a learning opportunity — and every lesson makes the agent more reliable. Click a node to learn more.
          </p>
          <div className="card-base border border-accent-blue/20 bg-accent-blue/[0.03] p-6 sm:p-10">
            <FlywheelDiagram />
          </div>
          <div className="mt-6 card-base border border-emerald-500/20 bg-emerald-500/[0.05] p-5 flex gap-4">
            <CheckCircle2 size={24} className="text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-white mb-1">The #1 Success Factor in ADLC</div>
              <p className="text-sm text-text-secondary">
                A well-designed <strong>evaluation suite</strong> (evals) is the single biggest unlock to guarantee success. The better your evals, the more confident you are in your agent's reliability.
              </p>
            </div>
          </div>
        </BlogSection>

        {/* ── 6. Big Ideas ── */}
        <BlogSection>
          <SectionHeader label="Core Concepts" title="3 Big Ideas Behind ADLC" />
          <p className="body-lg mb-8">
            ADLC is built on three pillars that keep agents safe, reliable, and continuously improving.
          </p>
          <BigIdeasGrid />
        </BlogSection>

        {/* ── 7. Real-World Story ── */}
        <BlogSection>
          <SectionHeader label="Real World" title="ADLC in Action: The AI Tutor Story" />
          <p className="body-lg mb-6">
            Let us walk through all 7 phases using a single real example — an AI tutor built for a school.
          </p>
          <div className="card-base border border-white/[0.06] p-6 sm:p-8 space-y-6">
            {[
              {
                phase: "Opportunity",
                icon: Target,
                color: "blue" as const,
                story:
                  "A school notices students struggle with math after class. They want to build an AI tutor that answers questions at any time of day.",
              },
              {
                phase: "Design",
                icon: Lightbulb,
                color: "cyan" as const,
                story:
                  "The agent's scope: answer K-8 math questions only. It will not help with other subjects, and it will not do students' homework for them — just explain the concepts.",
              },
              {
                phase: "Performance",
                icon: BarChart3,
                color: "violet" as const,
                story:
                  "Success = 85% of students who use the tutor improve their test scores. Response accuracy must stay above 90%. No harmful, confusing, or off-topic advice allowed.",
              },
              {
                phase: "Context",
                icon: Plug,
                color: "emerald" as const,
                story:
                  "The agent needs access to the school's curriculum database and a set of 500 example student questions with ideal, teacher-approved answers.",
              },
              {
                phase: "Develop",
                icon: Wrench,
                color: "orange" as const,
                story:
                  "Engineers build and test the agent on the 500 examples. A group of 20 students in a pilot program try it for 2 weeks and provide feedback.",
              },
              {
                phase: "Launch",
                icon: Rocket,
                color: "pink" as const,
                story:
                  "The tutor goes live for one grade first. Teachers get training. A thumbs up/down button lets students flag bad answers in real time.",
              },
              {
                phase: "Monitor & Improve",
                icon: RefreshCw,
                color: "blue" as const,
                story:
                  "Dashboards track accuracy. Week one reveals students keep asking story problems in unusual ways. The team feeds these edge cases back to improve the agent's training.",
              },
            ].map((step, i) => {
              const Icon = step.icon;
              const c = colorMap[step.color];
              return (
                <div key={i} className={`border-l-4 ${c.border} pl-5 py-3`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon size={18} className={c.num} />
                    <div className={`font-bold text-sm ${c.num}`}>{step.phase}</div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.story}</p>
                </div>
              );
            })}
          </div>
        </BlogSection>

        {/* ── 8. Takeaways ── */}
        <BlogSection>
          <SectionHeader label="Summary" title="Key Takeaways" />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Layers,
                text: "AI agents are not regular software — they reason, making them unpredictable without a proper lifecycle framework.",
              },
              {
                icon: Target,
                text: "ADLC has 7 phases: Opportunity → Design → Performance → Context → Develop → Launch → Monitor & Improve.",
              },
              {
                icon: RefreshCw,
                text: "The Flywheel keeps agents improving forever: real usage → identify failures → improve evals → experiment → repeat.",
              },
              {
                icon: CheckCircle2,
                text: "Evaluation suites are the most critical tool for reliability. A great eval suite is the #1 success factor.",
              },
              {
                icon: Shield,
                text: "Governance means keeping agents safe, within scope, and compliant — enforced by automated oversight systems.",
              },
              {
                icon: Eye,
                text: "Observability lets you see inside an agent's decisions, so problems become visible before users ever encounter them.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card-base border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="flex items-start gap-3">
                    <Icon size={20} className="text-accent-blue flex-shrink-0 mt-1" />
                    <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </BlogSection>

        {/* Sources */}
        <BlogSection>
          <div className="border-t border-white/[0.06] pt-8">
            <div className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">Sources & Research</div>
            <div className="space-y-2">
              {[
                {
                  label: "Arthur.ai — Introducing ADLC",
                  href: "https://www.arthur.ai/blog/introducing-adlc",
                },
                {
                  label: "Glean — Agent Dev Lifecycle 2026",
                  href: "https://www.glean.com/blog/agent-dev-lifecycle-2026",
                },
                {
                  label: "Salesforce Architect — Agent Development Lifecycle",
                  href: "https://architect.salesforce.com/docs/architect/fundamentals/guide/agent-development-lifecycle.html",
                },
                {
                  label: "EPAM — Agentic Development Lifecycle Explained",
                  href: "https://www.epam.com/insights/ai/blogs/agentic-development-lifecycle-explained",
                },
                {
                  label: "IBM Think — Agent Development Lifecycle (ADLC)",
                  href: "https://www.ibm.com/think/topics/agent-development-lifecycle-adlc",
                },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-text-muted">↗</span>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-text-secondary transition-colors"
                  >
                    {s.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </BlogSection>
      </div>
    </article>
  );
}
