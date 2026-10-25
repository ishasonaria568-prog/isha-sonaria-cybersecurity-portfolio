import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Search } from 'lucide-react';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGroups = SKILL_GROUPS.map((group) => {
    if (!searchQuery.trim()) return group;
    const query = searchQuery.toLowerCase();
    const matchesGroup = group.title.toLowerCase().includes(query);
    const matchedSkills = group.skills.filter((skill) =>
      skill.toLowerCase().includes(query)
    );
    if (matchesGroup) return group;
    if (matchedSkills.length > 0) return { ...group, skills: matchedSkills };
    return null;
  }).filter(Boolean) as typeof SKILL_GROUPS;

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#28352e] bg-[#0b100e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reference Section Number */}
        <div className="section-num">03 /</div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#eef2ef] tracking-tight font-sans">
              The tools I carry along the way.
            </h2>
            <p className="mt-3 text-base text-[#a1aaa5] max-w-2xl leading-relaxed">
              Every defensive investigation requires deliberate tooling. These are the protocols, platforms, and scripting languages I operate daily.
            </p>
          </div>

          {/* Reference Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#73897b] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools or protocols..."
              className="w-full pl-9 pr-4 py-2 rounded bg-[#121a15] border border-[#2b3b30] text-xs font-mono text-[#eef2ef] placeholder-[#73897b] focus:outline-none focus:border-[#b3f5c5] transition-colors"
            />
          </div>
        </div>

        {/* Reference .skills-grid with border-left articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredGroups.map((group, idx) => (
            <article
              key={group.title}
              className="skills-col space-y-4"
            >
              <span className="font-mono text-sm text-[#b3f5c5] block font-bold">
                0{idx + 1} &gt;_
              </span>

              <h3 className="text-lg font-bold text-[#eef2ef] tracking-tight font-sans">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="project-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
