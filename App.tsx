import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Hero } from './components/Hero';
import { Summary } from './components/Summary';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { AiChat } from './components/AiChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-slate-300">
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Education />
      
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-500 py-12 text-center text-sm">
        <p>© {new Date().getFullYear()} Abhishek Karmakar. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind, and Gemini AI.</p>
      </footer>
      
      <AiChat />
      <SpeedInsights />
    </div>
  );
};

export default App;