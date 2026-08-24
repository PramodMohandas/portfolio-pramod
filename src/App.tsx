import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OverviewStats } from './components/OverviewStats';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AiAssistant } from './components/AiAssistant';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation Header */}
      <Header 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        />
        <OverviewStats />
        <ExperienceSection />
        <SkillsSection />
        <ArchitectureSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Formatted Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive AI Representative Assistant */}
      <AiAssistant 
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
        onOpenResume={() => {
          setIsAiAssistantOpen(false);
          setIsResumeOpen(true);
        }}
      />

    </div>
  );
}
