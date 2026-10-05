import React, { useState } from 'react';
import {
  Lock,
  Building2,
  Users,
  Trophy,
  Briefcase,
  Code2,
  Download,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Send,
  Eye
} from 'lucide-react';
import { CAMPUS_INSIDER_NOTICES } from '../welcomeData';
import { CampusInsiderNotice } from '../types';

interface CampusInsiderDemoProps {
  onExitToPublic: () => void;
}

type SaasEntity = 'College' | 'Community' | 'Company' | 'Sports Organizer';

const SAAS_TABS: { id: SaasEntity; label: string; icon: React.ElementType; badge: string; color: string }[] = [
  { id: 'College', label: 'College Insider', icon: Building2, badge: 'Placements & Clubs', color: 'indigo' },
  { id: 'Community', label: 'Community Insider', icon: Code2, badge: 'Dev Sprints & Talks', color: 'blue' },
  { id: 'Company', label: 'Company Insider', icon: Briefcase, badge: 'Hiring Drives', color: 'purple' },
  { id: 'Sports Organizer', label: 'Sports League', icon: Trophy, badge: 'Squads & Referees', color: 'amber' },
];

const SAAS_DESCRIPTIONS: Record<SaasEntity, { heading: string; summary: string }> = {
  College: {
    heading: 'Private College Intranet for Students & Faculty',
    summary: 'Coordinate placement drives, student clubs, and departmental sports squads in one private space — zero WhatsApp spam, zero exam or fee ERP clutter.'
  },
  Community: {
    heading: 'Private Hacker & Member Workspace',
    summary: 'Coordinate weekend project cohorts, speaker slides, and core community announcements exclusively for verified members.'
  },
  Company: {
    heading: 'Private Campus Drive & Candidate Command Center',
    summary: 'Schedule interview panels with colleges, review shortlisted hackathon finalists, and dispatch direct offer letters without paper resumes.'
  },
  'Sports Organizer': {
    heading: 'Private League & Match Commissioner Desk',
    summary: 'Verify official team rosters with captains, assign match referees, and push certified player statistics directly to participant profiles.'
  }
};

export const CampusInsiderDemo: React.FC<CampusInsiderDemoProps> = ({ onExitToPublic }) => {
  const [selectedSaas, setSelectedSaas] = useState<SaasEntity>('College');
  const [activeRole, setActiveRole] = useState<'Student' | 'Faculty' | 'Admin'>('Student');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Filter notices by SaaS entity
  const saasNotices = CAMPUS_INSIDER_NOTICES.filter((n) => {
    if (selectedSaas === 'College') return n.badgeTag === 'College SaaS';
    if (selectedSaas === 'Community') return n.badgeTag === 'Community SaaS';
    if (selectedSaas === 'Company') return n.badgeTag === 'Company SaaS';
    if (selectedSaas === 'Sports Organizer') return n.badgeTag === 'Sports SaaS';
    return true;
  });

  const availableCategories = ['All', ...Array.from(new Set(saasNotices.map((n) => n.category)))];

  const displayedNotices = saasNotices.filter((n) =>
    activeCategory === 'All' ? true : n.category === activeCategory
  );

  return (
    <div className="page-enter bg-slate-950 text-white min-h-[720px] py-10 px-4 sm:px-6 lg:px-8 border-b border-indigo-950 relative overflow-hidden">
      {/* ── Background Glow ── */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Top Header Bar ── */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-indigo-900/80 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-indigo-600 to-teal-500 text-white shadow-md">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight text-white">
                  Campus Insider
                </h2>
                <span className="text-[10px] uppercase font-black bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Encrypted Private Space
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Visible only to assigned verified members of this institution
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            {/* Role Simulation Pill */}
            <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-bold">
              <span className="text-slate-500 px-2 uppercase text-[9px]">View as:</span>
              {(['Student', 'Faculty', 'Admin'] as const).map((role) => (
                <button
                  key={role}
                  onClick={() => setActiveRole(role)}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    activeRole === role
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            <button
              onClick={onExitToPublic}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white text-xs font-bold transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public</span>
            </button>
          </div>
        </div>

        {/* ── SaaS Entity Selector Tabs ── */}
        <div className="mb-6">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Switch Private Intranet by Entity Type:
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            {SAAS_TABS.map((tab) => {
              const Icon = tab.icon;
              const isSelected = selectedSaas === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setSelectedSaas(tab.id);
                    setActiveCategory('All');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                    isSelected
                      ? 'bg-indigo-950/80 border-indigo-400 text-white ring-2 ring-indigo-500/20 shadow-md'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className={`p-2 rounded-xl shrink-0 ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-black truncate">{tab.label}</div>
                    <div className="text-[10px] text-indigo-300 truncate">{tab.badge}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Short Explainer Card for Active Entity ── */}
        <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/60 mb-6 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed text-slate-300">
            <strong className="text-white block font-bold text-sm mb-0.5">
              {SAAS_DESCRIPTIONS[selectedSaas].heading}
            </strong>
            <p className="text-slate-300">{SAAS_DESCRIPTIONS[selectedSaas].summary}</p>
          </div>
        </div>

        {/* ── Channel Filter Pills ── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 text-xs font-bold">
          <span className="text-slate-500 uppercase text-[10px] mr-1">Channel:</span>
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {cat === 'All' ? 'All Updates' : `${cat} Desk`}
            </button>
          ))}
        </div>

        {/* ── Notices Stream (No Exams, Crisp & Short) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 hover:border-indigo-500/50 shadow-md transition-all flex flex-col justify-between hover-lift group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                      notice.category === 'Placement'
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        : notice.category === 'Club'
                        ? 'bg-purple-950 text-purple-300 border border-purple-800'
                        : notice.category === 'Sports'
                        ? 'bg-amber-950 text-amber-300 border border-amber-800'
                        : notice.category === 'Drive'
                        ? 'bg-teal-950 text-teal-300 border border-teal-800'
                        : 'bg-blue-950 text-blue-300 border border-blue-800'
                    }`}>
                      {notice.category}
                    </span>
                    {notice.urgent && (
                      <span className="text-[10px] font-bold text-rose-400 bg-rose-950/80 border border-rose-800 px-1.5 py-0.2 rounded">
                        Urgent
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {notice.date}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                  {notice.title}
                </h4>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {notice.content}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="text-[11px] text-slate-400">
                  <span className="text-indigo-400 font-bold block">{notice.author}</span>
                  <span className="text-[10px] text-slate-500">{notice.authorRole}</span>
                </div>

                {notice.attachmentName ? (
                  <button
                    onClick={() => alert(`Simulated download of ${notice.attachmentName}`)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-teal-400" />
                    <span>PDF Notice</span>
                  </button>
                ) : (
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Broadcast
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer Exit Action ── */}
        <div className="mt-10 text-center">
          <button
            onClick={onExitToPublic}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-teal-500/25 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Public Open Feed</span>
          </button>
        </div>
      </div>
    </div>
  );
};
