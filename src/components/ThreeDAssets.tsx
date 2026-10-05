import React from 'react';

/**
 * 3D Isometric / Character visual components rendered cleanly with CSS3D, gradients & SVG
 */

export const Student3DCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    {/* Floating backdrop glow */}
    <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-emerald-400/20 to-indigo-500/20 rounded-3xl blur-2xl" />
    
    {/* 3D Container with perspective */}
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 p-5 border border-teal-500/30 shadow-2xl flex flex-col justify-between overflow-hidden animate-float">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

      {/* Top row */}
      <div className="flex items-center justify-between z-10">
        <span className="px-2.5 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Verified Student
        </span>
        <span className="text-2xl animate-float-slow select-none">🎓</span>
      </div>

      {/* Center 3D Character Illustration */}
      <div className="relative my-auto flex flex-col items-center justify-center z-10">
        <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-tr from-teal-400 via-emerald-300 to-indigo-400 p-1 shadow-lg shadow-teal-500/30">
          <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center overflow-hidden relative">
            {/* Cute 3D Avatar Face */}
            <svg viewBox="0 0 100 100" className="w-20 h-20">
              <defs>
                <linearGradient id="faceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fcd34d" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
                <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>
              </defs>
              {/* Hoodie body */}
              <path d="M 20 100 Q 20 65 50 65 Q 80 65 80 100 Z" fill="url(#hoodieGrad)" />
              {/* Neck */}
              <rect x="42" y="55" width="16" height="15" fill="#f59e0b" rx="4" />
              {/* Face */}
              <circle cx="50" cy="40" r="24" fill="url(#faceGrad)" />
              {/* Cool Tech Glasses */}
              <rect x="32" y="32" width="15" height="11" rx="3" fill="#0f172a" />
              <rect x="53" y="32" width="15" height="11" rx="3" fill="#0f172a" />
              <line x1="47" y1="37" x2="53" y2="37" stroke="#0f172a" strokeWidth="2.5" />
              <circle cx="39" cy="37" r="2.5" fill="#38bdf8" />
              <circle cx="61" cy="37" r="2.5" fill="#38bdf8" />
              {/* Smile */}
              <path d="M 43 49 Q 50 54 57 49" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Hair */}
              <path d="M 27 34 Q 50 14 73 34 Q 65 22 50 22 Q 35 22 27 34 Z" fill="#1e293b" />
            </svg>
          </div>
        </div>

        {/* Orbiting Verification Badge */}
        <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-lg bg-teal-400 text-slate-950 text-[10px] font-black shadow-md flex items-center gap-1 border border-white">
          <span>✓</span> NIT Pune · Batch '26
        </div>
      </div>

      {/* Bottom stats row */}
      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-700/60 z-10 text-[11px]">
        <div className="bg-slate-900/80 rounded-xl p-1.5 text-center">
          <span className="text-slate-400 text-[9px] block uppercase font-bold">Hackathons</span>
          <span className="font-black text-amber-400">3x Winner 🏆</span>
        </div>
        <div className="bg-slate-900/80 rounded-xl p-1.5 text-center">
          <span className="text-slate-400 text-[9px] block uppercase font-bold">Paperwork</span>
          <span className="font-black text-emerald-400">0% Manual ⚡</span>
        </div>
      </div>
    </div>
  </div>
);

export const Sports3DCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 via-amber-400/20 to-orange-500/20 rounded-3xl blur-2xl" />
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-slate-900 via-rose-950 to-slate-950 p-5 border border-rose-500/30 shadow-2xl flex flex-col justify-between overflow-hidden animate-float-slow">
      <div className="flex items-center justify-between z-10">
        <span className="px-2.5 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
          Live Sports Ledger
        </span>
        <span className="text-2xl animate-float select-none">⚽</span>
      </div>

      <div className="my-auto text-center z-10">
        <div className="inline-flex p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 mb-2">
          <span className="text-4xl">🏏</span>
        </div>
        <div className="text-xs font-black text-slate-300">Inter-College T20 Derby</div>
        <div className="text-2xl font-black text-amber-400 my-1">164/5 <span className="text-xs text-slate-400">vs</span> 158/9</div>
        <p className="text-[10px] text-emerald-400 font-bold">Auto-updated to player career stats</p>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-700/60 z-10 text-[11px]">
        <div className="bg-slate-900/80 rounded-xl p-1.5 text-center">
          <span className="text-slate-400 text-[9px] block uppercase font-bold">Spectators</span>
          <span className="font-black text-rose-400">2.8k Live</span>
        </div>
        <div className="bg-slate-900/80 rounded-xl p-1.5 text-center">
          <span className="text-slate-400 text-[9px] block uppercase font-bold">Player Record</span>
          <span className="font-black text-amber-400">Permanent</span>
        </div>
      </div>
    </div>
  </div>
);

export const TrustShield3D: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-teal-500 via-emerald-400 to-cyan-300 p-0.5 shadow-xl shadow-teal-500/30 animate-glow">
      <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center text-teal-300 text-3xl">
        🛡️
      </div>
    </div>
  </div>
);
