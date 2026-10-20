import { Project, SkillItem, ExperienceItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Isha Sonaria',
  role: 'Cybersecurity Professional & SOC Specialist',
  eyebrow: 'INDEPENDENT SECURITY RESEARCH / SOC OPERATIONS',
  headline: 'I INVESTIGATE. I ANALYZE. I BUILD DEFENSES.',
  summary:
    'I am a BCA graduate with hands-on training in SOC operations, network security, ethical hacking, digital forensics, and vulnerability assessment. My practical work includes security monitoring, network reconnaissance, phishing URL detection, email header analysis, and PDF security tools. I am focused on developing job-ready cybersecurity skills and pursuing entry-level SOC Analyst and Cybersecurity Analyst opportunities.',
  email: 'ishasonaria568@gmail.com',
  github: 'https://github.com/ishasonaria568-prog',
  linkedin: 'https://www.linkedin.com/in/isha-sonaria/',
  tryhackme: 'https://tryhackme.com/p/CipherGhost24',
  resumeUrl: '/Isha_Sonaria_Resume.pdf',
  location: 'India',
  availability: 'Available for SOC & Entry-Level Analyst Roles',
  academic: {
    degree: 'Bachelor of Computer Applications (BCA)',
    cgpa: '8.30 / 10.00',
    institution: 'Bhakta Kavi Narsinh Mehta University',
    period: '2023 – 2026',
    honor: 'Semester 1 Rank 1'
  }
};

export const VERIFIED_METRICS = [
  { label: 'TryHackMe Rank', value: 'Top 2% Global', context: 'Ranked among top global defenders' },
  { label: 'Completed Labs', value: '100+', context: 'Hands-on offensive & defensive labs' },
  { label: 'Academic Standing', value: '8.30 CGPA', context: 'BCA, Sem 1 Rank 1' },
  { label: 'League Champion', value: 'Rank 1', context: 'Bronze, Silver & Gold Leagues' }
];

export const PROJECTS: Project[] = [
  {
    id: 'phishguard-ml',
    number: '01',
    title: 'PhishGuard ML',
    category: 'Machine Learning / Phishing Detection',
    problem:
      'Modern phishing attacks evade signature-based filters using zero-day domain variations, URL obfuscation, and targeted social engineering schemes.',
    solution:
      'An offline phishing URL detector leveraging a trained Random Forest classifier and 16 static lexical and structural URL features to classify targets without relying on slow external lookups.',
    features: [
      '16 static URL feature extraction heuristics (entropy, token length, suspicious prefixes, etc.)',
      'Multi-class categorization: Safe, Suspicious, or High-Risk Phishing',
      'Batch scanning engine with CSV and JSON vulnerability report export',
      'Persistent SQLite scan history with audit tracking and probability breakdowns'
    ],
    technologies: ['Python', 'FastAPI', 'scikit-learn', 'React', 'SQLite', 'Docker'],
    repoUrl: 'https://github.com/ishasonaria568-prog/phishguard-ml',
    demoUrl: 'https://phishguard-ml-six.vercel.app/',
    visualType: 'phishguard'
  },
  {
    id: 'email-header-forensics',
    number: '02',
    title: 'Email Header Forensics',
    category: 'Digital Forensics / Email Security',
    problem:
      'Spoofed headers, sender domain mismatches, and compromised mail relays expose organizations to business email compromise (BEC) and targeted fraud.',
    solution:
      'A forensic email-header analyzer that inspects raw RFC-822 message headers, evaluates cryptographic authentication parameters, charts intermediate relay hops, and generates an automated risk index.',
    features: [
      'SPF, DKIM, and DMARC alignment verification and failure reason analysis',
      'Hop-by-hop mail relay tracer mapping IPv4/IPv6 intermediate nodes and delays',
      'Reply-To and Return-Path header discrepancy detection for spoofing triage',
      '0–100 forensic composite risk score with downloadable JSON investigation reports'
    ],
    technologies: ['Go', 'JavaScript', 'REST API'],
    repoUrl: 'https://github.com/ishasonaria568-prog/email-header-forensics',
    demoUrl: 'https://email-header-forensics.vercel.app/',
    visualType: 'email-forensics'
  },
  {
    id: 'subscope',
    number: '03',
    title: 'SubScope',
    category: 'Network Reconnaissance / CLI',
    problem:
      'Unmapped external assets, forgotten test environments, and rogue staging subdomains significantly broaden an organization’s exposed attack surface.',
    solution:
      'A multithreaded command-line reconnaissance utility engineered in Python for rapid subdomain enumeration, recursive DNS resolution, and HTTP/HTTPS protocol validation.',
    features: [
      'Multithreaded worker architecture optimizing DNS queries across wordlists',
      'Status code inspection and title extraction across active HTTP/HTTPS ports',
      'Structured attack-surface mapping with terminal dashboards and clean CSV export',
      'CNAME chain tracking to identify potential dangling DNS takeover risks'
    ],
    technologies: ['Python', 'Multithreading', 'DNS', 'CLI'],
    repoUrl: 'https://github.com/ishasonaria568-prog/SubScope',
    visualType: 'subscope'
  },
  {
    id: 'pdf-fortress',
    number: '04',
    title: 'PDF Fortress',
    category: 'Document Security',
    problem:
      'Sensitive corporate documentation, forensic reports, and proprietary manuals are regularly distributed without granular permission controls or tampering verification.',
    solution:
      'A security-focused document protection utility offering both CLI automation and graphical management for AES encryption, permission enforcement, and file integrity verification.',
    features: [
      'User and owner password encryption with granular permissions (printing, copy restrictions)',
      'SHA-256 integrity checksum generation and validation to detect tampering',
      'Dual interface support with command-line switches and responsive desktop GUI',
      'Metadata stripping engine to eliminate sensitive author and device forensic traces'
    ],
    technologies: ['Python', 'CLI', 'GUI', 'Cryptography'],
    repoUrl: 'https://github.com/ishasonaria568-prog/pdf-fortress',
    demoUrl: 'https://pdf-fortress.vercel.app/',
    visualType: 'pdf-fortress'
  }
];

export const SKILLS: SkillItem[] = [
  // Networking & Security
  {
    name: 'TCP/IP',
    category: 'Networking & Security',
    practicalUse: 'Protocol stack inspection, packet structure analysis, and handshake validation.',
    context: 'Analyzed connection lifecycles and TCP flags during port scanning and network labs.'
  },
  {
    name: 'OSI Model',
    category: 'Networking & Security',
    practicalUse: 'Layer-by-layer threat isolation, protocol troubleshooting, and attack surface mapping.',
    context: 'Guided forensic analysis from physical framing errors to application-layer payload decoding.'
  },
  {
    name: 'DNS',
    category: 'Networking & Security',
    practicalUse: 'Record resolution (A, AAAA, MX, TXT), cache analysis, and zone reconnaissance.',
    context: 'Engineered custom multithreaded DNS resolvers for the SubScope tool.'
  },
  {
    name: 'DHCP',
    category: 'Networking & Security',
    practicalUse: 'Lease management inspection, rogue server detection, and IP address assignment.',
    context: 'Monitored broadcast requests and IP pools during network traffic labs.'
  },
  {
    name: 'HTTP/HTTPS',
    category: 'Networking & Security',
    practicalUse: 'TLS handshake analysis, header verification, status code auditing, and certificate checks.',
    context: 'Validated web security headers, redirect trails, and SSL certificate validity.'
  },
  {
    name: 'SSH & FTP',
    category: 'Networking & Security',
    practicalUse: 'Secure remote administration, cipher suite review, and file transfer auditing.',
    context: 'Investigated unauthorized login attempts and plaintext transmission vulnerabilities.'
  },
  {
    name: 'Subnetting & CIDR',
    category: 'Networking & Security',
    practicalUse: 'IP address planning, broadcast boundary segmentation, and routing table analysis.',
    context: 'Constructed custom subnets and VLAN segmentation models in lab topologies.'
  },
  {
    name: 'Port Scanning',
    category: 'Networking & Security',
    practicalUse: 'Service discovery, open port enumeration, and firewall filtering verification.',
    context: 'Executed SYN scans and service-version detection routines via Nmap in SOC labs.'
  },

  // SOC & Threat Defense
  {
    name: 'Wazuh SIEM',
    category: 'SOC & Threat Defense',
    practicalUse: 'Log ingestion, rule tuning, alert correlation, and real-time event monitoring.',
    context: 'Monitored enterprise events and investigated suspicious authentication spikes at VRSecurity.'
  },
  {
    name: 'Alert Triage',
    category: 'SOC & Threat Defense',
    practicalUse: 'Differentiating false positives from actionable incidents and severity escalation.',
    context: 'Prioritized network anomalies and host event logs based on MITRE ATT&CK criteria.'
  },
  {
    name: 'Incident Response',
    category: 'SOC & Threat Defense',
    practicalUse: 'Containment workflows, artifact preservation, and root-cause post-mortems.',
    context: 'Followed structured incident triage playbooks during simulated SOC investigations.'
  },
  {
    name: 'Network Traffic Analysis',
    category: 'SOC & Threat Defense',
    practicalUse: 'Pcap inspection, protocol anomaly detection, and stream reconstruction.',
    context: 'Extracted suspicious payloads and identified unauthorized data exfiltration in Wireshark.'
  },
  {
    name: 'Digital Forensics',
    category: 'SOC & Threat Defense',
    practicalUse: 'Evidence preservation, timestamp analysis, and file system artifact recovery.',
    context: 'Examined forensic image dumps and event logs across TryHackMe investigation rooms.'
  },
  {
    name: 'Email Forensics',
    category: 'SOC & Threat Defense',
    practicalUse: 'Header header hop verification, SPF/DKIM/DMARC analysis, and phishing triage.',
    context: 'Built and released the Email Header Forensics analyzer tool.'
  },
  {
    name: 'VAPT',
    category: 'SOC & Threat Defense',
    practicalUse: 'Vulnerability assessment, automated security scanning, and remediation reporting.',
    context: 'Performed simulated vulnerability assessments on lab systems using Nikto, Nuclei, and Nmap.'
  },
  {
    name: 'IOC Extraction',
    category: 'SOC & Threat Defense',
    practicalUse: 'Extracting hashes, malicious IPs, C2 domains, and suspicious file artifacts.',
    context: 'Correlated indicators of compromise across threat feeds and SIEM alert records.'
  },
  {
    name: 'OSINT',
    category: 'SOC & Threat Defense',
    practicalUse: 'Open-source intelligence gathering, domain history research, and threat context enrichment.',
    context: 'Investigated adversary infrastructure and digital footprints across intelligence registries.'
  },

  // Security Tools
  {
    name: 'Wireshark',
    category: 'Security Tools',
    practicalUse: 'Deep packet inspection, display filter mastery, and TLS protocol stream analysis.',
    context: 'Applied packet filters to dissect malware communications and unencrypted traffic.'
  },
  {
    name: 'Nmap',
    category: 'Security Tools',
    practicalUse: 'Network discovery, aggressive script scanning (NSE), and OS fingerprinting.',
    context: 'Mapped active subnet hosts and identified vulnerable listening daemon versions.'
  },
  {
    name: 'Burp Suite',
    category: 'Security Tools',
    practicalUse: 'HTTP interception proxy, parameter tampering, and web vulnerability analysis.',
    context: 'Tested input validation flaws, authorization checks, and session cookies in web security labs.'
  },
  {
    name: 'Metasploit',
    category: 'Security Tools',
    practicalUse: 'Exploit verification, payload crafting, and post-exploitation validation.',
    context: 'Demonstrated security risk of unpatched vulnerabilities in isolated test environments.'
  },
  {
    name: 'SQLmap',
    category: 'Security Tools',
    practicalUse: 'Automated SQL injection detection and database fingerprinting.',
    context: 'Validated input sanitization and parameterized query implementations.'
  },
  {
    name: 'Nikto',
    category: 'Security Tools',
    practicalUse: 'Web server security scanning, misconfiguration checks, and outdated file indexing.',
    context: 'Audited Apache and Nginx web server banners and identified known server vulnerabilities.'
  },
  {
    name: 'Nuclei',
    category: 'Security Tools',
    practicalUse: 'Fast template-driven vulnerability scanning across attack surfaces.',
    context: 'Executed custom and community templates to pinpoint known CVE vulnerabilities.'
  },
  {
    name: 'WPScan',
    category: 'Security Tools',
    practicalUse: 'WordPress vulnerability scanning, plugin enumeration, and user disclosure tests.',
    context: 'Assessed content management system attack surfaces in practical lab assignments.'
  },
  {
    name: 'Hydra',
    category: 'Security Tools',
    practicalUse: 'Network logon cracker for evaluating password strength on services.',
    context: 'Tested password policy enforcement and brute-force mitigation controls.'
  },
  {
    name: 'Kali Linux',
    category: 'Security Tools',
    practicalUse: 'Specialized penetration testing environment and command-line defense tooling.',
    context: 'Primary daily operational operating system for CTF labs, tool tests, and security audits.'
  },

  // Programming & Scripting
  {
    name: 'Python',
    category: 'Programming & Scripting',
    practicalUse: 'Security automation, ML model training, packet processing, and CLI tool engineering.',
    context: 'Authored PhishGuard ML, SubScope, and PDF Fortress security applications.'
  },
  {
    name: 'Go (Golang)',
    category: 'Programming & Scripting',
    practicalUse: 'High-performance concurrent networking tools and lightweight microservices.',
    context: 'Developed backend parser and hop analyzer for the Email Header Forensics service.'
  },
  {
    name: 'Bash',
    category: 'Programming & Scripting',
    practicalUse: 'Linux system automation, log parsing pipelines, and automated sensor deployment.',
    context: 'Wrote shell scripts to parse auth.log entries and automate vulnerability scanner batches.'
  },
  {
    name: 'PowerShell',
    category: 'Programming & Scripting',
    practicalUse: 'Windows administration, security event log queries, and registry forensics.',
    context: 'Extracted Windows security event IDs (e.g. 4624, 4625) for forensic audit trails.'
  },
  {
    name: 'C & C++',
    category: 'Programming & Scripting',
    practicalUse: 'Low-level systems comprehension, memory management, and socket programming.',
    context: 'Studied memory buffer management and binary structure fundamentals during BCA coursework.'
  },
  {
    name: 'Java',
    category: 'Programming & Scripting',
    practicalUse: 'Object-oriented application architecture and enterprise backend fundamentals.',
    context: 'Completed coursework in core algorithms, data structures, and secure coding practices.'
  },
  {
    name: 'JavaScript',
    category: 'Programming & Scripting',
    practicalUse: 'Web UI engineering, REST API consumption, and frontend DOM security.',
    context: 'Built responsive web dashboards for security tools and portfolio inspection consoles.'
  },
  {
    name: 'PHP',
    category: 'Programming & Scripting',
    practicalUse: 'Server-side scripting inspection, form handling review, and session auditing.',
    context: 'Audited PHP-based web applications for authentication bypasses and injection flaws.'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'SOC Operations Trainee',
    organization: 'VRSecurity',
    period: 'April 2026 – September 2026',
    type: 'Practical Training & Security Program',
    activities: [
      'Monitored security events in Wazuh SIEM to detect unauthorized access attempts and anomalous traffic.',
      'Prioritized and escalated malicious network anomalies to senior analysts following triage playbooks.',
      'Used Nmap, Nikto, Nuclei, and Wireshark for reconnaissance and vulnerability assessments across test systems.'
    ],
    metrics: [
      { label: 'Primary Platform', value: 'Wazuh SIEM' },
      { label: 'Focus Area', value: 'Alert Triage & VAPT' }
    ]
  },
  {
    role: 'Cybersecurity Lab Practitioner & CTF Competitor',
    organization: 'TryHackMe',
    period: 'Active Practitioner',
    type: 'Offensive & Defensive Security Labs',
    activities: [
      'Ranked in the Top 2% globally across thousands of security professionals and students worldwide.',
      'Completed 100+ hands-on offensive, defensive, forensic, and incident response investigation rooms.',
      'Achieved Rank 1 in Bronze, Silver, and Gold leagues through consistent technical problem-solving.',
      'Earned 20+ specialized security achievement badges and achieved a continuous 100+ day learning streak.'
    ],
    metrics: [
      { label: 'Global Rank', value: 'Top 2%' },
      { label: 'Completed Labs', value: '100+' },
      { label: 'Leagues Won', value: 'Bronze, Silver, Gold (Rank 1)' },
      { label: 'Active Streak', value: '100+ Days' }
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'vrsecurity-csfp',
    title: 'Cyber Security Fundamentals Program (CSFP)',
    issuer: 'VRSecurity',
    date: 'September 2026',
    credentialId: 'ID-VRS-008',
    credentialLevel: 'GRAND MASTER',
    verificationUrl: 'https://www.vrsecurity.in/CERT/ID-VRS-007.pdf',
    description:
      'Rigorous practical cybersecurity curriculum covering SOC operations, SIEM deployment, network traffic analysis, vulnerability assessment, and incident triage.'
  },
  {
    id: 'hackviser-core',
    title: 'Certified Cybersecurity Foundations (CORE)',
    issuer: 'Hackviser',
    date: 'July 2026',
    description:
      'Foundational credential demonstrating practical competence in core cybersecurity principles, network defenses, threat modeling, and ethical hacking methodologies.'
  }
];
