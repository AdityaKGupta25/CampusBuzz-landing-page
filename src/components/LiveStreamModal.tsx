import React, { useState } from 'react';
import { X, Radio, Eye, Send, Trophy, ShieldCheck, Heart, Flame, ThumbsUp } from 'lucide-react';
import { FeedLiveSportsCard } from '../types';

interface LiveStreamModalProps {
  sportsMatch: FeedLiveSportsCard | null;
  onClose: () => void;
}

export const LiveStreamModal: React.FC<LiveStreamModalProps> = ({
  sportsMatch,
  onClose,
}) => {
  const [messages, setMessages] = useState<Array<{ sender: string; text: string; time: string }>>([
    { sender: 'Rohan K.', text: 'What an over by the fast bowler! 🔥', time: 'Just now' },
    { sender: 'Coach Mehta', text: 'Pune Lions looking solid for the finals.', time: '1m ago' },
    { sender: 'Pooja', text: 'Does this match count towards the state selection?', time: '2m ago' },
    { sender: 'CampusBuzz Sports', text: 'Yes, player career averages update automatically!', time: '2m ago' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [reactions, setReactions] = useState({ flame: 342, heart: 289, clap: 198 });

  if (!sportsMatch) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    setMessages((prev) => [
      ...prev,
      { sender: 'You (Live Spectator)', text: inputMessage, time: 'Just now' }
    ]);
    setInputMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-slate-900 text-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-700 flex flex-col lg:flex-row max-h-[90vh]">
        {/* Left Video Stream Area */}
        <div className="flex-1 flex flex-col justify-between bg-black relative min-h-[300px] lg:min-h-[460px]">
          {/* Top Bar with Live Indicator & Close button */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-600 text-white text-[11px] font-black uppercase tracking-wider animate-pulse">
                <Radio className="w-3.5 h-3.5" />
                LIVE STREAM
              </span>
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold">
                <Eye className="w-3.5 h-3.5 text-teal-400" />
                {sportsMatch.viewersCount.toLocaleString()} watching
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Virtual Stadium Visual Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-center justify-center pointer-events-none">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center mx-auto mb-3 backdrop-blur-md">
                <Trophy className="w-8 h-8 text-amber-400 animate-bounce" />
              </div>
              <p className="text-sm font-bold text-slate-300">
                {sportsMatch.tournamentName}
              </p>
              <p className="text-xs text-teal-400 font-semibold mt-1">
                Hosted by {sportsMatch.organizerName} · {sportsMatch.venue}
              </p>
            </div>
          </div>

          {/* Bottom Live Scoreboard HUD */}
          <div className="relative z-10 p-4 bg-gradient-to-t from-slate-950 to-transparent mt-auto">
            <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-3 border border-slate-700 flex items-center justify-between gap-4">
              {/* Team A */}
              <div className="text-center flex-1">
                <div className="text-xs font-extrabold text-slate-300 truncate">
                  {sportsMatch.teamA.name}
                </div>
                <div className="text-xl sm:text-2xl font-black text-amber-400">
                  {sportsMatch.teamA.score}
                </div>
                <div className="text-[10px] text-slate-400">
                  {sportsMatch.teamA.oversOrTime}
                </div>
              </div>

              {/* VS Pill */}
              <div className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-black text-slate-400">
                VS
              </div>

              {/* Team B */}
              <div className="text-center flex-1">
                <div className="text-xs font-extrabold text-slate-300 truncate">
                  {sportsMatch.teamB.name}
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">
                  {sportsMatch.teamB.score}
                </div>
                <div className="text-[10px] text-slate-400">
                  {sportsMatch.teamB.oversOrTime}
                </div>
              </div>
            </div>

            {/* Match Status Ticker */}
            <p className="text-xs text-amber-300 text-center font-semibold mt-2.5">
              ⚡ {sportsMatch.statusNote}
            </p>
          </div>
        </div>

        {/* Right Live Spectator Chat & Auto-Verify Banner */}
        <div className="w-full lg:w-80 bg-slate-950 p-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800 h-80 lg:h-auto">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Live Spectator Chat
              </h4>
              <div className="flex items-center gap-1.5 text-xs">
                <button
                  onClick={() => setReactions(r => ({ ...r, flame: r.flame + 1 }))}
                  className="flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-400 text-[11px] cursor-pointer"
                >
                  <Flame className="w-3 h-3" />
                  {reactions.flame}
                </button>
                <button
                  onClick={() => setReactions(r => ({ ...r, heart: r.heart + 1 }))}
                  className="flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-rose-400 text-[11px] cursor-pointer"
                >
                  <Heart className="w-3 h-3" />
                  {reactions.heart}
                </button>
              </div>
            </div>

            {/* Chat List */}
            <div className="space-y-2.5 py-3 overflow-y-auto max-h-48 lg:max-h-64 text-xs pr-1">
              {messages.map((m, idx) => (
                <div key={idx} className="bg-slate-900/80 p-2 rounded-xl border border-slate-800/80">
                  <div className="flex items-center justify-between text-[10px] text-slate-500 mb-0.5">
                    <span className="font-bold text-teal-400">{m.sender}</span>
                    <span>{m.time}</span>
                  </div>
                  <p className="text-slate-200">{m.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* Auto update badge note per BRD */}
            <div className="p-2.5 rounded-xl bg-teal-950/60 border border-teal-800/80 text-[11px] text-teal-300 mb-3 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Scores & MVP awards push automatically to players' sports records upon match end.
              </span>
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSend} className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Cheer for your team..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-hidden focus:border-teal-500"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
