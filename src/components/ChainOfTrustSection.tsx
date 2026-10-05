import React from 'react';
import { ShieldCheck, Building2, UserCheck, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ChainOfTrustSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'CampusBuzz Verifies Institution',
      subtitle: 'Manual Review & Legal Check',
      description: 'Colleges, companies, communities, and sports leagues submit legal registration docs. No unverified institution can publish on CampusBuzz.',
      icon: Building2,
      badge: 'Institution Vetting'
    },
    {
      num: '02',
      title: 'Institution Verifies Its Members',
      subtitle: 'Zero Student Paperwork',
      description: 'When an institute takes a SaaS subscription or admits a cohort, students & faculty receive cryptographically tied institution badges automatically.',
      icon: UserCheck,
      badge: 'Passive Assignment'
    },
    {
      num: '03',
      title: 'Events & Match Results Published',
      subtitle: 'Immutable Platform Records',
      description: 'When hackathons finish or cricket/football tournaments conclude, host organizers publish results that permanently stamp participant profiles.',
      icon: Award,
      badge: 'Direct Stamping'
    },
    {
      num: '04',
      title: 'Profile Reflects Verified Reality',
      subtitle: 'Trusted Worldwide',
      description: 'Recruiters, universities, and peers view an authenticated activity dossier backed by institutions — completely replacing self-inflated paper resumes.',
      icon: ShieldCheck,
      badge: 'Permanent Trust'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-teal-50/20 to-white border-b border-slate-200 relative overflow-hidden">
      {/* Floating Emoji Illustrations */}
      <span className="hidden lg:block absolute top-10 right-12 text-6xl opacity-40 pointer-events-none select-none animate-float-slow">
        🔗
      </span>
      <span className="hidden lg:block absolute bottom-10 left-12 text-6xl opacity-40 pointer-events-none select-none animate-float">
        ✅
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            How Verification Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Students and athletes do not submit certificates or documents for verification. Verification is passive and flows strictly from vetted institutions downward.
          </p>
        </div>

        {/* 4 Steps Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative reveal-stagger">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="reveal-child hover-lift bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-teal-600 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-lg">
                      Step {step.num}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {step.title}
                  </h3>
                  <h4 className="text-xs font-semibold text-teal-700 mt-0.5">
                    {step.subtitle}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-teal-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Tamper-proof Cryptographic Log</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Belief Callout Box */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-900 text-white max-w-3xl mx-auto text-center border border-slate-800 shadow-xl">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">
            The CampusBuzz Core Belief
          </p>
          <blockquote className="text-base sm:text-lg font-bold text-slate-100 leading-snug">
            "Learning happens through events. Identity is built through participation. Trust is created through verification. CampusBuzz is where all three come together."
          </blockquote>
          <p className="text-xs text-slate-400 mt-2">
            — The CampusBuzz Philosophy
          </p>
        </div>
      </div>
    </section>
  );
};
