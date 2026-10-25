# Isha Sonaria — Cybersecurity Portfolio & Threat Archive

Production-grade personal cybersecurity portfolio for **Isha Sonaria**, an aspiring cybersecurity professional focused on SOC operations, network security, ethical hacking, digital forensics, and defensive security tool engineering.

Live Concept: **The Digital Threat Archive**

---

## 🛡️ Overview & Key Features

- **Unique Visual Identity**: Styled after a modern Security Operations Center (SOC) and forensic investigation laboratory with deep graphite backgrounds, coordinate annotations, and crisp typography.
- **Forensic Signal Map**: Interactive SVG network topology with animated packet flows and node telemetry inspection (Analyst Workstation, Wazuh SIEM, Edge Firewall, Decoy Honeypot).
- **Investigation Console**: Real interactive command-line interface supporting commands (`profile`, `projects`, `skills`, `achievements`, `contact`, `clear`, `help`) with quick command pills and keyboard navigation.
- **Security Research Archive**:
  1. **PhishGuard ML** — Machine learning URL phishing detector (Random Forest, 16 static features, FastAPI, scikit-learn).
  2. **Email Header Forensics** — Forensic email analyzer verifying SPF, DKIM, DMARC, intermediate MTA hops, and risk scoring (Go, JavaScript, REST API).
  3. **SubScope** — Multithreaded command-line tool for subdomain enumeration, DNS resolution, and attack-surface mapping (Python, multithreading, CLI).
  4. **PDF Fortress** — Document protection utility with AES-256 encryption, granular permission controls, and SHA-256 integrity verification (Python, CLI, GUI).
- **Capability Map**: Categorized skills (Networking & Security, SOC & Threat Defense, Security Tools, Programming & Scripting) with practical usage context and search filtering.
- **Practical Training & CTF Milestones**: SOC Operations Trainee at VRSecurity, TryHackMe Top 2% global ranking with 100+ labs and Rank 1 in Bronze, Silver, and Gold leagues.
- **The Threat Intelligence Wall**: Interactive educational deep dive into 5 core cybersecurity concepts (Phishing Heuristics, Email Authentication Flow, Network Reconnaissance, SIEM Triage, Document Encryption).
- **Resume System**: In-browser curriculum vitae viewer with print layout and direct download of `Isha_Sonaria_Resume.pdf`.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ishasonaria568-prog/cybersecurity-portfolio.git

# Navigate into the project folder
cd cybersecurity-portfolio

# Install project dependencies
npm install
```

### Local Development

```bash
# Start local Vite development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Building for Production

```bash
# Compile and create production bundle in /dist
npm run build
```

### Previewing the Production Build

```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

The application is pre-configured with `vercel.json` for seamless client-side single-page application routing.

1. Import the repository into your Vercel Dashboard.
2. Ensure the build command is `npm run build` and output directory is `dist`.
3. Deploy!

---

## 📄 License & Attribution

Designed and engineered by Isha Sonaria.
© 2026 Isha Sonaria. All rights reserved.
