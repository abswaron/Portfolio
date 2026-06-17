import React from 'react';
import { EDUCATIONS } from '../constants';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative border-b border-zinc-900">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-cyan-500"></span>
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Academic Background</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Education History
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Grounding engineering excellence in solid computer science and information technology fundamentals.
          </p>
        </div>

        <div className="grid gap-6 max-w-3xl">
          {EDUCATIONS.map((edu) => (
            <div 
              key={edu.id} 
              className="bg-zinc-900/20 p-6 md:p-8 rounded-2xl border border-zinc-900 hover:border-cyan-500/20 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-cyan-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-zinc-400">{edu.degree}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
                <span className="flex items-center gap-1 text-zinc-400 bg-zinc-950 border border-zinc-900 px-3 py-1.5 rounded-lg">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  {edu.year}
                </span>
                <span className="px-3 py-1.5 bg-cyan-950/20 border border-cyan-900/30 text-cyan-400 rounded-lg">
                  Graduated
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
