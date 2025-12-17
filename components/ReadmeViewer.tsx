import React from 'react';
import { DOCUMENTATION_DATA } from '../constants';
import { FileText, Copy, Star, GitFork, Eye, Zap, ShieldCheck } from 'lucide-react';
import { Badge } from '../types';

// Helper component for Badges
const BadgeItem: React.FC<{ badge: Badge }> = ({ badge }) => {
  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    red: 'bg-red-500/20 text-red-400 border-red-500/30',
    zinc: 'bg-zinc-700/50 text-zinc-300 border-zinc-600',
  };

  const styleClass = colorMap[badge.color] || colorMap.zinc;

  return (
    <div className={`flex items-center text-[10px] md:text-xs font-mono rounded overflow-hidden border ${styleClass}`}>
      <span className="px-2 py-0.5 bg-zinc-950/50 opacity-80 border-r border-inherit font-semibold">
        {badge.label}
      </span>
      <span className="px-2 py-0.5 font-bold">
        {badge.value}
      </span>
    </div>
  );
};

const ReadmeViewer: React.FC = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full max-h-[800px]">
      {/* Top Bar simulating GitHub/IDE header */}
      <div className="bg-zinc-950 px-4 md:px-6 py-3 border-b border-zinc-800 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
            <div className="p-1.5 bg-zinc-800 rounded-md">
                <FileText className="text-zinc-400 w-4 h-4" />
            </div>
            <div className="flex flex-col">
                <h1 className="text-sm font-semibold text-zinc-200">README.md</h1>
                <span className="text-[10px] text-zinc-500 font-mono">master branch • last commit now</span>
            </div>
        </div>
        <div className="flex items-center gap-2">
             <div className="hidden md:flex items-center gap-1 px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs text-zinc-300 hover:bg-zinc-700 transition-colors cursor-pointer">
                <Star className="w-3 h-3" /> <span>Star</span> <span className="ml-1 px-1.5 py-0.5 bg-zinc-900 rounded-full text-[10px]">12k</span>
             </div>
             <div className="hidden md:flex items-center gap-1 px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs text-zinc-300 hover:bg-zinc-700 transition-colors cursor-pointer">
                <GitFork className="w-3 h-3" /> <span>Fork</span> <span className="ml-1 px-1.5 py-0.5 bg-zinc-900 rounded-full text-[10px]">842</span>
             </div>
        </div>
      </div>
      
      <div className="p-6 md:p-10 overflow-y-auto space-y-12 bg-zinc-900 scroll-smooth relative">
        
        {/* Render Sections */}
        {DOCUMENTATION_DATA.map((section, idx) => {
            if (section.type === 'hero') {
                return (
                    <div key={section.id} className="pb-8 border-b border-zinc-800 text-center space-y-6">
                        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 mb-2 animate-in zoom-in duration-500">
                             <Zap className="w-12 h-12 text-emerald-400 fill-emerald-400/10" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 tracking-tight leading-tight">
                            {section.title}
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            {Array.isArray(section.content) ? section.content.join(' ') : section.content}
                        </p>
                        
                        {section.badges && (
                            <div className="flex flex-wrap justify-center gap-3 pt-2">
                                {section.badges.map((badge, bIdx) => (
                                    <BadgeItem key={bIdx} badge={badge} />
                                ))}
                            </div>
                        )}
                        
                        <div className="flex justify-center gap-4 pt-4">
                            <button className="px-6 py-2 bg-zinc-100 text-zinc-900 rounded-lg font-bold text-sm hover:bg-white hover:scale-105 transition-all shadow-lg shadow-emerald-500/10">
                                Get Started
                            </button>
                            <button className="px-6 py-2 bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-lg font-bold text-sm hover:bg-zinc-700 hover:text-white transition-all">
                                View Architecture
                            </button>
                        </div>
                    </div>
                );
            }

            return (
                <section key={section.id} className="space-y-5 animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                    <h2 className="text-2xl font-bold text-zinc-100 flex items-center gap-3 pb-2 border-b border-zinc-800/50">
                        <span className="text-emerald-500">#</span> {section.title}
                    </h2>
                    
                    <div className="text-zinc-300 leading-relaxed text-sm md:text-base">
                        {section.type === 'text' && (
                            <p className="pl-4 border-l-2 border-zinc-800/0 hover:border-emerald-500/50 transition-colors duration-300">{section.content}</p>
                        )}
                        
                        {section.type === 'list' && Array.isArray(section.content) && (
                            <ul className="grid gap-3 pl-2">
                                {section.content.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 border border-zinc-800/50 hover:border-emerald-500/30 transition-all group">
                                        <div className="mt-1 p-1 rounded bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                                            <ShieldCheck size={14} />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        
                        {section.type === 'code' && (
                            <div className="space-y-3 pt-2">
                                <p className="text-zinc-400 italic mb-2">{section.content}</p>
                                {section.code && (
                                    <div className="relative group rounded-xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950">
                                        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-b border-zinc-800">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                            </div>
                                            <span className="text-[10px] uppercase font-mono text-zinc-500">source_code</span>
                                            <button className="text-zinc-500 hover:text-zinc-300 transition-colors">
                                                <Copy size={14}/>
                                            </button>
                                        </div>
                                        <div className="p-4 overflow-x-auto">
                                            <pre className="text-xs md:text-sm font-mono leading-relaxed">
                                                <code className="text-emerald-300/90">{section.code}</code>
                                            </pre>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            );
        })}

        {/* Footer */}
        <div className="pt-16 pb-8 border-t border-zinc-800 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
                 <div className="h-px w-12 bg-zinc-800"></div>
                 <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                 <div className="h-px w-12 bg-zinc-800"></div>
            </div>
            <p className="text-zinc-500 text-sm">Contribute to the future. <span className="text-zinc-300">Join the revolution.</span></p>
            <div className="flex justify-center gap-6 mt-6 text-xs font-mono text-zinc-600">
                 <a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2">GITHUB.COM/QUANTUM-LICHEN</a>
                 <span>|</span>
                 <a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2">TWITTER @LMC_THEORY</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReadmeViewer;
