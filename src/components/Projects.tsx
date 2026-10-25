import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Github, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#28352e] bg-[#0b100e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Number Header in Reference Style */}
        <div className="section-num">01 /</div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#eef2ef] tracking-tight font-sans">
            When threat signals ask for proof.
          </h2>
          <p className="mt-3 text-base text-[#a1aaa5] max-w-2xl leading-relaxed">
            Theoretical security concepts must be verified through code. I engineered these four defensive applications to solve real challenges in offline phishing classification, email header analysis, attack-surface discovery, and file confidentiality.
          </p>
        </div>

        {/* Reference .project-grid: 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="project-card flex flex-col justify-between"
            >
              <div>
                {/* Reference .project-top */}
                <div className="project-top">
                  <span>{project.category.toUpperCase()}</span>
                  <span className="text-[#b3f5c5]">FEATURED</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#eef2ef] tracking-tight mb-2 font-sans group-hover:text-[#b3f5c5] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-[#b3f5c5] mb-3">
                  {project.category}
                </p>

                {/* Problem & Solution description */}
                <p className="text-sm text-[#a1aaa5] leading-relaxed mb-4">
                  {project.solution}
                </p>

                {/* Technical Highlights / Capabilities */}
                <div className="mb-5 space-y-1.5 border-l border-[#3a5042] pl-3">
                  {project.features.map((feature, i) => (
                    <div key={i} className="text-xs text-[#d2d9d5] flex items-center gap-2">
                      <span className="text-[#b3f5c5] text-[10px]">&gt;</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tags in reference style */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links matching Reference Link Style */}
              <div className="pt-4 border-t border-[#28352e] flex items-center justify-between text-xs font-mono">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a1aaa5] hover:text-[#b3f5c5] flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                  <span className="text-[#b3f5c5]">↗</span>
                </a>

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b3f5c5] hover:text-[#ffffff] flex items-center gap-1.5 font-bold transition-colors"
                  >
                    <span>Live Application</span>
                    <span>↗</span>
                  </a>
                ) : (
                  <span className="text-[#73897b]">CLI Tool</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
