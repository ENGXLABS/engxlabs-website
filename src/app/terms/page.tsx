import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — ENGXLABS",
  description: "Terms governing your use of ENGXLABS INC. services and website.",
};

const sections = [
  "Agreement to Terms",
  "Description of Services",
  "Eligibility",
  "Use of the Website",
  "Client Engagements and Service Agreements",
  "Intellectual Property",
  "Confidentiality",
  "AI and Third-Party Tools",
  "Payment Terms",
  "Disclaimer of Warranties",
  "Limitation of Liability",
  "Indemnification",
  "Termination",
  "Governing Law",
  "Changes to These Terms",
  "Contact Us",
];

export default function TermsPage() {
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
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4"
            style={{ letterSpacing: "-0.5px" }}
          >
            Terms of Service
          </h1>
          <p className="text-[#A1A1AA] text-base leading-relaxed max-w-2xl">
            These terms govern your access to and use of the ENGXLABS website and the services we
            provide. Please read them carefully.
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
            By accessing <strong className="text-white">engxlabs.com</strong> or engaging ENGXLABS
            INC. for services, you agree to be bound by these Terms of Service. If you do not agree,
            please do not use our website or services.
          </p>
        </div>

        {/* Body */}
        <div className="space-y-12">

          <LegalSection id="agreement-to-terms" number="1" title="Agreement to Terms">
            <P>
              These Terms of Service ("Terms") constitute a legally binding agreement between you
              ("you" or "Client") and <strong className="text-white">ENGXLABS INC.</strong>{" "}
              ("ENGXLABS", "we", "us", or "our"), governing your use of our website at engxlabs.com
              and all associated services.
            </P>
            <P>
              For client engagements, the specific scope, deliverables, timelines, and commercial
              terms are defined in a separate Statement of Work (SOW) or service agreement. In the
              event of a conflict between these Terms and a signed service agreement, the service
              agreement prevails.
            </P>
          </LegalSection>

          <LegalSection id="description-of-services" number="2" title="Description of Services">
            <P>
              ENGXLABS is an AI Native Engineering and Transformation company. We help organisations
              move from AI awareness to AI execution through a combination of strategy, engineering,
              and operational delivery. Our services include:
            </P>
            <div className="space-y-3">
              {[
                ["AI Lifecycle Strategy", "Assessing PDLC, SDLC, and ADLC maturity; mapping AI opportunities; defining transformation roadmaps and ROI frameworks."],
                ["Product Development AI (PDLC)", "Embedding AI into product discovery, requirements engineering, backlog prioritisation, and roadmap planning."],
                ["Engineering AI (SDLC Acceleration)", "Integrating engineering copilots into architecture, code review, developer workflows, and release processes."],
                ["Quality Engineering (Shift-Left QE)", "AI-driven test generation, QE automation, release risk intelligence, and defect pattern analysis."],
                ["AgentOps and ADLC", "Designing, deploying, governing, and continuously improving enterprise AI agents across the full Agent Development Lifecycle."],
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
            <P>
              The specific deliverables, timelines, and pricing for any engagement are defined in a
              mutually executed Statement of Work.
            </P>
          </LegalSection>

          <LegalSection id="eligibility" number="3" title="Eligibility">
            <P>
              By using our website or services, you represent and warrant that:
            </P>
            <ul className="list-disc list-inside space-y-2 text-[#A1A1AA] text-sm leading-relaxed pl-2">
              <li>You are at least 18 years of age.</li>
              <li>You have the legal authority to enter into these Terms on behalf of yourself or your organisation.</li>
              <li>Your use of our services does not violate any applicable laws or regulations in your jurisdiction.</li>
            </ul>
          </LegalSection>

          <LegalSection id="use-of-the-website" number="4" title="Use of the Website">
            <P>
              You may use engxlabs.com for lawful purposes only. You agree not to:
            </P>
            <ul className="list-disc list-inside space-y-2 text-[#A1A1AA] text-sm leading-relaxed pl-2">
              <li>Use the site in any way that violates applicable laws or regulations.</li>
              <li>Attempt to gain unauthorised access to any part of the website or its underlying systems.</li>
              <li>Transmit any harmful, offensive, or disruptive content.</li>
              <li>Scrape, crawl, or systematically collect data from the website without our written consent.</li>
              <li>Impersonate ENGXLABS or any of its representatives.</li>
              <li>Use the site for competitive intelligence, benchmarking, or any purpose intended to harm ENGXLABS commercially.</li>
            </ul>
            <P>
              We reserve the right to restrict or terminate access to the website for any user who
              violates these terms.
            </P>
          </LegalSection>

          <LegalSection id="client-engagements-and-service-agreements" number="5" title="Client Engagements and Service Agreements">
            <P>
              All service engagements with ENGXLABS are governed by a written agreement (Statement of
              Work or Master Service Agreement) executed between the parties. Until such an agreement
              is signed:
            </P>
            <ul className="list-disc list-inside space-y-2 text-[#A1A1AA] text-sm leading-relaxed pl-2">
              <li>No commitment to provide services is implied by any communication, proposal, or discovery call.</li>
              <li>Any materials shared during pre-engagement discussions are shared for evaluation purposes only.</li>
              <li>An NDA is available upon request for pre-sales conversations involving sensitive business information.</li>
            </ul>
            <P>
              ENGXLABS reserves the right to decline any engagement at its sole discretion.
            </P>
          </LegalSection>

          <LegalSection id="intellectual-property" number="6" title="Intellectual Property">
            <SubHeading>ENGXLABS property</SubHeading>
            <P>
              All content on engxlabs.com — including text, graphics, logos, branding, and
              methodologies — is owned by ENGXLABS INC. and protected by intellectual property laws.
              You may not reproduce, distribute, or create derivative works without our prior written
              consent.
            </P>
            <SubHeading>Work product from engagements</SubHeading>
            <P>
              Ownership of deliverables, code, documentation, and other work product created during a
              client engagement is defined in the applicable service agreement. Unless otherwise
              specified, custom deliverables developed exclusively for a client are assigned to the
              client upon full payment. ENGXLABS retains ownership of reusable frameworks,
              methodologies, templates, and tooling developed independently or prior to the
              engagement.
            </P>
            <SubHeading>Client materials</SubHeading>
            <P>
              You retain all rights to your pre-existing intellectual property, data, and proprietary
              materials. By engaging ENGXLABS, you grant us a limited licence to use your materials
              solely to the extent necessary to deliver the contracted services.
            </P>
          </LegalSection>

          <LegalSection id="confidentiality" number="7" title="Confidentiality">
            <P>
              Both parties agree to treat each other's confidential information with the same standard
              of care used to protect their own proprietary information (and no less than reasonable
              care). Confidential information includes business strategies, technical architectures,
              client data, pricing, and any materials marked as confidential.
            </P>
            <P>
              ENGXLABS will not disclose your confidential information to any third party without your
              prior written consent, except as required by law or to subcontractors operating under
              equivalent confidentiality obligations.
            </P>
            <P>
              For engagements involving sensitive business information, a standalone Non-Disclosure
              Agreement (NDA) is available upon request before any substantive discussion begins.
            </P>
          </LegalSection>

          <LegalSection id="ai-and-third-party-tools" number="8" title="AI and Third-Party Tools">
            <P>
              Our services utilise large language models (LLMs), AI APIs, and third-party software
              platforms. By engaging our services, you acknowledge that:
            </P>
            <div className="space-y-3">
              {[
                ["AI outputs are not guaranteed", "AI-generated content, code, or recommendations may contain errors, inaccuracies, or omissions. All AI outputs should be reviewed by qualified professionals before use in production environments."],
                ["Third-party terms apply", "Use of platforms such as Anthropic, OpenAI, Google AI, or cloud providers within your engagement is also governed by their respective terms of service."],
                ["Data handling", "Where client data is processed through AI platforms, this will be disclosed in your service agreement and subject to appropriate data handling terms."],
                ["No liability for third-party failures", "ENGXLABS is not liable for outages, changes in pricing, or policy changes by third-party AI or cloud service providers."],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0 mt-1.5" />
                  <div>
                    <span className="text-sm font-semibold text-white">{title} — </span>
                    <span className="text-sm text-[#A1A1AA]">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </LegalSection>

          <LegalSection id="payment-terms" number="9" title="Payment Terms">
            <P>
              Payment obligations are defined in your service agreement or Statement of Work.
              Generally:
            </P>
            <ul className="list-disc list-inside space-y-2 text-[#A1A1AA] text-sm leading-relaxed pl-2">
              <li>Invoices are due within the number of days stated in the agreement (typically 30 days from invoice date).</li>
              <li>Payments are non-refundable unless otherwise specified in writing.</li>
              <li>Late payments may incur interest at a rate specified in the service agreement.</li>
              <li>ENGXLABS reserves the right to pause or suspend services for accounts with overdue invoices.</li>
              <li>All fees are exclusive of applicable taxes unless stated otherwise.</li>
            </ul>
          </LegalSection>

          <LegalSection id="disclaimer-of-warranties" number="10" title="Disclaimer of Warranties">
            <div className="p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.05]">
              <P>
                THE ENGXLABS WEBSITE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE
                FULLEST EXTENT PERMITTED BY LAW, ENGXLABS DISCLAIMS ALL WARRANTIES, INCLUDING
                IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT.
              </P>
              <div className="mt-3" />
              <P>
                We do not warrant that our website will be uninterrupted, error-free, or free of
                viruses. We do not warrant that AI-generated outputs will be accurate, complete, or
                suitable for any specific purpose.
              </P>
            </div>
          </LegalSection>

          <LegalSection id="limitation-of-liability" number="11" title="Limitation of Liability">
            <div className="p-5 rounded-2xl border border-red-500/20 bg-red-500/[0.05]">
              <P>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ENGXLABS INC. AND ITS
                OFFICERS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS,
                DATA, GOODWILL, OR BUSINESS OPPORTUNITIES — ARISING FROM YOUR USE OF OUR WEBSITE OR
                SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </P>
              <div className="mt-3" />
              <P>
                IN NO EVENT SHALL ENGXLABS&apos;S TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM
                OR RELATED TO A SERVICE ENGAGEMENT EXCEED THE TOTAL FEES PAID BY YOU TO ENGXLABS IN
                THE THREE MONTHS PRECEDING THE CLAIM.
              </P>
            </div>
          </LegalSection>

          <LegalSection id="indemnification" number="12" title="Indemnification">
            <P>
              You agree to indemnify, defend, and hold harmless ENGXLABS INC. and its officers,
              directors, employees, and agents from and against any claims, liabilities, damages,
              losses, and expenses — including reasonable legal fees — arising from:
            </P>
            <ul className="list-disc list-inside space-y-2 text-[#A1A1AA] text-sm leading-relaxed pl-2">
              <li>Your violation of these Terms.</li>
              <li>Your misuse of our website or services.</li>
              <li>Your violation of any applicable law or third-party rights.</li>
              <li>Any materials or data you provide to ENGXLABS that infringe third-party intellectual property rights.</li>
            </ul>
          </LegalSection>

          <LegalSection id="termination" number="13" title="Termination">
            <P>
              Either party may terminate a service engagement as set out in the applicable service
              agreement. ENGXLABS reserves the right to:
            </P>
            <ul className="list-disc list-inside space-y-2 text-[#A1A1AA] text-sm leading-relaxed pl-2">
              <li>Suspend or terminate your access to our website at any time, with or without cause.</li>
              <li>Terminate an engagement immediately for cause (including breach of these Terms, non-payment, or conduct that poses a legal or reputational risk to ENGXLABS).</li>
            </ul>
            <P>
              Upon termination, clauses relating to intellectual property, confidentiality, payment of
              outstanding fees, limitation of liability, and governing law shall survive.
            </P>
          </LegalSection>

          <LegalSection id="governing-law" number="14" title="Governing Law">
            <P>
              These Terms and any disputes arising from them shall be governed by and construed in
              accordance with the laws of India, without regard to its conflict of law principles.
            </P>
            <P>
              Any dispute arising from these Terms or a service engagement that cannot be resolved
              amicably shall be subject to the exclusive jurisdiction of the competent courts of
              India. For international clients, the parties may agree to alternative dispute
              resolution mechanisms in the applicable service agreement.
            </P>
          </LegalSection>

          <LegalSection id="changes-to-these-terms" number="15" title="Changes to These Terms">
            <P>
              ENGXLABS reserves the right to update these Terms at any time. When we do, we will
              revise the &quot;Last updated&quot; date at the top of this page. For material changes,
              we will make reasonable efforts to notify active clients. Your continued use of our
              website or services after changes are posted constitutes acceptance of the revised
              Terms.
            </P>
          </LegalSection>

          <LegalSection id="contact-us" number="16" title="Contact Us">
            <P>
              For questions about these Terms, service inquiries, or legal notices, please contact us:
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
                <p className="text-[#A1A1AA] mt-1">We typically respond within 2 business days.</p>
              </div>
            </div>
          </LegalSection>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-[#52525B]">
          <p>© 2026 ENGXLABS INC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#A1A1AA] transition-colors">Privacy Policy</Link>
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
