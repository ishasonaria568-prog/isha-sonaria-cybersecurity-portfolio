import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, ShieldAlert, Menu, X, FileText, ArrowDown } from 'lucide-react';

interface Props {
  onOpenResume: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'about', 'skills', 'experience', 'certifications', 'contact'];
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
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#certifications', label: 'Hall of Fame', id: 'certifications' },
    { href: '#contact', label: 'Contact', id: 'contact', externalIcon: true }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0b100e]/95 backdrop-blur-md border-b border-[#28352e] shadow-lg shadow-black/40'
          : 'bg-[#0b100e]/80 backdrop-blur-xs border-b border-[#28352e]/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
        {/* Brand Monogram: is. in reference style */}
        <a
          href="#home"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#eef2ef] font-sans group flex items-center"
        >
          <span>is</span>
          <span className="text-[#b3f5c5] transition-transform duration-200 group-hover:scale-125 inline-block ml-0.5">.</span>
        </a>

        {/* Desktop Navlinks */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-sans text-[#a1aaa5]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`transition-colors duration-150 flex items-center gap-1 ${
                activeSection === link.id
                  ? 'text-[#eef2ef] font-semibold'
                  : 'hover:text-[#eef2ef]'
              }`}
            >
              <span>{link.label}</span>
              {link.externalIcon && <span className="text-[#b3f5c5] text-xs">↗</span>}
            </a>
          ))}

          {/* Resume Modal Action in Nav */}
          <button
            onClick={onOpenResume}
            className="text-[12px] font-mono text-[#b3f5c5] hover:text-[#ffffff] transition-colors flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#304336] bg-[#121a15] hover:border-[#b3f5c5]"
            title="View Isha Sonaria CV"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
            <span className="text-xs">↓</span>
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenResume}
            className="text-xs font-mono text-[#b3f5c5] px-2.5 py-1 rounded border border-[#304336] bg-[#121a15]"
          >
            CV ↓
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#a1aaa5] hover:text-[#eef2ef] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b3f5c5] rounded"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#b3f5c5]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#28352e] bg-[#0b100e] px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-sans">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#121a15] text-[#b3f5c5] font-semibold border border-[#304336]'
                    : 'text-[#a1aaa5] hover:text-[#eef2ef]'
                }`}
              >
                <span>{link.label}</span>
                {link.externalIcon && <span className="text-[#b3f5c5]">↗</span>}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#28352e] flex items-center justify-between text-xs font-mono text-[#a1aaa5]">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b3f5c5] flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b3f5c5] flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b3f5c5] flex items-center gap-1.5"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>TryHackMe</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
