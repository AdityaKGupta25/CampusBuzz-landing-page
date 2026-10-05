import React, { useState } from 'react';
import {
  Briefcase,
  Search,
  Filter,
  Trophy,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ExternalLink,
  Sparkles,
  Users
} from 'lucide-react';
import { TALENT_PROFILES } from '../welcomeData';
import { CandidateProfile } from '../types';

export const TalentScoutSection: React.FC = () => {
  const [filterHackathon, setFilterHackathon] = useState(false);
  const [filterActiveEvents, setFilterActiveEvents] = useState(false);
  const [filterSportsCaptain, setFilterSportsCaptain] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateProfile | null>(null);

  const filteredCandidates = TALENT_PROFILES.filter((c) => {
    if (filterHackathon && c.hackathonWins < 2) return false;
    if (filterActiveEvents && c.techEventsAttended < 10) return false;
    if (filterSportsCaptain && !c.sportsCaptain) return false;
    return true;
  });

  return (
    <section id="talent-scout" className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Glow mesh */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating emoji illustrations */}
      <span className="hidden lg:block absolute top-12 left-10 text-6xl opacity-30 pointer-events-none select-none animate-float">🎯</span>
      <span className="hidden lg:block absolute bottom-12 right-10 text-6xl opacity-30 pointer-events-none select-none animate-float-reverse">🔍</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950 px-3.5 py-1 rounded-full border border-teal-800">
            Talent Discovery
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-3">
            Find Verified Talent
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2.5 leading-relaxed">
            Stop relying on self-reported resume claims. Filter India's largest activity pool by actual verified achievements — hackathons won, tech workshops completed, and athletic leadership.
          </p>

          {/* Interactive Filter Sandbox Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Filter by:
            </span>

            <button
              onClick={() => setFilterHackathon(!filterHackathon)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterHackathon
                  ? 'bg-amber-400 text-slate-950 shadow-md scale-102'
                  : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Won 2+ Hackathons</span>
            </button>

            <button
              onClick={() => setFilterActiveEvents(!filterActiveEvents)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterActiveEvents
                  ? 'bg-teal-500 text-slate-950 shadow-md scale-102'
                  : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>10+ Events Attended</span>
            </button>

            <button
              onClick={() => setFilterSportsCaptain(!filterSportsCaptain)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterSportsCaptain
                  ? 'bg-rose-500 text-white shadow-md scale-102'
                  : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Sports Captain / Athlete</span>
            </button>

            {(filterHackathon || filterActiveEvents || filterSportsCaptain) && (
              <button
                onClick={() => {
                  setFilterHackathon(false);
                  setFilterActiveEvents(false);
                  setFilterSportsCaptain(false);
                }}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer ml-2"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Candidate Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
          {filteredCandidates.map((c) => (
            <div
              key={c.id}
              onClick={() => setSelectedCandidate(c)}
              className="reveal-child hover-lift bg-slate-800/90 rounded-2xl p-5 border border-slate-700/80 hover:border-teal-400/60 shadow-lg hover:shadow-teal-500/10 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="w-12 h-12 rounded-xl object-cover border-2 border-teal-500/40 shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="font-bold text-sm text-white group-hover:text-teal-300 transition-colors">
                        {c.name}
                      </h4>
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    </div>
                    <span className="text-[10px] text-teal-300 font-semibold block leading-tight">
                      {c.verifiedBadge}
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-2.5 h-2.5" />
                      {c.city}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
                  {c.headline}
                </p>

                {/* Verified Activity Stats Badge Row */}
                <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-[11px] mb-3">
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase font-bold">Hackathon Wins</span>
                    <span className="font-black text-amber-400">
                      🏆 {c.hackathonWins} Verified
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase font-bold">Events Logged</span>
                    <span className="font-black text-teal-400">
                      ⚡ {c.techEventsAttended} Participated
                    </span>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {c.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[10px] font-medium border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Open To tags */}
              <div className="pt-3 border-t border-slate-700 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 truncate max-w-[150px]">
                  Open to: <strong className="text-slate-200">{c.openTo[0]}</strong>
                </span>
                <span className="text-teal-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                  View Dossier →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Candidate Detail Modal Simulation */}
        {selectedCandidate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-slate-900 text-white rounded-3xl max-w-md w-full p-6 border border-slate-700 shadow-2xl relative">
              <button
                onClick={() => setSelectedCandidate(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-3.5 mb-4">
                <img
                  src={selectedCandidate.avatar}
                  alt={selectedCandidate.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-teal-500"
                />
                <div>
                  <h3 className="text-lg font-black text-white flex items-center gap-1.5">
                    {selectedCandidate.name}
                    <ShieldCheck className="w-5 h-5 text-teal-400" />
                  </h3>
                  <p className="text-xs text-teal-300 font-semibold">
                    {selectedCandidate.verifiedBadge}
                  </p>
                  <p className="text-xs text-slate-400">{selectedCandidate.city}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-teal-950/50 border border-teal-800 text-xs text-teal-200 mb-4 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Chain of Trust Verified:</strong> This profile's {selectedCandidate.hackathonWins} hackathon awards and {selectedCandidate.techEventsAttended} event logs were pushed directly by host institutions. No self-reported claims.
                </p>
              </div>

              <div className="space-y-2 mb-5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Declared Sport / Leadership:</span>
                  <span className="font-semibold text-slate-200">
                    {selectedCandidate.sportsCaptain ? 'Captain / State Player' : 'Active Participant'}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Open For:</span>
                  <span className="font-semibold text-amber-300">
                    {selectedCandidate.openTo.join(', ')}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  alert(`Direct Message channel opened with ${selectedCandidate.name} on CampusBuzz Talent Network!`);
                  setSelectedCandidate(null);
                }}
                className="w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                Send Direct Message / Fast-Track Interview
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
