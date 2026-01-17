import React, { useState } from 'react';

const PROJECTS = [
  {
    id: 'crypto',
    title: "Scalable Crypto Market Pipeline", 
    subtitle: "Hybrid ELT Architecture",
    stack: ["Airflow", "DuckDB", "dbt", "PostgreSQL", "Docker"], 
    summary: "An end-to-end data platform that ingests 10M+ daily market events. Features a decoupled compute layer using DuckDB to pre-process JSON data, significantly reducing warehouse compute costs.",
    highlights: [
      "Vectorized pre-processing with DuckDB", 
      "Idempotent DAG design with automated recovery", 
      "Star Schema modeling with dbt-core"
    ],
    metric: "99.9%",
    metricLabel: "Uptime Reliability",
    repo: "https://github.com/MohdIllham/crypto-etl-pipeline", 
    color: "#6366f1"
  },
  {
    id: 'cv-tool',
    title: "Image Scaling & CSV Extractor", 
    subtitle: "Computer Vision & Automation",
    stack: ["Python", "OpenCV", "NumPy", "Tkinter"],
    summary: "A GUI-based automation tool designed to extract scaled coordinates from red-colored regions in images. Engineered to digitize manual data points with independent X/Y scaling and HSV color filtering.",
    highlights: [
      "Dual-range HSV Red Color Detection", 
      "Independent X/Y Coordinate Scaling", 
      "Automated CSV Export Workflow"
    ],
    metric: "< 1s",
    metricLabel: "Processing Time / Image",
    repo: "https://github.com/MohdIllham/Gamma-Ray-Detection", 
    color: "#f43f5e"
  }
];
const ArchitectureFlow = ({ projectId }: { projectId: string }) => {
  // Crypto project architecture (your existing one)
 
  if (projectId === 'crypto') {
    return (
      <div className="bg-slate-900 rounded-2xl p-6 md:p-10 my-8 border border-slate-800 shadow-2xl overflow-x-auto">
        <div className="flex items-center justify-between min-w-[650px] gap-4">
          {/* Source */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center">CoinGecko API</span>
          </div>

          <div className="flex-1 h-px bg-slate-800 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 px-2 text-[8px] text-slate-500 font-bold uppercase">Requests</div>
          </div>

          {/* Compute */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-2xl bg-orange-500/10 border border-orange-500/50 flex items-center justify-center text-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest text-center italic">DuckDB Compute</span>
          </div>

          <div className="flex-1 h-px bg-slate-800 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 px-2 text-[8px] text-slate-500 font-bold uppercase">Vectorized Load</div>
          </div>

          {/* Storage */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
                <path d="M3 12A9 3 0 0 0 21 12"/>
              </svg>
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center">PostgreSQL</span>
          </div>

          <div className="flex-1 h-px bg-slate-800 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 px-2 text-[8px] text-slate-500 font-bold uppercase">dbt Transformation</div>
          </div>

          {/* Marts */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-xl bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center text-indigo-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18"/>
                <path d="M18 17V9"/>
                <path d="M13 17V5"/>
                <path d="M8 17v-3"/>
              </svg>
            </div>
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider text-center">Data Marts</span>
          </div>
        </div>
      </div>
    );
  }

  // Gamma (Computer Vision) project architecture
  if (projectId === 'cv-tool') {
    return (
      <div className="bg-slate-900 rounded-2xl p-6 md:p-10 my-8 border border-slate-800 shadow-2xl overflow-x-auto">
        <div className="flex items-center justify-between min-w-[650px] gap-4">
          
          {/* Step 1: Image Input */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-xl bg-slate-800 border border-rose-500/30 flex items-center justify-center text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.15)]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <div className="text-center">
              <div className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">Image Input</div>
              <div className="text-[8px] text-slate-500 mt-1">JPG/PNG Files</div>
            </div>
          </div>

          <div className="flex-1 h-px bg-slate-800 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 px-2 text-[8px] text-slate-500 font-bold uppercase">Load</div>
          </div>

          {/* Step 2: Color Detection */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-2xl bg-rose-500/10 border border-rose-500/50 flex items-center justify-center text-rose-400 shadow-[0_0_30px_rgba(244,63,94,0.2)]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4Zm0 0h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828l-8.486 8.485M7 17h.01"/>
              </svg>
            </div>
            <div className="text-center">
              <div className="text-[10px] font-black text-rose-400 uppercase tracking-widest italic">Dual-Range HSV</div>
              <div className="text-[8px] text-slate-500 mt-1">Red Color Detection</div>
            </div>
          </div>

          <div className="flex-1 h-px bg-slate-800 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 px-2 text-[8px] text-slate-500 font-bold uppercase">Process</div>
          </div>

          {/* Step 3: Coordinate Scaling */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-xl bg-slate-800 border border-rose-500/30 flex items-center justify-center text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.15)]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6l3 1m0 0l-1 3m1-3l3-1m-3 1l-1-3m13 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path d="M11 10h4a2 2 0 012 2v6a2 2 0 01-2 2h-4a2 2 0 01-2-2v-6a2 2 0 012-2z"/>
                <path d="M17 2v4M21 6h-4M7 2v4M3 6h4"/>
              </svg>
            </div>
            <div className="text-center">
              <div className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">X/Y Scaling</div>
              <div className="text-[8px] text-slate-500 mt-1">Independent Axes</div>
            </div>
          </div>

          <div className="flex-1 h-px bg-slate-800 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 px-2 text-[8px] text-slate-500 font-bold uppercase">Transform</div>
          </div>

          {/* Step 4: CSV Export */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-xl bg-slate-800 border border-rose-500/30 flex items-center justify-center text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.15)]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                <path d="M9 10h.01M15 10h.01"/>
                <path d="M9.5 15.5l5-5"/>
                <path d="M14.5 15.5l-5-5"/>
              </svg>
            </div>
            <div className="text-center">
              <div className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">CSV Export</div>
              <div className="text-[8px] text-slate-500 mt-1">Automated Workflow</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;

};

export default function App() {
  const [activeTab, setActiveTab] = useState('projects');

  const skills = [
    { category: "Languages", items: ["Python", "SQL", "Bash", "TypeScript"] },
    { category: "Storage & Engines", items: ["DuckDB", "PostgreSQL", "Azure", "S3"] },
    { category: "Frameworks & Libraries", items: ["dbt-core", "OpenCV", "NumPy", "Pandas", "PySpark", "Pytest"] },
    { category: "Ops & Orchestration", items: ["Airflow", "Docker", "Terraform", "Git"] },
    { category: "Visualization", items: ["PowerBI", "Tableau", "Looker", "Grafana", "Salesforce"] }
  ];
  
    return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-700">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/50 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-sm">DE</div>
            <span className="font-black text-lg tracking-tighter">milham.dev</span>
          </div>
          <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
            <button 
              onClick={() => setActiveTab('projects')} 
              className={`hover:text-slate-900 transition-colors ${activeTab === 'projects' ? 'text-indigo-600' : ''}`}
            >
              Experience
            </button>
            <button 
              onClick={() => setActiveTab('skills')} 
              className={`hover:text-slate-900 transition-colors ${activeTab === 'skills' ? 'text-indigo-600' : ''}`}
            >
              Stack
            </button>
            <a href="https://github.com/MohdIllham" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">GitHub</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Building Scalable Data DNA</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 text-slate-900">
          Reliable <span className="text-slate-300">Architecture</span> for Unreliable Data.
        </h1>
        <p className="max-w-2xl text-xl text-slate-500 font-medium leading-relaxed">
          I am a Data Engineer focused on building robust ELT pipelines, cost-optimized compute systems,
          and automated tools that bridge the gap between physical and digital data.
        </p>
      </header>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-6 pb-40">
        {activeTab === 'projects' ? (
          <div className="space-y-32">
            {PROJECTS.map((project, index) => (
              <section key={project.id} className="group">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-6">
                  <div className="max-w-2xl">
                    <div 
                      className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2" 
                      style={{ color: project.color }}
                    >
                      {project.subtitle}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-6">
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-black uppercase tracking-widest border-b-2 border-slate-200 hover:border-indigo-500 pb-1 transition-all"
                    >
                      View Code
                    </a>
                  </div>
                </div>

                {/* Lead project gets the custom diagram */}
                <ArchitectureFlow projectId={project.id} />

                <div className="grid lg:grid-cols-3 gap-12 mt-12">
                  <div className="lg:col-span-2 space-y-8">
                    <p className="text-lg text-slate-600 font-medium leading-relaxed">
                      {project.summary}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          {h}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.stack.map(s => (
                        <span 
                          key={s} 
                          className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-black uppercase tracking-wider text-slate-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* High Density Metric Card */}
                  <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden h-fit">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                    </div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Efficiency Metric</h4>
                    <div className="text-5xl font-black text-slate-900 mb-2" style={{ color: project.color }}>
                      {project.metric}
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase">{project.metricLabel}</p>
                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase" style={{ color: project.color }}>
                        Verified Pipeline
                      </span>
                      <div className="flex gap-1">
                        {[1,2,3].map(i => (
                          <div 
                            key={i} 
                            className="w-1 h-3 rounded-full" 
                            style={{ backgroundColor: project.color }} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* SKILLS SECTION */
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((s) => (
              <div key={s.category} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-[11px] font-black text-indigo-500 uppercase tracking-[0.25em] mb-8">
                  {s.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {s.items.map(item => (
                    <span 
                      key={item} 
                      className="px-5 py-2.5 bg-slate-50 rounded-xl text-sm font-bold text-slate-600 border border-slate-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-4">
              Let's solve <span className="text-slate-500">bottlenecks</span>.
            </h2>
            <p className="text-slate-500 font-bold italic uppercase text-xs tracking-widest">
              Currently based in Kuala Lumpur, MY
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <a 
              href="mailto:illham.mustafa.work@gmail.com
" 
              className="text-2xl font-black hover:text-indigo-400 transition-colors mb-4"
            >
              contact@milham.dev
            </a>
            <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
              Handcrafted with Next.js & TypeScript
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
