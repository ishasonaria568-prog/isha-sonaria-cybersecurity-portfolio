/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b100e] text-[#eef2ef] selection:bg-[#b3f5c5]/25 selection:text-[#b3f5c5] font-sans antialiased">
      {/* Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About: Professional Overview, Degree & SOC Focus */}
        <About />

        {/* Projects: 4 Core Defensive Cybersecurity Projects */}
        <Projects />

        {/* Skills: Categorized Capability Matrix & Filter */}
        <Skills />

        {/* Experience: VRSecurity SOC Operations & TryHackMe CTF Labs */}
        <Experience />

        {/* Certifications: CSFP & Hackviser CORE Credentials */}
        <Certifications />

        {/* Contact: Direct Inquiries & Social Connections */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* In-Browser Interactive Resume & PDF Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
