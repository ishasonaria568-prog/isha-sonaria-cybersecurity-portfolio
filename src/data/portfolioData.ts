import { Project, SkillItem, ExperienceItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Isha Sonaria',
  role: 'Aspiring Cybersecurity Professional | SOC Analyst L1',
  targetRole: 'Entry-Level SOC Analyst L1 / Cybersecurity Analyst',
  location: 'Veraval, Gujarat, India',
  availability: 'Open to Entry-Level SOC Opportunities',
  branding: 'Built by ISHA SONARIA',
  heroIntro:
    "I'm a BCA graduate focused on SOC operations, threat detection, network security, and digital forensics. I build practical security tools and strengthen my skills through hands-on labs, technical projects, and cybersecurity training.",
  aboutText:
    "I am a BCA graduate from Bhakta Kavi Narsinh Mehta University (CGPA 8.30/10) with hands-on training in SOC operations, network security, ethical hacking, digital forensics, and vulnerability assessment. My practical experience includes investigating security events in Wazuh SIEM, analyzing network traffic with Wireshark, conducting reconnaissance with Nmap, Nikto, and Nuclei, and engineering defense tools like PhishGuard ML and Email Header Forensics. I am actively preparing for Entry-Level SOC Analyst L1 and Cybersecurity Analyst roles where I can contribute to threat detection, alert triage, and incident response.",
  email: 'ishasonaria568@gmail.com',
  github: 'https://github.com/ishasonaria568-prog',
  linkedin: 'https://www.linkedin.com/in/isha-sonaria/',
  tryhackme: 'https://tryhackme.com/p/CipherGhost24',
  resumeUrl: '/Isha_Sonaria_Resume.pdf',
  academic: {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Bhakta Kavi Narsinh Mehta University',
    period: '2023 – 2026',
    cgpa: '8.30 / 10.00',
    honor: 'Semester 1 Rank 1'
  }
};

export const VERIFIED_METRICS = [
  { label: 'TryHackMe Rank', value: 'Top 2% Global', context: 'Ranked in the top 2% of global defenders' },
  { label: 'Completed Labs', value: '100+', context: 'Defensive, offensive, and forensic investigation rooms' },
  { label: 'Leagues Won', value: 'Rank 1', context: 'Bronze, Silver, and Gold leagues champion' },
  { label: 'Continuous Streak', value: '100+ Days', context: '20+ specialized security badges earned' }
];

export const PROJECTS: Project[] = [
  {
    id: 'phishguard-ml',
    number: '01',
    title: 'PhishGuard ML',
    category: 'Machine Learning / Phishing Detection',
    problem:
      'Zero-day phishing domains bypass signature blocklists through domain obfuscation and fast-flux registrations.',
    solution:
      'An offline machine-learning-based phishing URL detection application that uses a Random Forest classifier and 16 static URL features to classify targets without relying on external API lookups.',
    features: [
      'Classifies URLs as Safe, Suspicious, or Phishing with probability metrics',
      'Batch scanning engine with structured CSV and JSON report export',
      'Persistent SQLite scan history with audit tracking',
      'FastAPI backend with React client; Docker containerized and completely offline capable'
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
      'Forged headers, spoofed envelope senders, and compromised relays expose organizations to Business Email Compromise (BEC).',
    solution:
      'An email-header analysis tool designed to help investigate sender authentication, email routing, and suspicious header indicators.',
    features: [
      'Extracts authentication records, sender domains, and mail-routing hops',
      'Validates SPF, DKIM, and DMARC failures and highlights Reply-To mismatches',
      'Supports IPv4 and IPv6 hop classification with latency estimation',
      'Generates a risk score from 0 to 100 with JSON export and local offline analysis'
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
      'Unmapped subdomains and obsolete DNS records expand attack surfaces and expose dangling pointers to takeover.',
    solution:
      'A multithreaded command-line reconnaissance tool for subdomain enumeration and attack-surface mapping. Reconnaissance should only be performed on authorized targets.',
    features: [
      'High-speed multithreaded subdomain enumeration across custom wordlists',
      'Recursive DNS resolution with A, CNAME, and TXT record identification',
      'HTTP and HTTPS response verification extracting status codes and titles',
      'Structured reporting in both terminal tabular output and clean CSV files'
    ],
    technologies: ['Python', 'Multithreading', 'DNS', 'CLI'],
    repoUrl: 'https://github.com/ishasonaria568-prog/SubScope',
    visualType: 'subscope'
  },
  {
    id: 'pdf-fortress',
    number: '04',
    title: 'PDF Fortress',
    category: 'Document Security / Utility',
    problem:
      'Sensitive security reports and confidential documents are distributed without proper encryption or tamper detection.',
    solution:
      'A PDF security utility that provides password protection and verifies whether the resulting PDF has been protected correctly.',
    features: [
      'Dual interface support: scriptable Command-Line Interface and graphical user interface',
      'Granular PDF password protection for user and owner permissions',
      'Immediate verification of protected output ensuring access controls took effect',
      'Verification check routines for post-processing confirmation'
    ],
    technologies: ['Python', 'CLI', 'GUI'],
    repoUrl: 'https://github.com/ishasonaria568-prog/pdf-fortress',
    demoUrl: 'https://pdf-fortress.vercel.app/',
    visualType: 'pdf-fortress'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'SOC Operations Trainee',
    organization: 'VRSecurity',
    period: 'April 2026 – September 2026',
    type: 'Cyber Security Fundamentals Program (CSFP)',
    activities: [
      'Monitored security events in Wazuh SIEM to detect suspicious activity, brute-force anomalies, and policy violations.',
      'Prioritized and escalated malicious network anomalies to senior security analysts following standard triage workflows.',
      'Conducted reconnaissance and vulnerability scanning using Nmap, Nikto, and Nuclei in controlled lab environments.',
      'Used Wireshark for deep packet inspection and network analysis of exposed ports and vulnerable services.'
    ],
    metrics: [
      { label: 'Primary Platform', value: 'Wazuh SIEM' },
      { label: 'Role Scope', value: 'Training & Alert Triage' }
    ]
  },
  {
    role: 'Cybersecurity Lab Practitioner & CTF Competitor',
    organization: 'TryHackMe',
    period: 'Active Practitioner',
    type: 'Practical Hands-on Security Labs',
    activities: [
      'Ranked in the Top 2% globally across thousands of security professionals and students worldwide.',
      'Completed 100+ hands-on offensive, defensive, forensic, and incident response investigation rooms.',
      'Achieved Rank 1 champion standing across Bronze, Silver, and Gold leagues through consistent technical execution.',
      'Maintained a continuous 100+ day learning streak and earned 20+ specialized security achievement badges.'
    ],
    metrics: [
      { label: 'Global Rank', value: 'Top 2%' },
      { label: 'Labs Solved', value: '100+' },
      { label: 'Leagues Won', value: 'Rank 1 (Bronze, Silver, Gold)' },
      { label: 'Active Streak', value: '100+ Days' }
    ]
  }
];

export const SKILL_GROUPS = [
  {
    title: 'Networking & Security',
    icon: 'Network',
    skills: ['TCP/IP', 'OSI Model', 'DNS', 'DHCP', 'HTTP/HTTPS', 'SSH', 'FTP', 'Subnetting', 'Port Scanning'],
    summary: 'Protocol analysis, traffic flow inspection, subnet segmentation, and perimeter service discovery.'
  },
  {
    title: 'SOC & Threat Defense',
    icon: 'Shield',
    skills: ['Wazuh SIEM', 'Alert Triage', 'Incident Response', 'Network Traffic Analysis', 'Digital Forensics', 'Email Forensics', 'VAPT', 'IOC Extraction', 'OSINT'],
    summary: 'SIEM log monitoring, event correlation, evidence collection, and threat escalation workflows.'
  },
  {
    title: 'Security Tools',
    icon: 'Terminal',
    skills: ['Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'SQLmap', 'Nikto', 'Nuclei', 'WPScan', 'Hydra', 'Kali Linux'],
    summary: 'Network sniffing, automated vulnerability scanning, protocol inspection, and offensive testing.'
  },
  {
    title: 'Programming & Scripting',
    icon: 'Code',
    skills: ['Python', 'Go', 'Bash', 'PowerShell', 'C', 'C++', 'Java', 'JavaScript', 'PHP'],
    summary: 'Security automation, custom CLI tool development, log parsing scripts, and REST APIs.'
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
      'Rigorous practical cybersecurity curriculum covering SOC operations, SIEM deployment in Wazuh, packet analysis in Wireshark, network vulnerability assessment, and anomaly escalation.'
  },
  {
    id: 'hackviser-core',
    title: 'Certified Cybersecurity Foundations (CORE)',
    issuer: 'Hackviser',
    date: 'July 2026',
    credentialId: 'HV-CORE-HO4ESOYZ',
    description:
      'Foundational credential demonstrating practical competence in core cybersecurity principles, network defenses, threat modeling, and ethical hacking methodologies.'
  }
];
