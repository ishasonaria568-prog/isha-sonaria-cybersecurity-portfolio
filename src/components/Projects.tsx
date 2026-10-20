import React, { useState } from 'react';
import { Github, ExternalLink, ShieldAlert, MailCheck, Network, Lock, CheckCircle2, ChevronRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedPhishSample, setSelectedPhishSample] = useState<'safe' | 'phish' | 'suspicious'>('phish');
  const [selectedHop, setSelectedHop] = useState<number>(2);
  const [subscopeFilter, setSubscopeFilter] = useState<'all' | '200' | 'takeover'>('all');

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-1 flex items-center gap-2">
            <span>02</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>RESEARCH ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263C] tracking-tight">
            Security Tools & Defense Engineering
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl font-sans">
            Individually engineered open-source defensive utilities, machine learning classifiers, and forensic investigation engines built from first principles.
          </p>
        </div>

        {/* Project Entries */}
        <div className="space-y-16">
          {/* ======================================================== */}
          {/* PROJECT 01: PhishGuard ML */}
          {/* ======================================================== */}
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F7F6F2] p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Narrative & Meta */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                  <span className="text-[#2563EB] font-bold">PROJECT 01</span>
                  <span>·</span>
                  <span className="text-[#17263C] font-semibold">Machine Learning / Phishing Detection</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17263C] tracking-tight">
                  PhishGuard ML
                </h3>

                <div className="space-y-1 text-xs font-mono">
                  <span className="text-[#64748B] uppercase tracking-wider block font-bold">PROBLEM STATEMENT</span>
                  <p className="text-[#475569] font-sans text-sm leading-relaxed">
                    Zero-day phishing campaigns bypass static domain blocklists through ephemeral registrars, Unicode confusion, and lexical randomization.
                  </p>
                </div>

                <div className="space-y-1 text-xs font-mono">
                  <span className="text-[#64748B] uppercase tracking-wider block font-bold">SOLUTION & FEATURES</span>
                  <p className="text-[#475569] font-sans text-sm leading-relaxed">
                    An offline phishing URL detector using Random Forest and 16 static URL features. Classifies URLs as Safe, Suspicious, or Phishing, with batch scanning, CSV/JSON export, and scan history.
                  </p>
                </div>

                {/* Core Features */}
                <div className="pt-1">
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block mb-2 font-bold">
                    CORE CAPABILITIES
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#475569] font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-mono mt-0.5">▸</span>
                      <span>16 static features extracted offline (Shannon entropy, token depth, IP detection, suspicious keywords)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-mono mt-0.5">▸</span>
                      <span>Three-tier classification engine: Safe, Suspicious, or High-Risk Phishing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-mono mt-0.5">▸</span>
                      <span>FastAPI backend with SQLite historical logging and CSV/JSON reporting</span>
                    </li>
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-2">
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block mb-2 font-bold">
                    TECHNOLOGY STACK
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {['Python', 'FastAPI', 'scikit-learn', 'React', 'SQLite', 'Docker'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-white border border-[#CBD5E1] text-[#17263C] font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono">
                  <a
                    href="https://github.com/ishasonaria568-prog/phishguard-ml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white hover:bg-[#F1F0EA] text-[#17263C] border border-[#CBD5E1] font-semibold rounded transition-colors flex items-center gap-2 active:scale-95 shadow-xs"
                  >
                    <Github className="w-4 h-4 text-[#17263C]" />
                    <span>GITHUB REPOSITORY</span>
                    <ExternalLink className="w-3 h-3 text-[#64748B]" />
                  </a>

                  <a
                    href="https://phishguard-ml-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded transition-colors flex items-center gap-2 active:scale-95 shadow-xs"
                  >
                    <span>EXPLORE LIVE DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: CSS-based Technical Architecture / Heuristics Panel */}
              <div className="lg:col-span-6 w-full">
                <div className="rounded-xl bg-white border border-[#E2E8F0] p-5 shadow-sm space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                    <span className="text-[#2563EB] font-bold flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-[#2563EB]" />
                      FEATURE EXTRACTION & CLASSIFIER
                    </span>
                    <span className="text-[#64748B] text-[10px]">16 HEURISTICS</span>
                  </div>

                  {/* Sample Selection */}
                  <div>
                    <span className="text-[11px] text-[#64748B] block mb-1.5">Select Illustrative URL Vector:</span>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setSelectedPhishSample('phish')}
                        className={`p-2 rounded text-left border transition-all ${
                          selectedPhishSample === 'phish'
                            ? 'bg-[#FEF2F2] border-[#F87171] text-[#991B1B]'
                            : 'bg-white border-[#E2E8F0] text-[#64748B] hover:bg-[#F7F6F2]'
                        }`}
                      >
                        <div className="font-bold text-[10px]">PAYLOAD #01</div>
                        <div className="truncate text-[9px] mt-0.5">secure-paypal-login.xyz</div>
                      </button>

                      <button
                        onClick={() => setSelectedPhishSample('suspicious')}
                        className={`p-2 rounded text-left border transition-all ${
                          selectedPhishSample === 'suspicious'
                            ? 'bg-[#FFFBEB] border-[#FBBF24] text-[#92400E]'
                            : 'bg-white border-[#E2E8F0] text-[#64748B] hover:bg-[#F7F6F2]'
                        }`}
                      >
                        <div className="font-bold text-[10px]">PAYLOAD #02</div>
                        <div className="truncate text-[9px] mt-0.5">update.account-auth.net</div>
                      </button>

                      <button
                        onClick={() => setSelectedPhishSample('safe')}
                        className={`p-2 rounded text-left border transition-all ${
                          selectedPhishSample === 'safe'
                            ? 'bg-[#ECFDF5] border-[#34D399] text-[#065F46]'
                            : 'bg-white border-[#E2E8F0] text-[#64748B] hover:bg-[#F7F6F2]'
                        }`}
                      >
                        <div className="font-bold text-[10px]">PAYLOAD #03</div>
                        <div className="truncate text-[9px] mt-0.5">github.com/ishasonaria</div>
                      </button>
                    </div>
                  </div>

                  {/* URL Stream line */}
                  <div className="p-2.5 rounded bg-[#F7F6F2] border border-[#E2E8F0] flex items-center justify-between text-[11px]">
                    <span className="text-[#17263C] font-semibold truncate max-w-[270px]">
                      {selectedPhishSample === 'phish' && 'http://192.168.1.55/login?client=secure-bank#verify'}
                      {selectedPhishSample === 'suspicious' && 'https://update.account-auth-notice.net/doc/view.php'}
                      {selectedPhishSample === 'safe' && 'https://github.com/ishasonaria568-prog/phishguard-ml'}
                    </span>
                    <span className="text-[#64748B] text-[10px] uppercase">INPUT URL</span>
                  </div>

                  {/* Heuristic Matrix */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[#64748B] text-[11px]">Extracted Heuristics (Sample):</span>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-[#F7F6F2] border border-[#E2E8F0] flex justify-between">
                        <span className="text-[#64748B]">IP in Domain:</span>
                        <span className={selectedPhishSample === 'phish' ? 'text-[#DC2626] font-bold' : 'text-[#0F766E] font-bold'}>
                          {selectedPhishSample === 'phish' ? 'DETECTED' : 'NONE'}
                        </span>
                      </div>
                      <div className="p-2 rounded bg-[#F7F6F2] border border-[#E2E8F0] flex justify-between">
                        <span className="text-[#64748B]">Entropy:</span>
                        <span className="text-[#2563EB] font-bold">
                          {selectedPhishSample === 'phish' ? '4.82 bits' : selectedPhishSample === 'suspicious' ? '4.12 bits' : '2.94 bits'}
                        </span>
                      </div>
                      <div className="p-2 rounded bg-[#F7F6F2] border border-[#E2E8F0] flex justify-between">
                        <span className="text-[#64748B]">Subdomains:</span>
                        <span className="text-[#17263C] font-bold">
                          {selectedPhishSample === 'phish' ? '3 subdomains' : selectedPhishSample === 'suspicious' ? '2 subdomains' : '0'}
                        </span>
                      </div>
                      <div className="p-2 rounded bg-[#F7F6F2] border border-[#E2E8F0] flex justify-between">
                        <span className="text-[#64748B]">Target Tokens:</span>
                        <span className={selectedPhishSample === 'safe' ? 'text-[#0F766E] font-bold' : 'text-[#D97706] font-bold'}>
                          {selectedPhishSample === 'phish' ? 'login, verify' : selectedPhishSample === 'suspicious' ? 'auth, update' : 'None'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Classification Verdict */}
                  <div className="p-3 rounded-lg border border-[#E2E8F0] bg-[#F7F6F2] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#64748B] uppercase block">MODEL VERDICT</span>
                      <div className="text-sm font-bold flex items-center gap-2 mt-0.5">
                        {selectedPhishSample === 'phish' && <span className="text-[#DC2626]">HIGH-RISK PHISHING (98.6%)</span>}
                        {selectedPhishSample === 'suspicious' && <span className="text-[#D97706]">SUSPICIOUS VECTOR (74.2%)</span>}
                        {selectedPhishSample === 'safe' && <span className="text-[#0F766E]">LEGITIMATE / SAFE (99.1%)</span>}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#64748B] bg-white px-2 py-1 rounded border border-[#E2E8F0]">
                      CSV / JSON EXPORT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* PROJECT 02: Email Header Forensics */}
          {/* ======================================================== */}
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F7F6F2] p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Narrative & Meta */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                  <span className="text-[#2563EB] font-bold">PROJECT 02</span>
                  <span>·</span>
                  <span className="text-[#17263C] font-semibold">Digital Forensics / Email Security</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17263C] tracking-tight">
                  Email Header Forensics
                </h3>

                <div className="space-y-1 text-xs font-mono">
                  <span className="text-[#64748B] uppercase tracking-wider block font-bold">PROBLEM STATEMENT</span>
                  <p className="text-[#475569] font-sans text-sm leading-relaxed">
                    Spoofed headers, sender domain mismatches, and compromised mail relays expose organizations to business email compromise (BEC) and targeted fraud.
                  </p>
                </div>

                <div className="space-y-1 text-xs font-mono">
                  <span className="text-[#64748B] uppercase tracking-wider block font-bold">SOLUTION & FEATURES</span>
                  <p className="text-[#475569] font-sans text-sm leading-relaxed">
                    A forensic email-header analyzer that extracts authentication records, sender domains, and mail-routing hops. Detects SPF, DKIM, and DMARC failures, Reply-To mismatches, and classifies IPv4/IPv6 hops. Generates a 0–100 risk score and supports JSON report export.
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-1">
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block mb-2 font-bold">
                    CORE CAPABILITIES
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#475569] font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-mono mt-0.5">▸</span>
                      <span>Cryptographic verification of SPF records, DKIM public-key signatures, and DMARC alignment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-mono mt-0.5">▸</span>
                      <span>Hop-by-hop relay parser tracing Received headers across upstream MTAs with delay analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-mono mt-0.5">▸</span>
                      <span>Sender mismatch heuristic flagging divergent From vs. Reply-To headers</span>
                    </li>
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-2">
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block mb-2 font-bold">
                    TECHNOLOGY STACK
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {['Go', 'JavaScript', 'REST API', 'RFC 822', 'Email Forensics'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-white border border-[#CBD5E1] text-[#17263C] font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono">
                  <a
                    href="https://github.com/ishasonaria568-prog/email-header-forensics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white hover:bg-[#F1F0EA] text-[#17263C] border border-[#CBD5E1] font-semibold rounded transition-colors flex items-center gap-2 active:scale-95 shadow-xs"
                  >
                    <Github className="w-4 h-4 text-[#17263C]" />
                    <span>GITHUB REPOSITORY</span>
                    <ExternalLink className="w-3 h-3 text-[#64748B]" />
                  </a>

                  <a
                    href="https://email-header-forensics.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded transition-colors flex items-center gap-2 active:scale-95 shadow-xs"
                  >
                    <span>EXPLORE LIVE DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: CSS-based Hop Routing & Authentication Checkpoints */}
              <div className="lg:col-span-6 w-full">
                <div className="rounded-xl bg-white border border-[#E2E8F0] p-5 shadow-sm space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                    <span className="text-[#2563EB] font-bold flex items-center gap-1.5">
                      <MailCheck className="w-4 h-4 text-[#2563EB]" />
                      MAIL ROUTING & AUTH CHECKPOINTS
                    </span>
                    <span className="text-[#DC2626] font-bold bg-[#FEF2F2] px-2 py-0.5 rounded border border-[#F87171]">
                      RISK SCORE: 85/100
                    </span>
                  </div>

                  {/* Hop Sequence Selector */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] text-[#64748B] block">Select Hop to Trace:</span>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { hop: 1, label: 'HOP 01 (Origin)', ip: '185.220.101.5', status: 'Relay Untrusted' },
                        { hop: 2, label: 'HOP 02 (Transit MTA)', ip: '198.51.100.22', status: 'SPF Fail' },
                        { hop: 3, label: 'HOP 03 (Gateway)', ip: 'mail.corp-mx.org', status: 'Quarantine' }
                      ].map((h) => (
                        <button
                          key={h.hop}
                          onClick={() => setSelectedHop(h.hop)}
                          className={`p-2.5 rounded text-left border transition-all ${
                            selectedHop === h.hop
                              ? 'bg-[#EFF6FF] border-[#60A5FA] text-[#1E40AF]'
                              : 'bg-white border-[#E2E8F0] text-[#64748B] hover:bg-[#F7F6F2]'
                          }`}
                        >
                          <div className="font-bold text-[10px]">{h.label}</div>
                          <div className="truncate text-[9px] mt-0.5 font-medium">{h.ip}</div>
                          <div className="text-[9px] text-[#D97706] mt-1 font-semibold">{h.status}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active Hop Details */}
                  <div className="p-3 rounded bg-[#F7F6F2] border border-[#E2E8F0] space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-1">
                      <span className="text-[#17263C] font-bold">
                        {selectedHop === 1 && 'HOP 01: Initial Client Ingestion'}
                        {selectedHop === 2 && 'HOP 02: Intermediate Mail Relay'}
                        {selectedHop === 3 && 'HOP 03: Final MX Destination'}
                      </span>
                      <span className="text-[#64748B] text-[10px]">DELAY: +1.2s</span>
                    </div>
                    <div className="space-y-1 text-[#475569]">
                      <div><span className="text-[#64748B]">MTA:</span> {selectedHop === 1 ? 'client-mta.relay-out.xyz' : selectedHop === 2 ? 'mail-transit-04.zone-relay.net' : 'mx01.enterprise-inbox.com'}</div>
                      <div><span className="text-[#64748B]">Sender Domain:</span> support@pay-verification-update.org</div>
                      <div><span className="text-[#64748B]">Reply-To Discrepancy:</span> <span className="text-[#DC2626] font-bold">MISMATCH (stealth-inbox@gmail.com)</span></div>
                    </div>
                  </div>

                  {/* Auth Checks */}
                  <div className="grid grid-cols-3 gap-2 text-[10px]">
                    <div className="p-2 rounded bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B]">
                      <div className="font-bold">SPF Record</div>
                      <div className="text-[9px] mt-0.5 font-bold">SOFTFAIL (-all)</div>
                    </div>
                    <div className="p-2 rounded bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B]">
                      <div className="font-bold">DKIM Signature</div>
                      <div className="text-[9px] mt-0.5 font-bold">INVALID_HASH</div>
                    </div>
                    <div className="p-2 rounded bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E]">
                      <div className="font-bold">DMARC Policy</div>
                      <div className="text-[9px] mt-0.5 font-bold">QUARANTINE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* PROJECT 03: SubScope */}
          {/* ======================================================== */}
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F7F6F2] p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Narrative & Meta */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                  <span className="text-[#2563EB] font-bold">PROJECT 03</span>
                  <span>·</span>
                  <span className="text-[#17263C] font-semibold">Network Reconnaissance / CLI</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17263C] tracking-tight">
                  SubScope
                </h3>

                <div className="space-y-1 text-xs font-mono">
                  <span className="text-[#64748B] uppercase tracking-wider block font-bold">PROBLEM STATEMENT</span>
                  <p className="text-[#475569] font-sans text-sm leading-relaxed">
                    Unmapped external assets, forgotten staging environments, and orphaned CNAME pointers create vulnerable attack surfaces prone to DNS takeover.
                  </p>
                </div>

                <div className="space-y-1 text-xs font-mono">
                  <span className="text-[#64748B] uppercase tracking-wider block font-bold">SOLUTION & FEATURES</span>
                  <p className="text-[#475569] font-sans text-sm leading-relaxed">
                    A multithreaded command-line tool for subdomain enumeration, DNS resolution, and HTTP/HTTPS verification, with CSV and terminal reports for attack-surface mapping.
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-1">
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block mb-2 font-bold">
                    CORE CAPABILITIES
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#475569] font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-mono mt-0.5">▸</span>
                      <span>High-concurrency Python worker pool resolving 500+ records per minute</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-mono mt-0.5">▸</span>
                      <span>Automated HTTP/HTTPS status probe extracting response codes, titles, and headers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-mono mt-0.5">▸</span>
                      <span>Attack-surface reporting generating organized CSV files and CLI output tables</span>
                    </li>
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-2">
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block mb-2 font-bold">
                    TECHNOLOGY STACK
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {['Python', 'Multithreading', 'DNS Resolution', 'CLI', 'Recon'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-white border border-[#CBD5E1] text-[#17263C] font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono">
                  <a
                    href="https://github.com/ishasonaria568-prog/SubScope"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white hover:bg-[#F1F0EA] text-[#17263C] border border-[#CBD5E1] font-semibold rounded transition-colors flex items-center gap-2 active:scale-95 shadow-xs"
                  >
                    <Github className="w-4 h-4 text-[#17263C]" />
                    <span>GITHUB REPOSITORY</span>
                    <ExternalLink className="w-3 h-3 text-[#64748B]" />
                  </a>
                </div>
              </div>

              {/* Right Column: CSS Attack-Surface Recon Table */}
              <div className="lg:col-span-6 w-full">
                <div className="rounded-xl bg-white border border-[#E2E8F0] p-5 shadow-sm space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                    <span className="text-[#2563EB] font-bold flex items-center gap-1.5">
                      <Network className="w-4 h-4 text-[#2563EB]" />
                      ATTACK SURFACE MAPPING
                    </span>
                    <span className="text-[#64748B] text-[10px]">MULTITHREADED DNS</span>
                  </div>

                  {/* Filter tabs */}
                  <div className="flex items-center gap-1 p-1 bg-[#F7F6F2] rounded border border-[#E2E8F0] text-[11px]">
                    <button
                      onClick={() => setSubscopeFilter('all')}
                      className={`px-2.5 py-1 rounded transition-colors ${subscopeFilter === 'all' ? 'bg-white text-[#2563EB] font-bold shadow-xs' : 'text-[#64748B] hover:text-[#17263C]'}`}
                    >
                      All (4 Active)
                    </button>
                    <button
                      onClick={() => setSubscopeFilter('200')}
                      className={`px-2.5 py-1 rounded transition-colors ${subscopeFilter === '200' ? 'bg-white text-[#2563EB] font-bold shadow-xs' : 'text-[#64748B] hover:text-[#17263C]'}`}
                    >
                      HTTP 200 OK
                    </button>
                    <button
                      onClick={() => setSubscopeFilter('takeover')}
                      className={`px-2.5 py-1 rounded transition-colors ${subscopeFilter === 'takeover' ? 'bg-white text-[#2563EB] font-bold shadow-xs' : 'text-[#64748B] hover:text-[#17263C]'}`}
                    >
                      Dangling CNAME
                    </button>
                  </div>

                  {/* Output Table */}
                  <div className="space-y-2">
                    {[
                      { sub: 'vpn.target-corp.example', ip: '203.0.113.12', status: '200 OK', type: 'A Record', tag: '200' },
                      { sub: 'staging-auth.target-corp.example', ip: '203.0.113.45', status: '403 Forbidden', type: 'A Record', tag: 'all' },
                      { sub: 'blog.target-corp.example', ip: 'orphan-bucket.s3.aws.com', status: '404 Dangling', type: 'CNAME', tag: 'takeover' },
                      { sub: 'api.target-corp.example', ip: '203.0.113.90', status: '200 OK', type: 'A Record', tag: '200' }
                    ]
                      .filter((row) => subscopeFilter === 'all' || row.tag === subscopeFilter)
                      .map((row, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded bg-[#F7F6F2] border border-[#E2E8F0] flex items-center justify-between text-[11px]"
                        >
                          <div>
                            <div className="text-[#17263C] font-semibold">{row.sub}</div>
                            <div className="text-[#64748B] text-[10px]">{row.ip} · {row.type}</div>
                          </div>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              row.status.includes('200')
                                ? 'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]'
                                : row.status.includes('Dangling')
                                ? 'bg-[#FEF2F2] text-[#991B1B] border border-[#FCA5A5]'
                                : 'bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A]'
                            }`}
                          >
                            {row.status}
                          </span>
                        </div>
                      ))}
                  </div>

                  {/* CLI Snippet */}
                  <div className="p-3 rounded bg-[#F1F0EA] border border-[#CBD5E1] space-y-1 text-[11px] text-[#17263C]">
                    <div className="text-[#64748B]"># Terminal execution:</div>
                    <div className="text-[#2563EB] font-bold">
                      python3 subscope.py -d target-corp.example -w sec-lists.txt -t 20 --verify-http
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* PROJECT 04: PDF Fortress */}
          {/* ======================================================== */}
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F7F6F2] p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Narrative & Meta */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                  <span className="text-[#2563EB] font-bold">PROJECT 04</span>
                  <span>·</span>
                  <span className="text-[#17263C] font-semibold">Document Security / Cryptography</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17263C] tracking-tight">
                  PDF Fortress
                </h3>

                <div className="space-y-1 text-xs font-mono">
                  <span className="text-[#64748B] uppercase tracking-wider block font-bold">PROBLEM STATEMENT</span>
                  <p className="text-[#475569] font-sans text-sm leading-relaxed">
                    Confidential audit reports and incident documentation are routinely distributed with metadata leakage, weak permissions, and absent integrity checks.
                  </p>
                </div>

                <div className="space-y-1 text-xs font-mono">
                  <span className="text-[#64748B] uppercase tracking-wider block font-bold">SOLUTION & FEATURES</span>
                  <p className="text-[#475569] font-sans text-sm leading-relaxed">
                    A Python-based PDF security utility with command-line and graphical interfaces, password protection, and output verification.
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-1">
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block mb-2 font-bold">
                    CORE CAPABILITIES
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#475569] font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-mono mt-0.5">▸</span>
                      <span>Standard AES-256 password encryption for user and owner authority tiers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-mono mt-0.5">▸</span>
                      <span>Granular permission flag locks (prohibiting extraction, editing, or unauthorized printing)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-mono mt-0.5">▸</span>
                      <span>SHA-256 output checksum computation guaranteeing document integrity upon receipt</span>
                    </li>
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-2">
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block mb-2 font-bold">
                    TECHNOLOGY STACK
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {['Python', 'CLI', 'GUI', 'Cryptography', 'Document Forensics'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-white border border-[#CBD5E1] text-[#17263C] font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono">
                  <a
                    href="https://github.com/ishasonaria568-prog/pdf-fortress"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white hover:bg-[#F1F0EA] text-[#17263C] border border-[#CBD5E1] font-semibold rounded transition-colors flex items-center gap-2 active:scale-95 shadow-xs"
                  >
                    <Github className="w-4 h-4 text-[#17263C]" />
                    <span>GITHUB REPOSITORY</span>
                    <ExternalLink className="w-3 h-3 text-[#64748B]" />
                  </a>

                  <a
                    href="https://pdf-fortress.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded transition-colors flex items-center gap-2 active:scale-95 shadow-xs"
                  >
                    <span>EXPLORE LIVE DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: CSS Encryption & Permission Pipeline */}
              <div className="lg:col-span-6 w-full">
                <div className="rounded-xl bg-white border border-[#E2E8F0] p-5 shadow-sm space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                    <span className="text-[#2563EB] font-bold flex items-center gap-1.5">
                      <Lock className="w-4 h-4 text-[#2563EB]" />
                      DOCUMENT PROTECTION WORKFLOW
                    </span>
                    <span className="text-[#0F766E] font-bold bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0]">
                      INTEGRITY VERIFIED
                    </span>
                  </div>

                  <div className="p-3 rounded bg-[#F7F6F2] border border-[#E2E8F0] space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#64748B]">Target Document:</span>
                      <span className="text-[#17263C] font-semibold">audit_report_2026.pdf</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#64748B]">Metadata Sanitization:</span>
                      <span className="text-[#0F766E] font-semibold">Stripped (Author, GPS)</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#64748B]">Cipher Standard:</span>
                      <span className="text-[#2563EB] font-bold">AES-256 (Revision 6)</span>
                    </div>
                  </div>

                  {/* Permission Flags */}
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="p-2 rounded bg-[#F7F6F2] border border-[#E2E8F0] flex justify-between">
                      <span className="text-[#64748B]">Copying:</span>
                      <span className="text-[#DC2626] font-bold">RESTRICTED</span>
                    </div>
                    <div className="p-2 rounded bg-[#F7F6F2] border border-[#E2E8F0] flex justify-between">
                      <span className="text-[#64748B]">Printing:</span>
                      <span className="text-[#DC2626] font-bold">LOCKED</span>
                    </div>
                    <div className="p-2 rounded bg-[#F7F6F2] border border-[#E2E8F0] flex justify-between">
                      <span className="text-[#64748B]">Modification:</span>
                      <span className="text-[#DC2626] font-bold">DISABLED</span>
                    </div>
                    <div className="p-2 rounded bg-[#F7F6F2] border border-[#E2E8F0] flex justify-between">
                      <span className="text-[#64748B]">Form Filling:</span>
                      <span className="text-[#D97706] font-bold">RESTRICTED</span>
                    </div>
                  </div>

                  {/* SHA-256 Checksum */}
                  <div className="p-2.5 rounded bg-[#F7F6F2] border border-[#E2E8F0] text-[10px] space-y-1">
                    <span className="text-[#64748B] block font-bold">OUTPUT SHA-256 INTEGRITY CHECKSUM</span>
                    <div className="text-[#17263C] font-mono break-all font-semibold">
                      e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                    </div>
                    <div className="text-[#0F766E] pt-0.5 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Tamper-proof signature verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
