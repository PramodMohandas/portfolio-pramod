import React, { useState, useMemo } from 'react';
import { workExperiences } from '../data/portfolioData';
import { WorkExperience } from '../types';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Search, 
  Layers, 
  CheckCircle2,
  Cpu,
  ExternalLink
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('crown-packaging');

  const domains = ['All', 'Manufacturing', 'Automotive & Public Sector', 'Healthcare & Insurance', 'HR & Enterprise Systems', 'Education', 'Financial Services & Banking'];

  const filteredExperiences = useMemo(() => {
    return workExperiences.filter((exp) => {
      const matchesDomain = selectedDomain === 'All' || exp.domain.toLowerCase().includes(selectedDomain.toLowerCase());
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesDomain;

      const matchesSearch = 
        exp.role.toLowerCase().includes(query) ||
        exp.company.toLowerCase().includes(query) ||
        exp.location.toLowerCase().includes(query) ||
        exp.technologies.some(t => t.toLowerCase().includes(query)) ||
        (exp.keyProject && exp.keyProject.toLowerCase().includes(query)) ||
        exp.description.some(d => d.toLowerCase().includes(query));

      return matchesDomain && matchesSearch;
    });
  }, [selectedDomain, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            <span>Career History & Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Professional Work Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            14+ years of hands-on software development, microservices architecture, technical team leadership, and delivery across enterprise UK and global organizations.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 space-y-4 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl shadow-xl">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search role, company, or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/60"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Domain Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
              {domains.map((dom) => (
                <button
                  key={dom}
                  onClick={() => setSelectedDomain(dom)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedDomain === dom
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>

          </div>

          {(selectedDomain !== 'All' || searchQuery) && (
            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
              <span>Showing {filteredExperiences.length} of {workExperiences.length} experiences</span>
              <button 
                onClick={() => { setSelectedDomain('All'); setSearchQuery(''); }}
                className="text-indigo-400 hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}

        </div>

        {/* Timeline List */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-slate-800/80">
          
          {filteredExperiences.length === 0 ? (
            <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800 text-slate-400">
              <p className="text-sm">No experience matching your filter criteria.</p>
              <button 
                onClick={() => { setSelectedDomain('All'); setSearchQuery(''); }}
                className="mt-2 text-xs text-indigo-400 hover:underline cursor-pointer"
              >
                Clear search and filters
              </button>
            </div>
          ) : (
            filteredExperiences.map((exp) => {
              const isExpanded = expandedId === exp.id;

              return (
                <div 
                  key={exp.id} 
                  className={`relative pl-10 sm:pl-16 transition-all duration-300 ${
                    exp.isCurrent ? 'opacity-100' : 'opacity-95'
                  }`}
                >
                  
                  {/* Timeline Node Dot */}
                  <div className={`absolute left-2 sm:left-6 top-6 -translate-x-1/2 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    exp.isCurrent 
                      ? 'bg-indigo-600 border-indigo-400 shadow-lg shadow-indigo-500/50 scale-110' 
                      : 'bg-slate-900 border-indigo-500/40'
                  }`}>
                    {exp.isCurrent && <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />}
                  </div>

                  {/* Main Experience Card */}
                  <div className={`rounded-2xl border transition-all overflow-hidden ${
                    isExpanded 
                      ? 'bg-slate-900/90 border-indigo-500/50 shadow-2xl shadow-indigo-950/40' 
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}>
                    
                    {/* Card Header (Clickable to Expand/Collapse) */}
                    <div 
                      onClick={() => toggleExpand(exp.id)}
                      className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5 flex-1">
                        
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-indigo-300">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <span className="px-2.5 py-0.5 text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full">
                              CURRENT ROLE
                            </span>
                          )}
                          <span className="px-2.5 py-0.5 text-[10px] font-medium bg-slate-800 text-slate-300 rounded-full">
                            {exp.domain}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-medium">
                          <span className="text-indigo-400 font-semibold flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-500" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1 text-slate-300 font-medium">
                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                            {exp.period}
                          </span>
                        </div>

                        {exp.keyProject && (
                          <div className="pt-1 flex items-center gap-1.5 text-xs text-cyan-300 font-medium">
                            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Major Project: <strong>{exp.keyProject}</strong></span>
                          </div>
                        )}

                      </div>

                      {/* Expand / Collapse Indicator */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-indigo-400 hidden sm:inline-block">
                          {isExpanded ? 'Hide Details' : 'View Achievements'}
                        </span>
                        <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </div>

                    </div>

                    {/* Expanded Content Details */}
                    {isExpanded && (
                      <div className="px-5 pb-6 sm:px-6 pt-2 border-t border-slate-800/80 space-y-5 animate-fadeIn">
                        
                        {/* Key Responsibilities & Achievements */}
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            Key Contributions & Achievements
                          </h4>
                          <ul className="space-y-2.5">
                            {exp.description.map((item, idx) => (
                              <li key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies Used */}
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-indigo-400" />
                            Technologies & Tools
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className="px-2.5 py-1 bg-slate-950 border border-slate-800 text-indigo-300 text-xs font-medium rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}

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
