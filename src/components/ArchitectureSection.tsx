import React, { useState } from 'react';
import { architectureHighlights } from '../data/portfolioData';
import { ArchitectureHighlight } from '../types';
import { 
  Layers, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  Zap, 
  ShieldCheck, 
  Server, 
  Globe, 
  Bot, 
  Activity,
  Terminal
} from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [selectedArch, setSelectedArch] = useState<ArchitectureHighlight>(architectureHighlights[0]);
  const [activeComponentIndex, setActiveComponentIndex] = useState<number>(0);

  return (
    <section id="architecture" className="py-20 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Software Architecture & Engineering Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            System Design & Architecture Highlights
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Pramod's proven design patterns for mission-critical enterprise systems: Microservices, CQRS, Event-Driven Messaging with Kafka, Low-Latency SignalR WebSockets, and AI Multimodal RAG.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {architectureHighlights.map((arch) => (
            <button
              key={arch.id}
              onClick={() => { setSelectedArch(arch); setActiveComponentIndex(0); }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                selectedArch.id === arch.id
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/30 scale-102'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {arch.diagramType === 'microservices' && <Zap className="w-4 h-4 text-cyan-300" />}
              {arch.diagramType === 'ai-rag' && <Sparkles className="w-4 h-4 text-amber-300" />}
              {arch.diagramType === 'bi-pipeline' && <Activity className="w-4 h-4 text-emerald-300" />}
              <span>{arch.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Architecture Content Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-8">
          
          {/* Header Info */}
          <div className="space-y-2 border-b border-slate-800 pb-6">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              {selectedArch.subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
              {selectedArch.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
              {selectedArch.description}
            </p>
          </div>

          {/* Interactive Flow Visualizer */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-indigo-400" />
              Interactive Architectural Flow & Components (Click to Inspect)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {selectedArch.components.map((comp, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveComponentIndex(idx)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    activeComponentIndex === idx
                      ? 'bg-indigo-950/80 border-indigo-500 text-white shadow-lg shadow-indigo-950/50 ring-1 ring-indigo-500'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded-full border border-indigo-500/30">
                      STAGE 0{idx + 1}
                    </span>
                    {activeComponentIndex === idx && (
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                    )}
                  </div>
                  <p className="text-xs font-bold leading-snug">{comp}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Component View & Key Engineering Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-slate-800">
            
            <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-400">ACTIVE COMPONENT DETAILS</span>
                <span className="text-[10px] text-slate-400 font-mono">Stage 0{activeComponentIndex + 1} of {selectedArch.components.length}</span>
              </div>
              <h5 className="text-base font-bold text-white">
                {selectedArch.components[activeComponentIndex]}
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Integrated into the architecture using SOLID principles, automated tests (xUnit/Playwright), and observability monitoring (ELK Stack & Grafana) for maximum reliability and 99.99% uptime.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-2xl p-5 space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Key Engineering & Business Value
              </span>
              <ul className="space-y-2">
                {selectedArch.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
