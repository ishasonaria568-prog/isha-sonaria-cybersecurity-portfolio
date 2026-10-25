import React, { useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS, SKILL_GROUPS, EXPERIENCES, CERTIFICATIONS } from '../data/portfolioData';
import { X, Download, Printer, ShieldCheck } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<Props> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#121a15] border border-[#2b3b30] rounded-lg shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Action Header (No-print) */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0b100e] border-b border-[#28352e] text-xs font-mono select-none">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#b3f5c5]" />
            <span id="resume-title" className="font-bold text-[#eef2ef] tracking-wide">
              ISHA SONARIA &mdash; CURRICULUM VITAE
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded bg-[#18231e] hover:bg-[#28352e] text-[#eef2ef] border border-[#304336] font-medium transition-colors flex items-center gap-1.5"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-[#b3f5c5]" />
              <span className="hidden sm:inline">PRINT</span>
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Isha_Sonaria_Resume.pdf"
              className="primary-btn !py-1.5 !px-3.5 !min-h-0 !text-xs !gap-2"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded text-[#a1aaa5] hover:text-[#eef2ef] hover:bg-[#18231e] transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Viewport */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0b100e] text-[#a1aaa5] font-sans print:p-0 print:bg-white print:text-black">
          {/* Header Block */}
          <div className="border-b border-[#28352e] pb-6 space-y-2 print:border-black/20">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#eef2ef] tracking-tight print:text-black font-sans">
              ISHA SONARIA
            </h1>
            <p className="text-sm font-mono text-[#b3f5c5] font-semibold print:text-slate-800">
              Aspiring Cybersecurity Professional | Entry-Level SOC Analyst L1
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-[#98b6a3] pt-1 print:text-slate-700">
              <span>Location: {PERSONAL_INFO.location}</span>
              <span>&middot;</span>
              <span>Email: {PERSONAL_INFO.email}</span>
              <span>&middot;</span>
              <span>LinkedIn: in/isha-sonaria</span>
              <span>&middot;</span>
              <span>GitHub: ishasonaria568-prog</span>
              <span>&middot;</span>
              <span>TryHackMe: CipherGhost24</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#b3f5c5] font-bold border-b border-[#28352e] pb-1 print:text-black print:border-black/20">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#d2d9d5] leading-relaxed font-sans print:text-black">
              {PERSONAL_INFO.aboutText}
            </p>
          </div>

          {/* Practical Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#b3f5c5] font-bold border-b border-[#28352e] pb-1 print:text-black print:border-black/20">
              PRACTICAL TRAINING &amp; LAB EXPERIENCE
            </h2>

            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="space-y-1.5 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono">
                    <span className="font-bold text-[#eef2ef] text-sm print:text-black">
                      {exp.role} &mdash; <span className="text-[#b3f5c5] print:text-slate-800">{exp.organization}</span>
                    </span>
                    <span className="text-[#98b6a3] text-xs print:text-slate-700">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 pl-4 list-disc text-[#a1aaa5] font-sans print:text-black">
                    {exp.activities.map((act, aIdx) => (
                      <li key={aIdx} className="leading-relaxed">{act}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Security Tools & Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#b3f5c5] font-bold border-b border-[#28352e] pb-1 print:text-black print:border-black/20">
              SECURITY TOOLS &amp; TECHNICAL PROJECTS
            </h2>

            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1.5 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono">
                    <span className="font-bold text-[#eef2ef] text-sm print:text-black">
                      {proj.title}
                    </span>
                    <span className="text-[#b3f5c5] text-xs">{proj.category}</span>
                  </div>
                  <p className="text-[#a1aaa5] font-sans print:text-black">
                    {proj.solution}
                  </p>
                  <div className="text-[11px] font-mono text-[#98b6a3] print:text-slate-700">
                    Stack: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#b3f5c5] font-bold border-b border-[#28352e] pb-1 print:text-black print:border-black/20">
              TECHNICAL COMPETENCIES
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title} className="space-y-1 bg-[#121a15] p-3 rounded border border-[#28352e] print:border-black/10 print:bg-transparent">
                  <span className="font-bold text-[#eef2ef] print:text-black block">
                    {group.title}
                  </span>
                  <span className="text-[#98b6a3] print:text-slate-800 leading-relaxed block">
                    {group.skills.join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#b3f5c5] font-bold border-b border-[#28352e] pb-1 print:text-black print:border-black/20">
              EDUCATION &amp; CERTIFICATIONS
            </h2>

            <div className="space-y-3 text-xs">
              <div className="flex flex-wrap items-center justify-between gap-1 font-mono">
                <span className="font-bold text-[#eef2ef] print:text-black">
                  {PERSONAL_INFO.academic.degree} &mdash; {PERSONAL_INFO.academic.institution}
                </span>
                <span className="text-[#b3f5c5] font-bold">CGPA: {PERSONAL_INFO.academic.cgpa}</span>
              </div>

              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex flex-wrap items-center justify-between gap-1 font-mono">
                  <span className="text-[#d2d9d5] print:text-black">
                    {cert.title} ({cert.issuer})
                  </span>
                  <span className="text-[#98b6a3]">ID: {cert.credentialId}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
