import React from 'react';

export const Summary: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-lg">
            <p className="text-slate-400 leading-relaxed">
              <strong className="text-white text-xl block mb-2">Experienced Software Engineer</strong> 
              Specializing in Angular and Front-End development within the FinTech sector. 
              I have a proven track record of building scalable <span className="text-cyan-400 font-medium">micro frontend architectures</span> and delivering maintainable UI solutions for complex banking systems.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My expertise spans key banking modules including Payments, Beneficiaries, Reports, and Bulk Transactions. 
              I am well-versed in all phases of the Software Development Life Cycle (SDLC) and possess strong skills in architectural design and client communication.
            </p>
          </div>
          
          <div className="glass-card bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
             <div className="mb-8">
               <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                 Key Strength
               </h3>
               <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Driving technical excellence and optimizing performance across engineering teams.</p>
             </div>
             <div>
               <h3 className="text-white font-semibold mb-3">Philosophy</h3>
               <blockquote className="text-sm text-slate-400 italic border-l-2 border-cyan-500 pl-4 py-1 group-hover:text-slate-300 transition-colors">
                 "Intelligence and hard work are the keys to success."
               </blockquote>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};