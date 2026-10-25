import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[#28352e] bg-[#0b100e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reference Section Number */}
        <div className="section-num">04 /</div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#eef2ef] tracking-tight font-sans">
            Practical operations &amp; lab training.
          </h2>
          <p className="mt-3 text-base text-[#a1aaa5] max-w-2xl leading-relaxed">
            Real cybersecurity capability is forged in continuous practice. These operational milestones reflect simulated SOC environments and intensive competitive labs.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="project-card space-y-5"
            >
              {/* Header inside Experience Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#28352e]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#b3f5c5] mb-1">
                    <span>{exp.period.toUpperCase()}</span>
                    <span className="text-[#304336]">&bull;</span>
                    <span className="text-[#98b6a3]">{exp.type.toUpperCase()}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#eef2ef] font-sans">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-sans text-[#a1aaa5]">
                    {exp.organization}
                  </div>
                </div>

                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1 sm:pt-0">
                    {exp.metrics.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="project-tag"
                      >
                        {m.label}: {m.value}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Highlights / Activities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {exp.activities.map((act, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#d2d9d5]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b3f5c5] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
