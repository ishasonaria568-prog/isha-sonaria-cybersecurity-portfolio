import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, ShieldAlert, Copy, Check, FileText, Send } from 'lucide-react';

interface Props {
  onOpenResume: () => void;
}

export const Contact: React.FC<Props> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(subject.trim() || 'SOC Analyst L1 Role / Security Opportunity');
    const mailBody = encodeURIComponent(message.trim() || 'Hello Isha,\n\nI reviewed your cybersecurity portfolio and would like to discuss an opportunity.\n\nBest regards,');
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#28352e] bg-[#0b100e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reference Section Number */}
        <div className="section-num">06 /</div>

        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#eef2ef] tracking-tight font-sans">
            Every investigation needs another voice.
          </h2>
          <p className="mt-3 text-base text-[#a1aaa5] max-w-xl leading-relaxed">
            You have reached the edge of these pages, not the end of the conversation. Whether discussing an entry-level SOC Analyst L1 opening, threat analysis collaboration, or technical feedback, I look forward to connecting.
          </p>
        </div>

        {/* Reference Big Email Link */}
        <div className="mb-10">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="contact-email group"
          >
            <span>{PERSONAL_INFO.email}</span>
            <span className="text-[#b3f5c5] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>

        {/* Reference .contact-social strip */}
        <div className="flex flex-wrap items-center gap-6 text-sm font-sans mb-12">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b3f5c5] hover:text-[#ffffff] flex items-center gap-1.5 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <span>↗</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b3f5c5] hover:text-[#ffffff] flex items-center gap-1.5 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
            <span>↗</span>
          </a>

          <a
            href={PERSONAL_INFO.tryhackme}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b3f5c5] hover:text-[#ffffff] flex items-center gap-1.5 transition-colors"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>TryHackMe</span>
            <span>↗</span>
          </a>

          <button
            onClick={onOpenResume}
            className="text-[#b3f5c5] hover:text-[#ffffff] flex items-center gap-1.5 transition-colors font-mono text-xs"
          >
            <FileText className="w-4 h-4" />
            <span>Curriculum Vitae</span>
            <span>↓</span>
          </button>
        </div>

        {/* Direct Email Inquiry Form in Reference Palette */}
        <div className="p-7 sm:p-8 rounded-lg bg-[#121a15] border border-[#2b3b30] max-w-2xl space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#28352e]">
            <span className="text-xs font-mono text-[#98b6a3] uppercase tracking-wider">
              DIRECT INQUIRY
            </span>
            <button
              onClick={handleCopyEmail}
              className="text-xs font-mono text-[#b3f5c5] hover:text-[#ffffff] flex items-center gap-1 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#b3f5c5]" />
                  <span>COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>

          <form onSubmit={handleSendEmail} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-[#98b6a3] mb-1.5">
                SUBJECT
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="SOC Analyst Opportunity / Security Discussion"
                className="w-full px-3.5 py-2.5 rounded bg-[#18231e] border border-[#2b3b30] text-sm text-[#eef2ef] placeholder-[#73897b] focus:outline-none focus:border-[#b3f5c5] transition-colors font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#98b6a3] mb-1.5">
                MESSAGE
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Hello Isha, I reviewed your cybersecurity projects and would like to connect..."
                className="w-full px-3.5 py-2.5 rounded bg-[#18231e] border border-[#2b3b30] text-sm text-[#eef2ef] placeholder-[#73897b] focus:outline-none focus:border-[#b3f5c5] transition-colors font-sans resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-mono text-[#73897b]">
                Opens your default mail app
              </span>
              <button
                type="submit"
                className="primary-btn !py-2.5 !px-5"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
