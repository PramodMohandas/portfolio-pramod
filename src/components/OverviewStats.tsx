import React from 'react';
import { 
  Award, 
  Building2, 
  Cloud, 
  ShieldCheck, 
  Code2, 
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';

export const OverviewStats: React.FC = () => {
  const stats = [
    {
      id: 'experience',
      value: '14+',
      unit: 'Years',
      label: 'Software Engineering & Leadership',
      description: 'Designing enterprise solutions across .NET, C#, Java, TypeScript & Cloud',
      icon: Award,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'roles',
      value: '7',
      unit: 'Key Roles',
      label: 'Enterprise Positions Held',
      description: 'Crown Packaging, Mazepoint, UST Global, Cognizant, RM Education & more',
      icon: Building2,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'tech',
      value: '.NET 10',
      unit: 'Stack',
      label: 'Latest Tech Mastery',
      description: 'C# .NET 10, Microservices, CQRS, Kafka, Angular 14+, React & MongoDB',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'ai-cloud',
      value: '100%',
      unit: 'Cloud & AI',
      label: 'Azure & AI Integration',
      description: 'Azure AI, OpenAI, Document Intelligence, RAG Search & GitHub Copilot',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section className="py-10 bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-indigo-500/30 transition-all shadow-md group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-100 group-hover:text-indigo-300 transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-indigo-400 ml-1">
                    {stat.unit}
                  </span>
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-200 mb-1">{stat.label}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
