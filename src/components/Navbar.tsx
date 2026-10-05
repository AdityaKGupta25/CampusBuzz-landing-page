import React, { useState } from 'react';
import { Mail, Globe, Lock, ShieldCheck, Menu, X, ArrowUpRight } from 'lucide-react';
import { FOUNDER_EMAIL } from '../welcomeData';

export type PageId = 'overview' | 'feed' | 'why' | 'ecosystem' | 'talent' | 'pricing' | 'insider';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'feed', label: 'Feed' },
  { id: 'why', label: 'Why Us' },
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'talent', label: 'Talent' },
  { id: 'pricing', label: 'Pricing' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* ── Brand Logo ── */}
        <div
          onClick={() => onNavigate('overview')}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 flex items-center justify-center font-black text-white text-base shadow-sm group-hover:scale-105 transition-transform">
            CB
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-black tracking-tight text-slate-900">
              Campus<span className="text-teal-600">Buzz</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-[10px] font-bold">
              <ShieldCheck className="w-3 h-3 text-teal-600" />
              Verified
            </span>
          </div>
        </div>

        {/* ── Desktop Navigation Tabs ── */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1 rounded-full border border-slate-200/80 shadow-xs">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* ── Right Actions: Campus Insider Pill & Contact CTA ── */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          {/* Private Campus Insider Toggle Pill */}
          <button
            onClick={() => onNavigate(currentPage === 'insider' ? 'overview' : 'insider')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
              currentPage === 'insider'
                ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                : 'bg-indigo-50/80 text-indigo-700 border-indigo-200/80 hover:bg-indigo-100'
            }`}
          >
            <Lock className="w-3.5 h-3.5 text-indigo-500" />
            <span>Insider</span>
            <span className="px-1.5 py-0.2 rounded-full bg-indigo-200/70 text-indigo-900 text-[9px] font-black">
              Private
            </span>
          </button>

          {/* Contact Button */}
          <a
            href={`mailto:${FOUNDER_EMAIL}?subject=Inquiry%20-%20CampusBuzz`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-teal-400" />
            <span>Contact</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* ── Mobile Controls ── */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onNavigate(currentPage === 'insider' ? 'overview' : 'insider')}
            className={`p-1.5 rounded-lg border text-[11px] font-bold flex items-center gap-1 ${
              currentPage === 'insider'
                ? 'bg-indigo-600 text-white border-indigo-700'
                : 'bg-indigo-50 text-indigo-700 border-indigo-200'
            }`}
          >
            <Lock className="w-3 h-3" />
            <span>Insider</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-1 shadow-lg animate-in fade-in duration-150">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 px-3 rounded-xl text-sm font-bold transition-colors ${
                currentPage === item.id
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <a
              href={`mailto:${FOUNDER_EMAIL}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
            >
              <Mail className="w-4 h-4 text-teal-400" />
              <span>Contact Founder</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
