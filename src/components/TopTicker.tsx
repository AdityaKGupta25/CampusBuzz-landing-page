import React, { useState, useEffect } from 'react';
import { Radio } from 'lucide-react';
import { LIVE_ACTIVITY_TICKER } from '../welcomeData';

export const TopTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LIVE_ACTIVITY_TICKER.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white text-xs py-2 px-4 border-b border-teal-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        {/* Live pill */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-bold uppercase tracking-wider text-[10px] text-teal-300 flex items-center gap-1">
            <Radio className="w-3 h-3" />
            Live Now
          </span>
        </div>

        {/* Rotating line */}
        <div className="flex-1 truncate font-medium text-slate-300">
          {LIVE_ACTIVITY_TICKER[currentIndex]}
        </div>
      </div>
    </div>
  );
};
