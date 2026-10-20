import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, FileDown, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface Props {
  onOpenResume: () => void;
}

export const Hero: React.FC<Props> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-[#E2E8F0] bg-[#F7F6F2]">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 pointer-events-none tech-grid-light opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Technical Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0] text-xs font-mono text-[#64748B]">
          <div className="flex items-center gap-2">
            <span className="text-[#2563EB] font-bold">ANALYST DOSSIER:</span>
            <span className="text-[#17263C] font-semibold">ISHA SONARIA</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>SECURITY OPERATIONS & DEFENSE</span>
          </div>
          <div className="flex items-center gap-2 text-[#0F766E] font-medium bg-white px-2.5 py-1 rounded border border-[#E2E8F0]">
            <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
            <span>Open for SOC & Cybersecurity Analyst Roles</span>
          </div>
        </div>

        {/* Two-Column Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic & Editorial Focus */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="text-xs font-mono font-bold text-[#2563EB] tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#2563EB]" />
              <span>CYBERSECURITY • SOC OPERATIONS • SECURITY RESEARCH</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17263C] leading-[1.14] text-balance">
              I INVESTIGATE.{' '}
              <span className="text-[#2563EB]">
                I ANALYZE.
              </span>{' '}
              I BUILD DEFENSES.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed font-sans max-w-2xl">
              I'm <strong className="text-[#17263C] font-semibold">Isha Sonaria</strong>, a cybersecurity professional focused on SOC operations, network security, digital forensics, and practical security tool development.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 text-xs font-mono">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold tracking-wide rounded transition-all duration-150 flex items-center gap-2 shadow-sm active:scale-95"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 bg-white hover:bg-[#F1F0EA] text-[#17263C] border border-[#CBD5E1] font-semibold rounded transition-all duration-150 flex items-center gap-2 shadow-xs active:scale-95"
              >
                <FileDown className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>DOWNLOAD RESUME</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-[#64748B] hover:text-[#17263C] transition-colors flex items-center gap-1.5 underline-offset-4 hover:underline"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: CSS-based Technical Analyst Profile Panel (No Images) */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm space-y-5">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#17263C]">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                  <span>ANALYST PROFILE PANEL</span>
                </div>
                <span className="text-[11px] font-mono text-[#0F766E] font-semibold bg-[#0F766E]/10 px-2 py-0.5 rounded">
                  VERIFIED RECORD
                </span>
              </div>

              {/* Core Security Domains */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider block">
                  FOCUS CAPABILITIES
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded bg-[#F7F6F2] border border-[#E2E8F0] text-[#17263C] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <span>SOC Operations</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#F7F6F2] border border-[#E2E8F0] text-[#17263C] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <span>Network Security</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#F7F6F2] border border-[#E2E8F0] text-[#17263C] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <span>Threat Analysis</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#F7F6F2] border border-[#E2E8F0] text-[#17263C] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
                    <span>Tool Development</span>
                  </div>
                </div>
              </div>

              {/* Verified Resume Metrics & Credentials */}
              <div className="pt-2 border-t border-[#E2E8F0] space-y-3">
                <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider block">
                  VERIFIED CREDENTIAL BENCHMARKS
                </span>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg border border-[#E2E8F0] bg-white">
                    <span className="text-[10px] text-[#64748B] block">TRYHACKME</span>
                    <span className="text-xl font-extrabold text-[#2563EB] font-mono block mt-0.5">Top 2%</span>
                    <span className="text-[11px] text-[#64748B]">Global Standing</span>
                  </div>
                  <div className="p-3 rounded-lg border border-[#E2E8F0] bg-white">
                    <span className="text-[10px] text-[#64748B] block">PRACTICAL LABS</span>
                    <span className="text-xl font-extrabold text-[#17263C] font-mono block mt-0.5">100+</span>
                    <span className="text-[11px] text-[#64748B]">Completed Rooms</span>
                  </div>
                  <div className="p-3 rounded-lg border border-[#E2E8F0] bg-white">
                    <span className="text-[10px] text-[#64748B] block">EDUCATION</span>
                    <span className="text-sm font-bold text-[#17263C] font-mono block mt-1">BCA Graduate</span>
                    <span className="text-[11px] text-[#64748B]">BKNM University</span>
                  </div>
                  <div className="p-3 rounded-lg border border-[#E2E8F0] bg-white">
                    <span className="text-[10px] text-[#64748B] block">ACADEMIC STANDING</span>
                    <span className="text-sm font-bold text-[#0F766E] font-mono block mt-1">CGPA: 8.30/10</span>
                    <span className="text-[11px] text-[#64748B]">Sem 1 Rank 1</span>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-2 text-[11px] font-mono text-[#64748B] flex items-center justify-between border-t border-[#E2E8F0]">
                <span>Status: Job-Ready Cybersecurity Practitioner</span>
                <span className="text-[#2563EB] font-semibold">Ready for Deployment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-metric strip below hero */}
        <div className="mt-14 pt-8 border-t border-[#E2E8F0]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs">
              <div className="text-[11px] font-mono uppercase text-[#64748B]">GLOBAL STANDING</div>
              <div className="text-2xl font-bold font-mono text-[#2563EB] mt-1">Top 2%</div>
              <div className="text-xs text-[#64748B] mt-0.5 font-sans">Ranked among global TryHackMe defenders</div>
            </div>
            <div className="p-4 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs">
              <div className="text-[11px] font-mono uppercase text-[#64748B]">HANDS-ON LABS</div>
              <div className="text-2xl font-bold font-mono text-[#17263C] mt-1">100+</div>
              <div className="text-xs text-[#64748B] mt-0.5 font-sans">Completed offensive & defensive labs</div>
            </div>
            <div className="p-4 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs">
              <div className="text-[11px] font-mono uppercase text-[#64748B]">LEAGUE CHAMPION</div>
              <div className="text-2xl font-bold font-mono text-[#0F766E] mt-1">Rank 1</div>
              <div className="text-xs text-[#64748B] mt-0.5 font-sans">Bronze, Silver & Gold Leagues</div>
            </div>
            <div className="p-4 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs">
              <div className="text-[11px] font-mono uppercase text-[#64748B]">ACADEMIC RECORD</div>
              <div className="text-2xl font-bold font-mono text-[#17263C] mt-1">8.30 CGPA</div>
              <div className="text-xs text-[#64748B] mt-0.5 font-sans">BCA Graduate, Sem 1 Rank 1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
