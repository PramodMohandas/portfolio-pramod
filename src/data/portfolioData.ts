import { WorkExperience, Education, SkillCategory, ArchitectureHighlight, ContactDetails } from '../types';

export const contactInfo: ContactDetails = {
  name: "Pramod Mohandas",
  role: "Senior Software Engineer / Lead Software Engineer",
  address: "29, Colne Drive, Didcot, Oxfordshire, OX11 7RZ, UK",
  cityCountry: "Didcot, Oxfordshire, UK",
  mobile: "+44 7570327604",
  email: "pramod9685@gmail.com",
  summary: "Results-driven Lead Software Engineer with 14+ years of expertise in designing, building, and leading enterprise-class .NET (C#), Java, and TypeScript solutions. Proven success leading Scrum teams to deliver robust, scalable insurance, financial, healthcare, and manufacturing applications. Deep experience with microservices, cloud (Azure), Azure DevOps, and best practices (SOLID, OO, design patterns, TDD/BDD). Known for strong mentorship, defining software architectures, implementing end-to-end SDLC, and accelerating delivery through AI-powered tooling including GitHub Copilot, Claude Code, and Azure AI.",
  yearsExperience: 14
};

export const workExperiences: WorkExperience[] = [
  {
    id: "crown-packaging",
    role: "Senior Full Stack Developer",
    company: "Crown Packaging Manufacturing UK Limited",
    location: "Wantage, UK",
    period: "2023 – Present",
    domain: "Manufacturing",
    isCurrent: true,
    description: [
      "Involved in end-to-end design and development of enterprise manufacturing applications, adopting Agile Scrum and Extreme Programming (XP).",
      "Architected scalable microservices using C# .NET 9, implementing CQRS, Mediator, and SOLID principles for maintainability and high performance.",
      "Designed and built modern front-end UI components in Angular and Material UI, collaborating closely with Product Owners.",
      "Instituted code quality standards, code reviews, and refactoring sessions to improve maintainability and reduce technical debt.",
      "Drove automated unit and GUI testing using MSTest, xUnit, SpecFlow, Playwright, Cucumber.js, Jasmine, and Karma.",
      "Championed DevOps CI/CD pipelines via Azure DevOps and Git, ensuring reliable and rapid release cycles.",
      "Monitored applications using ELK Stack, Grafana, and Azure Log Analytics.",
      "Engineered Kafka event-driven messaging pipelines and integrated SignalR to achieve sub-second real-time UI latency.",
      "Spearheaded AI-powered R&D (Document Intelligence/AI Search), leveraging Azure AI, Azure OpenAI, and GitHub Copilot for advanced enterprise functionality.",
      "Integrated SonarQube for code quality and Nexus IQ for security vulnerability scanning directly into Azure DevOps pipelines.",
      "Utilized MongoDB as the primary scalable database for manufacturing operations."
    ],
    technologies: [
      ".NET 9", "C#", "Angular", "Material UI", "Microservices", "CQRS", "Kafka",
      "SignalR", "Azure AI", "Azure OpenAI", "Playwright", "SpecFlow", "MongoDB",
      "ELK Stack", "Grafana", "SonarQube", "Nexus IQ", "Azure DevOps"
    ],
    keyProject: "Smart Manufacturing Operational Platform & AI Document Search"
  },
  {
    id: "mazepoint",
    role: "Full Stack Developer",
    company: "Mazepoint Ltd",
    location: "London, UK",
    period: "2022 – 2023",
    domain: "Automotive & Public Sector",
    description: [
      "Designed and developed high-performance business intelligence products for automotive and public sector enterprise clients.",
      "Implemented microservices and REST APIs with C# .NET, Angular 14+, and IdentityServer4 for secure authentication.",
      "Leveraged Azure Cloud Services (Functions, Service Bus, Blob Storage, Log Analytics) for cloud-native scalability.",
      "Applied TDD using xUnit, FluentAssertions, and Moq for maximum code quality and test coverage.",
      "Migrated legacy systems to .NET 6 and modernized high-throughput data pipelines with Azure Functions.",
      "Collaborated directly with enterprise clients including Volkswagen, Mercedes-Benz, and the UK Home Office.",
      "Utilized SQL Server and Jedox as primary databases for multidimensional analytical data storage."
    ],
    technologies: [
      ".NET 6", "C#", "Angular 14+", "IdentityServer4", "Azure Functions",
      "Azure Service Bus", "Blob Storage", "SQL Server", "Jedox", "xUnit", "FluentAssertions"
    ],
    keyProject: "Enterprise BI Platform for Volkswagen, Mercedes-Benz & UK Home Office"
  },
  {
    id: "ust-global",
    role: "Senior Software Lead Engineer",
    company: "UST Global",
    location: "India",
    period: "2018 – 2022",
    domain: "Healthcare & Insurance",
    description: [
      "Delivered mission-critical healthcare insurance applications using .NET Core, Angular, and Azure Cloud infrastructure.",
      "Translated complex stakeholder and clinical requirements into iterative, highly scalable software solutions.",
      "Applied strict TDD methodologies and comprehensive test automation ensuring resilient, production-ready code.",
      "Lead technical engineering for ARMS (Accounts Receivable Management System), improving billing efficiency and claims processing throughput."
    ],
    technologies: [
      ".NET Core", "C#", "Angular", "Azure", "SQL Server", "TDD", "REST APIs", "Microservices"
    ],
    keyProject: "ARMS – Accounts Receivable Management System for Healthcare Insurance"
  },
  {
    id: "cognizant",
    role: "Associate",
    company: "Cognizant",
    location: "India",
    period: "2016 – 2018",
    domain: "HR & Enterprise Systems",
    description: [
      "Designed and maintained enterprise HR applications using ASP.NET MVC, Web API, AngularJS, and SQL Server.",
      "Developed and deployed robust SSIS packages for high-volume ETL data workflows.",
      "Built Talent Marketplace — a resource management web app optimizing allocation of corporate talent across global business units."
    ],
    technologies: [
      "ASP.NET MVC", "Web API", "AngularJS", "SQL Server", "SSIS", "C#", "T-SQL"
    ],
    keyProject: "Talent Marketplace – Global Resource Management System"
  },
  {
    id: "rm-education",
    role: "Software Engineer",
    company: "RM Education Solutions",
    location: "Milton Park, Didcot, UK",
    period: "2015 – 2016",
    domain: "Education",
    description: [
      "Developed education sector digital assessment solutions using ASP.NET MVC, Web API, WCF, and SQL Server.",
      "Engineered Web Assessor — a secure online assessment platform utilized by top UK universities including Oxford and Cambridge."
    ],
    technologies: [
      "ASP.NET MVC", "Web API", "WCF", "SQL Server", "C#", "JavaScript"
    ],
    keyProject: "Web Assessor – Online Assessment Platform for Oxford & Cambridge Universities"
  },
  {
    id: "sesame-software",
    role: "Software Engineer",
    company: "Sesame Software Solutions",
    location: "India",
    period: "2013 – 2015",
    domain: "Financial Services & Banking",
    description: [
      "Created mission-critical financial banking solutions using ASP.NET MVC, Web API, and SQL Server.",
      "Core developer for Beacon Pro — a full-featured digital banking platform powering cooperative banks across Kerala."
    ],
    technologies: [
      "ASP.NET MVC", "Web API", "SQL Server", "C#", "JavaScript", "T-SQL"
    ],
    keyProject: "Beacon Pro – Digital Banking Platform for Cooperative Banks"
  },
  {
    id: "cybrosys",
    role: "Software Engineer Trainee",
    company: "Cybrosys Technologies",
    location: "India",
    period: "2012 – 2013",
    domain: "Accounting",
    description: [
      "Contributed to enterprise accounting domain applications using ASP.NET and SQL Server.",
      "Gained foundational hands-on exposure to enterprise software design, database normalization, and structured development lifecycle."
    ],
    technologies: ["ASP.NET", "C#", "SQL Server", "HTML/CSS"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "C#", level: "Expert", featured: true },
      { name: ".NET / .NET Core (.NET 10)", level: "Expert", featured: true },
      { name: "TypeScript", level: "Expert", featured: true },
      { name: "JavaScript (ES6+)", level: "Expert", featured: true },
      { name: "Java", level: "Advanced", featured: true },
      { name: "SQL / T-SQL", level: "Expert", featured: true },
      { name: "Python", level: "Proficient" },
      { name: "Go", level: "Proficient" },
      { name: "C++", level: "Proficient" },
      { name: "HTML5 / CSS3 / SCSS", level: "Expert" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    iconName: "Layers",
    skills: [
      { name: "ASP.NET Core / Web API", level: "Expert", featured: true },
      { name: "Angular 14+ & Material UI", level: "Expert", featured: true },
      { name: "React.js & Redux", level: "Expert", featured: true },
      { name: "Blazor", level: "Advanced", featured: true },
      { name: "Node.js & Express", level: "Advanced" },
      { name: "NgRx", level: "Advanced" },
      { name: "Ag Grid & Highcharts / Chart.js", level: "Advanced" },
      { name: "Telerik UI", level: "Advanced" },
      { name: "Bootstrap & Tailwind CSS", level: "Expert" }
    ]
  },
  {
    title: "Architecture & Design",
    iconName: "Cpu",
    skills: [
      { name: "Microservices", level: "Expert", featured: true },
      { name: "CQRS & MediatR Pattern", level: "Expert", featured: true },
      { name: "Event-Driven Architecture", level: "Expert", featured: true },
      { name: "Microfrontends", level: "Advanced", featured: true },
      { name: "SOLID & Design Patterns", level: "Expert", featured: true },
      { name: "RESTful APIs & OpenAPI", level: "Expert" },
      { name: "Domain-Driven Design (DDD)", level: "Advanced" },
      { name: "Clean Architecture", level: "Expert" }
    ]
  },
  {
    title: "Cloud & DevOps",
    iconName: "Cloud",
    skills: [
      { name: "Azure DevOps & Pipelines", level: "Expert", featured: true },
      { name: "Azure Cloud Services", level: "Expert", featured: true },
      { name: "Azure Functions & Service Bus", level: "Expert", featured: true },
      { name: "Azure App Insights & Log Analytics", level: "Expert" },
      { name: "Docker & Kubernetes", level: "Advanced", featured: true },
      { name: "Git, GitLab & Bitbucket", level: "Expert" },
      { name: "SonarQube & Nexus IQ", level: "Advanced" },
      { name: "Jenkins & Octopus Deploy", level: "Advanced" },
      { name: "AWS & Google Cloud (GCP)", level: "Proficient" }
    ]
  },
  {
    title: "AI Technologies & R&D",
    iconName: "Sparkles",
    skills: [
      { name: "Azure OpenAI & AI Services", level: "Advanced", featured: true },
      { name: "Azure Document Intelligence", level: "Advanced", featured: true },
      { name: "Multimodal RAG in AI Search", level: "Advanced", featured: true },
      { name: "GitHub Copilot & Claude Code", level: "Expert", featured: true },
      { name: "Azure AI Foundry", level: "Advanced" }
    ]
  },
  {
    title: "Testing & Quality Assurance",
    iconName: "ShieldCheck",
    skills: [
      { name: "xUnit / MSTest / NUnit", level: "Expert", featured: true },
      { name: "Playwright Automation", level: "Expert", featured: true },
      { name: "TDD & BDD Methodologies", level: "Expert", featured: true },
      { name: "SpecFlow & Gherkin / Cucumber", level: "Advanced", featured: true },
      { name: "Moq & Fluent Assertions", level: "Expert" },
      { name: "Jasmine & Karma", level: "Advanced" },
      { name: "RestAssured Framework", level: "Proficient" }
    ]
  },
  {
    title: "Databases & Messaging",
    iconName: "Database",
    skills: [
      { name: "SQL Server & T-SQL", level: "Expert", featured: true },
      { name: "MongoDB", level: "Advanced", featured: true },
      { name: "Apache Kafka", level: "Advanced", featured: true },
      { name: "Redis Cache", level: "Advanced" },
      { name: "ClickHouse & Jedox", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "ELK Stack & Grafana", level: "Advanced" }
    ]
  }
];

export const educationList: Education[] = [
  {
    id: "bachelor",
    degree: "Bachelor of Computer Science & Engineering",
    institution: "Anna University",
    location: "Chennai, India",
    period: "2008 – 2012",
    score: "75%",
    details: "Focus on Computer Science fundamentals, Software Engineering, Object-Oriented Programming, Data Structures, Algorithms, and Database Management Systems."
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary Education (Science Stream)",
    institution: "Kerala State Board",
    location: "Kerala, India",
    period: "2004 – 2006",
    score: "75%",
    details: "Mathematics, Physics, Chemistry, and Computer Science focus."
  },
  {
    id: "sslc",
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "Kerala State Board",
    location: "Kerala, India",
    period: "2004",
    score: "84%",
    details: "Distinction in Mathematics and Science."
  }
];

export const architectureHighlights: ArchitectureHighlight[] = [
  {
    id: "mfg-cqrs-kafka",
    title: "Event-Driven Manufacturing Microservices Platform",
    subtitle: ".NET 9, CQRS, MediatR, Kafka, SignalR & Angular",
    description: "Designed for Crown Packaging UK to achieve high-volume manufacturing throughput with sub-second live telemetry updates across factory floor workstations.",
    components: [
      ".NET 9 Microservices with Clean Architecture",
      "CQRS separation via MediatR pattern",
      "Apache Kafka event bus for real-time messaging",
      "SignalR WebSocket bridge for zero-latency UI refreshes",
      "MongoDB for flexible document storage"
    ],
    benefits: [
      "Decoupled command and query processing for maximum performance",
      "Sub-100ms real-time status updates on manufacturing lines",
      "High resilience with fault-tolerant event processing"
    ],
    diagramType: "microservices"
  },
  {
    id: "ai-rag-search",
    title: "AI-Powered Multimodal Document Search & R&D System",
    subtitle: "Azure Document Intelligence, Azure OpenAI, Vector Search & RAG",
    description: "Engineered an AI document intelligence pipeline to parse, index, and query complex manufacturing blueprints, specs, and compliance documents.",
    components: [
      "Azure Document Intelligence OCR & Layout Extraction",
      "Azure AI Search with Multimodal Vector Indexing",
      "Azure OpenAI GPT Models for RAG Synthesis",
      "GitHub Copilot & Claude Code accelerated development",
      "Azure Key Vault & Managed Identities for security"
    ],
    benefits: [
      "90% reduction in manual document search time for engineering specs",
      "Accurate semantic context extraction from structured & unstructured tables",
      "Enterprise-grade security adhering to Azure AD & RBAC standards"
    ],
    diagramType: "ai-rag"
  },
  {
    id: "bi-data-pipeline",
    title: "Enterprise BI & Data Analytics Engine",
    subtitle: "Azure Functions, Service Bus, SQL Server & Jedox",
    description: "Built for Mazepoint powering automotive giants (Volkswagen, Mercedes-Benz) and UK Home Office with real-time financial and operational BI dashboards.",
    components: [
      "Azure Service Bus message queueing",
      "Azure Functions serverless data processors",
      "SQL Server & Jedox multidimensional databases",
      "IdentityServer4 secure OAuth2/OIDC authentication",
      "Angular Material UI dashboards with Highcharts & Ag-Grid"
    ],
    benefits: [
      "Seamless integration across multi-tenant enterprise clients",
      "Rapid processing of heavy daily financial reports",
      "Modernized legacy data pipelines to .NET serverless"
    ],
    diagramType: "bi-pipeline"
  }
];

export const faqItems = [
  {
    question: "What is Pramod's current role and total years of experience?",
    answer: "Pramod is currently a Senior Full Stack Developer at Crown Packaging Manufacturing UK Limited in Wantage, UK. He has over 14 years of professional software engineering and technical leadership experience."
  },
  {
    question: "Where is Pramod located, and what is his location flexibility?",
    answer: "Pramod resides in Didcot, Oxfordshire, UK (OX11 7RZ). He is based locally in Oxfordshire and has extensive experience working on-site, hybrid, and remotely across UK and international enterprise environments."
  },
  {
    question: "What are Pramod's primary technology stack specialties?",
    answer: "Pramod specializes in C#, .NET/.NET Core (up to .NET 10), ASP.NET Core Web API, Microservices, Angular 14+, React.js, TypeScript, Azure DevOps, Azure AI Services / OpenAI, SQL Server, MongoDB, Kafka, and automated testing (Playwright, xUnit, SpecFlow)."
  },
  {
    question: "Has Pramod worked with AI and modern software tooling?",
    answer: "Yes! Pramod spearheads AI R&D at Crown Packaging using Azure AI Services, Azure OpenAI, Document Intelligence, Multimodal RAG in AI Search, GitHub Copilot, and Claude Code to accelerate SDLC and build smart enterprise applications."
  },
  {
    question: "What enterprise domains does Pramod have experience in?",
    answer: "Pramod has deep domain experience across Manufacturing, Financial Services & Banking, Healthcare & Insurance, Education (including platforms for Oxford and Cambridge Universities), and Automotive BI (Volkswagen, Mercedes-Benz, UK Home Office)."
  }
];
