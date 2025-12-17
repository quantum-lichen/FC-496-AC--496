import React from 'react';
import { DOCUMENTATION_DATA } from '../constants';
import { FileText, Copy, Terminal } from 'lucide-react';

const ReadmeViewer: React.FC = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full max-h-[800px]">
      <div className="bg-zinc-950 px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <FileText className="text-blue-500 w-5 h-5" />
            <div>
                <h1 className="text-lg font-bold text-zinc-100">README.md</h1>
                <p className="text-xs text-zinc-500 font-mono">lmc.theory@gmail.com | Version 1.0</p>
            </div>
        </div>
        <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono border border-blue-500/20">
            PROPOSITION FONDAMENTALE
        </div>
      </div>
      
      <div className="p-8 overflow-y-auto space-y-12 bg-zinc-900 scroll-smooth">
        {/* Header Section */}
        <div className="border-b border-zinc-800 pb-8">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
            🌌 Intégration FC-496/ACΦ-496
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono text-zinc-400">
                <div className="flex gap-2"><span className="text-zinc-600">Auteur:</span> <span className="text-zinc-200">Bryan Ouellette (Lichen Architect)</span></div>
                <div className="flex gap-2"><span className="text-zinc-600">Date:</span> <span className="text-zinc-200">16 Décembre 2025</span></div>
                <div className="flex gap-2"><span className="text-zinc-600">Système:</span> <span className="text-zinc-200">Full-Stack Complète</span></div>
                <div className="flex gap-2"><span className="text-zinc-600">License:</span> <span className="text-zinc-200">AGPL v3</span></div>
            </div>
        </div>

        {/* Content Sections */}
        {DOCUMENTATION_DATA.map((section) => (
          <section key={section.id} className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                {section.title}
            </h2>
            
            <div className="text-zinc-300 leading-relaxed text-sm md:text-base pl-4 border-l-2 border-zinc-800">
                {section.type === 'text' && (
                    <p>{section.content}</p>
                )}
                
                {section.type === 'list' && Array.isArray(section.content) && (
                    <ul className="space-y-2">
                        {section.content.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1.5">›</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
                
                {section.type === 'code' && (
                     <div className="space-y-3">
                        <p>{section.content}</p>
                        {section.code && (
                            <div className="relative group">
                                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-1 hover:bg-zinc-700 rounded text-zinc-400"><Copy size={14}/></button>
                                </div>
                                <pre className="bg-zinc-950 p-4 rounded-lg border border-zinc-800 overflow-x-auto text-xs md:text-sm font-mono text-emerald-300 shadow-inner">
                                    <code>{section.code}</code>
                                </pre>
                            </div>
                        )}
                     </div>
                )}
            </div>
          </section>
        ))}

        {/* Footer */}
        <div className="pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
            <p>Prochaine étape : Simulations</p>
            <div className="flex justify-center gap-4 mt-4">
                 <a href="#" className="hover:text-emerald-400 transition-colors">GitHub</a>
                 <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReadmeViewer;
