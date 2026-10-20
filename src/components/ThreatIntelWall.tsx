import React, { useState } from 'react';
import { ShieldAlert, MailCheck, Radar, Search, Lock, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ThreatConcept {
  id: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  explanation: string;
  breakdown: { title: string; desc: string }[];
  diagramLabel: string;
  analystTakeaway: string;
}

const CONCEPTS: ThreatConcept[] = [
  {
    id: 'phish',
    title: 'Phishing URL Feature Engineering',
    category: 'Heuristic Detection',
    icon: ShieldAlert,
    tagline: 'Deconstructing malicious URLs into offline mathematical and lexical vectors',
    explanation:
      'Rather than relying solely on reactive domain blocklists, machine-learning based phishing detection extracts structural and statistical features directly from raw URL strings. This enables offline classification of zero-day spoof domains within milliseconds.',
    breakdown: [
      {
        title: 'Shannon Entropy Calculation',
        desc: 'Measures bit randomness across URL substrings. Algorithmically generated domains (DGA) display significantly higher entropy than human-readable brand names.'
      },
      {
        title: 'Token Depth & Prefix Deception',
        desc: 'Examines excessive subdomain depth (e.g., login.verification.bank.evil.com) and misleading hyphens or Unicode homoglyphs engineered to deceive users.'
      },
      {
        title: 'Structural Anomalies',
        desc: 'Flags raw IPv4/IPv6 addresses replacing domain names, presence of the "@" symbol directing traffic to unexpected destinations, and abnormal port numbers.'
      }
    ],
    diagramLabel: 'Lexical Feature Extraction Pipeline',
    analystTakeaway:
      'Implemented in PhishGuard ML using a 16-feature Random Forest model to achieve fast offline detection without external API reliance.'
  },
  {
    id: 'email',
    title: 'Email Cryptographic Authentication',
    category: 'Protocol Verification',
    icon: MailCheck,
    tagline: 'Validating cryptographic sender proof across SPF, DKIM, and DMARC policies',
    explanation:
      'SMTP was originally designed without authentication mechanisms, allowing trivial sender spoofing. The modern email defense stack relies on three complementary standards that correlate DNS records, cryptographic signatures, and policy enforcement.',
    breakdown: [
      {
        title: 'SPF (Sender Policy Framework)',
        desc: 'DNS TXT records specifying which IP addresses and subnets are authorized to transmit mail on behalf of the domain.'
      },
      {
        title: 'DKIM (DomainKeys Identified Mail)',
        desc: 'Public-key cryptography attaching a digital signature to the message header. The receiving MTA retrieves the public key via DNS to verify message body integrity.'
      },
      {
        title: 'DMARC Alignment & Enforcement',
        desc: 'Enforces that SPF and DKIM domains align with the visible "From" address. Directs receiving servers to none, quarantine, or reject failing messages.'
      }
    ],
    diagramLabel: 'Three-Tier Verification Architecture',
    analystTakeaway:
      'Core architecture powering the Email Header Forensics project to triage BEC threats and hop routing anomalies.'
  },
  {
    id: 'recon',
    title: 'Network Reconnaissance & SYN Probing',
    category: 'Attack Surface Mapping',
    icon: Radar,
    tagline: 'Mapping listening daemons, firewall filter behaviors, and service signatures',
    explanation:
      'Before adversaries or defensive assessors can secure an infrastructure, they must thoroughly map its exposed perimeter. Understanding TCP handshake mechanics is essential to interpreting port states accurately.',
    breakdown: [
      {
        title: 'TCP SYN Half-Open Scans',
        desc: 'Sends a SYN packet. If SYN-ACK returns, the port is OPEN; the scanner immediately sends RST to tear down without completing full handshake, reducing log clutter.'
      },
      {
        title: 'ICMP & Banner Grabbing',
        desc: 'Analyzes application protocol banners (SSH, HTTP server strings) and TCP window sizing to fingerprint underlying operating systems.'
      },
      {
        title: 'Filtered vs Closed States',
        desc: 'A RST response indicates CLOSED (host active, daemon not listening); a drop or ICMP host unreachable indicates a stateful FIREWALL FILTER in place.'
      }
    ],
    diagramLabel: 'Stateful TCP Handshake Inspection',
    analystTakeaway:
      'Directly applied during Nmap vulnerability reconnaissance and multithreaded SubScope DNS resolution.'
  },
  {
    id: 'siem',
    title: 'SIEM Correlation & Alert Triage',
    category: 'SOC Incident Response',
    icon: Search,
    tagline: 'Filtering noise to surface coordinated intrusions through telemetry correlation',
    explanation:
      'In a 24/7 Security Operations Center, raw log streams from firewalls, endpoints, and authentication servers generate thousands of events per hour. A SIEM correlates discrete events into high-fidelity threat incidents.',
    breakdown: [
      {
        title: 'Log Ingestion & Normalization',
        desc: 'Wazuh agents aggregate syslog, auditd, and Windows event logs, parsing them into standardized JSON schemas for rule matching.'
      },
      {
        title: 'MITRE ATT&CK Mapping',
        desc: 'Alert rules map directly to adversary techniques (e.g., T1110 Brute Force, T1059 Command Execution) to provide operational context.'
      },
      {
        title: 'False Positive Differentiation',
        desc: 'Correlating user baseline activity, change management windows, and known administrative actions to prevent alert fatigue.'
      }
    ],
    diagramLabel: 'Telemetry Ingestion to Escalation Loop',
    analystTakeaway:
      'Practiced daily during SOC Operations training at VRSecurity, monitoring Wazuh SIEM security events.'
  },
  {
    id: 'crypto',
    title: 'Document Encryption & Integrity',
    category: 'Data Protection',
    icon: Lock,
    tagline: 'Cryptographic access controls, permission enforcement, and tamper detection',
    explanation:
      'Enterprise reports, legal discoveries, and forensic dossiers require strict confidentiality and provable authenticity when transferred across untrusted channels.',
    breakdown: [
      {
        title: 'Symmetric AES-256 Bit Encryption',
        desc: 'Secures file content using Galois/Counter Mode or CBC with distinct passwords for view (user) and administrative modification (owner).'
      },
      {
        title: 'Granular Permission Bitmasks',
        desc: 'Locks low-level PDF permission flags to disable text extraction, unauthorized printing, or form field alteration.'
      },
      {
        title: 'Cryptographic Hash Checksums',
        desc: 'Computes irreversible SHA-256 digests over the output file. Any single-byte modification invalidates the digest, ensuring non-repudiation.'
      }
    ],
    diagramLabel: 'Cryptographic Protection Workflow',
    analystTakeaway:
      'Engineered into PDF Fortress with dual CLI/GUI workflows and automated verification routines.'
  }
];

export const ThreatIntelWall: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('phish');

  const activeConcept = CONCEPTS.find((c) => c.id === selectedId) || CONCEPTS[0];
  const IconComponent = activeConcept.icon;

  return (
    <section id="threat-wall" className="py-20 md:py-28 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-1 flex items-center gap-2">
            <span>06</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>EDUCATIONAL RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263C] tracking-tight">
            The Threat Intelligence Wall
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl font-sans">
            An interactive educational visual exploration of core defensive security methodologies, protocol mechanics, and forensic heuristics.
          </p>
        </div>

        {/* Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation (Left) */}
          <div className="lg:col-span-4 space-y-2">
            {CONCEPTS.map((concept) => {
              const isSelected = concept.id === selectedId;
              const ConceptIcon = concept.icon;
              return (
                <button
                  key={concept.id}
                  onClick={() => setSelectedId(concept.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-150 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-[#2563EB] shadow-xs ring-1 ring-[#2563EB]'
                      : 'bg-[#F7F6F2] border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected ? 'bg-[#2563EB] text-white' : 'bg-white text-[#64748B] border border-[#E2E8F0] group-hover:text-[#17263C]'
                      }`}
                    >
                      <ConceptIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#64748B] uppercase font-semibold">
                        {concept.category}
                      </div>
                      <div
                        className={`text-sm font-bold tracking-tight ${
                          isSelected ? 'text-[#17263C]' : 'text-[#475569] group-hover:text-[#17263C]'
                        }`}
                      >
                        {concept.title}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#2563EB] translate-x-1' : 'text-[#94A3B8] group-hover:text-[#17263C]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Concept Deep Dive (Right) */}
          <div className="lg:col-span-8">
            <div className="rounded-xl border border-[#E2E8F0] bg-[#F7F6F2] p-6 sm:p-8 shadow-xs space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#2563EB] font-bold">
                      {activeConcept.category} · RESEARCH DOSSIER
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#17263C] tracking-tight mt-0.5">
                      {activeConcept.title}
                    </h3>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#64748B] bg-white px-3 py-1 rounded border border-[#E2E8F0] self-start sm:self-auto font-medium">
                  {activeConcept.diagramLabel}
                </div>
              </div>

              {/* Tagline & Narrative */}
              <div className="space-y-2">
                <p className="text-sm font-mono text-[#2563EB] font-semibold">
                  "{activeConcept.tagline}"
                </p>
                <p className="text-sm text-[#475569] font-sans leading-relaxed">
                  {activeConcept.explanation}
                </p>
              </div>

              {/* Technical Pillars */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block font-bold">
                  TECHNICAL PILLARS
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {activeConcept.breakdown.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] space-y-1.5 shadow-2xs">
                      <span className="text-xs font-bold text-[#17263C] font-mono block">
                        {item.title}
                      </span>
                      <p className="text-[11px] text-[#64748B] font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Implementation */}
              <div className="p-4 rounded-lg bg-white border border-[#E2E8F0] space-y-1 text-xs font-mono shadow-2xs">
                <div className="flex items-center gap-2 text-[#0F766E] font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>PRACTICAL IMPLEMENTATION IN PORTFOLIO</span>
                </div>
                <p className="text-[#475569] text-xs font-sans leading-relaxed pt-0.5">
                  {activeConcept.analystTakeaway}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
