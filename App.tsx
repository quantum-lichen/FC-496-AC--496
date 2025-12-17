import React, { useState } from 'react';
import ArchitectureVisualizer from './components/ArchitectureVisualizer';
import ReadmeViewer from './components/ReadmeViewer';
import { Layers, FileText, Hexagon } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'visual' | 'readme'>('visual');

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-200 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Navbar */}
      <nav className="h-16 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
             <Hexagon className="w-5 h-5 text-emerald-400" />
          </div>
          <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400">
            FC-496 <span className="text-zinc-600 px-1">/</span> ACΦ-496
          </span>
        </div>

        <div className="flex items-center bg-zinc-900 rounded-lg p-1 border border-zinc-800">
          <button
            onClick={() => setActiveTab('visual')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              activeTab === 'visual'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span className="hidden sm:inline">Architecture</span>
          </button>
          <button
            onClick={() => setActiveTab('readme')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              activeTab === 'readme'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">Documentation</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full h-[calc(100vh-64px)]">
        <div className="h-full w-full">
           {activeTab === 'visual' ? (
             <div className="h-full animate-in fade-in zoom-in-95 duration-300">
               <ArchitectureVisualizer />
             </div>
           ) : (
             <div className="h-full animate-in fade-in slide-in-from-bottom-4 duration-300">
                <ReadmeViewer />
             </div>
           )}
        </div>
      </main>

    </div>
  );
};

export default App;
