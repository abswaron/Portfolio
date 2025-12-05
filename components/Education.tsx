import React from 'react';
import { EDUCATIONS } from '../constants';

export const Education: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
          <span className="h-px w-12 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
          Education
        </h2>
        
        <div className="grid gap-6 max-w-3xl">
          {EDUCATIONS.map((edu) => (
            <div key={edu.id} className="bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-sm hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{edu.institution}</h3>
                  <p className="text-slate-400">{edu.degree}</p>
                </div>
                <div className="shrink-0">
                   <span className="text-sm font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 px-4 py-2 rounded-lg">
                     {edu.year}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};