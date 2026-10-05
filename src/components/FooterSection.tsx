import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FOUNDER_EMAIL } from '../welcomeData';
import { PageId } from './Navbar';

interface FooterSectionProps {
  onNavigate: (page: PageId) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onNavigate }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-xs">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-700 to-emerald-500 flex items-center justify-center font-black text-white text-sm shadow-md">
                CB
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                Campus<span className="text-teal-400">Buzz</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              India's verified open activity network. Every event attended, match played, and competition won becomes a permanent, trusted part of who you are.
            </p>
            <div className="space-y-1.5 text-slate-300">
              <a href={`mailto:${FOUNDER_EMAIL}`} className="flex items-center gap-2 hover:text-teal-300">
                <Mail className="w-3.5 h-3.5 text-teal-400" /> {FOUNDER_EMAIL}
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-teal-400">Platform</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('overview')} className="hover:text-white transition-colors cursor-pointer">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('feed')} className="hover:text-white transition-colors cursor-pointer">
                  Live Feed
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('talent')} className="hover:text-white transition-colors cursor-pointer">
                  Talent Discovery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('why')} className="hover:text-white transition-colors cursor-pointer">
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          {/* For */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-teal-400">Built For</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('ecosystem')} className="hover:text-white cursor-pointer">
                  Colleges & Universities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ecosystem')} className="hover:text-white cursor-pointer flex items-center gap-1.5">
                  High Schools <span className="text-[9px] bg-emerald-500 text-slate-950 font-bold px-1 rounded">FREE</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ecosystem')} className="hover:text-white cursor-pointer">
                  Tech Communities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ecosystem')} className="hover:text-white cursor-pointer">
                  Companies & Recruiters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ecosystem')} className="hover:text-white cursor-pointer">
                  Sports Organizers
                </button>
              </li>
            </ul>
          </div>

          {/* Pricing */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-teal-400">Pricing</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white cursor-pointer">
                  College Plans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white cursor-pointer">
                  Sports Plans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white cursor-pointer">
                  Recruiter Plans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white cursor-pointer">
                  Annual Savings (2 Mo Free)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 CampusBuzz Technologies India. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-400 border border-slate-800 transition-colors cursor-pointer flex items-center gap-1"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
};
