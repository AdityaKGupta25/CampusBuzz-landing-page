import React, { useState } from 'react';
import {
  Sparkles,
  Radio,
  Calendar,
  Briefcase,
  Megaphone,
  Search,
  Filter,
  MapPin,
  Trophy,
  ShieldCheck,
  CheckCircle2,
  Users,
  ArrowRight,
  Heart,
  MessageSquare,
  Share2,
  Bookmark,
  ExternalLink,
  Flame
} from 'lucide-react';
import {
  FEED_EVENTS,
  FEED_JOBS,
  FEED_LIVE_SPORTS,
  FEED_UPDATES
} from '../welcomeData';
import {
  FeedEventCard,
  FeedJobCard,
  FeedLiveSportsCard,
  FeedUpdateCard
} from '../types';
import { DiscoverySidebar } from './DiscoverySidebar';
import { EventModal } from './EventModal';
import { LiveStreamModal } from './LiveStreamModal';
import { JobApplyModal } from './JobApplyModal';

export const OpenFeedSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'sports' | 'events' | 'jobs' | 'updates'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Modal triggers
  const [selectedEvent, setSelectedEvent] = useState<FeedEventCard | null>(null);
  const [selectedSports, setSelectedSports] = useState<FeedLiveSportsCard | null>(null);
  const [selectedJob, setSelectedJob] = useState<FeedJobCard | null>(null);

  // Filtered lists
  const filteredEvents = FEED_EVENTS.filter((e) => {
    const matchSearch =
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.institutionName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCity = selectedCity === 'All' || e.city === selectedCity;
    const matchCat = selectedCategory === 'All' || e.category === selectedCategory;
    return matchSearch && matchCity && matchCat;
  });

  const filteredJobs = FEED_JOBS.filter((j) => {
    const matchSearch =
      j.roleTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.skillsRequired.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchSearch;
  });

  const filteredSports = FEED_LIVE_SPORTS.filter((s) => {
    const matchSearch =
      s.tournamentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.organizerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.teamA.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.teamB.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSearch;
  });

  const filteredUpdates = FEED_UPDATES.filter((u) => {
    const matchSearch =
      u.institutionName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSearch;
  });

  return (
    <section id="open-feed" className="page-enter py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Feed
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Discover What's Happening
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
              Publicly discoverable with zero login required. Live sports, hackathons, job drives, and verified institutional notices in one unified feed.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search hackathons, sports, jobs, colleges..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 shadow-xs"
            />
          </div>
        </div>

        {/* Feed Nav Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-200">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>All Feed</span>
            </button>

            <button
              onClick={() => setActiveTab('sports')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'sports'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100'
              }`}
            >
              <Radio className="w-3.5 h-3.5 text-rose-500" />
              <span>Live Sports Ticker</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping ml-0.5" />
            </button>

            <button
              onClick={() => setActiveTab('events')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'events'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Hackathons & Events</span>
            </button>

            <button
              onClick={() => setActiveTab('jobs')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'jobs'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Jobs & Drives</span>
            </button>

            <button
              onClick={() => setActiveTab('updates')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'updates'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100'
              }`}
            >
              <Megaphone className="w-3.5 h-3.5" />
              <span>Institution Updates</span>
            </button>
          </div>

          {/* Contextual Filters */}
          <div className="flex items-center gap-2">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-hidden"
            >
              <option value="All">All Cities</option>
              <option value="Pune">Pune</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi NCR">Delhi NCR</option>
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-hidden"
            >
              <option value="All">All Categories</option>
              <option value="Technical">Technical</option>
              <option value="Sports">Sports</option>
              <option value="Cultural">Cultural</option>
              <option value="Workshop">Workshop</option>
            </select>
          </div>
        </div>

        {/* Main Feed Content Layout (2 Columns: Main Feed Stream + Discovery Sidebar) */}
        <div className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed Column (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {/* 1. LIVE SPORTS CARDS (Always pinned to top when live) */}
            {(activeTab === 'all' || activeTab === 'sports') && filteredSports.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                    <Radio className="w-4 h-4 animate-pulse" />
                    Live Match Streams (Pinned To Top)
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold">
                    Updates pushed to player profiles automatically
                  </span>
                </div>

                {filteredSports.map((match) => (
                  <div
                    key={match.id}
                    className="hover-lift bg-white rounded-2xl border-2 border-rose-200/80 shadow-md p-5 sm:p-6 transition-all hover:shadow-lg relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      LIVE STREAM
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-3">
                      <Trophy className="w-4 h-4 text-amber-500" />
                      <span>{match.tournamentName}</span>
                      <span>•</span>
                      <span className="text-teal-700 font-bold">{match.organizerName}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    </div>

                    {/* Scoreboard Block */}
                    <div className="bg-slate-900 text-white rounded-xl p-4 flex items-center justify-between gap-3 my-3">
                      <div className="text-left flex-1">
                        <div className="text-xs font-bold text-slate-300 truncate">
                          {match.teamA.name}
                        </div>
                        <div className="text-2xl font-black text-amber-400">
                          {match.teamA.score}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {match.teamA.oversOrTime}
                        </div>
                      </div>

                      <div className="text-center px-2">
                        <span className="text-xs font-black text-slate-500 bg-slate-800 px-2 py-1 rounded">
                          VS
                        </span>
                      </div>

                      <div className="text-right flex-1">
                        <div className="text-xs font-bold text-slate-300 truncate">
                          {match.teamB.name}
                        </div>
                        <div className="text-2xl font-black text-white">
                          {match.teamB.score}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {match.teamB.oversOrTime}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
                      <div className="flex items-center gap-3 text-slate-600">
                        <span className="flex items-center gap-1 text-emerald-600 font-bold">
                          <Users className="w-3.5 h-3.5" />
                          {match.viewersCount.toLocaleString()} watching
                        </span>
                        <span className="truncate text-slate-500">📍 {match.venue}</span>
                      </div>

                      <button
                        onClick={() => setSelectedSports(match)}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs transition-transform hover:scale-102 cursor-pointer"
                      >
                        <Radio className="w-3.5 h-3.5" />
                        <span>Watch Live Stream & Scoreboard</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 2. EVENT CARDS */}
            {(activeTab === 'all' || activeTab === 'events') && (
              <div className="space-y-4">
                {activeTab === 'events' && (
                  <h3 className="text-xs font-black uppercase tracking-wider text-teal-700">
                    Verified Events & Hackathons ({filteredEvents.length})
                  </h3>
                )}

                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="hover-lift bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col sm:flex-row group"
                  >
                    {/* Event Banner */}
                    <div className="sm:w-64 h-48 sm:h-auto relative shrink-0 overflow-hidden bg-slate-900">
                      <img
                        src={event.bannerUrl}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold">
                          {event.category}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-teal-600 text-white text-[10px] font-bold">
                          {event.mode}
                        </span>
                      </div>
                      {event.prizePool && (
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-amber-400 text-slate-950 text-[11px] font-black shadow-xs">
                          {event.prizePool}
                        </div>
                      )}
                    </div>

                    {/* Event Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                          <div className="flex items-center gap-1 font-semibold text-slate-700">
                            <span>{event.institutionName}</span>
                            <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          </div>
                          <span className="text-[11px] text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded-full">
                            {event.registrationDeadline}
                          </span>
                        </div>

                        <h4
                          onClick={() => setSelectedEvent(event)}
                          className="text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors cursor-pointer leading-snug"
                        >
                          {event.title}
                        </h4>

                        <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {event.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer with Progress & CTA */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-teal-500 h-full rounded-full"
                              style={{
                                width: `${Math.round(
                                  ((event.spotsTotal - event.spotsRemaining) / event.spotsTotal) * 100
                                )}%`
                              }}
                            />
                          </div>
                          <span className="text-[11px] font-bold text-slate-600">
                            {event.spotsRemaining} spots left
                          </span>
                        </div>

                        <button
                          onClick={() => setSelectedEvent(event)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 cursor-pointer"
                        >
                          <span>Register Free</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 3. JOB CARDS */}
            {(activeTab === 'all' || activeTab === 'jobs') && (
              <div className="space-y-4">
                {activeTab === 'jobs' && (
                  <h3 className="text-xs font-black uppercase tracking-wider text-indigo-700">
                    Verified Company Jobs & Internships ({filteredJobs.length})
                  </h3>
                )}

                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="hover-lift bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all p-5 sm:p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex items-start gap-3.5">
                        <img
                          src={job.companyLogo}
                          alt={job.companyName}
                          className="w-12 h-12 rounded-xl object-cover border border-slate-200 shadow-xs shrink-0"
                        />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-extrabold text-sm text-slate-900">
                              {job.companyName}
                            </span>
                            <ShieldCheck className="w-4 h-4 text-teal-600" />
                            <span className="text-[10px] bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded-full">
                              {job.roleType}
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-slate-900 mt-1 leading-snug">
                            {job.roleTitle}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                            <span>📍 {job.location}</span>
                            <span>•</span>
                            <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                              {job.salaryRange}
                            </span>
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedJob(job)}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer self-start sm:self-auto shrink-0"
                      >
                        <span>Quick Apply</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 text-xs">
                      <div className="flex flex-wrap gap-1.5">
                        {job.skillsRequired.map((skill, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {job.applicantsCount} Verified Candidates Applied
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 4. INSTITUTION UPDATES */}
            {(activeTab === 'all' || activeTab === 'updates') && (
              <div className="space-y-4">
                {activeTab === 'updates' && (
                  <h3 className="text-xs font-black uppercase tracking-wider text-amber-700">
                    Official Updates from Verified Institutions
                  </h3>
                )}

                {filteredUpdates.map((update) => (
                  <div
                    key={update.id}
                    className="hover-lift bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                          {update.institutionName.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-xs sm:text-sm text-slate-900">
                              {update.institutionName}
                            </span>
                            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                          </div>
                          <p className="text-[10px] text-slate-400 font-medium">
                            {update.postedTimeAgo} · {update.badgeTag}
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                        {update.institutionType}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      {update.content}
                    </p>

                    {update.imageUrl && (
                      <div className="rounded-xl overflow-hidden max-h-64 mb-3 border border-slate-100">
                        <img
                          src={update.imageUrl}
                          alt="Campus update"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 hover:text-rose-600 transition-colors cursor-pointer">
                          <Heart className="w-3.5 h-3.5" />
                          <span>{update.likesCount}</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-teal-600 transition-colors cursor-pointer">
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>{update.commentsCount}</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-teal-600 transition-colors cursor-pointer">
                          <Share2 className="w-3.5 h-3.5" />
                          <span>{update.sharesCount}</span>
                        </button>
                      </div>
                      <span className="text-[10px] font-medium text-slate-400">
                        Pushed to Verified Student Feeds
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Discovery Sidebar Column (1/3 width) */}
          <div className="lg:col-span-1">
            <DiscoverySidebar
              onSelectSports={(m) => setSelectedSports(m)}
              onSelectEvent={(e) => setSelectedEvent(e)}
              onSelectJob={(j) => setSelectedJob(j)}
            />
          </div>
        </div>
      </div>

      {/* Interactive Modals */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
      <LiveStreamModal
        sportsMatch={selectedSports}
        onClose={() => setSelectedSports(null)}
      />
      <JobApplyModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </section>
  );
};
