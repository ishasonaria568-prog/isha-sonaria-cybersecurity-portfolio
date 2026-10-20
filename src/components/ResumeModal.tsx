import React, { useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCES, CERTIFICATIONS } from '../data/portfolioData';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-[#CBD5E1] rounded-xl shadow-xl flex flex-col overflow-hidden">
        {/* Modal Action Header (No-print) */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#F7F6F2] border-b border-[#E2E8F0] text-xs font-mono select-none">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
            <span id="resume-title" className="font-bold text-[#17263C] tracking-wide">
              ISHA SONARIA — CURRICULUM VITAE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded bg-white hover:bg-[#F1F0EA] text-[#17263C] border border-[#CBD5E1] font-semibold transition-colors flex items-center gap-1.5 shadow-2xs"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="hidden sm:inline">PRINT</span>
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Isha_Sonaria_Resume.pdf"
              className="px-3.5 py-1.5 rounded bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold transition-colors flex items-center gap-1.5 shadow-sm"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded text-[#64748B] hover:text-[#17263C] hover:bg-[#E2E8F0] transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Viewport */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white text-[#17263C] font-sans print:p-0">
          {/* Header Block */}
          <div className="border-b border-[#E2E8F0] pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#17263C] font-display tracking-tight">
              ISHA SONARIA
            </h1>
            <p className="text-sm font-mono text-[#2563EB] font-semibold">
              Cybersecurity Specialist | SOC Operations | Network Security | Threat Detection
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-[#64748B] pt-1">
              <span>Email: ishasonaria568@gmail.com</span>
              <span>·</span>
              <span>LinkedIn: linkedin.com/in/isha-sonaria</span>
              <span>·</span>
              <span>GitHub: github.com/ishasonaria568-prog</span>
              <span>·</span>
              <span>TryHackMe: CipherGhost24</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold border-b border-[#E2E8F0] pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Practical Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold border-b border-[#E2E8F0] pb-1">
              PRACTICAL TRAINING & LAB EXPERIENCE
            </h2>

            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="space-y-1.5 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono">
                    <span className="font-bold text-[#17263C] text-sm">
                      {exp.role} — <span className="text-[#2563EB]">{exp.organization}</span>
                    </span>
                    <span className="text-[#64748B] text-xs font-medium">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 pl-4 list-disc text-[#475569] font-sans">
                    {exp.activities.map((act, aIdx) => (
                      <li key={aIdx} className="leading-relaxed">{act}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Security Research & Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold border-b border-[#E2E8F0] pb-1">
              SECURITY RESEARCH & TOOL DEVELOPMENT
            </h2>

            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono">
                    <span className="font-bold text-[#17263C] text-sm">
                      {proj.title} <span className="text-[#64748B] font-normal text-xs">({proj.category})</span>
                    </span>
                    <span className="text-[#0F766E] text-xs font-bold">
                      {proj.technologies.slice(0, 4).join(', ')}
                    </span>
                  </div>
                  <p className="text-[#475569] font-sans leading-relaxed">
                    {proj.solution}
                  </p>
                  <div className="font-mono text-[11px] text-[#64748B]">
                    Repo: {proj.repoUrl} {proj.demoUrl && `| Demo: ${proj.demoUrl}`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold border-b border-[#E2E8F0] pb-1">
                EDUCATION
              </h2>
              <div className="space-y-1 text-xs font-mono">
                <div className="font-bold text-[#17263C]">
                  {PERSONAL_INFO.academic.degree}
                </div>
                <div className="text-[#475569] font-sans">
                  {PERSONAL_INFO.academic.institution}
                </div>
                <div className="text-[#64748B] text-[11px]">
                  CGPA: {PERSONAL_INFO.academic.cgpa} · {PERSONAL_INFO.academic.honor} · {PERSONAL_INFO.academic.period}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold border-b border-[#E2E8F0] pb-1">
                CERTIFICATIONS
              </h2>
              <div className="space-y-2 text-xs font-mono">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="space-y-0.5">
                    <div className="font-bold text-[#17263C]">{cert.title}</div>
                    <div className="text-[#64748B] text-[11px]">
                      {cert.issuer} ({cert.date}) {cert.credentialId && `· ${cert.credentialId}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-2 pt-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold border-b border-[#E2E8F0] pb-1">
              TECHNICAL COMPETENCY SUMMARY
            </h2>
            <div className="space-y-1 text-xs font-mono text-[#475569]">
              <div><strong className="text-[#17263C]">SOC & Defense:</strong> Wazuh SIEM, Alert Triage, Incident Response, Traffic Analysis, Email Forensics, VAPT, IOCs</div>
              <div><strong className="text-[#17263C]">Security Tools:</strong> Wireshark, Nmap, Burp Suite, Metasploit, SQLmap, Nikto, Nuclei, WPScan, Hydra, Kali Linux</div>
              <div><strong className="text-[#17263C]">Networking:</strong> TCP/IP, OSI, DNS, DHCP, HTTP/HTTPS, SSH, FTP, Subnetting, Port Scanning</div>
              <div><strong className="text-[#17263C]">Programming:</strong> Python, Go, Bash, PowerShell, C, C++, Java, JavaScript, PHP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
