import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Trophy,
  Briefcase,
  Code2,
  GraduationCap,
  Users2,
  Play,
  CheckCircle2,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { Student3DCard, Sports3DCard } from './ThreeDAssets';

interface HeroSectionProps {
  onExploreFeed: () => void;
  onOpenInsiderDemo: () => void;
}

const PERSONAS = [
  {
    label: 'Students',
    icon: GraduationCap,
    emoji: '🎓',
    quote: 'My hackathon win was verified automatically — no lost certificates!',
    author: 'Aarav S., CSE Final Year · NIT Pune',
    gradient: 'from-teal-500 to-emerald-500'
  },
  {
    label: 'Athletes',
    icon: Trophy,
    emoji: '⚽',
    quote: 'My football tournament goals and MVP awards live on my permanent profile.',
    author: 'Sameer K., Pune Premier League',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    label: 'Communities',
    icon: Code2,
    emoji: '💻',
    quote: 'Our city tech meetups now issue tamper-proof verified attendance badges.',
    author: 'Rust Developers Bangalore',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    label: 'Recruiters',
    icon: Briefcase,
    emoji: '🏢',
    quote: 'We hire candidates by verified achievements — not inflated resume claims.',
    author: 'PhonePe Talent Acquisition Team',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    label: 'Schools',
    icon: Users2,
    emoji: '🏫',
    quote: 'Our students build national competition records before they enter college.',
    author: 'DPS R.K. Puram Science Club',
    gradient: 'from-emerald-500 to-teal-600'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreFeed,
  onOpenInsiderDemo,
}) => {
  const [activePersona, setActivePersona] = useState(0);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-white pt-8 pb-16 lg:pb-24 border-b border-slate-200/80">
      {/* ── Background Decorative Meshes ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] pointer-events-none opacity-30 blur-3xl bg-gradient-to-tr from-teal-200 via-indigo-100 to-emerald-200 -z-10" />
      <div className="absolute top-32 -right-24 w-72 h-72 rounded-full bg-teal-300/15 blur-3xl pointer-events-none" />
      <div className="absolute top-48 -left-24 w-72 h-72 rounded-full bg-indigo-300/15 blur-3xl pointer-events-none" />

      {/* Floating 3D Emoticons */}
      <div className="absolute top-12 right-[6%] text-5xl animate-float-slow select-none pointer-events-none hidden xl:block opacity-60">🏆</div>
      <div className="absolute top-36 left-[4%] text-4xl animate-float select-none pointer-events-none hidden xl:block opacity-50">💻</div>
      <div className="absolute bottom-16 right-[8%] text-5xl animate-float-reverse select-none pointer-events-none hidden xl:block opacity-50">🎯</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top Pill Announcement ── */}
        <div className="flex justify-center mb-6 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-teal-200 shadow-xs text-xs font-semibold text-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-teal-600" />
            </span>
            <span className="text-teal-700 font-bold uppercase tracking-wider text-[11px]">Universal Ecosystem</span>
            <span className="text-slate-300">•</span>
            <span>Colleges, Communities, Sports, Schools & Companies</span>
          </div>
        </div>

        {/* ── 2-Column Hero Grid: Left Copy + Right 3D Visual Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left reveal">
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black text-slate-900 tracking-tight leading-[1.12]">
              Activity Happens.{' '}
              <br className="hidden sm:block" />
              Proof Disappears.{' '}
              <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-text">
                We Make It Permanent.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              From university hackathons and inter-college sports derbies to tech meetups and corporate drives — <strong className="text-slate-800 font-semibold">every achievement is institution-verified and publicly discoverable.</strong>
            </p>

            {/* Persona Switcher Buttons */}
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                Explore For:
              </span>
              {PERSONAS.map((p, idx) => {
                const isActive = activePersona === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActivePersona(idx)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-md scale-105'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>{p.emoji}</span>
                    <span>{p.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Persona Testimonial */}
            <div className="mt-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xs flex items-center gap-3 max-w-lg mx-auto lg:mx-0">
              <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${PERSONAS[activePersona].gradient} text-white shrink-0`}>
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-xs text-left">
                <p className="text-slate-700 italic font-medium">"{PERSONAS[activePersona].quote}"</p>
                <p className="text-slate-500 font-semibold mt-0.5 text-[11px]">— {PERSONAS[activePersona].author}</p>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onExploreFeed}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-teal-600/25 hover:shadow-teal-600/35 hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <span>Explore Live Feed</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenInsiderDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 shadow-xs hover:border-indigo-300 hover:text-indigo-600 transition-all cursor-pointer group"
              >
                <Play className="w-4 h-4 text-indigo-500 fill-indigo-100 group-hover:scale-110 transition-transform" />
                <span>Campus Insider 🔒</span>
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): 3D Character & Sports Showcase Cards */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-6 relative reveal">
            <Student3DCard className="hover-lift" />
            <div className="hidden lg:block -mt-16 ml-16">
              <Sports3DCard className="hover-lift scale-90" />
            </div>
          </div>
        </div>

        {/* ── 4 Trust Chips ── */}
        <div className="mt-12 pt-8 border-t border-slate-200/70 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 reveal-stagger">
          {[
            { icon: CheckCircle2, text: 'Zero Fake Claims' },
            { icon: ShieldCheck, text: 'Passive Verification' },
            { icon: TrendingUp, text: 'Real-Time Sports Scores' },
            { icon: Sparkles, text: 'Free for Schools & Students' },
          ].map((item, i) => (
            <div
              key={i}
              className="reveal-child flex items-center justify-center gap-2 bg-white/70 p-2.5 rounded-xl border border-slate-100 text-xs text-slate-600 font-medium hover-lift"
            >
              <item.icon className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
