import React from 'react';
import { CERTIFICATIONS, PERSONAL_INFO, VERIFIED_METRICS } from '../data/portfolioData';
import { Award, GraduationCap, ShieldCheck, ExternalLink, Trophy } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 border-b border-[#28352e] bg-[#0b100e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reference Section Number */}
        <div className="section-num">05 /</div>

        <div className="mb-12">
          {/* Reference Heading: Hall of Fame */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#eef2ef] tracking-tight font-sans">
            Hall of Fame
          </h2>
          <p className="mt-3 text-base text-[#a1aaa5] max-w-2xl leading-relaxed">
            Along the way, verified milestones reflect structured discipline and validated competencies. Each credential represents hands-on assessments and defensive rigor.
          </p>
        </div>

        {/* Certifications Grid matching Reference .cert */}
        <div className="space-y-4">
          {/* Item 1: VRSecurity CSFP */}
          <div className="cert-card">
            <div className="cert-mark">
              <ShieldCheck className="w-6 h-6 text-[#b3f5c5]" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#eef2ef] font-sans">
                  CSFP &mdash; Certified Security Foundations Professional
                </h3>
              </div>
              <p className="text-xs font-mono text-[#98b6a3]">
                VRSECURITY &middot; GRAND MASTER &middot; ID: {CERTIFICATIONS[0].credentialId}
              </p>
              <p className="text-xs text-[#a1aaa5] max-w-xl">
                {CERTIFICATIONS[0].description}
              </p>
            </div>
            {CERTIFICATIONS[0].verificationUrl && (
              <a
                href={CERTIFICATIONS[0].verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-tag hover:border-[#b3f5c5] hover:text-[#b3f5c5] transition-colors flex items-center gap-1"
              >
                <span>VERIFY PDF</span>
                <span>↗</span>
              </a>
            )}
          </div>

          {/* Item 2: Hackviser CORE */}
          <div className="cert-card">
            <div className="cert-mark">
              <Award className="w-6 h-6 text-[#b3f5c5]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-[#eef2ef] font-sans">
                CORE &mdash; Certified Operations &amp; Reconnaissance Expert
              </h3>
              <p className="text-xs font-mono text-[#98b6a3]">
                HACKVISER &middot; ID: {CERTIFICATIONS[1].credentialId}
              </p>
              <p className="text-xs text-[#a1aaa5] max-w-xl">
                {CERTIFICATIONS[1].description}
              </p>
            </div>
            <span className="cert-tag">
              VERIFIED
            </span>
          </div>

          {/* Item 3: TryHackMe Achievement */}
          <div className="cert-card">
            <div className="cert-mark">
              <Trophy className="w-6 h-6 text-[#b3f5c5]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-[#eef2ef] font-sans">
                TryHackMe Global Top 2% &amp; League Champion
              </h3>
              <p className="text-xs font-mono text-[#98b6a3]">
                TRYHACKME &middot; HANDLE: CipherGhost24 &middot; 100+ LABS COMPLETED
              </p>
              <p className="text-xs text-[#a1aaa5] max-w-xl">
                Ranked #1 across Bronze, Silver, and Gold competitive leagues. Extensive lab completion covering SIEM, SOC Level 1, network security, and incident response paths.
              </p>
            </div>
            <a
              href={PERSONAL_INFO.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-tag hover:border-[#b3f5c5] hover:text-[#b3f5c5] transition-colors flex items-center gap-1"
            >
              <span>PROFILE</span>
              <span>↗</span>
            </a>
          </div>

          {/* Item 4: Bachelor Degree */}
          <div className="cert-card">
            <div className="cert-mark">
              <GraduationCap className="w-6 h-6 text-[#b3f5c5]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-[#eef2ef] font-sans">
                {PERSONAL_INFO.academic.degree}
              </h3>
              <p className="text-xs font-mono text-[#98b6a3]">
                {PERSONAL_INFO.academic.institution.toUpperCase()} &middot; CGPA: {PERSONAL_INFO.academic.cgpa}
              </p>
              <p className="text-xs text-[#a1aaa5] max-w-xl">
                Core coursework in computer networking, data structures, database management systems, Linux administration, and software engineering.
              </p>
            </div>
            <span className="cert-tag">
              GRADUATED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
