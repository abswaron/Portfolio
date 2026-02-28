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
        
        {/* Angular Icon - Top Right Corner */}
        <div className="absolute top-[8%] right-[5%] rotate-12 animate-float-slow drop-shadow-[0_0_35px_rgba(221,0,49,0.8)]">
           <img 
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" 
             alt="Angular" 
             width="180" 
             height="180" 
             referrerPolicy="no-referrer"
             className="opacity-80 mix-blend-screen"
           />
        </div>

        {/* VS Code Icon - Bottom Left Corner */}
        <div className="absolute bottom-[10%] left-[5%] -rotate-12 animate-drift-fast drop-shadow-[0_0_35px_rgba(0,122,204,0.8)]">
           <img 
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
             alt="VS Code" 
             width="200" 
             height="200" 
             referrerPolicy="no-referrer"
             className="opacity-80 mix-blend-screen"
           />
        </div>

        {/* PostgreSQL Icon - Top Left Area */}
        <div className="absolute top-[15%] left-[8%] rotate-45 animate-float delay-700 drop-shadow-[0_0_35px_rgba(51,103,145,0.8)]">
           <img 
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
             alt="PostgreSQL" 
             width="120" 
             height="120" 
             referrerPolicy="no-referrer"
             className="opacity-80 mix-blend-screen"
           />
        </div>

        {/* Oracle Icon - Bottom Right Area */}
        <div className="absolute bottom-[5%] right-[12%] -rotate-45 animate-drift-4 drop-shadow-[0_0_35px_rgba(248,0,0,0.8)]">
           <img 
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" 
             alt="Oracle" 
             width="180" 
             height="180" 
             referrerPolicy="no-referrer"
             className="opacity-80 mix-blend-screen"
           />
        </div>

        {/* Java Icon - Middle Right Edge */}
        <div className="absolute top-[40%] right-[2%] rotate-[15deg] animate-float-fast delay-1000 drop-shadow-[0_0_35px_rgba(251,146,60,0.8)]">
           <img 
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
             alt="Java" 
             width="120" 
             height="120" 
             referrerPolicy="no-referrer"
             className="opacity-80 mix-blend-screen"
           />
        </div>

        {/* Spring Boot Icon - Middle Left Edge */}
        <div className="absolute bottom-[35%] left-[2%] -rotate-[15deg] animate-drift-slow delay-700 text-green-600/70 drop-shadow-[0_0_35px_rgba(34,197,94,0.8)]">
           <img 
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" 
             alt="Spring Boot" 
             width="140" 
             height="140" 
             referrerPolicy="no-referrer"
             className="opacity-80 mix-blend-screen"
           />
        </div>

        {/* Linux Icon - Top Center Area */}
        <div className="absolute top-[2%] left-[55%] rotate-[30deg] animate-float-reverse delay-500 drop-shadow-[0_0_35px_rgba(255,215,0,0.8)]">
           <img 
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" 
             alt="Linux" 
             width="80" 
             height="80" 
             referrerPolicy="no-referrer"
             className="opacity-80 mix-blend-screen"
           />
        </div>

        {/* Git Icon - Middle Center Left */}
        <div className="absolute top-[30%] left-[25%] rotate-[25deg] animate-float delay-300 drop-shadow-[0_0_35px_rgba(240,80,50,0.8)]">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
              alt="Git" 
              width="100" 
              height="100" 
              referrerPolicy="no-referrer"
              className="opacity-80 mix-blend-screen"
            />
        </div>

        {/* TypeScript Icon - Middle Center Right */}
        <div className="absolute bottom-[25%] right-[30%] -rotate-[15deg] animate-drift delay-1000 drop-shadow-[0_0_35px_rgba(0,122,204,0.8)]">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
              alt="TypeScript" 
              width="110" 
              height="110" 
              referrerPolicy="no-referrer"
              className="opacity-80 mix-blend-screen"
            />
        </div>

        {/* Node.js Icon - Top Center Right */}
        <div className="absolute top-[12%] right-[35%] rotate-[10deg] animate-float-slow delay-200 drop-shadow-[0_0_35px_rgba(104,160,99,0.8)]">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
              alt="Node.js" 
              width="90" 
              height="90" 
              referrerPolicy="no-referrer"
              className="opacity-80 mix-blend-screen"
            />
        </div>

        {/* Docker Icon - Bottom Center Left */}
        <div className="absolute bottom-[15%] left-[25%] rotate-[-10deg] animate-drift-4 delay-500 drop-shadow-[0_0_35px_rgba(36,150,237,0.8)]">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
              alt="Docker" 
              width="130" 
              height="130" 
              referrerPolicy="no-referrer"
              className="opacity-80 mix-blend-screen"
            />
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
                <div className="p-2 bg-slate-900 rounded-lg text-cyan-500/70 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:text-cyan-400 group-hover:bg-slate-800 transition-colors ring-1 ring-slate-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span className="group-hover:text-slate-200 transition-colors font-mono">{CONTACT_INFO.phone}</span>
             </div>
             <div className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-900 rounded-lg text-cyan-500/70 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:text-cyan-400 group-hover:bg-slate-800 transition-colors ring-1 ring-slate-800">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span className="group-hover:text-slate-200 transition-colors font-mono">{CONTACT_INFO.email}</span>
             </div>
             <div className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-900 rounded-lg text-cyan-500/70 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:text-cyan-400 group-hover:bg-slate-800 transition-colors ring-1 ring-slate-800">
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