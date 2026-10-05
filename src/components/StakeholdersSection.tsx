import React, { useState } from 'react';
import {
  GraduationCap,
  Users2,
  Code2,
  Briefcase,
  Trophy,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { STAKEHOLDERS } from '../welcomeData';
import { InstitutionType } from '../types';

interface StakeholdersSectionProps {
  onSelectPricingCategory: (category: InstitutionType) => void;
}

export const StakeholdersSection: React.FC<StakeholdersSectionProps> = ({
  onSelectPricingCategory,
}) => {
  const [activeTab, setActiveTab] = useState<InstitutionType>('College');

  const activeStakeholder = STAKEHOLDERS.find((s) => s.id === activeTab) || STAKEHOLDERS[0];

  const iconMap: Record<InstitutionType, React.ElementType> = {
    College: GraduationCap,
    School: Users2,
    Community: Code2,
    Company: Briefcase,
    'Sports Organizer': Trophy,
  };

  return (
    <section id="stakeholders" className="py-16 sm:py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Floating Emoji Illustrations */}
      <span className="hidden lg:block absolute top-10 right-16 text-6xl opacity-40 pointer-events-none select-none animate-float-slow">
        🏛️
      </span>
      <span className="hidden lg:block absolute bottom-10 left-16 text-6xl opacity-40 pointer-events-none select-none animate-float">
        🎓
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
            Who It's For
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            One Platform, Five Communities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            CampusBuzz is not just an app for college campuses. A local cricket tournament organizer, a Bangalore tech community, an enterprise recruiter, and an 11th-grade robotics student all share the same verified ecosystem.
          </p>

          {/* 5-Tab Persona Switcher */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 reveal-stagger">
            {STAKEHOLDERS.map((s) => {
              const Icon = iconMap[s.id];
              const isSelected = activeTab === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`reveal-child flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-sm scale-102'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-teal-400' : 'text-slate-400'}`} />
                  <span>{s.title}</span>
                  {s.id === 'School' && (
                    <span className="text-[10px] bg-emerald-400 text-slate-950 font-black px-1.5 py-0.2 rounded-full">
                      FREE
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stakeholder Deep Dive Card */}
        <div className="bg-gradient-to-br from-slate-50 to-teal-50/20 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${activeStakeholder.badgeColor}`}>
                  {activeStakeholder.pricingTag}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {activeStakeholder.tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                How {activeStakeholder.title} Operate on CampusBuzz
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeStakeholder.description}
              </p>

              {/* 4 Core Features / Deliverables */}
              <div className="space-y-3 pt-2">
                {activeStakeholder.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                    <span className="p-1 rounded-full bg-teal-100 text-teal-700 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Action Button to Jump to Pricing */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectPricingCategory(activeStakeholder.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
                >
                  <span>View SaaS Plan for {activeStakeholder.title}</span>
                  <ArrowRight className="w-4 h-4 text-teal-400" />
                </button>
              </div>
            </div>

            {/* Right Testimonial & Visual Proof Column (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Testimonial Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs relative hover-lift">
                <span className="text-3xl text-teal-500 font-serif leading-none">"</span>
                <p className="text-xs sm:text-sm text-slate-700 font-medium italic leading-relaxed mt-1">
                  {activeStakeholder.quote.text}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-xs text-slate-900">
                      {activeStakeholder.quote.author}
                    </h5>
                    <p className="text-[11px] text-slate-500">
                      {activeStakeholder.quote.role}
                    </p>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                </div>
              </div>

              {/* Special Strategic Note For Schools */}
              {activeStakeholder.id === 'School' && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Why Schools Join Free:</strong>
                    Schools are onboarded 100% free of charge. School students form early habits on CampusBuzz and become lifelong users as they transition to university and career life.
                  </div>
                </div>
              )}

              {/* Special Note For Standalone Sports Organizers */}
              {activeStakeholder.id === 'Sports Organizer' && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Sport-Agnostic Infrastructure:</strong>
                    Whether it's box cricket, football leagues, badminton, or chess — match outcomes automatically update participating athletes' permanent sports profiles.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
