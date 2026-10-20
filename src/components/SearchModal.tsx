import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Clock } from 'lucide-react';
import { Article } from '../types';

interface SearchModalProps {
  articles: Article[];
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  articles,
  isOpen,
  onClose,
  onSelectArticle
}) => {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = articles.filter((art) => {
    const matchesQuery = 
      query.trim() === '' ||
      art.title.toLowerCase().includes(query.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      art.author.name.toLowerCase().includes(query.toLowerCase()) ||
      art.category.toLowerCase().includes(query.toLowerCase());

    const matchesTag = 
      selectedTag === 'all' || 
      art.category.toLowerCase() === selectedTag.toLowerCase();

    return matchesQuery && matchesTag;
  });

  const categories = ['all', 'Artificial Intelligence', 'Sustainability', 'Design & UX', 'Urban Technology', 'Cybersecurity', 'Culture & Remote'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#161B26] border border-[#333B48] rounded-[16px] shadow-[0_16px_40px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col">
        {/* Search Bar Input */}
        <div className="p-4 border-b border-[#222938] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#9E77ED] shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search news, topics, authors, or analysis..."
            className="w-full bg-transparent border-none text-[#F9FAFB] placeholder:text-[#94969C] text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#94969C] hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-[#1F242F] text-[#94969C] hover:text-white border border-[#333B48]"
          >
            ESC
          </button>
        </div>

        {/* Filter Tags */}
        <div className="px-4 py-2.5 bg-[#0C111D] border-b border-[#222938] flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTag(cat)}
              className={`px-3 py-1 rounded-[6px] whitespace-nowrap transition-colors capitalize ${
                selectedTag === cat 
                  ? 'bg-[#9E77ED] text-[#0C111D] font-bold' 
                  : 'bg-[#161B26] text-[#94969C] hover:text-white hover:bg-[#1F242F]'
              }`}
            >
              {cat === 'all' ? 'All Topics' : cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-2">
          {filtered.length > 0 ? (
            filtered.map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  onSelectArticle(article);
                  onClose();
                }}
                className="p-3 rounded-[10px] hover:bg-[#1F242F] border border-transparent hover:border-[#333B48] cursor-pointer transition-colors flex items-center justify-between gap-4 group"
              >
                <div className="space-y-1 overflow-hidden">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-[#9E77ED] font-semibold">{article.category}</span>
                    <span className="text-[#333B48]">•</span>
                    <span className="text-[#94969C]">{article.author.name}</span>
                  </div>
                  <h4 className="font-heading font-semibold text-sm text-[#F9FAFB] group-hover:text-[#9E77ED] transition-colors truncate">
                    {article.title}
                  </h4>
                  <p className="text-xs text-[#CECFD2] line-clamp-1">{article.excerpt}</p>
                </div>
                <div className="shrink-0 flex items-center gap-1 text-xs text-[#94969C]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                  <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#9E77ED]" />
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-[#94969C] space-y-2">
              <p className="text-sm">No articles found matching "{query}"</p>
              <p className="text-xs">Try searching for keywords like "AI", "Microgrid", "Design", or "Transit"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
