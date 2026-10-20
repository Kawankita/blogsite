import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { BREAKING_NEWS_ITEMS } from '../data/articles';

interface BreakingTickerProps {
  onSelectBreakingNews: (headline: string) => void;
}

export const BreakingTicker: React.FC<BreakingTickerProps> = ({ onSelectBreakingNews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BREAKING_NEWS_ITEMS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % BREAKING_NEWS_ITEMS.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + BREAKING_NEWS_ITEMS.length) % BREAKING_NEWS_ITEMS.length);
  };

  return (
    <div 
      className="w-full bg-[#161B26] border-b border-[#222938] py-2 px-4 sm:px-6 lg:px-8 text-xs font-body select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-hidden">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[6px] bg-[rgba(158,119,237,0.15)] border border-[#9E77ED]/30 text-[#9E77ED] font-heading font-semibold text-[11px] uppercase tracking-wider shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E77ED] animate-pulse"></span>
            <span>Live Wire</span>
          </div>

          {/* Current Headline */}
          <button
            onClick={() => onSelectBreakingNews(BREAKING_NEWS_ITEMS[currentIndex])}
            className="text-left text-[#CECFD2] hover:text-[#F9FAFB] hover:underline truncate transition-colors text-xs font-medium cursor-pointer"
          >
            {BREAKING_NEWS_ITEMS[currentIndex]}
          </button>
        </div>

        {/* Ticker Controls */}
        <div className="hidden sm:flex items-center gap-1 shrink-0 text-[#94969C]">
          <span className="text-[11px] mr-1 tabular-nums">
            {currentIndex + 1} / {BREAKING_NEWS_ITEMS.length}
          </span>
          <button
            onClick={handlePrev}
            className="p-1 hover:text-white rounded hover:bg-[#1F242F] transition-colors"
            title="Previous update"
            aria-label="Previous update"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 hover:text-white rounded hover:bg-[#1F242F] transition-colors"
            title="Next update"
            aria-label="Next update"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
