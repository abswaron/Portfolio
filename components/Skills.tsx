import React from 'react';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  const getCategoryTitle = (cat: string) => {
    switch(cat) {
      case 'frontend': return 'Frontend Development';
      case 'backend': return 'Backend Development';
      case 'tools': return 'Tools & DevOps';
      default: return 'Other Skills';
    }
  };

  return (
    <section className="py-24 bg-black relative">
       {/* Ambient background light */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
          <span className="h-px w-12 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category} 
              className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-white mb-6 capitalize flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-shadow"></span>
                {getCategoryTitle(category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1.5 bg-black/50 text-cyan-400 rounded-md text-sm font-medium border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};