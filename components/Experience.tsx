import React from 'react';
import { EXPERIENCES } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
          <span className="h-px w-12 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
          Work Experience
        </h2>
        
        <div className="relative border-l border-slate-700 ml-4 md:ml-6 space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:bg-cyan-500 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.6)] transition-all duration-300"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                <span className="text-sm font-medium text-cyan-300 bg-cyan-900/20 border border-cyan-900/50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-base text-slate-400 font-medium mb-4 flex items-center gap-2">
                 <span>{exp.company}</span> 
                 <span className="text-slate-600">•</span> 
                 <span>{exp.location}</span>
              </div>
              
              <p className="text-slate-400 leading-relaxed max-w-3xl border-l-2 border-transparent pl-0 group-hover:pl-4 group-hover:border-cyan-500/30 transition-all duration-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};