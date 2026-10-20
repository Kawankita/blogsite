import React from 'react';
import { ArrowRight, Bookmark } from 'lucide-react';
import { Article } from '../types';

interface HeroFeaturedProps {
  article: Article;
  isSaved: boolean;
  onSelectArticle: (article: Article) => void;
  onToggleSave: (articleId: string) => void;
}

export const HeroFeatured: React.FC<HeroFeaturedProps> = ({
  article,
  isSaved,
  onSelectArticle,
  onToggleSave
}) => {
  return (
    <section 
      aria-label="Featured Story"
      className="relative w-full rounded-[24px] overflow-hidden min-h-[460px] md:min-h-[520px] flex flex-col justify-end p-6 sm:p-10 md:p-12 border border-[#222938] bg-[#1F242F] shadow-2xl group"
    >
      {/* Background Image with Dark Subtle Gradient Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ 
          backgroundImage: `url('${article.imageUrl}')`,
          backgroundColor: '#161B26'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C111D] via-[#0C111D]/80 to-[#0C111D]/35 pointer-events-none" />

      {/* Quick Bookmark Button at Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(article.id);
          }}
          className={`p-2.5 rounded-full backdrop-blur-md border transition-all duration-200 ${
            isSaved 
              ? 'bg-[#9E77ED] text-[#0C111D] border-[#9E77ED]' 
              : 'bg-[#0C111D]/70 text-[#CECFD2] border-[#222938] hover:text-[#F9FAFB] hover:border-[#9E77ED]/50'
          }`}
          title={isSaved ? 'Remove from saved' : 'Save article'}
          aria-label={isSaved ? 'Remove from saved' : 'Save article'}
        >
          <Bookmark className="w-4 h-4 fill-current" />
        </button>
      </div>

      {/* Content Box */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-full">
        <div className="space-y-4 max-w-3xl">
          {/* Top Badge: "FEATURED STORY" */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[rgba(158,119,237,0.15)] backdrop-blur-md border border-[#9E77ED]/30 text-[#9E77ED] font-heading font-semibold text-xs tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#9E77ED] animate-pulse" />
            Featured Story
          </div>

          {/* Hero H1 Title */}
          <h1 
            onClick={() => onSelectArticle(article)}
            className="font-heading font-bold text-[32px] sm:text-[36px] text-[#F9FAFB] leading-[40px] sm:leading-[44px] tracking-tight cursor-pointer hover:text-[#9E77ED] transition-colors"
          >
            {article.title}
          </h1>

          {/* Body Large Excerpt */}
          <p className="font-body text-[18px] text-[#CECFD2] leading-[28px] max-w-2xl">
            {article.excerpt}
          </p>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-[#94969C] text-sm">
            <span className="font-medium text-[#CECFD2]">Special Report</span>
            <span className="text-[#222938]">•</span>
            <span>{article.readTime}</span>
            <span className="text-[#222938]">•</span>
            <span className="text-[#9E77ED] font-medium">Trending Now</span>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="shrink-0 self-start md:self-end">
          <button 
            onClick={() => onSelectArticle(article)}
            className="group/btn inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[8px] bg-[#9E77ED] text-[#0C111D] hover:bg-[#7F56D9] hover:text-[#F9FAFB] text-sm font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(158,119,237,0.3)] cursor-pointer"
          >
            <span>Read Full Story</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
