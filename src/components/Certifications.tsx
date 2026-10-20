import React from 'react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';
import { Award, ExternalLink, ShieldCheck, FileCheck, BookmarkCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 border-b border-[#E2E8F0] bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-1 flex items-center gap-2">
            <span>05</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>CREDENTIAL ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263C] tracking-tight">
            Certifications & Verified Honors
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl font-sans">
            Formal cybersecurity certifications, laboratory assessments, and documented credentials verifying foundational competence.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* VRSecurity CSFP */}
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#CBD5E1] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                  <span>OFFICIAL CERTIFICATION</span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 text-[11px] font-mono font-bold">
                  GRAND MASTER
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#17263C] tracking-tight">
                  Cyber Security Fundamentals Program (CSFP)
                </h3>
                <div className="text-xs font-mono text-[#64748B] mt-1 flex items-center gap-2">
                  <span>ISSUER: VRSecurity</span>
                  <span>·</span>
                  <span>September 2026</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed">
                Comprehensive practical training program covering SOC operations, SIEM deployment in Wazuh, traffic inspection in Wireshark, network vulnerability assessment, and anomaly escalation.
              </p>

              <div className="p-3 rounded bg-[#F7F6F2] border border-[#E2E8F0] space-y-1.5 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Credential ID:</span>
                  <span className="text-[#17263C] font-bold">ID-VRS-008</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Graduation Distinction:</span>
                  <span className="text-[#0F766E] font-bold">Grand Master Tier</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] mt-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <a
                href="https://www.vrsecurity.in/CERT/ID-VRS-007.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] hover:underline flex items-center gap-1.5 font-semibold"
              >
                <span>VRSecurity Verification Reference (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[#64748B] text-[10px]">VERIFIED ISSUER</span>
            </div>
          </div>

          {/* Hackviser CORE */}
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#CBD5E1] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#0F766E] font-bold">
                  <Award className="w-4 h-4 text-[#0F766E]" />
                  <span>FOUNDATIONAL CREDENTIAL</span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-[#0F766E]/10 text-[#0F766E] border border-[#0F766E]/20 text-[11px] font-mono font-bold">
                  CORE LEVEL
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#17263C] tracking-tight">
                  Certified Cybersecurity Foundations (CORE)
                </h3>
                <div className="text-xs font-mono text-[#64748B] mt-1 flex items-center gap-2">
                  <span>ISSUER: Hackviser</span>
                  <span>·</span>
                  <span>July 2026</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed">
                Practical assessment of fundamental defense concepts, threat analysis, TCP/IP network architecture, perimeter security controls, and hands-on vulnerability analysis.
              </p>

              <div className="p-3 rounded bg-[#F7F6F2] border border-[#E2E8F0] space-y-1.5 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Domain Scope:</span>
                  <span className="text-[#17263C] font-semibold">Network Security & Defense Foundations</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Verification Status:</span>
                  <span className="text-[#0F766E] font-bold">Completed & Certified</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] mt-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-[#64748B] flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>Certified Foundations Credential</span>
              </span>
              <span className="text-[#64748B] text-[10px]">VERIFIED CREDENTIAL</span>
            </div>
          </div>
        </div>

        {/* Verified Public Profile Links */}
        <div className="mt-8 p-6 rounded-xl bg-white border border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs shadow-2xs">
          <div className="flex items-center gap-3">
            <BookmarkCheck className="w-5 h-5 text-[#2563EB] shrink-0" />
            <div className="text-[#17263C]">
              <span className="font-bold block">Independent Verification Archives</span>
              <span className="text-[#64748B] text-[11px] font-sans">Explore verified activity, repositories, and solve histories directly on official platforms:</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href={PERSONAL_INFO.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline flex items-center gap-1 font-semibold"
            >
              TryHackMe Profile <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[#CBD5E1]">·</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline flex items-center gap-1 font-semibold"
            >
              GitHub Profile <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[#CBD5E1]">·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline flex items-center gap-1 font-semibold"
            >
              LinkedIn Profile <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
