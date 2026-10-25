import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#28352e] bg-[#0b100e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reference Section Number */}
        <div className="section-num">02 /</div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#eef2ef] tracking-tight font-sans">
            The analyst between the lines.
          </h2>
          <p className="mt-3 text-base text-[#a1aaa5] max-w-2xl leading-relaxed">
            Behind every defensive script and security rule is an analytical mindset trained to question anomalies and safeguard digital environments.
          </p>
        </div>

        {/* Reference .about-grid: 1.5fr 1fr on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative in Reference Editorial Prose */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#eef2ef] tracking-tight leading-snug font-sans">
                A mind that analyzes.<br />
                <span className="text-[#b3f5c5]">A defense that persists.</span>
              </h3>
              <p className="text-base text-[#a1aaa5] leading-relaxed">
                {PERSONAL_INFO.aboutText}
              </p>
              <p className="text-base text-[#a1aaa5] leading-relaxed">
                My preparation is grounded in practical repetition. From completing over 100 TryHackMe lab rooms and ranking in the Top 2% globally to earning the VRSecurity CSFP Grand Master credential, I focus on the real-world rigor required for Level 1 Security Operations.
              </p>
            </div>

            {/* Academic Card */}
            <div className="p-6 rounded-lg bg-[#121a15] border border-[#2b3b30] space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#18231e] border border-[#304336] flex items-center justify-center text-[#b3f5c5]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#eef2ef]">
                    {PERSONAL_INFO.academic.degree}
                  </h4>
                  <p className="text-xs font-mono text-[#98b6a3]">
                    {PERSONAL_INFO.academic.institution} &middot; {PERSONAL_INFO.academic.period}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <span className="text-xs font-mono text-[#73897b] block">CGPA</span>
                  <span className="text-base font-bold font-mono text-[#b3f5c5]">
                    {PERSONAL_INFO.academic.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas Card in Reference Palette */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-lg bg-[#121a15] border border-[#2b3b30] space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#28352e]">
                <span className="text-xs font-mono text-[#98b6a3] uppercase tracking-wider">
                  OPERATIONAL FOCUS
                </span>
                <span className="text-[11px] font-mono text-[#b3f5c5]">SOC L1</span>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#b3f5c5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#eef2ef] block">SIEM &amp; Alert Triage</strong>
                    <span className="text-xs text-[#a1aaa5]">Log analysis in Wazuh and Splunk to eliminate false positives.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#b3f5c5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#eef2ef] block">Phishing &amp; Header Forensics</strong>
                    <span className="text-xs text-[#a1aaa5]">Validating SPF, DKIM, DMARC, and extracting zero-day heuristic features.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#b3f5c5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#eef2ef] block">Network Packet Inspection</strong>
                    <span className="text-xs text-[#a1aaa5]">Deep PCAP carving using Wireshark and tcpdump to locate C2 traffic.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#b3f5c5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#eef2ef] block">Defensive Scripting</strong>
                    <span className="text-xs text-[#a1aaa5]">Python and Bash automation for repeatable threat hunting tasks.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#28352e] flex items-center justify-between text-xs font-mono text-[#73897b]">
                <span>LOCATION: {PERSONAL_INFO.location}</span>
                <span className="text-[#b3f5c5]">OPEN TO WORK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
