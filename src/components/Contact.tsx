import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check, FileDown, ExternalLink, Send, ShieldAlert } from 'lucide-react';

interface Props {
  onOpenResume: () => void;
}

export const Contact: React.FC<Props> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(inquirySubject.trim() || 'Cybersecurity Opportunity / Inquiry');
    const body = encodeURIComponent(inquiryMessage.trim() || 'Hello Isha,\n\nI reviewed your cybersecurity portfolio and would like to connect.\n\nBest regards,');
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#E2E8F0] bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-1 flex items-center gap-2">
            <span>07</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263C] tracking-tight">
            HAVE A SECURITY CHALLENGE OR AN OPPORTUNITY?
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] mt-2 max-w-2xl font-sans leading-relaxed">
            I'm open to entry-level cybersecurity opportunities, SOC Analyst roles, internships, and professional discussions about security engineering and threat detection.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Ingestion Panel & Copy Affordance */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm space-y-4">
              <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block font-bold">
                DIRECT INBOX
              </span>

              <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#F7F6F2] border border-[#E2E8F0]">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-[#2563EB] shrink-0" />
                  <span className="text-[#17263C] font-mono text-xs sm:text-sm font-semibold truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded bg-white hover:bg-[#2563EB]/10 text-[#2563EB] border border-[#CBD5E1] transition-colors shrink-0 ml-2"
                  aria-label="Copy Email Address"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-[#0F766E]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <div className="text-xs font-mono text-[#0F766E] font-semibold flex items-center gap-1.5 animate-in fade-in">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email copied to clipboard ({PERSONAL_INFO.email})</span>
                </div>
              )}

              <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Cybersecurity%20Opportunity`}
                  className="px-4 py-2 rounded bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold transition-colors flex items-center gap-2 shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>COMPOSE EMAIL</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="px-4 py-2 rounded bg-white hover:bg-[#F1F0EA] text-[#17263C] border border-[#CBD5E1] font-semibold transition-colors flex items-center gap-2 shadow-2xs"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>VIEW / DOWNLOAD RESUME</span>
                </button>
              </div>
            </div>

            {/* Verified Network Profiles */}
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm space-y-3 font-mono text-xs">
              <span className="text-[#64748B] uppercase tracking-wider block font-bold">
                VERIFIED PROFESSIONAL IDENTITIES
              </span>

              <div className="space-y-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#F7F6F2] border border-[#E2E8F0] flex items-center justify-between hover:border-[#2563EB] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#2563EB]" />
                    <span className="text-[#17263C] font-semibold group-hover:text-[#2563EB] transition-colors">LinkedIn</span>
                  </div>
                  <span className="text-[#64748B] text-[11px] flex items-center gap-1">
                    in/isha-sonaria <ExternalLink className="w-3 h-3" />
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#F7F6F2] border border-[#E2E8F0] flex items-center justify-between hover:border-[#2563EB] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[#17263C]" />
                    <span className="text-[#17263C] font-semibold group-hover:text-[#2563EB] transition-colors">GitHub</span>
                  </div>
                  <span className="text-[#64748B] text-[11px] flex items-center gap-1">
                    ishasonaria568-prog <ExternalLink className="w-3 h-3" />
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.tryhackme}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#F7F6F2] border border-[#E2E8F0] flex items-center justify-between hover:border-[#0F766E] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-[#0F766E]" />
                    <span className="text-[#17263C] font-semibold group-hover:text-[#0F766E] transition-colors">TryHackMe</span>
                  </div>
                  <span className="text-[#64748B] text-[11px] flex items-center gap-1">
                    CipherGhost24 <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Mail Composer */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                <span className="text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider flex items-center gap-2">
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT INQUIRY</span>
                </span>
                <span className="text-[#64748B] font-mono text-[11px]">
                  OPENS YOUR DEFAULT EMAIL CLIENT
                </span>
              </div>

              <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                Draft an inquiry or role specification below. Submitting will format and launch your native email client with no intermediary tracking.
              </p>

              <form onSubmit={handleSendMailto} className="space-y-4">
                <div>
                  <label htmlFor="subject-input" className="block text-xs font-mono text-[#17263C] font-semibold mb-1">
                    SUBJECT / POSITION:
                  </label>
                  <input
                    id="subject-input"
                    type="text"
                    value={inquirySubject}
                    onChange={(e) => setInquirySubject(e.target.value)}
                    placeholder="e.g., SOC Analyst Position / Security Tool Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F6F2] border border-[#CBD5E1] text-[#17263C] placeholder:text-[#94A3B8] text-xs font-mono focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message-input" className="block text-xs font-mono text-[#17263C] font-semibold mb-1">
                    MESSAGE / SCOPE:
                  </label>
                  <textarea
                    id="message-input"
                    rows={5}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Describe the opportunity, organization, or cybersecurity challenge..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F6F2] border border-[#CBD5E1] text-[#17263C] placeholder:text-[#94A3B8] text-xs font-mono focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#64748B]">
                    Recipient: {PERSONAL_INFO.email}
                  </span>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-mono font-bold text-xs flex items-center gap-2 transition-all active:scale-95 shadow-xs"
                  >
                    <span>LAUNCH EMAIL CLIENT</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
