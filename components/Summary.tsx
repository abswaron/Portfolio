import React, { useState } from 'react';
import { Terminal, Database, Shield, Server, ArrowRight, CheckCircle, Play, Layers, Activity } from 'lucide-react';

export const Summary: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('mfe');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [demoState, setDemoState] = useState<string>('idle'); // idle -> authenticating -> validating -> completed
  const [demoLogs, setDemoLogs] = useState<string[]>(['System idle. Click "Run FinTech Demo Trace" to process.']);

  const steps = [
    {
      id: 'mfe',
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      title: 'Micro-Frontend Layer',
      tech: 'Angular (v13-v18) / Kendo UI',
      desc: 'Containerized modular applications with Payments, Beneficiaries, and Bulk Transactions. Abhishek excels at building separate decoupled federated modules that bootstrap lazily for peak performance.'
    },
    {
      id: 'gateway',
      icon: <Shield className="w-5 h-5 text-teal-400" />,
      title: 'Security & Router',
      tech: 'System Design / API Gateways',
      desc: 'Handles JWT authorization, rate limiting, and request normalization. Guarantees banking grade transaction authorization during SDLC modeling.'
    },
    {
      id: 'backend',
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      title: 'Spring Boot Engine',
      tech: 'Java / Spring Security',
      desc: 'Robust enterprise core processing requests under High/Low-Level System Designs. Integrates reports, handles transaction validation rules and database sync wrappers.'
    },
    {
      id: 'db',
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      title: 'Transactional Database',
      tech: 'PostgreSQL / Oracle DB',
      desc: 'Atomic transactional storage with strict ACID compliance. Ensures structured multi-record synchronization and audit trails.'
    }
  ];

  const handleRunDemo = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setDemoState('authenticating');
    setDemoLogs(['[MFE Client] Initiating transfer payload...', '[MFE Client] Encrypting financial payload...']);
    
    setTimeout(() => {
      setActiveStep('gateway');
      setDemoState('gateway_authorized');
      setDemoLogs(prev => [...prev, '[API Gateway] Intercepting request...', '[API Gateway] Validating token block... SUCCESS.']);
      
      setTimeout(() => {
        setActiveStep('backend');
        setDemoState('validating');
        setDemoLogs(prev => [...prev, '[Spring Boot Backend] Initializing payment validator bean...', '[Spring Boot Backend] Core transactional routing to destination modules...', '[Spring Boot Backend] Triggering bulk ledger validation check...']);
        
        setTimeout(() => {
          setActiveStep('db');
          setDemoState('completed');
          setDemoLogs(prev => [...prev, '[Database Layer] Locking transaction rows...', '[Database Layer] Committing payment status. Commit code: TRANS_9875A...', '[System Tracer] Transaction completed successfully. 🚀']);
          setIsPlaying(false);
        }, 1800);
      }, 1800);
    }, 1500);
  };

  const handleReset = () => {
    setActiveStep('mfe');
    setDemoState('idle');
    setDemoLogs(['Tracer reset. Ready for deployment trace.']);
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-b border-zinc-900">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-emerald-500"></span>
            <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest">Core Narrative</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Architecting Robust Banking Systems
          </h2>
          <p className="text-zinc-400 leading-relaxed text-base md:text-lg mb-4">
            Abhishek is an experienced Software Engineer specializing in Angular and Front-End development within the **FinTech** sector, with a deep command of full-stack patterns. 
          </p>
          <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
            He has a outstanding track record building highly optimized micro-frontend architectures, delivering clean, securely-routed transactional interfaces for some of the dynamic products at **Mindgate Solutions**.
          </p>
        </div>

        {/* Full-Stack Trace Sandbox Panel */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Main Sandbox Interactive Control */}
          <div className="lg:col-span-12 xl:col-span-8 p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-900 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-white text-lg font-bold flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-emerald-400" />
                    Interactive Full-Stack Architecture Trace
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                    Step inside Abhishek's domain — witness a mock transactional payment tracer from client MFE to backend DB.
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRunDemo}
                    disabled={isPlaying}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-zinc-950 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
                  >
                    <Play className="w-3.5 h-3.5 fill-zinc-950 text-zinc-950" />
                    {isPlaying ? 'Tracing...' : 'Run FinTech Trace'}
                  </button>
                  <button
                    onClick={handleReset}
                    disabled={isPlaying}
                    className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border border-zinc-800"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Dynamic Steps visualizer */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 relative">
                {steps.map((step, idx) => {
                  const isActive = activeStep === step.id;
                  return (
                    <div key={step.id} className="relative flex-1">
                      <button
                        onClick={() => !isPlaying && setActiveStep(step.id)}
                        disabled={isPlaying}
                        className={`w-full p-4 h-full rounded-xl border text-left transition-all relative ${
                          isActive 
                            ? 'bg-zinc-900 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.05)] text-white' 
                            : 'bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:border-zinc-800'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className={`${isActive ? 'opacity-100' : 'opacity-60'}`}>{step.icon}</span>
                          <span className="text-[10px] text-zinc-600 font-mono font-bold">0{idx + 1}</span>
                        </div>
                        <h4 className={`text-xs font-bold font-mono transition-colors ${isActive ? 'text-emerald-400' : 'text-zinc-300'}`}>
                          {step.title}
                        </h4>
                        <p className="text-[10px] text-zinc-500 font-mono mt-1">{step.tech}</p>
                      </button>

                      {idx < 3 && (
                        <div className="hidden md:block absolute top-[40%] -right-3.5 z-20">
                          <ArrowRight className={`w-4 h-4 transition-colors ${isActive ? 'text-emerald-500' : 'text-zinc-800'}`} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Micro details panel for the selected step */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900/60 flex flex-col md:flex-row md:items-start md:justify-between gap-4 mt-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-zinc-500 uppercase">Selected Component:</span>
                  <span className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-emerald-400 text-[10px] font-mono rounded">
                    {steps.find(s => s.id === activeStep)?.tech}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-zinc-200 mb-1">
                  {steps.find(s => s.id === activeStep)?.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {steps.find(s => s.id === activeStep)?.desc}
                </p>
              </div>

              <div className="shrink-0 md:border-l md:border-zinc-900 md:pl-6 text-xs text-zinc-500 space-y-2 max-w-[200px] font-mono text-[11px]">
                <div className="flex items-center gap-1.5 text-zinc-400 font-semibold uppercase tracking-wider text-[10px]">
                  <Activity className="w-3 h-3 text-emerald-500" />
                  Engineering Scope
                </div>
                <p>• High-concurrency design</p>
                <p>• Clean architectural decoupling</p>
                <p>• Strict audit control logs</p>
              </div>
            </div>
          </div>

          {/* Operational logs & visual terminal mock */}
          <div className="lg:col-span-12 xl:col-span-4 p-6 rounded-2xl bg-zinc-900/25 border border-zinc-900 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-900">
                <span className="text-xs font-bold text-zinc-300 font-mono flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  LIVETRACE.LOG
                </span>
                <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-wider">SECURE BANK PORT</span>
              </div>
              
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-900/60 font-mono text-[11px] text-zinc-400 space-y-2.5 overflow-y-auto h-56 scrollbar-thin">
                {demoLogs.map((log, idx) => {
                  let logColor = 'text-zinc-500';
                  if (log.includes('SUCCESS') || log.includes('completed')) logColor = 'text-emerald-400';
                  if (log.includes('[API Gateway]')) logColor = 'text-teal-400';
                  if (log.includes('[Spring Boot]')) logColor = 'text-cyan-400';
                  if (log.includes('[Database]')) logColor = 'text-indigo-400';
                  return (
                    <div key={idx} className={`${logColor} leading-relaxed`}>
                      <span className="text-zinc-700 select-none mr-1.5">&gt;&gt;</span>
                      {log}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Finished transactions record audit keys correctly in high volume ledger models.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
