import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Hall of Fame' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-[#0b100e] border-t border-[#28352e] text-xs font-mono relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-[#28352e]">
          {/* Identity */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#home"
              className="text-2xl font-extrabold tracking-tight text-[#eef2ef] font-sans inline-block"
            >
              <span>is</span>
              <span className="text-[#b3f5c5]">.</span>
            </a>
            <p className="text-[#a1aaa5] font-sans text-xs max-w-sm leading-relaxed">
              Cybersecurity portfolio of Isha Sonaria. Dedicated to incident triage, threat detection, and custom defensive engineering for entry-level SOC Analyst L1 operations.
            </p>
            <div className="text-[11px] text-[#73897b]">
              Based in {PERSONAL_INFO.location}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-[#73897b] uppercase tracking-wider block text-[10px] font-bold">
              NAVIGATION
            </span>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[#a1aaa5] font-sans text-xs">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-[#b3f5c5] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Back-to-Top */}
          <div className="md:col-span-3 space-y-3 md:text-right">
            <span className="text-[#73897b] uppercase tracking-wider block text-[10px] font-bold">
              CONNECT
            </span>
            <div className="flex items-center md:justify-end gap-2 text-[#a1aaa5]">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#121a15] hover:text-[#eef2ef] hover:border-[#b3f5c5] transition-colors border border-[#2b3b30]"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#121a15] hover:text-[#eef2ef] hover:border-[#b3f5c5] transition-colors border border-[#2b3b30]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.tryhackme}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#121a15] hover:text-[#b3f5c5] hover:border-[#b3f5c5] transition-colors border border-[#2b3b30]"
                aria-label="TryHackMe Profile"
              >
                <ShieldAlert className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded bg-[#121a15] hover:text-[#b3f5c5] hover:border-[#b3f5c5] transition-colors border border-[#2b3b30]"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#121a15] hover:bg-[#18231e] text-[#eef2ef] border border-[#2b3b30] hover:border-[#b3f5c5] text-xs transition-colors font-semibold"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#b3f5c5]" />
                <span>BACK TO TOP</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#73897b] text-[11px]">
          <div>
            &copy; {currentYear} Isha Sonaria. All rights reserved.
          </div>
          <div>
            <span className="text-[#a1aaa5] font-semibold tracking-wide">
              Built by <span className="text-[#b3f5c5]">ISHA SONARIA</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
