import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';
import { Network, Shield, Wrench, Code2, Search, Info } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS[0]);

  const categories = [
    { id: 'All', label: 'Complete Map', count: SKILLS.length },
    { id: 'Networking & Security', label: 'Networking & Security', count: SKILLS.filter(s => s.category === 'Networking & Security').length, icon: Network },
    { id: 'SOC & Threat Defense', label: 'SOC & Threat Defense', count: SKILLS.filter(s => s.category === 'SOC & Threat Defense').length, icon: Shield },
    { id: 'Security Tools', label: 'Security Tools', count: SKILLS.filter(s => s.category === 'Security Tools').length, icon: Wrench },
    { id: 'Programming & Scripting', label: 'Programming & Scripting', count: SKILLS.filter(s => s.category === 'Programming & Scripting').length, icon: Code2 }
  ];

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.practicalUse.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.context.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#E2E8F0] bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-1 flex items-center gap-2">
              <span>03</span>
              <span className="text-[#CBD5E1]">/</span>
              <span>CAPABILITY MAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263C] tracking-tight">
              Technical Capabilities & Toolchain
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl font-sans">
              Hands-on competencies developed through SOC training, TryHackMe labs, and defensive tool development, evaluated without arbitrary percentages.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter capability or tool..."
              aria-label="Filter skills"
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-white border border-[#CBD5E1] text-xs text-[#17263C] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] font-mono transition-colors shadow-2xs"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none text-xs font-mono mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-md transition-all whitespace-nowrap flex items-center gap-2 border ${
                activeCategory === cat.id
                  ? 'bg-white border-[#2563EB] text-[#2563EB] font-bold shadow-xs'
                  : 'bg-white border-[#E2E8F0] text-[#64748B] hover:text-[#17263C] hover:border-[#CBD5E1]'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] ${activeCategory === cat.id ? 'bg-[#2563EB]/10 text-[#2563EB]' : 'bg-[#F7F6F2] text-[#64748B]'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Capability Grid & Inspection Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Skill Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill.name === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedSkill(skill);
                    }
                  }}
                  className={`p-3.5 rounded-lg border text-left transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#2563EB] shadow-xs ring-1 ring-[#2563EB]'
                      : 'bg-white border-[#E2E8F0] hover:border-[#CBD5E1]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-[#64748B] truncate max-w-[120px]">
                      {skill.category.split('&')[0].trim()}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#2563EB]' : 'bg-[#CBD5E1]'}`} />
                  </div>
                  <h4 className="text-sm font-bold text-[#17263C] tracking-tight">
                    {skill.name}
                  </h4>
                  <p className="text-[11px] text-[#64748B] mt-1 line-clamp-2 font-sans leading-snug">
                    {skill.practicalUse}
                  </p>
                </div>
              );
            })}

            {filteredSkills.length === 0 && (
              <div className="col-span-full p-8 text-center bg-white rounded-lg border border-[#E2E8F0] text-[#64748B] font-mono text-xs">
                No matching skill found for "{searchQuery}".
              </div>
            )}
          </div>

          {/* Right: Detailed Capability Dossier */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                <span className="text-xs text-[#2563EB] font-bold flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  CAPABILITY DOSSIER
                </span>
                <span className="text-[#64748B] text-[10px] uppercase font-semibold">
                  {selectedSkill.category}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-[#64748B] block">COMPETENCY IDENTIFIER</span>
                <h3 className="text-xl font-extrabold text-[#17263C] font-display mt-0.5">
                  {selectedSkill.name}
                </h3>
              </div>

              <div className="space-y-1 bg-[#F7F6F2] p-3 rounded-lg border border-[#E2E8F0]">
                <span className="text-[10px] text-[#2563EB] font-bold uppercase tracking-wider block">
                  PRACTICAL OPERATIONAL USE
                </span>
                <p className="text-[#17263C] text-xs font-sans leading-relaxed">
                  {selectedSkill.practicalUse}
                </p>
              </div>

              <div className="space-y-1 bg-[#F7F6F2] p-3 rounded-lg border border-[#E2E8F0]">
                <span className="text-[10px] text-[#0F766E] font-bold uppercase tracking-wider block">
                  APPLIED LAB & TOOL CONTEXT
                </span>
                <p className="text-[#17263C] text-xs font-sans leading-relaxed">
                  {selectedSkill.context}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-[10px] text-[#64748B]">
                <span>Evaluation: Verified via Labs</span>
                <span className="text-[#0F766E] font-bold">Active Competency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
