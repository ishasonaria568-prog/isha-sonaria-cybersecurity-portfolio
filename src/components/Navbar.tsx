import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Menu, X, FileDown } from 'lucide-react';

interface Props {
  onOpenResume: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ['about', 'projects', 'skills', 'experience', 'achievements', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#achievements', label: 'Achievements', id: 'achievements' },
    { href: '#contact', label: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm'
          : 'bg-[#F7F6F2]/90 backdrop-blur-sm border-b border-[#E2E8F0]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Left Zone: Monogram & Brand Lockup */}
        <a
          href="#"
          className="flex items-center gap-3 text-[#17263C] font-semibold tracking-tight whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
        >
          <div className="w-8 h-8 rounded bg-[#17263C] text-white flex items-center justify-center font-mono text-xs font-bold shadow-sm transition-colors group-hover:bg-[#2563EB]">
            IS
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-wider text-sm text-[#17263C]">
              ISHA SONARIA
            </span>
            <span className="text-[10px] font-mono tracking-wider text-[#64748B]">
              CYBERSECURITY / SOC OPERATIONS
            </span>
          </div>
        </a>

        {/* Center Zone: Clean Editorial Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#64748B]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`transition-colors whitespace-nowrap shrink-0 relative py-1 hover:text-[#17263C] ${
                activeSection === link.id ? 'text-[#2563EB] font-semibold' : 'text-[#64748B]'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2563EB] rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Zone: Socials & Resume Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-[#64748B] hover:text-[#17263C] hover:bg-[#E2E8F0]/50 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-[#64748B] hover:text-[#17263C] hover:bg-[#E2E8F0]/50 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors rounded shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] whitespace-nowrap shrink-0 active:scale-95"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="p-2 text-[#17263C] hover:bg-[#E2E8F0]/60 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E8F0] px-5 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm rounded font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#2563EB]/10 text-[#2563EB] font-semibold'
                    : 'text-[#64748B] hover:bg-[#F7F6F2] hover:text-[#17263C]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748B] hover:text-[#17263C] p-2"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748B] hover:text-[#17263C] p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors rounded shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
