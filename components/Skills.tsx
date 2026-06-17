import React from 'react';
import { SKILLS } from '../constants';
import { Globe, Cpu, Wrench, Shield, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  const getCategoryTheme = (cat: string) => {
    switch(cat) {
      case 'frontend': 
        return {
          title: 'Frontend Engineering',
          desc: 'SPAs, Micro-frontends, responsive rendering',
          icon: <Globe className="w-5 h-5 text-emerald-400" />,
          accent: 'border-emerald-500/20 hover:border-emerald-500/40',
          dot: 'bg-emerald-500',
          badge: 'bg-emerald-500/10 text-emerald-400'
        };
      case 'backend': 
        return {
          title: 'Backend Engineering',
          desc: 'REST APIs, validation beans, authentication',
          icon: <Cpu className="w-5 h-5 text-teal-400" />,
          accent: 'border-teal-500/20 hover:border-teal-500/40',
          dot: 'bg-teal-500',
          badge: 'bg-teal-500/10 text-teal-400'
        };
      case 'tools': 
        return {
          title: 'Operations & DevOps',
          desc: 'CI/CD flows, task tracking, version control',
          icon: <Wrench className="w-5 h-5 text-cyan-400" />,
          accent: 'border-cyan-500/20 hover:border-cyan-500/40',
          dot: 'bg-cyan-500',
          badge: 'bg-cyan-500/10 text-cyan-400'
        };
      default: 
        return {
          title: 'Technical Design',
          desc: 'High-Level & Low-Level architectural design',
          icon: <Shield className="w-5 h-5 text-indigo-400" />,
          accent: 'border-indigo-500/20 hover:border-indigo-500/40',
          dot: 'bg-indigo-500',
          badge: 'bg-indigo-500/10 text-indigo-400'
        };
    }
  };

  return (
    <section className="py-24 bg-zinc-950 relative border-b border-zinc-900">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-teal-500"></span>
            <span className="text-teal-400 font-mono text-xs uppercase tracking-widest">Core Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Technical Stack & System Focus
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Abhishek’s competencies span modern frontend ecosystems, enterprise backend structures, and strict modularization strategies. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const config = getCategoryTheme(category);
            return (
              <div 
                key={category} 
                className={`bg-zinc-900/30 p-6 rounded-2xl border ${config.accent} backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 group-hover:border-zinc-700 transition-all">
                      {config.icon}
                    </div>
                    <span className="text-[10px] text-zinc-650 font-mono font-bold uppercase tracking-widest">
                      {category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {config.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                    {config.desc}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Stack elements:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {SKILLS.filter(s => s.category === category).map((skill) => (
                      <span 
                        key={skill.name}
                        className={`text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-950/60 text-zinc-300 border border-zinc-900 group-hover:border-zinc-800 transition-colors flex items-center gap-1.5`}
                      >
                        <span className={`w-1 h-1 rounded-full ${config.dot}`}></span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic Highlights Bento Box Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/10 border border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-805 text-emerald-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Full SDLC Ownership</h4>
              <p className="text-xs text-zinc-400 mt-0.5 max-w-xl">
                Expert in requirement mapping, client interaction, high-fidelity HLD/LLD creation, and deploying to high-availability targets.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">HLD</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">LLD</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">CI/CD PIPELINES</span>
          </div>
        </div>

      </div>
    </section>
  );
};
