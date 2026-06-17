import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, MapPin, CheckSquare, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative border-b border-zinc-900">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-indigo-500"></span>
            <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest">Career Milestones</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Leading engineering tasks within FinTech environments. Driving user experience, architectural stability, and robust codebase delivery at Mindgate Solutions.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-zinc-900 ml-4 md:ml-6 space-y-12 max-w-4xl">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Indicator Blob */}
              <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full bg-zinc-950 border-2 border-indigo-500 group-hover:bg-indigo-400 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.6)] transition-all duration-300"></span>
              
              <div className="bg-zinc-900/10 hover:bg-zinc-900/30 p-6 md:p-8 rounded-2xl border border-zinc-900/60 hover:border-indigo-500/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div>
                    <span className="px-2.5 py-1 text-[10px] font-mono font-semibold tracking-wider text-indigo-400 bg-indigo-950/20 rounded border border-indigo-900/30 uppercase mb-2 inline-block">
                      {exp.company}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>
                  </div>
                  
                  <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-950 px-3.5 py-1.5 rounded-lg border border-zinc-900 w-fit shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-zinc-500 font-medium font-mono mb-6">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-600" />
                    {exp.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3 h-3 text-zinc-600" />
                    FinTech Division
                  </span>
                </div>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-3xl">
                  {exp.description}
                </p>

                {/* Branded list of achievements or scope details depends on role */}
                {exp.role === 'Software Engineer' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-zinc-900 text-xs text-zinc-500">
                    <div className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Spearheaded Micro-frontend federated component migration to Angular.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Optimized beneficiary transfer schemas for bulk validations.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Ensured cross-browser client rendering in enterprise banking platforms.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Refined Java APIs to match high concurrent system thresholds.</span>
                    </div>
                  </div>
                )}
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
