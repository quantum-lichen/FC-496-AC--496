import React, { useState } from 'react';
import { LAYERS } from '../constants';
import { LayerInfo } from '../types';
import { Activity, Database, Cpu, Network, Lock, Zap } from 'lucide-react';

const ArchitectureVisualizer: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
      <div className="p-4 border-b border-zinc-700 bg-zinc-950 flex justify-between items-center">
        <h2 className="text-xl font-bold font-mono text-emerald-400 flex items-center gap-2">
          <Activity className="w-5 h-5" />
          VISUALISATION SYSTÈME
        </h2>
        <div className="text-xs font-mono text-zinc-500">LIVE RENDER v1.0</div>
      </div>

      <div className="flex flex-1 relative overflow-hidden">
        {/* Left Side: Interactive Diagram */}
        <div className="w-full lg:w-2/3 h-full p-8 relative flex items-center justify-center bg-zinc-900/50">
          <svg
            viewBox="0 0 800 600"
            className="w-full h-full max-h-[600px] drop-shadow-lg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Background Grid */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              </pattern>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <rect width="800" height="600" fill="url(#grid)" />

            {/* Connecting Lines (The Bus) */}
            <path d="M 400 130 L 400 480" stroke="#3f3f46" strokeWidth="2" strokeDasharray="5,5" />

            {/* LAYERS */}
            {LAYERS.map((layer, index) => {
              const yPos = 100 + index * 120;
              const isActive = activeLayer === layer.id;
              
              return (
                <g 
                  key={layer.id} 
                  onClick={() => setActiveLayer(layer.id)}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  className="cursor-pointer transition-all duration-300"
                  style={{ opacity: activeLayer && activeLayer !== layer.id ? 0.4 : 1 }}
                >
                  {/* Connection Node */}
                  <circle cx="400" cy={yPos + 40} r="6" fill={layer.color} className="animate-pulse" />

                  {/* Main Block */}
                  <rect
                    x="200"
                    y={yPos}
                    width="400"
                    height="80"
                    rx="12"
                    fill={isActive ? `${layer.color}20` : '#18181b'} // Transparent fill when active
                    stroke={isActive ? layer.color : '#3f3f46'}
                    strokeWidth={isActive ? 3 : 1}
                    filter={isActive ? "url(#glow)" : ""}
                    className="transition-all duration-300"
                  />

                  {/* Icon Container */}
                  <rect x="220" y={yPos + 15} width="50" height="50" rx="8" fill={`${layer.color}20`} />
                  
                  {/* Layer Label */}
                  <text
                    x="290"
                    y={yPos + 35}
                    fill="#e4e4e7"
                    fontSize="18"
                    fontWeight="bold"
                    className="font-mono tracking-wider"
                  >
                    {layer.name.toUpperCase()}
                  </text>
                  
                  {/* Short Desc */}
                  <text
                    x="290"
                    y={yPos + 58}
                    fill="#a1a1aa"
                    fontSize="12"
                    fontFamily="Inter"
                  >
                    {layer.description}
                  </text>

                  {/* Animated Visuals inside the block based on ID */}
                  {layer.id === 'phys' && (
                    <g transform={`translate(520, ${yPos + 20})`}>
                      {/* Representing Cells */}
                      <rect x="0" y="0" width="10" height="10" fill={layer.color} opacity="0.8" />
                      <rect x="15" y="0" width="10" height="10" fill={layer.color} opacity="0.6" />
                      <rect x="0" y="15" width="10" height="10" fill={layer.color} opacity="0.6" />
                      <rect x="15" y="15" width="10" height="10" fill={layer.color} opacity="0.8" />
                      <rect x="30" y="7" width="10" height="10" fill={layer.color} opacity="0.4" />
                    </g>
                  )}

                  {layer.id === 'interop' && (
                    <g transform={`translate(520, ${yPos + 25})`}>
                       {/* Arrows */}
                       <path d="M 0 10 L 40 10" stroke={layer.color} strokeWidth="2" markerEnd="url(#arrow)" />
                       <path d="M 40 20 L 0 20" stroke={layer.color} strokeWidth="2" />
                    </g>
                  )}

                  {layer.id === 'logic' && (
                    <g transform={`translate(520, ${yPos + 15})`}>
                       {/* DNA Helix Abstract */}
                       <path d="M 0 0 Q 10 25 20 0 T 40 0" stroke={layer.color} fill="none" strokeWidth="2" />
                       <path d="M 0 25 Q 10 0 20 25 T 40 25" stroke={layer.color} fill="none" strokeWidth="2" opacity="0.5" />
                    </g>
                  )}
                  
                  {layer.id === 'app' && (
                    <g transform={`translate(520, ${yPos + 20})`}>
                       {/* Network Nodes */}
                       <circle cx="5" cy="5" r="3" fill={layer.color} />
                       <circle cx="35" cy="5" r="3" fill={layer.color} />
                       <circle cx="20" cy="25" r="3" fill={layer.color} />
                       <path d="M 5 5 L 20 25 L 35 5" stroke={layer.color} strokeWidth="1" />
                    </g>
                  )}

                </g>
              );
            })}
          </svg>

          {/* Floating Detail Panel (Right side overlay on mobile, distinct col on desktop) */}
        </div>
        
        {/* Right Side: Details Panel */}
        <div className="hidden lg:block w-1/3 bg-zinc-950/80 border-l border-zinc-800 p-6 overflow-y-auto">
          {activeLayer ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300">
              <div className="space-y-2">
                <span 
                  className="text-xs font-bold px-2 py-1 rounded bg-zinc-800 text-zinc-300 uppercase tracking-widest"
                  style={{ color: LAYERS.find(l => l.id === activeLayer)?.color }}
                >
                  Module Actif
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {LAYERS.find(l => l.id === activeLayer)?.name}
                </h3>
              </div>
              
              <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                <h4 className="text-sm font-semibold text-zinc-400 mb-3 uppercase flex items-center gap-2">
                  <Database className="w-4 h-4" /> Spécifications
                </h4>
                <ul className="space-y-3">
                  {LAYERS.find(l => l.id === activeLayer)?.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {activeLayer === 'phys' && (
                <div className="p-4 bg-zinc-900 rounded-lg border border-amber-900/30">
                  <h4 className="text-sm font-semibold text-amber-500 mb-2 flex items-center gap-2">
                    <Lock className="w-4 h-4" /> FC-496 CELL STRUCTURE
                  </h4>
                  <div className="flex gap-1 h-8 w-full mt-2">
                    <div className="h-full bg-amber-600 w-[61%] rounded-l flex items-center justify-center text-[10px] text-black font-bold">
                      Major (306b)
                    </div>
                    <div className="h-full bg-amber-800 w-[39%] rounded-r flex items-center justify-center text-[10px] text-white font-bold">
                      Minor (190b)
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 mt-2 text-right font-mono">Total: 496 bits</p>
                </div>
              )}

              {activeLayer === 'interop' && (
                <div className="p-4 bg-zinc-900 rounded-lg border border-emerald-900/30">
                   <h4 className="text-sm font-semibold text-emerald-500 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> TRANSMUTER STATUS
                  </h4>
                  <div className="space-y-2 font-mono text-xs text-emerald-300/80">
                    <div className="flex justify-between"><span>INPUT:</span> <span>JSON/Object</span></div>
                    <div className="flex justify-between"><span>PROCESS:</span> <span>Harmonic Mapping</span></div>
                    <div className="flex justify-between"><span>OUTPUT:</span> <span>FC-496 Stream</span></div>
                  </div>
                </div>
              )}

            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-zinc-600">
              <Network className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-center font-mono text-sm">Sélectionnez une couche<br/>pour voir les détails</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArchitectureVisualizer;
