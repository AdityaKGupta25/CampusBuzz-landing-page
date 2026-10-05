import React, { useState } from 'react';
import { X, Calendar, MapPin, Trophy, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FeedEventCard } from '../types';

interface EventModalProps {
  event: FeedEventCard | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [registered, setRegistered] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
        {/* Modal Header Banner */}
        <div className="relative h-44 w-full bg-slate-900">
          <img
            src={event.bannerUrl}
            alt={event.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded-md bg-teal-500 text-white text-[11px] font-bold">
                {event.category}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-[11px] font-medium">
                {event.mode}
              </span>
              {event.prizePool && (
                <span className="px-2 py-0.5 rounded-md bg-amber-400 text-slate-950 text-[11px] font-black">
                  {event.prizePool}
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-lg font-bold line-clamp-1 leading-snug">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!registered ? (
            <div>
              <div className="flex items-center gap-1.5 text-xs text-teal-700 font-semibold mb-3">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Hosted by {event.institutionName} · Verified Organizer</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {event.description}
              </p>

              <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs mb-5">
                <div className="flex items-center gap-2 text-slate-700">
                  <Calendar className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="truncate">{event.venue}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 col-span-2">
                  <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Outcome verified directly to your CampusBuzz portfolio</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email / Campus ID
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@college.edu or email@gmail.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  Confirm Free 1-Click Registration
                </button>
                <p className="text-[10px] text-center text-slate-400">
                  Passively linked to your CampusBuzz activity ledger upon check-in.
                </p>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-black text-slate-900">
                You're Registered!
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                Reference ID: <strong className="text-teal-700">CBZ-2026-REG-8821</strong>
              </p>
              <div className="mt-4 p-3 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 text-left">
                <p className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  Verified Badge Reservation
                </p>
                <p className="text-[11px] text-teal-700 mt-0.5">
                  When {event.institutionName} submits attendance, this event and your certificate will permanently reflect on your public profile.
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-5 w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Close & Return to Feed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
