import React, { useState, useRef, useEffect } from 'react';
import { contactInfo, workExperiences, faqItems } from '../data/portfolioData';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  User, 
  RefreshCw, 
  CheckCircle2, 
  FileText,
  MessageSquare,
  HelpCircle
} from 'lucide-react';

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I am Pramod's AI Representative. I have full knowledge of Pramod Mohandas's 14+ years CV, including his leadership at Crown Packaging UK, .NET 10 expertise, Azure microservices, and AI R&D. How can I help you evaluate Pramod today?`,
      timestamp: 'Just now'
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const quickPrompts = [
    "What is Pramod's experience with .NET 10 & C#?",
    "Where is Pramod located & what is his UK status?",
    "How does Pramod use AI (Copilot, Claude, Azure OpenAI)?",
    "Tell me about his work at Crown Packaging UK",
    "What automated testing frameworks does Pramod use?"
  ];

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('.net') || q.includes('c#') || q.includes('framework') || q.includes('stack')) {
      return `Pramod has 14+ years of deep hands-on expertise in C# and .NET (from earlier .NET Framework versions up to latest .NET 10). At Crown Packaging UK, he architects microservices using .NET 9 with CQRS, MediatR, and SOLID principles. He also builds front-ends in Angular 14+ and React.js, and leverages Blazor, ASP.NET Web API, Node.js, and MongoDB.`;
    }

    if (q.includes('location') || q.includes('didcot') || q.includes('oxford') || q.includes('uk') || q.includes('relocat')) {
      return `Pramod is based in Didcot, Oxfordshire, UK (OX11 7RZ). He is located locally in Oxfordshire with strong proximity to Oxford, London, Wantage, and Reading. He has 14+ years of enterprise experience across UK organizations including Crown Packaging UK (Wantage), Mazepoint (London), and RM Education (Didcot).`;
    }

    if (q.includes('ai') || q.includes('copilot') || q.includes('claude') || q.includes('openai') || q.includes('rag')) {
      return `Pramod actively spearheads AI-powered R&D and SDLC acceleration. At Crown Packaging UK, he engineered Document Intelligence & Multimodal RAG search using Azure OpenAI and Azure AI Search for blueprint & spec lookup. In his daily workflow, he leverages GitHub Copilot, Claude Code, and Azure AI Foundry to accelerate high-quality software delivery.`;
    }

    if (q.includes('crown') || q.includes('packaging') || q.includes('wantage') || q.includes('current')) {
      return `At Crown Packaging Manufacturing UK Limited (2023–Present), Pramod is Senior Full Stack Developer & Lead Engineer. He leads microservice architectures (.NET 9, CQRS, MediatR), Kafka event messaging, SignalR low-latency UI, Angular/Material UI front-ends, Playwright/SpecFlow test automation, and AI document search, maintaining MongoDB as the core operational database.`;
    }

    if (q.includes('test') || q.includes('quality') || q.includes('playwright') || q.includes('specflow') || q.includes('tdd') || q.includes('bdd')) {
      return `Pramod is a staunch champion of TDD/BDD and zero-defect software engineering. His testing toolkit includes xUnit, MSTest, NUnit, Playwright GUI automation, SpecFlow with Gherkin/Cucumber, Moq, Jasmine/Karma, and RestAssured. He integrates SonarQube and Nexus IQ into Azure DevOps pipelines for code quality & security scanning.`;
    }

    if (q.includes('mazepoint') || q.includes('volkswagen') || q.includes('mercedes') || q.includes('bi') || q.includes('home office')) {
      return `At Mazepoint Ltd in London (2022–2023), Pramod built enterprise Business Intelligence products for Volkswagen, Mercedes-Benz, and the UK Home Office. He implemented .NET microservices, Azure Functions, Service Bus, IdentityServer4, and SQL Server / Jedox analytics pipelines.`;
    }

    if (q.includes('arms') || q.includes('health') || q.includes('ust') || q.includes('cognizant') || q.includes('education') || q.includes('oxford')) {
      return `Pramod's background spans major enterprise domains:
- Healthcare Insurance: ARMS (Accounts Receivable Management System) at UST Global.
- Education: Web Assessor online assessment platform for Oxford & Cambridge Universities at RM Education.
- Banking: Beacon Pro digital banking platform at Sesame Software.
- Enterprise HR: Talent Marketplace global resource management at Cognizant.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire')) {
      return `You can reach Pramod directly:
- Email: pramod9685@gmail.com
- Mobile: +44 7570327604
- Address: 29, Colne Drive, Didcot, Oxfordshire, OX11 7RZ, UK.`;
    }

    return `Pramod Mohandas is a Senior Lead Software Engineer with 14+ years of expertise in C#, .NET 10, Microservices, Angular, React, Azure DevOps, Kafka, Playwright test automation, and AI integration (Azure OpenAI, RAG). Feel free to ask about his specific roles, UK location in Didcot, or view his full resume!`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const answerText = generateAnswer(query);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: answerText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl h-[650px] max-h-[90vh] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
              <Bot className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">Ask Pramod's AI Representative</h3>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full">
                  ONLINE
                </span>
              </div>
              <p className="text-xs text-slate-400">Instant answers about Pramod's 14+ years experience & tech depth</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-950/40">
          
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-xl bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[80%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-indigo-600 text-white rounded-br-none shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none shadow-sm'
              }`}>
                <p className="whitespace-pre-line">{msg.text}</p>
                <span className={`text-[10px] block mt-1.5 ${msg.sender === 'user' ? 'text-indigo-200 text-right' : 'text-slate-500'}`}>
                  {msg.timestamp}
                </span>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 items-center text-xs text-indigo-400 italic">
              <div className="w-8 h-8 rounded-xl bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Bot className="w-4 h-4" />
              </div>
              <span className="animate-pulse">Pramod's AI Representative is thinking...</span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-6 py-2 bg-slate-950 border-t border-slate-800/80 overflow-x-auto flex gap-2 no-scrollbar">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-indigo-300 whitespace-nowrap transition-colors cursor-pointer shrink-0"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            placeholder="Type any question about Pramod's skills or experience..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/60"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputQuery.trim()}
            className="p-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white rounded-xl transition-all cursor-pointer shadow-md shadow-indigo-600/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
