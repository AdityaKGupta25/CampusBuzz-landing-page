import React, { useState, useEffect } from 'react';
import { TopTicker } from './components/TopTicker';
import { Navbar, PageId } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionComparison } from './components/ProblemSolutionComparison';
import { OpenFeedSection } from './components/OpenFeedSection';
import { CampusInsiderDemo } from './components/CampusInsiderDemo';
import { StakeholdersSection } from './components/StakeholdersSection';
import { TalentScoutSection } from './components/TalentScoutSection';
import { ChainOfTrustSection } from './components/ChainOfTrustSection';
import { PricingSection } from './components/PricingSection';
import { FooterSection } from './components/FooterSection';
import { InstitutionType } from './types';
import { useScrollReveal } from './useScrollReveal';
import { ArrowLeft, Sparkles } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('overview');
  const [selectedPricingEntity, setSelectedPricingEntity] = useState<InstitutionType>('College');

  // Trigger scroll-reveal animations on mount and page switch
  useScrollReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Re-trigger scroll reveal for newly mounted page elements
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll('.reveal, .reveal-stagger');
      targets.forEach((el) => el.classList.add('visible'));
    }, 50);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  const handleSelectPricingFromStakeholder = (category: InstitutionType) => {
    setSelectedPricingEntity(category);
    setCurrentPage('pricing');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-500 selection:text-white flex flex-col justify-between">
      <div>
        {/* 1. Breaking National Pulse Ticker */}
        <TopTicker />

        {/* 2. Top Navbar with Clean Short Tabs (Overview, Feed, Why Us, Ecosystem, Talent, Pricing) + Insider Toggle */}
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        {/* 3. Page-Wise Content Router */}
        {currentPage === 'overview' && (
          <main className="page-enter">
            {/* Hero Section */}
            <HeroSection
              onExploreFeed={() => handleNavigate('feed')}
              onOpenInsiderDemo={() => handleNavigate('insider')}
            />

            {/* Core Dilemma: Activity Happens. Proof Disappears. */}
            <ProblemSolutionComparison />

            {/* Live Feed Section */}
            <OpenFeedSection />

            {/* Ecosystem: The 5 Communities */}
            <StakeholdersSection
              onSelectPricingCategory={handleSelectPricingFromStakeholder}
            />

            {/* Talent Discovery Hub */}
            <TalentScoutSection />

            {/* How Verification Works */}
            <ChainOfTrustSection />

            {/* Transparent Pricing Plans */}
            <PricingSection
              selectedEntity={selectedPricingEntity}
              onSelectEntity={(ent) => setSelectedPricingEntity(ent)}
            />
          </main>
        )}

        {/* Dedicated "Feed" Page */}
        {currentPage === 'feed' && (
          <main className="page-enter">
            <div className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                  <button
                    onClick={() => handleNavigate('overview')}
                    className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-bold mb-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Overview</span>
                  </button>
                  <h1 className="text-2xl sm:text-3xl font-black text-white">
                    Live Activity Feed
                  </h1>
                  <p className="text-xs text-slate-400 mt-1">
                    Discover upcoming hackathons, real-time sports scoreboards, jobs, and community updates.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950 border border-teal-800 text-teal-300 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Stream Active
                </span>
              </div>
            </div>
            <OpenFeedSection />
          </main>
        )}

        {/* Dedicated "Why Us" Page */}
        {currentPage === 'why' && (
          <main className="page-enter">
            <div className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto">
                <button
                  onClick={() => handleNavigate('overview')}
                  className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-bold mb-2 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Overview</span>
                </button>
                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  Why CampusBuzz
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  How passive verification replaces lost WhatsApp certificates and unverifiable paper resumes.
                </p>
              </div>
            </div>
            <ProblemSolutionComparison />
            <ChainOfTrustSection />
          </main>
        )}

        {/* Dedicated "Ecosystem" Page */}
        {currentPage === 'ecosystem' && (
          <main className="page-enter">
            <div className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto">
                <button
                  onClick={() => handleNavigate('overview')}
                  className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-bold mb-2 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Overview</span>
                </button>
                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  The Five Communities
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Colleges, High Schools, Tech Groups, Sports Organizers, and Companies all under one verified roof.
                </p>
              </div>
            </div>
            <StakeholdersSection
              onSelectPricingCategory={handleSelectPricingFromStakeholder}
            />
          </main>
        )}

        {/* Dedicated "Talent" Page */}
        {currentPage === 'talent' && (
          <main className="page-enter">
            <div className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto">
                <button
                  onClick={() => handleNavigate('overview')}
                  className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-bold mb-2 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Overview</span>
                </button>
                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  Talent Discovery Hub
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Filter verified students and professionals by hackathon awards, verified attendance, and sports track record.
                </p>
              </div>
            </div>
            <TalentScoutSection />
          </main>
        )}

        {/* Dedicated "Pricing" Page */}
        {currentPage === 'pricing' && (
          <main className="page-enter">
            <div className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto">
                <button
                  onClick={() => handleNavigate('overview')}
                  className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-bold mb-2 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Overview</span>
                </button>
                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  Plans & Pricing
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Transparent subscription tiers for colleges, communities, companies, sports leagues, and free schools.
                </p>
              </div>
            </div>
            <PricingSection
              selectedEntity={selectedPricingEntity}
              onSelectEntity={(ent) => setSelectedPricingEntity(ent)}
            />
          </main>
        )}

        {/* Dedicated "Campus Insider" Private Layer */}
        {currentPage === 'insider' && (
          <main className="page-enter">
            <CampusInsiderDemo onExitToPublic={() => handleNavigate('overview')} />
          </main>
        )}
      </div>

      {/* 4. Footer */}
      <FooterSection onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
