import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { ShieldCheck, Trophy, CheckCircle2, ExternalLink } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-1 flex items-center gap-2">
            <span>04</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>FIELD TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263C] tracking-tight">
            Practical Training & Lab Experience
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl font-sans">
            Rigorous hands-on operations training in SIEM monitoring, threat triage, vulnerability assessment, and continuous competitive CTF lab challenges.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="space-y-10">
          {/* Experience Item 01: VRSecurity */}
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F7F6F2] p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB] font-bold mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                  <span>PRACTICAL TRAINING PROGRAM</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#17263C] tracking-tight">
                  SOC Operations Trainee
                </h3>
                <div className="text-sm text-[#475569] font-sans mt-0.5 font-medium">
                  VRSecurity — Cyber Security Fundamentals Program (CSFP)
                </div>
              </div>

              <div className="text-left md:text-right font-mono text-xs">
                <span className="px-3 py-1 rounded bg-white border border-[#CBD5E1] text-[#2563EB] font-bold inline-block shadow-2xs">
                  April 2026 – September 2026
                </span>
                <span className="block text-[#64748B] text-[11px] mt-1 font-medium">Evaluated Training Program</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-start">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block font-bold">
                  RESUME-VERIFIED OPERATIONAL ACTIVITIES
                </span>
                <ul className="space-y-2.5 text-sm text-[#475569] font-sans">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>
                      Monitored security events in <strong className="text-[#17263C]">Wazuh SIEM</strong> to detect malicious network traffic, brute-force anomalies, and policy deviations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>
                      Prioritized and escalated malicious network anomalies, correlating telemetry against MITRE ATT&CK techniques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>
                      Conducted network reconnaissance and security assessments using <strong className="text-[#17263C]">Nmap, Nikto, Nuclei, and Wireshark</strong> on isolated target testbeds.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-4 bg-white p-4 rounded-lg border border-[#E2E8F0] space-y-2.5 font-mono text-xs shadow-2xs">
                <span className="text-[10px] text-[#64748B] uppercase tracking-wider block font-bold">
                  CORE ENVIRONMENT
                </span>
                <div className="space-y-1.5 text-[#17263C]">
                  <div className="flex justify-between py-1 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B]">SIEM Platform:</span>
                    <span className="font-bold">Wazuh 4.x</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B]">Scanners:</span>
                    <span className="font-bold">Nmap / Nikto / Nuclei</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#64748B]">Packet Analysis:</span>
                    <span className="font-bold">Wireshark TCP/TLS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Item 02: TryHackMe */}
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F7F6F2] p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#0F766E] font-bold mb-1">
                  <Trophy className="w-4 h-4 text-[#0F766E]" />
                  <span>COMPETITIVE DEFENSE & OFFENSE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#17263C] tracking-tight">
                  Cybersecurity Lab Practitioner & CTF Competitor
                </h3>
                <div className="text-sm text-[#475569] font-sans mt-0.5 font-medium">
                  TryHackMe Platform (Handle: CipherGhost24)
                </div>
              </div>

              <div className="text-left md:text-right font-mono text-xs">
                <span className="px-3 py-1 rounded bg-white border border-[#CBD5E1] text-[#0F766E] font-bold inline-block shadow-2xs">
                  Active Competitor
                </span>
                <span className="block text-[#64748B] text-[11px] mt-1 font-medium">Verified Platform Metrics</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-start">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block font-bold">
                  DOCUMENTED LAB MILESTONES
                </span>
                <ul className="space-y-2.5 text-sm text-[#475569] font-sans">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>
                      Ranked in the <strong className="text-[#17263C]">Top 2% Globally</strong> across international cybersecurity practitioners.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>
                      Completed <strong className="text-[#17263C]">100+ Hands-on Security Labs</strong> spanning network defense, digital forensics, Linux hardening, web application security, and privilege escalation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>
                      Secured <strong className="text-[#17263C]">Rank 1 Champion</strong> in Bronze, Silver, and Gold leagues through consistent technical execution.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>
                      Earned <strong className="text-[#17263C]">20+ Badges</strong> and sustained a continuous <strong className="text-[#17263C]">100+ day learning streak</strong>.
                    </span>
                  </li>
                </ul>

                <div className="pt-2">
                  <a
                    href="https://tryhackme.com/p/CipherGhost24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#2563EB] hover:underline font-semibold"
                  >
                    <span>View Public TryHackMe Profile (CipherGhost24)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* TryHackMe Metrics Breakdown */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-white border border-[#E2E8F0] text-center shadow-2xs">
                  <span className="text-[10px] text-[#64748B] uppercase block">GLOBAL RANK</span>
                  <span className="text-xl font-extrabold text-[#0F766E] block mt-1">Top 2%</span>
                  <span className="text-[10px] text-[#64748B]">Global Standings</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#E2E8F0] text-center shadow-2xs">
                  <span className="text-[10px] text-[#64748B] uppercase block">LABS SOLVED</span>
                  <span className="text-xl font-extrabold text-[#17263C] block mt-1">100+</span>
                  <span className="text-[10px] text-[#64748B]">Completed Rooms</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#E2E8F0] text-center shadow-2xs">
                  <span className="text-[10px] text-[#64748B] uppercase block">LEAGUES WON</span>
                  <span className="text-xl font-extrabold text-[#2563EB] block mt-1">Rank 1</span>
                  <span className="text-[10px] text-[#64748B]">Bronze, Silver, Gold</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#E2E8F0] text-center shadow-2xs">
                  <span className="text-[10px] text-[#64748B] uppercase block">DAILY STREAK</span>
                  <span className="text-xl font-extrabold text-[#17263C] block mt-1">100+</span>
                  <span className="text-[10px] text-[#64748B]">Active Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
