import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — ENGXLABS",
  description: "How ENGXLABS INC. collects, uses, and protects your information.",
};

const sections = [
  "Information We Collect",
  "How We Use Your Information",
  "Data Sharing and Disclosure",
  "Data Security",
  "Data Retention",
  "Your Rights",
  "Cookies and Tracking",
  "Third-Party Services",
  "Children's Privacy",
  "Changes to This Policy",
  "Contact Us",
];

export default function PrivacyPage() {
  return (
    <main
      className="min-h-screen bg-[#0A0A0A] text-[#F8F8F8]"
      style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
    >
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-20">

        {/* Back nav */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors mb-12"
        >
          ← Back to ENGXLABS
        </Link>

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#3B82F6] mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4"
            style={{ letterSpacing: "-0.5px" }}>
            Privacy Policy
          </h1>
          <p className="text-[#A1A1AA] text-base leading-relaxed max-w-2xl">
            This policy explains how ENGXLABS INC. collects, uses, and safeguards information when
            you visit our website or engage with our services.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-[#52525B]">
            <span>Effective: June 1, 2026</span>
            <span>·</span>
            <span>Last updated: June 1, 2026</span>
          </div>
        </div>

        {/* Table of contents */}
        <div className="mb-12 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          <div className="text-xs font-semibold text-[#52525B] uppercase tracking-widest mb-3">
            Contents
          </div>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
            {sections.map((s, i) => (
              <li key={i}>
                <a
                  href={`#${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
                >
                  {i + 1}. {s}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Intro notice */}
        <div className="mb-10 p-5 rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] flex gap-4">
          <span className="text-xl flex-shrink-0">ℹ️</span>
          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            ENGXLABS INC. ("ENGXLABS", "we", "us", or "our") is committed to protecting your
            privacy. This policy applies to our website at{" "}
            <strong className="text-white">engxlabs.com</strong> and all services we provide. By
            using our website or engaging our services, you agree to the practices described here.
          </p>
        </div>

        {/* Body */}
        <div className="space-y-12">

          <LegalSection id="information-we-collect" number="1" title="Information We Collect">
            <P>We collect information in the following ways:</P>
            <SubHeading>Information you provide directly</SubHeading>
            <ul className="list-disc list-inside space-y-2 text-[#A1A1AA] text-sm leading-relaxed pl-2">
              <li><strong className="text-[#F8F8F8]">Contact and inquiry data</strong> — name, email address, company name, job title, and message content when you submit our contact form or email us at hello@engxlabs.com.</li>
              <li><strong className="text-[#F8F8F8]">Meeting and scheduling data</strong> — information exchanged when booking a consultation or discovery call.</li>
              <li><strong className="text-[#F8F8F8]">Engagement data</strong> — project requirements, business context, and any materials you share with us during a service engagement.</li>
            </ul>
            <SubHeading>Information collected automatically</SubHeading>
            <ul className="list-disc list-inside space-y-2 text-[#A1A1AA] text-sm leading-relaxed pl-2">
              <li><strong className="text-[#F8F8F8]">Usage data</strong> — pages visited, time on site, referral source, and browser/device type, collected via analytics tools.</li>
              <li><strong className="text-[#F8F8F8]">Log data</strong> — IP address, browser type, operating system, and timestamps when you access our website.</li>
              <li><strong className="text-[#F8F8F8]">Cookies</strong> — small files stored on your device to improve your browsing experience (see Section 7).</li>
            </ul>
            <SubHeading>Client project data</SubHeading>
            <P>
              During service engagements, we may access or process your organisation's data (including code repositories, documentation, business processes, or employee data) solely to deliver contracted services. This data is governed by the terms of your service agreement and any applicable Data Processing Agreement (DPA).
            </P>
          </LegalSection>

          <LegalSection id="how-we-use-your-information" number="2" title="How We Use Your Information">
            <P>We use the information we collect for the following purposes:</P>
            <div className="space-y-3">
              {[
                ["Respond to inquiries", "To reply to your contact form submissions, answer questions, and schedule discovery calls."],
                ["Deliver services", "To scope, plan, and execute AI transformation engagements, copilot deployments, and consulting services."],
                ["Improve our website", "To understand how visitors interact with engxlabs.com and make it more useful."],
                ["Send relevant communications", "To share updates about services, insights, or case studies — only with your consent, and always with an easy opt-out."],
                ["Comply with legal obligations", "To meet applicable laws, regulations, and lawful requests from authorities."],
                ["Protect our rights", "To enforce our Terms of Service, detect fraud, and resolve disputes."],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                  <div>
                    <span className="text-sm font-semibold text-white">{title} — </span>
                    <span className="text-sm text-[#A1A1AA]">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </LegalSection>

          <LegalSection id="data-sharing-and-disclosure" number="3" title="Data Sharing and Disclosure">
            <P>
              We do not sell, rent, or trade your personal information to third parties. We may share
              information only in the following limited circumstances:
            </P>
            <SubHeading>Service providers</SubHeading>
            <P>
              We engage trusted third-party vendors (such as cloud hosting providers, analytics
              platforms, and communication tools) who process data on our behalf. These providers are
              contractually bound to handle data only as instructed and with appropriate security
              measures.
            </P>
            <SubHeading>AI and LLM platforms</SubHeading>
            <P>
              Our services involve the use of large language model (LLM) platforms and AI APIs. Where
              your data is processed through such platforms as part of a service engagement, we will
              inform you explicitly in your service agreement and ensure appropriate data handling
              terms are in place.
            </P>
            <SubHeading>Legal requirements</SubHeading>
            <P>
              We may disclose information if required by law, court order, or governmental authority,
              or where necessary to protect the rights, safety, or property of ENGXLABS, our clients,
              or the public.
            </P>
            <SubHeading>Business transfers</SubHeading>
            <P>
              If ENGXLABS undergoes a merger, acquisition, or sale of assets, your information may
              be transferred as part of that transaction. We will notify you of any such change and
              any choices you have.
            </P>
          </LegalSection>

          <LegalSection id="data-security" number="4" title="Data Security">
            <P>
              We implement industry-standard technical and organisational measures to protect your
              information against unauthorised access, alteration, disclosure, or destruction. These
              include:
            </P>
            <ul className="list-disc list-inside space-y-2 text-[#A1A1AA] text-sm leading-relaxed pl-2">
              <li>Encrypted data transmission (HTTPS/TLS) across all web properties</li>
              <li>Access controls and role-based permissions for internal systems</li>
              <li>Secure handling of credentials, API keys, and client data under NDA</li>
              <li>Regular review of security practices as our services evolve</li>
            </ul>
            <div className="mt-5 p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/[0.05] flex gap-3">
              <span className="text-base flex-shrink-0">⚠️</span>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                No method of electronic transmission or storage is 100% secure. While we strive to
                protect your information, we cannot guarantee absolute security. If you believe your
                data has been compromised, please contact us immediately at{" "}
                <a href="mailto:hello@engxlabs.com" className="text-blue-400 hover:text-blue-300 transition-colors">hello@engxlabs.com</a>.
              </p>
            </div>
          </LegalSection>

          <LegalSection id="data-retention" number="5" title="Data Retention">
            <P>
              We retain personal information only as long as necessary to fulfil the purposes for
              which it was collected, or as required by law.
            </P>
            <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left px-4 py-3 text-[#52525B] font-semibold text-xs uppercase tracking-widest">Data Type</th>
                    <th className="text-left px-4 py-3 text-[#52525B] font-semibold text-xs uppercase tracking-widest">Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Contact form inquiries", "2 years from last interaction"],
                    ["Client project data", "Duration of engagement + 1 year, unless agreed otherwise"],
                    ["Website analytics", "13 months, then anonymised"],
                    ["Financial and billing records", "7 years (as required by law)"],
                    ["Marketing communications", "Until you unsubscribe"],
                  ].map(([type, period], i) => (
                    <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                      <td className="px-4 py-3 text-[#F8F8F8]">{type}</td>
                      <td className="px-4 py-3 text-[#A1A1AA]">{period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </LegalSection>

          <LegalSection id="your-rights" number="6" title="Your Rights">
            <P>
              Depending on your location, you may have the following rights regarding your personal data:
            </P>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ["Access", "Request a copy of the personal data we hold about you."],
                ["Correction", "Ask us to correct inaccurate or incomplete data."],
                ["Deletion", "Request deletion of your personal data, subject to legal retention obligations."],
                ["Portability", "Receive your data in a structured, machine-readable format."],
                ["Objection", "Object to our processing of your data for marketing purposes."],
                ["Restriction", "Ask us to restrict processing in certain circumstances."],
              ].map(([right, desc], i) => (
                <div key={i} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="text-sm font-semibold text-white mb-1">{right}</div>
                  <div className="text-xs text-[#A1A1AA] leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
            <P>
              To exercise any of these rights, email us at{" "}
              <a href="mailto:hello@engxlabs.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                hello@engxlabs.com
              </a>
              . We will respond within 30 days.
            </P>
          </LegalSection>

          <LegalSection id="cookies-and-tracking" number="7" title="Cookies and Tracking">
            <P>
              Our website uses cookies and similar technologies to improve performance and understand usage.
            </P>
            <SubHeading>Types of cookies we use</SubHeading>
            <div className="space-y-3">
              {[
                ["Essential cookies", "Required for the website to function. Cannot be disabled."],
                ["Analytics cookies", "Help us understand how visitors use the site (e.g. pages viewed, time spent). We use anonymised, privacy-respecting analytics."],
                ["Preference cookies", "Remember your settings and choices across sessions."],
              ].map(([type, desc], i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                  <div>
                    <span className="text-sm font-semibold text-white">{type} — </span>
                    <span className="text-sm text-[#A1A1AA]">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <P>
              You can control cookies through your browser settings. Disabling cookies may affect some
              website functionality.
            </P>
          </LegalSection>

          <LegalSection id="third-party-services" number="8" title="Third-Party Services">
            <P>
              Our website and services may integrate with or link to third-party platforms. These may include:
            </P>
            <ul className="list-disc list-inside space-y-2 text-[#A1A1AA] text-sm leading-relaxed pl-2">
              <li>Cloud infrastructure providers (e.g. AWS, Google Cloud, Azure)</li>
              <li>LLM and AI API providers (e.g. Anthropic, OpenAI, Google)</li>
              <li>Communication tools (e.g. Gmail, Slack, Zoom for client engagements)</li>
              <li>Analytics platforms (e.g. Google Analytics or privacy-first alternatives)</li>
              <li>Scheduling tools (e.g. Calendly for booking calls)</li>
            </ul>
            <P>
              Each third party operates under its own privacy policy. We encourage you to review their
              policies before sharing information with them. ENGXLABS is not responsible for the
              privacy practices of third-party services.
            </P>
          </LegalSection>

          <LegalSection id="children's-privacy" number="9" title="Children's Privacy">
            <P>
              Our website and services are not directed at children under the age of 13. We do not
              knowingly collect personal information from children. If you believe a child has provided
              us with personal information, please contact us at{" "}
              <a href="mailto:hello@engxlabs.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                hello@engxlabs.com
              </a>{" "}
              and we will promptly delete it.
            </P>
          </LegalSection>

          <LegalSection id="changes-to-this-policy" number="10" title="Changes to This Policy">
            <P>
              We may update this Privacy Policy periodically to reflect changes in our practices,
              services, or applicable law. When we make material changes, we will update the
              &quot;Last updated&quot; date at the top of this page. We encourage you to review this
              policy regularly.
            </P>
            <P>
              Continued use of our website or services after changes are posted constitutes your
              acceptance of the revised policy.
            </P>
          </LegalSection>

          <LegalSection id="contact-us" number="11" title="Contact Us">
            <P>
              If you have questions, concerns, or requests regarding this Privacy Policy or how we
              handle your data, please contact us:
            </P>
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-3 text-sm">
              <div>
                <span className="text-[#52525B] font-semibold uppercase tracking-widest text-xs">Company</span>
                <p className="text-white mt-1">ENGXLABS INC.</p>
              </div>
              <div>
                <span className="text-[#52525B] font-semibold uppercase tracking-widest text-xs">Email</span>
                <p className="mt-1">
                  <a href="mailto:hello@engxlabs.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    hello@engxlabs.com
                  </a>
                </p>
              </div>
              <div>
                <span className="text-[#52525B] font-semibold uppercase tracking-widest text-xs">Website</span>
                <p className="text-white mt-1">engxlabs.com</p>
              </div>
              <div>
                <span className="text-[#52525B] font-semibold uppercase tracking-widest text-xs">Response time</span>
                <p className="text-[#A1A1AA] mt-1">We aim to respond within 30 days of receiving your request.</p>
              </div>
            </div>
          </LegalSection>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-[#52525B]">
          <p>© 2026 ENGXLABS INC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-[#A1A1AA] transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-[#A1A1AA] transition-colors">Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-xs font-mono font-bold text-[#3B82F6] bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md flex-shrink-0">
          {number}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{title}</h2>
      </div>
      <div className="space-y-4 pl-0 sm:pl-8">{children}</div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold text-white uppercase tracking-widest mt-5 mb-2">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[#A1A1AA] text-sm leading-relaxed">{children}</p>;
}
