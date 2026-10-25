export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  repoUrl: string;
  demoUrl?: string;
  visualType: 'phishguard' | 'email-forensics' | 'subscope' | 'pdf-fortress';
}

export interface SkillItem {
  name: string;
  category: 'Networking & Security' | 'SOC & Threat Defense' | 'Security Tools' | 'Programming & Scripting';
  practicalUse: string;
  context: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  activities: string[];
  metrics?: { label: string; value: string }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialLevel?: string;
  verificationUrl?: string;
  description: string;
}

export interface SignalNode {
  id: string;
  name: string;
  type: 'analyst' | 'siem' | 'firewall' | 'sensor' | 'gateway' | 'honeypot';
  x: number;
  y: number;
  status: string;
  telemetry: string;
  ip: string;
}
