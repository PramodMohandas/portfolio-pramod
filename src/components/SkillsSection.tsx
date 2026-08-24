import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Cloud, 
  Sparkles, 
  ShieldCheck, 
  Database, 
  Search,
  Check,
  Star
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'Layers': return Layers;
      case 'Cpu': return Cpu;
      case 'Cloud': return Cloud;
      case 'Sparkles': return Sparkles;
      case 'ShieldCheck': return ShieldCheck;
      case 'Database': return Database;
      default: return Code2;
    }
  };

  const categories = ['All', ...skillCategories.map(c => c.title)];

  const filteredCategories = skillCategories.map(category => {
    const isCategorySelected = activeCategory === 'All' || activeCategory === category.title;
    if (!isCategorySelected) return null;

    const filteredSkills = category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );

    if (filteredSkills.length === 0 && searchTerm) return null;

    return {
      ...category,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical Skillset & Proficiency
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Comprehensive breakdown of 14+ years in full-stack .NET, Java, TypeScript, Cloud DevOps, Microservices architecture, automated testing, and cutting-edge AI technologies.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-4 bg-slate-950/80 border border-slate-800 p-4 rounded-2xl shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skill (e.g. .NET 10, Kafka, React, AI)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/60"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.length === 0 ? (
            <div className="col-span-full text-center py-12 bg-slate-950/40 rounded-2xl border border-slate-800 text-slate-400">
              <p className="text-sm">No skills found matching "{searchTerm}".</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                className="mt-2 text-xs text-indigo-400 hover:underline cursor-pointer"
              >
                Clear search filter
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => {
              if (!category) return null;
              const IconComp = getCategoryIcon(category.iconName);

              return (
                <div 
                  key={category.title}
                  className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-indigo-500/30 transition-all shadow-lg flex flex-col justify-between"
                >
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/80">
                      <div className="w-9 h-9 rounded-xl bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-100">{category.title}</h3>
                    </div>

                    {/* Skill List */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`px-3 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all ${
                            skill.featured
                              ? 'bg-indigo-950/60 border-indigo-500/40 text-indigo-200 shadow-sm'
                              : 'bg-slate-900/80 border-slate-800 text-slate-300'
                          }`}
                        >
                          {skill.featured && (
                            <Star className="w-3 h-3 text-indigo-400 fill-indigo-400/30 shrink-0" />
                          )}
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase ml-1 ${
                              skill.level === 'Expert' 
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                                : skill.level === 'Advanced'
                                ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                                : 'bg-slate-800 text-slate-400'
                            }`}>
                              {skill.level}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
