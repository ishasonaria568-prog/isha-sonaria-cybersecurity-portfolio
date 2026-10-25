import React from 'react';
import { PERSONAL_INFO, VERIFIED_METRICS } from '../data/portfolioData';
import { ShieldCheck, MapPin, Terminal, Award, ArrowUpRight, Github, Linkedin, ShieldAlert } from 'lucide-react';

interface Props {
  onOpenResume: () => void;
}

export const Hero: React.FC<Props> = ({ onOpenResume }) => {
  return (
    <section id="home" className="pt-28 pb-18 md:pt-36 md:pb-24 border-b border-[#28352e] bg-[#0b100e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Reference .hero-copy */}
          <div className="lg:col-span-7 space-y-5">
            {/* Eyebrow with pulsing dot */}
            <div className="eyebrow flex items-center">
              <span className="dot" />
              <span>DEFENSIVE SECURITY // SOC OPERATIONS & TRIAGE</span>
            </div>

            {/* Title & Headline in Reference Typography */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#eef2ef] font-sans leading-[1.02]">
                ISHA SONARIA
              </h1>
              <p className="text-xl sm:text-2xl text-[#b3f5c5] font-sans font-medium leading-snug">
                Aspiring Cybersecurity Professional &amp; SOC Analyst L1
              </p>
            </div>

            {/* Reference .alias bar */}
            <div className="alias">
              LOCATION // <strong>{PERSONAL_INFO.location}</strong> &nbsp;&bull;&nbsp; GITHUB // <strong>ishasonaria568-prog</strong>
            </div>

            {/* Reference .lede */}
            <p className="lede">
              I analyze security telemetry until anomalies become clear defensive actions. Specializing in SIEM monitoring, threat detection, email forensics, and custom security software engineering for entry-level SOC environments.
            </p>

            {/* Reference .hero-actions */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a href="#projects" className="primary-btn">
                <span>Explore Security Tools</span>
                <span className="text-base font-bold">↘</span>
              </a>

              <button
                onClick={onOpenResume}
                className="resume-download"
                type="button"
              >
                <span>Curriculum Vitae (PDF)</span>
                <span className="ml-1">↓</span>
              </button>
            </div>

            {/* Quick Profiles Strip */}
            <div className="pt-4 flex items-center gap-5 text-xs font-mono text-[#98b6a3]">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b3f5c5] flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub ↗</span>
              </a>
              <span className="text-[#304336]">&bull;</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b3f5c5] flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn ↗</span>
              </a>
              <span className="text-[#304336]">&bull;</span>
              <a
                href={PERSONAL_INFO.tryhackme}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b3f5c5] flex items-center gap-1.5 transition-colors"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>TryHackMe ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Reference .hero-art Styled Card */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-8 rounded-lg bg-[#121a15] border border-[#2b3b30] shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-[#b3f5c5]/60">
              {/* Header inside Art Card */}
              <div className="flex items-center justify-between pb-5 border-b border-[#28352e]">
                <div className="flex items-center gap-3">
                  {/* Hex-inspired Monogram Badge */}
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#b3f5c5]/20 to-[#121a15] border border-[#446650] flex items-center justify-center font-bold text-sm text-[#b3f5c5] font-sans shadow-md">
                    IS
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#eef2ef] block">
                      Analyst Dossier
                    </span>
                    <span className="text-[11px] font-mono text-[#73897b]">
                      SOC Operations Ready
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#18231e] border border-[#28352e] text-[10px] font-mono text-[#b3f5c5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b3f5c5] animate-pulse" />
                  <span>AVAILABLE</span>
                </div>
              </div>

              {/* Verified Metrics in Reference Style */}
              <div className="py-5 space-y-4 font-mono text-xs border-b border-[#28352e]">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#98b6a3]">TRYHACKME //</span>
                  <span className="text-[#eef2ef] font-semibold text-right">
                    Top 2% Global (100+ Labs Completed)
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#98b6a3]">VRSECURITY //</span>
                  <span className="text-[#b3f5c5] font-semibold text-right">
                    CSFP Grand Master
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#98b6a3]">DEGREE //</span>
                  <span className="text-[#eef2ef] font-semibold text-right">
                    BCA &middot; CGPA 8.30 / 10
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#98b6a3]">PROJECTS //</span>
                  <span className="text-[#eef2ef] font-semibold text-right">
                    4 Security Applications
                  </span>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-4 text-xs font-sans text-[#a1aaa5] flex items-center justify-between">
                <span>Primary Target: SOC Analyst L1</span>
                <span className="font-mono text-[11px] text-[#b3f5c5]">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
