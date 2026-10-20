import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS, SKILLS } from '../data/portfolioData';
import { Terminal, CornerDownLeft, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InvestigationConsole: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const availableCommands = ['profile', 'projects', 'skills', 'achievements', 'contact', 'help', 'clear'];

  useEffect(() => {
    setHistory([
      {
        id: 'init-1',
        command: 'dossier --view',
        output: (
          <div className="space-y-2 text-[#17263C] font-mono text-xs">
            <div className="text-[#2563EB] font-bold">
              INVESTIGATION CONSOLE // ISHA SONARIA PORTFOLIO DOSSIER
            </div>
            <p className="text-[#64748B] leading-relaxed font-sans text-xs">
              Explore verified security research tools, SOC credentials, and technical capabilities.
              Type a command below or click any of the available command shortcuts.
            </p>
            <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px]">
              <span className="text-[#64748B]">Available shortcuts:</span>
              {availableCommands.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleExecuteCommand(cmd)}
                  className="px-2 py-0.5 rounded bg-[#F1F0EA] hover:bg-[#2563EB]/10 text-[#2563EB] border border-[#CBD5E1] transition-colors cursor-pointer font-semibold"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        )
      }
    ]);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleExecuteCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'help':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-[#2563EB] font-bold">AVAILABLE COMMAND DIRECTORY:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#17263C]">
              <div><strong className="text-[#2563EB]">profile</strong> — Professional summary & education</div>
              <div><strong className="text-[#2563EB]">projects</strong> — Verified research tools & live demos</div>
              <div><strong className="text-[#2563EB]">skills</strong> — Technical capabilities & toolchain</div>
              <div><strong className="text-[#2563EB]">achievements</strong> — TryHackMe standings & credentials</div>
              <div><strong className="text-[#2563EB]">contact</strong> — Professional links & direct email copy</div>
              <div><strong className="text-[#2563EB]">clear</strong> — Reset the console output</div>
            </div>
          </div>
        );
        break;

      case 'profile':
        outputNode = (
          <div className="space-y-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#0F766E] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>ANALYST PROFILE: ISHA SONARIA</span>
            </div>
            <p className="text-[#17263C] leading-relaxed font-sans">{PERSONAL_INFO.summary}</p>
            <div className="bg-[#F7F6F2] p-3 rounded border border-[#E2E8F0] space-y-1">
              <div><span className="text-[#64748B]">Degree:</span> <span className="text-[#17263C] font-semibold">{PERSONAL_INFO.academic.degree}</span></div>
              <div><span className="text-[#64748B]">Academic Standing:</span> <span className="text-[#2563EB] font-bold">{PERSONAL_INFO.academic.cgpa} ({PERSONAL_INFO.academic.honor})</span></div>
              <div><span className="text-[#64748B]">Institution:</span> <span className="text-[#17263C]">{PERSONAL_INFO.academic.institution} ({PERSONAL_INFO.academic.period})</span></div>
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-3 text-xs font-mono">
            <div className="text-[#2563EB] font-bold">SECURITY RESEARCH & TOOLS (4 Artifacts):</div>
            <div className="space-y-2">
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-3 rounded bg-[#F7F6F2] border border-[#E2E8F0]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#17263C] font-bold">{p.number}. {p.title}</span>
                    <span className="text-[#64748B] text-[10px]">{p.category}</span>
                  </div>
                  <p className="text-[#475569] text-xs mt-1 font-sans">{p.solution}</p>
                  <div className="mt-2 flex flex-wrap gap-3 text-[11px]">
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2563EB] hover:underline flex items-center gap-1 font-medium"
                    >
                      GitHub Repo <ExternalLink className="w-3 h-3" />
                    </a>
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0F766E] hover:underline flex items-center gap-1 font-medium"
                      >
                        Live Demo <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-3 text-xs font-mono">
            <div className="text-[#0F766E] font-bold">TECHNICAL CAPABILITY INVENTORY:</div>
            <div className="space-y-2 text-[11px] text-[#17263C]">
              <div>
                <span className="text-[#2563EB] font-semibold">Networking & Security:</span>{' '}
                <span className="text-[#64748B]">TCP/IP, OSI Model, DNS, DHCP, HTTP/HTTPS, SSH, FTP, Subnetting, Port Scanning.</span>
              </div>
              <div>
                <span className="text-[#2563EB] font-semibold">SOC & Threat Defense:</span>{' '}
                <span className="text-[#64748B]">Wazuh SIEM, Alert Triage, Incident Response, Network Traffic Analysis, Digital Forensics, Email Forensics, VAPT, IOCs, OSINT.</span>
              </div>
              <div>
                <span className="text-[#2563EB] font-semibold">Security Tools:</span>{' '}
                <span className="text-[#64748B]">Wireshark, Nmap, Burp Suite, Metasploit, SQLmap, Nikto, Nuclei, WPScan, Hydra, Kali Linux.</span>
              </div>
              <div>
                <span className="text-[#2563EB] font-semibold">Programming & Scripting:</span>{' '}
                <span className="text-[#64748B]">Python, Go, Bash, PowerShell, C, C++, Java, JavaScript, PHP.</span>
              </div>
            </div>
          </div>
        );
        break;

      case 'achievements':
        outputNode = (
          <div className="space-y-3 text-xs font-mono">
            <div className="text-[#2563EB] font-bold">VERIFIED LAB & ACADEMIC CREDENTIALS:</div>
            <ul className="space-y-1.5 text-[#17263C]">
              <li className="flex items-center gap-2">
                <span className="text-[#0F766E] font-bold">✓</span>
                <span><strong>TryHackMe:</strong> Ranked in the Top 2% Globally with 100+ Completed Labs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0F766E] font-bold">✓</span>
                <span><strong>League Standing:</strong> Rank 1 Champion in Bronze, Silver, and Gold leagues</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0F766E] font-bold">✓</span>
                <span><strong>Continuous Practice:</strong> 100+ day streak & 20+ specialized security badges</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0F766E] font-bold">✓</span>
                <span><strong>VRSecurity CSFP:</strong> Grand Master ID-VRS-008 (September 2026)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0F766E] font-bold">✓</span>
                <span><strong>Hackviser CORE:</strong> Certified Cybersecurity Foundations (July 2026)</span>
              </li>
            </ul>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-3 text-xs font-mono">
            <div className="text-[#2563EB] font-bold">COMMUNICATION DIRECTORY:</div>
            <div className="p-3 bg-[#F7F6F2] rounded border border-[#E2E8F0] space-y-2 text-[#17263C]">
              <div className="flex items-center justify-between">
                <span className="text-[#64748B]">Email:</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{PERSONAL_INFO.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 rounded bg-white hover:bg-[#2563EB]/10 text-[#2563EB] border border-[#CBD5E1] transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#0F766E]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#64748B]">LinkedIn:</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:underline flex items-center gap-1 font-medium"
                >
                  linkedin.com/in/isha-sonaria <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#64748B]">GitHub:</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:underline flex items-center gap-1 font-medium"
                >
                  github.com/ishasonaria568-prog <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#64748B]">TryHackMe:</span>
                <a
                  href={PERSONAL_INFO.tryhackme}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F766E] hover:underline flex items-center gap-1 font-medium"
                >
                  CipherGhost24 <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-[#DC2626] text-xs font-mono">
            Unknown command: "{cmd}". Type <button onClick={() => handleExecuteCommand('help')} className="underline text-[#2563EB] font-bold">help</button> to see all valid commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: cmd,
        output: outputNode
      }
    ]);
    setInputVal('');

    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleExecuteCommand(inputVal);
    }
  };

  return (
    <section id="console" className="py-16 md:py-20 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>INTERACTIVE NAVIGATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17263C] tracking-tight">
              Investigation Console
            </h2>
            <p className="text-sm text-[#64748B] mt-1 max-w-xl font-sans">
              A light-themed command-line interface to inspect portfolios, project repositories, and documented achievements.
            </p>
          </div>

          <div className="text-[11px] font-mono text-[#64748B] bg-[#F7F6F2] border border-[#E2E8F0] px-3 py-1.5 rounded">
            PORTFOLIO DOSSIER INTERFACE // READ-ONLY
          </div>
        </div>

        {/* Light Console Window */}
        <div className="rounded-xl border border-[#E2E8F0] bg-white shadow-sm overflow-hidden flex flex-col h-[440px]">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#F7F6F2] border-b border-[#E2E8F0] select-none">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
              <span className="text-xs font-mono text-[#17263C] font-semibold ml-2">ishasonaria@analyst-workstation:~</span>
            </div>
            <div className="text-[11px] font-mono text-[#64748B]">
              LIGHT RESEARCH ARCHIVE
            </div>
          </div>

          {/* Quick Command Suggestions */}
          <div className="px-4 py-2 bg-[#FAF9F5] border-b border-[#E2E8F0] flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
            <span className="text-[#64748B] shrink-0 font-medium">Quick run:</span>
            {availableCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleExecuteCommand(cmd)}
                className="px-2.5 py-1 rounded bg-white hover:bg-[#2563EB]/10 text-[#2563EB] border border-[#CBD5E1] transition-colors whitespace-nowrap active:scale-95 font-semibold"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Output History Area */}
          <div
            className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs text-[#17263C] bg-white cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item) => (
              <div key={item.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#64748B]">
                  <span className="text-[#2563EB] font-bold">isha@analyst:~$</span>
                  <span className="text-[#17263C] font-bold">{item.command}</span>
                </div>
                <div className="pl-4 border-l-2 border-[#E2E8F0] py-0.5">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-[#F7F6F2] border-t border-[#E2E8F0] flex items-center gap-3">
            <span className="text-[#2563EB] font-mono font-bold text-xs shrink-0 pl-1">
              isha@analyst:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type 'profile', 'projects', 'skills', or 'help'..."
              aria-label="Console command input"
              className="flex-1 bg-transparent text-[#17263C] font-mono text-xs focus:outline-none placeholder:text-[#94A3B8]"
            />
            <button
              onClick={() => handleExecuteCommand(inputVal)}
              disabled={!inputVal.trim()}
              className="p-1.5 rounded bg-[#2563EB] text-white hover:bg-[#1D4ED8] disabled:opacity-40 disabled:pointer-events-none transition-colors"
              title="Run command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <p className="text-[11px] font-mono text-[#64748B] text-center mt-3">
          Notice: This console is an interactive portfolio navigator. It does not scan external systems or access unauthorized networks.
        </p>
      </div>
    </section>
  );
};
