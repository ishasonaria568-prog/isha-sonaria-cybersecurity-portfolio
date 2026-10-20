import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#threat-wall', label: 'Threat Wall' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-white border-t border-[#E2E8F0] text-xs font-mono relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-[#E2E8F0]">
          {/* Identity & Descriptor */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#17263C] text-white flex items-center justify-center font-bold">
                IS
              </div>
              <div>
                <span className="font-display font-bold text-base text-[#17263C] tracking-wider block">
                  ISHA SONARIA
                </span>
                <span className="text-[11px] text-[#64748B] font-mono">
                  Cybersecurity | SOC Operations | Network Security
                </span>
              </div>
            </div>
            <p className="text-[#64748B] font-sans text-xs max-w-sm leading-relaxed">
              Aspiring cybersecurity practitioner specializing in threat monitoring, incident response workflows, and custom defensive engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-[#64748B] uppercase tracking-wider block text-[10px] font-bold">
              NAVIGATION
            </span>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[#475569]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-[#2563EB] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Back-to-Top */}
          <div className="md:col-span-3 space-y-3 md:text-right">
            <span className="text-[#64748B] uppercase tracking-wider block text-[10px] font-bold">
              CONNECT
            </span>
            <div className="flex items-center md:justify-end gap-2 text-[#64748B]">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#F7F6F2] hover:text-[#17263C] hover:bg-[#E2E8F0] transition-colors border border-[#E2E8F0]"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#F7F6F2] hover:text-[#17263C] hover:bg-[#E2E8F0] transition-colors border border-[#E2E8F0]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.tryhackme}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#F7F6F2] hover:text-[#0F766E] hover:bg-[#E2E8F0] transition-colors border border-[#E2E8F0]"
                aria-label="TryHackMe Profile"
              >
                <ShieldAlert className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded bg-[#F7F6F2] hover:text-[#2563EB] hover:bg-[#E2E8F0] transition-colors border border-[#E2E8F0]"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#F7F6F2] hover:bg-[#E2E8F0] text-[#17263C] border border-[#CBD5E1] text-xs transition-colors font-semibold shadow-2xs"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>BACK TO TOP</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#64748B] text-[11px]">
          <div>
            © {currentYear} Isha Sonaria. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Designed and built by Isha Sonaria.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
