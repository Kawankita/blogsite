import React, { useState } from 'react';
import { Bookmark, Share2 } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  isSaved: boolean;
  onSelectArticle: (article: Article) => void;
  onToggleSave: (articleId: string) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  isSaved,
  onSelectArticle,
  onToggleSave
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Derive badge color class
  const getBadgeStyle = () => {
    switch (article.category) {
      case 'Sustainability':
        return 'text-emerald-400';
      case 'Urban Technology':
        return 'text-sky-400';
      case 'Cybersecurity':
        return 'text-amber-400';
      default:
        return 'text-[#9E77ED]';
    }
  };

  // Derive author avatar background
  const getAuthorAvatarStyle = () => {
    switch (article.category) {
      case 'Sustainability':
        return 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30';
      case 'Urban Technology':
        return 'bg-sky-950/60 text-sky-400 border border-sky-500/30';
      case 'Cybersecurity':
        return 'bg-amber-950/60 text-amber-400 border border-amber-500/30';
      default:
        return 'bg-[rgba(158,119,237,0.15)] text-[#9E77ED] border border-[#9E77ED]/30';
    }
  };

  return (
    <article 
      onClick={() => onSelectArticle(article)}
      className="group bg-[#161B26] border border-[#222938] rounded-[12px] p-5 hover:bg-[#1F242F] hover:shadow-[0px_4px_20px_rgba(0,0,0,0.5)] hover:border-[#333B48] transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div className="space-y-4">
        {/* Thumbnail Wrapper */}
        <div className="relative w-full aspect-[16/10] rounded-[12px] overflow-hidden bg-[#1F242F]">
          {!imageError ? (
            <img 
              alt={article.title}
              src={article.imageUrl}
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-90'
              }`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#161B26] to-[#1F242F] text-[#94969C] p-4 text-center">
              <span className="font-heading text-sm font-semibold text-[#CECFD2]">{article.category}</span>
            </div>
          )}

          {/* Category Chip */}
          <div className="absolute top-3 left-3 z-10">
            <span className={`inline-flex px-2.5 py-1 rounded-[8px] bg-[#0C111D]/80 backdrop-blur-md border border-[#222938] font-heading font-medium text-xs ${getBadgeStyle()}`}>
              {article.category}
            </span>
          </div>

          {/* Quick Bookmark Button */}
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(article.id);
              }}
              className={`p-1.5 rounded-[6px] backdrop-blur-md border transition-all ${
                isSaved
                  ? 'bg-[#9E77ED] text-[#0C111D] border-[#9E77ED]'
                  : 'bg-[#0C111D]/80 text-[#CECFD2] border-[#222938] hover:text-white hover:border-[#9E77ED]/50'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save article'}
              aria-label={isSaved ? 'Remove from saved' : 'Save article'}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-heading font-semibold text-[20px] leading-[28px] text-[#F9FAFB] line-clamp-2 group-hover:text-[#9E77ED] transition-colors">
            {article.title}
          </h3>
          <p className="font-body text-[16px] leading-[24px] text-[#CECFD2] line-clamp-2">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Author Footer */}
      <div className="flex items-center gap-2 pt-5 mt-4 border-t border-[#222938] text-[#94969C] text-sm">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center font-semibold text-xs shrink-0 ${getAuthorAvatarStyle()}`}>
          {article.author.initials}
        </div>
        <span className="font-semibold text-[#F9FAFB] truncate">
          {article.author.name}
        </span>
        <span className="text-[#222938]">•</span>
        <span className="shrink-0 text-[#94969C]">
          {article.date} • {article.readTime}
        </span>
      </div>
    </article>
  );
};
