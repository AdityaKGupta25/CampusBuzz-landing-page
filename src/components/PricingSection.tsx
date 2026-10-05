import React, { useState } from 'react';
import { Check, X, ShieldCheck, Sparkles, ArrowRight, Building, Award, Mail } from 'lucide-react';
import { PRICING_BY_ENTITY, FOUNDER_EMAIL } from '../welcomeData';
import { InstitutionType } from '../types';

interface PricingSectionProps {
  selectedEntity: InstitutionType;
  onSelectEntity: (entity: InstitutionType) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  selectedEntity,
  onSelectEntity,
}) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');

  const entities: InstitutionType[] = [
    'College',
    'Community',
    'Company',
    'Sports Organizer',
    'School',
  ];

  const currentPlans =
    selectedEntity !== 'School'
      ? PRICING_BY_ENTITY[selectedEntity as Exclude<InstitutionType, 'School'>]
      : [];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Floating Emoji Illustrations */}
      <span className="hidden lg:block absolute top-12 right-16 text-6xl opacity-40 pointer-events-none select-none animate-float" aria-hidden="true">
        💎
      </span>
      <span className="hidden lg:block absolute bottom-12 left-16 text-6xl opacity-40 pointer-events-none select-none animate-float-slow" aria-hidden="true">
        🎁
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
            Simple Pricing
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Plans That Grow With You
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Revenue comes from institution SaaS subscriptions. Every member who joins makes the platform more valuable for institutions.
          </p>

          {/* Institution Type Selector */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {entities.map((ent) => (
              <button
                key={ent}
                onClick={() => onSelectEntity(ent)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedEntity === ent
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{ent} Plan</span>
                {ent === 'School' && (
                  <span className="ml-1.5 px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded font-black text-[10px]">
                    FREE
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Billing Cycle Toggle */}
          {selectedEntity !== 'School' && (
            <div className="mt-6 inline-flex items-center p-1 rounded-xl bg-white border border-slate-200 text-xs font-bold shadow-xs">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
                  billingPeriod === 'monthly'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
                  billingPeriod === 'annual'
                    ? 'bg-teal-600 text-white'
                    : 'text-slate-600 hover:text-teal-700'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black">
                  2 Months Free (Save 17%)
                </span>
              </button>
            </div>
          )}
        </div>

        {/* If School is selected: Show the Free Strategic Funnel Box */}
        {selectedEntity === 'School' ? (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-300 shadow-lg text-center hover-lift reveal-stagger">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Free Forever
            </span>
            <h3 className="text-3xl font-black text-slate-900 mt-4">
              High Schools Join 100% Free. Forever.
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
              Every high school student who joins CampusBuzz is a future college student and professional. They form habits early, build verified competition records, and see college events. Colleges pay to reach them — making the free school tier an acquisition engine.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto my-8 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Public School Profile & Badge</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Publish Science Fairs & Sports Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Students get School Verified Badges</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Parent & Alumni Activity Broadcasts</span>
              </div>
            </div>

            <a
              href={`mailto:${FOUNDER_EMAIL}?subject=School%20Free%20Onboarding%20Request`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Onboard Your School for Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ) : (
          /* Regular 3 Plans Grid (Starter, Growth, Pro) */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger">
            {currentPlans.map((plan) => {
              const effectiveMonthlyPrice =
                billingPeriod === 'annual'
                  ? Math.round((plan.monthlyPrice * 10) / 12)
                  : plan.monthlyPrice;

              return (
                <div
                  key={plan.name}
                  className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-200 flex flex-col justify-between relative hover-lift reveal-child ${
                    plan.popular
                      ? 'border-2 border-teal-500 shadow-xl scale-102 ring-4 ring-teal-500/10'
                      : 'border-slate-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-[11px] font-black uppercase px-3 py-0.5 rounded-full tracking-wider shadow-xs">
                      Most Popular For {selectedEntity}s
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black text-slate-900">
                        {plan.name}
                      </h3>
                      <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        {selectedEntity} SaaS
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      {plan.description}
                    </p>

                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900">
                        ₹{effectiveMonthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">
                        / month
                      </span>
                      {billingPeriod === 'annual' && (
                        <span className="text-[10px] text-teal-700 font-bold ml-1">
                          (Billed ₹{(plan.monthlyPrice * 10).toLocaleString()} / yr)
                        </span>
                      )}
                    </div>

                    {/* Features Checklist */}
                    <div className="space-y-3 pt-6 border-t border-slate-100 text-xs">
                      {plan.features.map((f, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-2.5 ${
                            f.included ? 'text-slate-800' : 'text-slate-400 opacity-60'
                          }`}
                        >
                          {f.included ? (
                            <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                          )}
                          <span className={f.included ? 'font-medium' : 'line-through'}>
                            {f.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <a
                      href={`mailto:${FOUNDER_EMAIL}?subject=Subscription%20Inquiry%20-%20${selectedEntity}%20${plan.name}%20Plan`}
                      className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        plan.popular
                          ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-md'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <span>Get Started with {plan.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
