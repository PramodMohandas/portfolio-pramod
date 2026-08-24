import React from 'react';
import { contactInfo } from '../data/portfolioData';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Code2, 
  Bot, 
  ExternalLink,
  ChevronRight,
  Terminal,
  Cpu
} from 'lucide-react';

// Import generated photo
import headshotPhoto from '../assets/images/pramod_headshot_1786532097506.jpg';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAiAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAiAssistant }) => {
  return (
    <section id="about" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-950">
      
      {/* Subtle Grid / Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Based in Didcot, Oxfordshire, UK</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">14+ Years Enterprise Tech Lead</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-none">
                {contactInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
                Senior Lead Software Engineer
              </p>
            </div>

            {/* Concise Summary Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Results-driven Lead Software Architect & Engineer with <span className="text-indigo-300 font-semibold">14+ years of expertise</span> in architecting enterprise .NET, Java, and TypeScript microservices. Specializing in cloud engineering (Azure), CQRS, event-driven messaging (Kafka), automated quality (TDD/BDD, Playwright), and AI integration (Azure OpenAI, RAG, GitHub Copilot).
            </p>

            {/* Core Tech Stack Pills */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                Key Technologies & Architectures
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'C# .NET 10', 
                  'Angular 14+', 
                  'React.js', 
                  'Microservices & CQRS', 
                  'Kafka & SignalR', 
                  'Azure Cloud & DevOps', 
                  'Azure OpenAI & RAG', 
                  'TDD / SpecFlow / Playwright', 
                  'MongoDB & SQL Server'
                ].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium rounded-lg shadow-sm hover:border-indigo-500/40 hover:text-indigo-300 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm shadow-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>View Formatted CV</span>
              </button>

              <button
                onClick={onOpenAiAssistant}
                className="px-5 py-3 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-500/30 text-indigo-300 font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <Bot className="w-4 h-4 text-indigo-400 animate-pulse" />
                <span>Ask AI Representative</span>
              </button>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{contactInfo.email}</span>
              </a>
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <Phone className="w-4 h-4 text-indigo-400" />
                <span>{contactInfo.mobile}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>{contactInfo.cityCountry}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Headshot Photo Card & Quick Tech Matrix */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl overflow-hidden">
                
                {/* Profile Photo */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 mb-5">
                  <img
                    src={headshotPhoto}
                    alt={contactInfo.name}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-4">
                    <p className="text-white font-bold text-lg">{contactInfo.name}</p>
                    <p className="text-indigo-300 text-xs font-medium">Senior Software Lead Engineer</p>
                  </div>
                </div>

                {/* Key Roles Highlights Mini Badge Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">Current Position</p>
                    <p className="text-slate-200 font-bold truncate">Crown Packaging UK</p>
                    <p className="text-indigo-400 text-[10px]">Senior Full Stack Lead</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">UK Location</p>
                    <p className="text-slate-200 font-bold truncate">Didcot, Oxfordshire</p>
                    <p className="text-indigo-400 text-[10px]">OX11 7RZ, UK</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">Specialty</p>
                    <p className="text-slate-200 font-bold truncate">Microservices & AI</p>
                    <p className="text-indigo-400 text-[10px]">.NET 10, Kafka, RAG</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">Quality Focus</p>
                    <p className="text-slate-200 font-bold truncate">TDD / BDD / Playwright</p>
                    <p className="text-indigo-400 text-[10px]">SonarQube & Nexus IQ</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
