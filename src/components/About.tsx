import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, BookOpen, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const milestones = [
    {
      period: '2023 – 2026',
      title: 'BCA Degree & Academic Honors',
      organization: 'Bhakta Kavi Narsinh Mehta University',
      detail: 'Graduated with a CGPA of 8.30/10.00 and secured Semester 1 Rank 1. Built deep foundations in computer architecture, networking protocols, algorithms, and secure software development.',
      icon: GraduationCap
    },
    {
      period: 'April 2026 – Sept 2026',
      title: 'SOC Operations Trainee',
      organization: 'VRSecurity (CSFP Program)',
      detail: 'Monitored live security events in Wazuh SIEM, correlated logs for malicious anomalies, and conducted VAPT assessments using Nmap, Nikto, Nuclei, and Wireshark.',
      icon: ShieldCheck
    },
    {
      period: 'Continuous Practice',
      title: 'TryHackMe Competitor & Global Top 2%',
      organization: 'Hands-on Security Matrix',
      detail: 'Solved 100+ cybersecurity lab challenges, achieved Rank 1 in Bronze, Silver, and Gold leagues, and sustained a continuous 100+ day investigation streak with 20+ specialized badges.',
      icon: Award
    },
    {
      period: '2026',
      title: 'Defensive Security Tool Engineering',
      organization: 'Open-Source Research',
      detail: 'Engineered PhishGuard ML (URL classifier), Email Header Forensics (Go parser), SubScope (recon CLI), and PDF Fortress (cryptographic utility).',
      icon: BookOpen
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#E2E8F0] bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-1 flex items-center gap-2">
            <span>01</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>ANALYST PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263C] tracking-tight">
            About Isha Sonaria
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl font-sans">
            Professional background, academic distinction, and verified hands-on training trajectory.
          </p>
        </div>

        {/* Editorial Profile & Evidence Board Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Structured Academic & Technical Dossier (No Photos) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Analyst Identity Card */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-[#E2E8F0]">
                <div className="w-12 h-12 rounded-lg bg-[#17263C] text-white flex items-center justify-center font-mono font-extrabold text-base shadow-xs">
                  IS
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#17263C]">Isha Sonaria</h3>
                  <p className="text-xs font-mono text-[#2563EB] font-medium">
                    Cybersecurity Analyst & SOC Practitioner
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-[#E2E8F0]">
                  <span className="text-[#64748B]">Primary Discipline:</span>
                  <span className="text-[#17263C] font-semibold">SOC Operations / Blue Team</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E2E8F0]">
                  <span className="text-[#64748B]">Investigation Tools:</span>
                  <span className="text-[#17263C] font-semibold">Wazuh, Wireshark, Nmap</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E2E8F0]">
                  <span className="text-[#64748B]">Core Languages:</span>
                  <span className="text-[#17263C] font-semibold">Python, Go, Bash, PowerShell</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#64748B]">TryHackMe Status:</span>
                  <span className="text-[#0F766E] font-bold">Top 2% Globally (100+ Labs)</span>
                </div>
              </div>
            </div>

            {/* Academic Credential Card */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-[#2563EB]" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#17263C]">
                  {PERSONAL_INFO.academic.degree}
                </h4>
                <p className="text-xs text-[#64748B] font-sans mt-0.5">
                  {PERSONAL_INFO.academic.institution} ({PERSONAL_INFO.academic.period})
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#E2E8F0] text-xs font-mono">
                <div className="p-2.5 rounded bg-[#F7F6F2] border border-[#E2E8F0]">
                  <span className="text-[#64748B] block text-[10px]">CUMULATIVE CGPA</span>
                  <span className="text-[#2563EB] font-bold text-sm">{PERSONAL_INFO.academic.cgpa}</span>
                </div>
                <div className="p-2.5 rounded bg-[#F7F6F2] border border-[#E2E8F0]">
                  <span className="text-[#64748B] block text-[10px]">ACADEMIC HONORS</span>
                  <span className="text-[#0F766E] font-bold text-sm">{PERSONAL_INFO.academic.honor}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Structured Timeline */}
          <div className="lg:col-span-7 space-y-8">
            {/* Narrative Box */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#17263C] tracking-tight">
                Dedicated to Threat Defense, Forensic Analysis, and Security Tool Engineering.
              </h3>
              <p className="text-base text-[#64748B] leading-relaxed font-sans">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>CHRONOLOGICAL TRAINING & MILESTONES</span>
              </div>

              <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-[2px] before:bg-[#E2E8F0]">
                {milestones.map((item, idx) => (
                  <div key={idx} className="relative pl-9 group">
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#2563EB] group-hover:bg-[#2563EB] transition-colors" />

                    <div className="p-4 rounded-lg bg-white border border-[#E2E8F0] shadow-xs hover:border-[#CBD5E1] transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-1">
                        <span className="text-[#2563EB] font-bold">{item.period}</span>
                        <span className="text-[#64748B] font-medium">{item.organization}</span>
                      </div>
                      <h4 className="text-sm font-bold text-[#17263C]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#64748B] mt-1.5 font-sans leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
