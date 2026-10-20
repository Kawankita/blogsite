import React from 'react';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveBookmark: (articleId: string) => void;
  onClearAll: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveBookmark,
  onClearAll
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0C111D] border-l border-[#222938] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#222938] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-[#9E77ED]" />
              <h3 className="font-heading font-semibold text-lg text-[#F9FAFB]">
                Saved Stories ({savedArticles.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#94969C] hover:text-white rounded-[6px] hover:bg-[#161B26]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {savedArticles.length > 0 ? (
              savedArticles.map((article) => (
                <div
                  key={article.id}
                  className="p-3.5 rounded-[12px] bg-[#161B26] border border-[#222938] hover:border-[#333B48] flex flex-col justify-between gap-3 group transition-colors"
                >
                  <div 
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="cursor-pointer space-y-1.5"
                  >
                    <span className="text-[11px] font-semibold text-[#9E77ED] uppercase tracking-wider">
                      {article.category}
                    </span>
                    <h4 className="font-heading font-semibold text-sm text-[#F9FAFB] group-hover:text-[#9E77ED] transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-xs text-[#94969C]">{article.readTime} • {article.date}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#222938]/60 text-xs">
                    <button
                      onClick={() => onRemoveBookmark(article.id)}
                      className="text-red-400/80 hover:text-red-400 flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                    <button
                      onClick={() => {
                        onSelectArticle(article);
                        onClose();
                      }}
                      className="text-[#9E77ED] font-semibold flex items-center gap-1 hover:underline"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-20 text-center space-y-3 text-[#94969C]">
                <div className="w-12 h-12 rounded-full bg-[#161B26] border border-[#222938] flex items-center justify-center mx-auto text-[#94969C]">
                  <Bookmark className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-[#CECFD2]">No saved stories yet</p>
                <p className="text-xs max-w-xs mx-auto">
                  Click the bookmark icon on any card or inside articles to save pieces for later offline or distraction-free reading.
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          {savedArticles.length > 0 && (
            <div className="p-4 border-t border-[#222938] bg-[#161B26] flex items-center justify-between">
              <button
                onClick={onClearAll}
                className="text-xs text-[#94969C] hover:text-red-400 transition-colors"
              >
                Clear all bookmarks
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-[8px] bg-[#1F242F] text-xs font-semibold text-white hover:bg-[#333B48]"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
