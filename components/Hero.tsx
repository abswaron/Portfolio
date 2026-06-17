import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Terminal, ArrowDown, Activity, Cpu, Code } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-zinc-950 overflow-hidden py-16 border-b border-zinc-900">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
      
      {/* Soft Ambient Radial Glows */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Floating Interactive Background Logos */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        
        {/* Angular Icon - Top Right Area */}
        <div className="absolute top-[12%] right-[8%] rotate-12 animate-float-slow drop-shadow-[0_0_35px_rgba(221,0,49,0.3)]">
           <img 
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" 
             alt="Angular" 
             width="110" 
             height="110" 
             referrerPolicy="no-referrer"
             className="opacity-25 mix-blend-screen grayscale hover:grayscale-0 transition-all duration-300"
           />
        </div>

        {/* VS Code Icon */}
        <div className="absolute bottom-[15%] left-[8%] -rotate-12 animate-drift-fast drop-shadow-[0_0_35px_rgba(0,122,204,0.3)]">
           <img 
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
             alt="VS Code" 
             width="100" 
             height="100" 
             referrerPolicy="no-referrer"
             className="opacity-20 mix-blend-screen grayscale hover:grayscale-0 transition-all duration-300"
           />
        </div>

        {/* PostgreSQL Icon */}
        <div className="absolute top-[18%] left-[10%] rotate-45 animate-float delay-700 drop-shadow-[0_0_35px_rgba(51,103,145,0.3)]">
           <img 
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
             alt="PostgreSQL" 
             width="80" 
             height="80" 
             referrerPolicy="no-referrer"
             className="opacity-25 mix-blend-screen grayscale hover:grayscale-0 transition-all duration-300"
           />
        </div>

        {/* Java Icon */}
        <div className="absolute top-[45%] right-[5%] rotate-[15deg] animate-float-fast delay-1000 drop-shadow-[0_0_35px_rgba(251,146,60,0.3)]">
           <img 
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
             alt="Java" 
             width="90" 
             height="90" 
             referrerPolicy="no-referrer"
             className="opacity-25 mix-blend-screen grayscale hover:grayscale-0 transition-all duration-300"
           />
        </div>

        {/* Spring Boot Icon */}
        <div className="absolute bottom-[30%] left-[3%] -rotate-[15deg] animate-drift-slow delay-700 drop-shadow-[0_0_35px_rgba(109,179,63,0.3)]">
           <img 
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" 
             alt="Spring Boot" 
             width="100" 
             height="100" 
             referrerPolicy="no-referrer"
             className="opacity-30 mix-blend-screen grayscale hover:grayscale-0 transition-all duration-300"
           />
        </div>

        {/* TypeScript Icon */}
        <div className="absolute bottom-[28%] right-[25%] -rotate-[15deg] animate-drift delay-1000 drop-shadow-[0_0_35px_rgba(0,122,204,0.3)]">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
              alt="TypeScript" 
              width="75" 
              height="75" 
              referrerPolicy="no-referrer"
              className="opacity-25 mix-blend-screen grayscale hover:grayscale-0 transition-all duration-300"
            />
        </div>

        {/* Node.js Icon */}
        <div className="absolute top-[8%] right-[40%] rotate-[10deg] animate-float-slow delay-200 drop-shadow-[0_0_35px_rgba(104,160,99,0.3)]">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
              alt="Node.js" 
              width="80" 
              height="80" 
              referrerPolicy="no-referrer"
              className="opacity-20 mix-blend-screen grayscale hover:grayscale-0 transition-all duration-300"
            />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 mb-8 animate-fade-in text-xs font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            FULL-STACK FINTECH RESUME
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight animate-fade-in">
            Abhishek <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Karmakar</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in font-light">
            Software Engineer specializing in building scalable <span className="text-white font-medium">micro-frontend banking architectures</span>, High-Performance transactional modules, and full-stack software experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20 animate-fade-in">
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-zinc-100 hover:bg-white text-zinc-950 rounded-xl font-semibold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 text-center text-sm"
            >
              Contact Abhishek
            </a>
            <a 
              href={CONTACT_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white rounded-xl font-medium border border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 text-sm"
            >
              <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c-2.761 0-5 2.239-5 5s2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn Profile
            </a>
          </div>

          {/* Clean Minimalist Contact Rail */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-900/80 backdrop-blur-md animate-fade-in text-left">
            <div className="flex items-center gap-3.5 group">
              <div className="p-2.5 bg-zinc-950 rounded-lg text-emerald-400 border border-zinc-800 group-hover:border-emerald-500/30 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Call Directly</span>
                <span className="text-sm font-medium text-zinc-300 font-mono">{CONTACT_INFO.phone}</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="p-2.5 bg-zinc-950 rounded-lg text-teal-400 border border-zinc-800 group-hover:border-teal-500/30 transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.05)]">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col flex-1 overflow-hidden">
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Email Inquiry</span>
                <span className="text-sm font-medium text-zinc-300 font-mono truncate">{CONTACT_INFO.email}</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="p-2.5 bg-zinc-950 rounded-lg text-cyan-400 border border-zinc-800 group-hover:border-cyan-500/30 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.05)]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Primary Base</span>
                <span className="text-sm font-medium text-zinc-300 font-mono">{CONTACT_INFO.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="p-2.5 bg-zinc-950 rounded-lg text-indigo-400 border border-zinc-800 group-hover:border-indigo-500/30 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.05)]">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Industry Role</span>
                <span className="text-sm font-medium text-zinc-300 font-mono">Mindgate Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
