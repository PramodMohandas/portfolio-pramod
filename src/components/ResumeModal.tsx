import React, { useState } from 'react';
import { contactInfo, workExperiences, skillCategories, educationList } from '../data/portfolioData';
import { 
  X, 
  Copy, 
  Check, 
  Printer, 
  Download, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code2 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyCvText = () => {
    const cvText = `
Pramod Mohandas
${contactInfo.role}
Location: ${contactInfo.address}
Mobile: ${contactInfo.mobile} | Email: ${contactInfo.email}

SUMMARY:
${contactInfo.summary}

PROFESSIONAL EXPERIENCE:
${workExperiences.map(e => `
- ${e.role} | ${e.company} (${e.period})
  Location: ${e.location} | Domain: ${e.domain}
  Responsibilities:
  ${e.description.map(d => `  * ${d}`).join('\n')}
  Technologies: ${e.technologies.join(', ')}
`).join('\n')}

EDUCATION:
${educationList.map(e => `- ${e.degree} | ${e.institution} (${e.period}) - Grade: ${e.score}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl h-[85vh] max-h-[900px] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-950 border border-indigo-500/30 text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Curriculum Vitae - {contactInfo.name}</h3>
              <p className="text-xs text-slate-400">Senior Software Engineer / Lead Software Engineer (14+ Years)</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCvText}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-indigo-400" />}
              <span>{copied ? 'Copied CV!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-indigo-600/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto bg-slate-950/60 text-slate-200 space-y-8 font-sans">
          
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left space-y-3">
            <h1 className="text-3xl font-extrabold text-white">{contactInfo.name}</h1>
            <p className="text-lg font-bold text-indigo-400">{contactInfo.role}</p>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {contactInfo.address}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                {contactInfo.mobile}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                {contactInfo.email}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-400" />
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {contactInfo.summary}
            </p>
          </div>

          {/* Technical Skills Overview */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-400" />
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1">
                  <span className="font-bold text-slate-200">{cat.title}:</span>
                  <p className="text-slate-400">{cat.skills.map(s => s.name).join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-400" />
              Professional Experience
            </h2>

            <div className="space-y-6">
              {workExperiences.map((exp) => (
                <div key={exp.id} className="p-5 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-white">{exp.role}</h3>
                    <span className="text-xs font-semibold text-indigo-400">{exp.period}</span>
                  </div>
                  <div className="text-xs font-medium text-slate-400 flex flex-wrap gap-x-3">
                    <span className="text-slate-200 font-semibold">{exp.company}</span>
                    <span>• {exp.location}</span>
                    <span>• Domain: {exp.domain}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="leading-relaxed">{desc}</li>
                    ))}
                  </ul>
                  <div className="pt-2 flex flex-wrap gap-1">
                    {exp.technologies.map(t => (
                      <span key={t} className="px-2 py-0.5 bg-slate-950 border border-slate-800 text-[10px] text-slate-300 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              Education
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {educationList.map((edu) => (
                <div key={edu.id} className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1 text-xs">
                  <p className="font-bold text-white">{edu.degree}</p>
                  <p className="text-indigo-400">{edu.institution}</p>
                  <p className="text-slate-400">{edu.period} | Grade: {edu.score}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
