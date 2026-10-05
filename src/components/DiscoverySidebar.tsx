import React from 'react';
import { Radio, Clock, Building2, Briefcase, Flame, ArrowRight, ShieldCheck } from 'lucide-react';
import { FEED_LIVE_SPORTS, FEED_EVENTS, FEED_JOBS } from '../welcomeData';
import { FeedLiveSportsCard, FeedEventCard, FeedJobCard } from '../types';

interface DiscoverySidebarProps {
  onSelectSports: (match: FeedLiveSportsCard) => void;
  onSelectEvent: (event: FeedEventCard) => void;
  onSelectJob: (job: FeedJobCard) => void;
}

export const DiscoverySidebar: React.FC<DiscoverySidebarProps> = ({
  onSelectSports,
  onSelectEvent,
  onSelectJob,
}) => {
  return (
    <aside className="space-y-6">
      {/* 1. Happening Right Now (Live Widget) */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-md">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <h3 className="text-xs font-black uppercase tracking-wider text-rose-400">
              Live Right Now
            </h3>
          </div>
          <span className="text-[10px] text-slate-400 font-bold bg-slate-800 px-2 py-0.5 rounded-full">
            {FEED_LIVE_SPORTS.length} Active Streams
          </span>
        </div>

        <div className="space-y-3">
          {FEED_LIVE_SPORTS.map((match) => (
            <div
              key={match.id}
              onClick={() => onSelectSports(match)}
              className="bg-slate-800/80 hover:bg-slate-800 p-3 rounded-xl border border-slate-700/80 cursor-pointer transition-all hover:border-teal-500/50 group"
            >
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                <span className="font-bold text-teal-400 flex items-center gap-1">
                  <Radio className="w-3 h-3 text-rose-500 animate-pulse" />
                  {match.sport} · {match.matchStage}
                </span>
                <span>{match.viewersCount.toLocaleString()} watching</span>
              </div>

              <div className="text-xs font-bold text-white group-hover:text-teal-300 transition-colors">
                {match.teamA.name} ({match.teamA.score}) vs {match.teamB.name} ({match.teamB.score})
              </div>

              <p className="text-[11px] text-amber-300 mt-1 truncate">
                {match.statusNote}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Urgent: Closing in 48 Hours */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-1.5 text-amber-600 font-bold text-xs uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>Closing in 48 Hours</span>
          </div>
          <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
            Urgent
          </span>
        </div>

        <div className="space-y-3">
          {FEED_EVENTS.slice(0, 2).map((ev) => (
            <div
              key={ev.id}
              onClick={() => onSelectEvent(ev)}
              className="p-3 rounded-xl bg-amber-50/50 hover:bg-amber-50 border border-amber-200/70 cursor-pointer transition-colors group"
            >
              <div className="flex items-center justify-between text-[10px] text-amber-800 font-bold mb-1">
                <span>{ev.category}</span>
                <span>{ev.spotsRemaining} spots left</span>
              </div>
              <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-1">
                {ev.title}
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {ev.institutionName} · {ev.date}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Companies Currently Hiring */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-indigo-600 font-bold text-xs uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Companies Hiring</span>
          </div>
          <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-bold">
            Verified
          </span>
        </div>

        <div className="space-y-2.5">
          {FEED_JOBS.map((job) => (
            <div
              key={job.id}
              onClick={() => onSelectJob(job)}
              className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 cursor-pointer transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5 truncate">
                <img
                  src={job.companyLogo}
                  alt={job.companyName}
                  className="w-8 h-8 rounded-lg object-cover shrink-0 border border-slate-200"
                />
                <div className="truncate">
                  <div className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors truncate">
                    {job.companyName}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    {job.roleTitle}
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-bold text-emerald-600 shrink-0">
                {job.salaryRange.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Trending Institutions This Week */}
      <div className="bg-gradient-to-tr from-slate-50 to-teal-50/40 rounded-2xl p-4 sm:p-5 border border-teal-100 shadow-xs">
        <div className="flex items-center gap-1.5 text-teal-800 font-bold text-xs uppercase tracking-wider mb-3">
          <Flame className="w-4 h-4 text-orange-500" />
          <span>Trending Campuses & Leagues</span>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-teal-50">
            <span className="font-semibold text-slate-800">1. NIT Pune (Autonomous)</span>
            <span className="text-[11px] font-bold text-teal-700">1.4k Engagements</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-teal-50">
            <span className="font-semibold text-slate-800">2. Maharashtra Sports League</span>
            <span className="text-[11px] font-bold text-teal-700">890 Matches</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-teal-50">
            <span className="font-semibold text-slate-800">3. Bangalore Design Circle</span>
            <span className="text-[11px] font-bold text-teal-700">620 Designers</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
