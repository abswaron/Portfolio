import React from 'react';
import { CONTACT_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-black overflow-hidden py-20">
      {/* Background decoration - Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>
      </div>

      {/* Background decoration - Motion Images / Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        
        {/* Angular / Shield Icon - Starts Top Right */}
        <div className="absolute top-[15%] right-[10%] animate-float text-red-500/80 mix-blend-screen drop-shadow-[0_0_35px_rgba(239,68,68,0.8)]">
           <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 2L2 5.5L3.5 17C3.5 17 12 22 12 22C12 22 20.5 17 20.5 17L22 5.5L12 2Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
             <path d="M12 6L6 18H8L9.5 15H14.5L16 18H18L12 6Z" fill="currentColor" className="opacity-90"/>
           </svg>
        </div>

        {/* Code Brackets - Starts Bottom Left */}
        <div className="absolute bottom-[20%] left-[5%] animate-drift text-cyan-400/80 mix-blend-screen drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">
           <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
             <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
           </svg>
        </div>

        {/* Database - Starts Top Left */}
        <div className="absolute top-[20%] left-[15%] animate-float delay-700 text-blue-400/70 mix-blend-screen drop-shadow-[0_0_25px_rgba(96,165,250,0.7)]">
           <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
           </svg>
        </div>

        {/* Circuit - Starts Bottom Right */}
        <div className="absolute bottom-[10%] right-[20%] animate-drift-4 text-slate-400/50 drop-shadow-[0_0_20px_rgba(148,163,184,0.5)]">
           <svg width="300" height="300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
             <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
             <circle cx="50" cy="50" r="25" />
             <path d="M50 10 V25 M50 75 V90 M10 50 H25 M75 50 H90" />
           </svg>
        </div>

        {/* Java / Coffee - Starts Middle Right */}
        <div className="absolute top-[45%] right-[5%] animate-float delay-1000 text-orange-400/70 mix-blend-screen drop-shadow-[0_0_25px_rgba(251,146,60,0.7)]">
           <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
               <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" fill="currentColor" fillOpacity="0.8"/>
           </svg>
        </div>

        {/* FinTech / Bank - Starts Middle Left */}
        <div className="absolute top-[45%] left-[5%] animate-drift delay-700 text-emerald-400/70 mix-blend-screen drop-shadow-[0_0_25px_rgba(52,211,153,0.7)]">
            <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m3-11v11m4-11v11m4-11v11m4-11v11" />
            </svg>
        </div>

        {/* Spring Leaf - Starts Top Center Left */}
        <div className="absolute top-[8%] left-[45%] animate-float delay-500 text-green-400/70 mix-blend-screen drop-shadow-[0_0_20px_rgba(74,222,128,0.6)]">
             <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C7.03 2 3 6.03 3 11c0 2.8 1.41 5.4 3.75 7.15l-1.42 1.42L6.75 21l1.42-1.42C10.6 21.31 14.6 20.9 17 18.5c2.5-2.5 2.9-6.4 1.4-8.8L21 9l-1.5-1.5-1.7 1.7C15.4 7.7 11.5 8.1 9 10.5c-2.5 2.5-2.1 6.5-0.6 8.9L6.75 17.75C5.05 16.5 4 14.5 4 11c0-4.42 3.58-8 8-8s8 3.58 8 8h1c0-4.97-4.03-9-9-9z" />
             </svg>
        </div>

        {/* Terminal - Starts Bottom Center */}
        <div className="absolute bottom-[15%] left-[40%] animate-drift-4 delay-200 text-slate-200/60 drop-shadow-[0_0_15px_rgba(226,232,240,0.5)]">
            <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 17l6-6-6-6M12 19h8" />
            </svg>
        </div>

      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-6 animate-fade-in">
            <span className="h-[2px] w-12 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
            <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase">Portfolio</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white tracking-tight leading-none animate-fade-in drop-shadow-2xl">
            Abhishek <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Karmakar</span>
          </h1>
          
          <p className="text-2xl text-slate-400 mb-10 font-light max-w-2xl animate-fade-in leading-relaxed border-l-4 border-slate-800 pl-6 backdrop-blur-sm">
            Software Engineer @MindgateSolutions <br/>
            Specializing in <span className="font-semibold text-white">FinTech</span> & <span className="font-semibold text-white">Angular Development</span>
          </p>
          
          <div className="flex flex-wrap gap-5 animate-fade-in">
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transform hover:-translate-y-1"
            >
              Contact Me
            </a>
            <a 
              href={CONTACT_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 bg-transparent border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 rounded-xl font-medium transition-all hover:bg-slate-900/50 backdrop-blur-sm"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="mt-20 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row gap-8 text-sm text-slate-400 animate-fade-in backdrop-blur-sm inline-block pr-8 rounded-tr-2xl">
             <div className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-900 rounded-lg text-cyan-500 group-hover:text-cyan-400 group-hover:bg-slate-800 transition-colors ring-1 ring-slate-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span className="group-hover:text-slate-200 transition-colors font-mono">{CONTACT_INFO.phone}</span>
             </div>
             <div className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-900 rounded-lg text-cyan-500 group-hover:text-cyan-400 group-hover:bg-slate-800 transition-colors ring-1 ring-slate-800">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span className="group-hover:text-slate-200 transition-colors font-mono">{CONTACT_INFO.email}</span>
             </div>
             <div className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-900 rounded-lg text-cyan-500 group-hover:text-cyan-400 group-hover:bg-slate-800 transition-colors ring-1 ring-slate-800">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <span className="group-hover:text-slate-200 transition-colors font-mono">{CONTACT_INFO.location}</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};