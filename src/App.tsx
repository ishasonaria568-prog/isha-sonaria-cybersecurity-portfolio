/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InvestigationConsole } from './components/InvestigationConsole';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { ThreatIntelWall } from './components/ThreatIntelWall';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#17263C] selection:bg-[#2563EB]/15 selection:text-[#17263C]">
      {/* Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Hero Section with CSS-based Analyst Profile Panel */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Signature Interaction: The Light Investigation Console */}
        <InvestigationConsole />

        {/* About Section: Analyst Profile */}
        <About />

        {/* Projects: Security Research Archive */}
        <Projects />

        {/* Technical Skills: Capability Map */}
        <Skills />

        {/* Experience: Practical & Lab Training */}
        <Experience />

        {/* Certifications & Verified Achievements */}
        <Certifications />

        {/* Educational Research: The Threat Intelligence Wall */}
        <ThreatIntelWall />

        {/* Contact Section */}
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
