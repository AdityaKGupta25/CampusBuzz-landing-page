import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ShieldCheck, XCircle } from 'lucide-react';

export const ProblemSolutionComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('solution');

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Floating illustrations */}
      <div className="absolute top-12 right-[5%] text-5xl animate-float-slow select-none pointer-events-none hidden lg:block opacity-40">📱</div>
      <div className="absolute bottom-16 left-[5%] text-5xl animate-float select-none pointer-events-none hidden lg:block opacity-40">🛡️</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100">
            <AlertCircle className="w-3.5 h-3.5" />
            The Problem
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4 leading-tight">
            Activity Happens.{' '}
            <span className="text-rose-500">Proof Disappears.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Millions of events happen yearly across India's campuses, stadiums, and community spaces. Hackathons are won, matches are played — <strong className="text-slate-800">none of it leaves a permanent, verifiable record.</strong>
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex p-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setActiveTab('problem')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'problem'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <XCircle className="w-3.5 h-3.5" />
              Without CampusBuzz
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'solution'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              With CampusBuzz
            </button>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch reveal-stagger">
          {/* Problem side */}
          <div className={`reveal-child rounded-3xl p-7 sm:p-9 border transition-all duration-300 ${
            activeTab === 'problem'
              ? 'bg-rose-50/60 border-rose-200 ring-2 ring-rose-400/20 shadow-lg'
              : 'bg-slate-50/70 border-slate-200 opacity-60 hover:opacity-100'
          }`}>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-xl bg-rose-100 text-rose-600">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Before: Proof Evaporates</h3>
            </div>

            <div className="space-y-4">
              {[
                { emoji: '📱', title: 'The WhatsApp Screenshot Win', desc: 'A national hackathon win exists only as a blurry WhatsApp forward no recruiter can verify.' },
                { emoji: '⚽', title: 'Athletes With Just Memories', desc: '18 goals in a city league — all stats vanish with discarded paper scoresheets.' },
                { emoji: '⏳', title: 'Discovery Is Broken', desc: 'Events announced on WhatsApp groups and 24-hour Instagram stories. Zero discoverability.' },
                { emoji: '📄', title: 'Dead Paper Resumes', desc: 'Companies recruit by college pedigree, not actual verified participation data.' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-rose-100/80 shadow-xs flex items-start gap-3 hover-lift">
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution side */}
          <div className={`reveal-child rounded-3xl p-7 sm:p-9 border transition-all duration-300 ${
            activeTab === 'solution'
              ? 'bg-gradient-to-b from-teal-50/70 via-white to-white border-teal-300 ring-2 ring-teal-500/20 shadow-lg'
              : 'bg-slate-50/70 border-slate-200 opacity-60 hover:opacity-100'
          }`}>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-xl bg-teal-100 text-teal-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">After: Verified Forever</h3>
            </div>

            <div className="space-y-4">
              {[
                { emoji: '🛡️', title: 'Passive Verification', desc: 'When NIT Pune publishes results, your profile is stamped automatically. Zero self-reporting.' },
                { emoji: '📊', title: 'Permanent Sports Ledger', desc: 'Scores compile into batting averages, goals, and MVP badges — updated in real-time.' },
                { emoji: '🌐', title: 'Open Discovery Feed', desc: 'All hackathons, leagues, workshops, and jobs in one searchable feed — no login needed.' },
                { emoji: '🎯', title: 'Data-Driven Hiring', desc: 'Recruiters filter by "Won 2+ Hackathons" and "10+ Events" — proof beats any resume.' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-teal-100 shadow-xs flex items-start gap-3 hover-lift">
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                    </div>
                    <p className="text-slate-600 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
