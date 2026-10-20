import React, { useState, useEffect } from 'react';
import { 
  X, 
  Bookmark, 
  Share2, 
  ThumbsUp, 
  Volume2, 
  VolumeX, 
  MessageSquare, 
  Clock, 
  Calendar, 
  Eye, 
  Check, 
  Send,
  Sparkles,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Article, Comment } from '../types';
import { INITIAL_COMMENTS } from '../data/articles';

interface ArticleReaderModalProps {
  article: Article;
  isSaved: boolean;
  onClose: () => void;
  onToggleSave: (articleId: string) => void;
  onSelectArticle: (article: Article) => void;
  relatedArticles: Article[];
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  isSaved,
  onClose,
  onToggleSave,
  onSelectArticle,
  relatedArticles
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(12);
  const [claps, setClaps] = useState(article.claps || 342);
  const [hasClapped, setHasClapped] = useState(false);
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [newCommentText, setNewCommentText] = useState('');
  const [shareCopied, setShareCopied] = useState(false);

  // Track scroll depth
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const total = target.scrollHeight - target.clientHeight;
    if (total > 0) {
      setScrollProgress((target.scrollTop / total) * 100);
    }
  };

  // Keyboard shortcut to close (Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Handle clapping
  const handleClap = () => {
    setClaps((prev) => prev + 1);
    setHasClapped(true);
  };

  // Handle share
  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2500);
  };

  // Add comment
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: Comment = {
      id: `c_${Date.now()}`,
      author: 'Reader',
      initials: 'RD',
      content: newCommentText.trim(),
      timestamp: 'Just now',
      likes: 1
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-[19px] leading-[32px]';
      case 'xlarge':
        return 'text-[21px] leading-[36px]';
      default:
        return 'text-[17px] leading-[29px]';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Container */}
      <div 
        onScroll={handleScroll}
        className="w-full h-full max-w-5xl bg-[#0C111D] text-[#CECFD2] overflow-y-auto flex flex-col md:my-6 md:rounded-[24px] md:border md:border-[#222938] md:shadow-2xl relative"
      >
        {/* Sticky Header with Reading Progress Bar */}
        <div className="sticky top-0 z-30 bg-[#0C111D]/95 backdrop-blur-xl border-b border-[#222938]">
          <div 
            className="h-1 bg-gradient-to-r from-[#9E77ED] to-[#7F56D9] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
          <div className="px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
            {/* Left: Close button */}
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm text-[#94969C] hover:text-[#F9FAFB] transition-colors"
            >
              <X className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Close article</span>
            </button>

            {/* Center: Reading progress */}
            <div className="hidden md:flex items-center gap-2 text-xs text-[#94969C]">
              <BookOpen className="w-4 h-4 text-[#9E77ED]" />
              <span className="truncate max-w-md font-medium text-[#CECFD2]">{article.title}</span>
            </div>

            {/* Right: Controls */}
            <div className="flex items-center gap-2">
              {/* Text Size */}
              <div className="hidden sm:flex items-center bg-[#161B26] border border-[#222938] rounded-[8px] p-0.5 text-xs">
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-2 py-1 rounded-[6px] ${fontSize === 'normal' ? 'bg-[#9E77ED] text-[#0C111D] font-bold' : 'text-[#94969C] hover:text-white'}`}
                  title="Standard text"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-2 py-1 rounded-[6px] ${fontSize === 'large' ? 'bg-[#9E77ED] text-[#0C111D] font-bold' : 'text-[#94969C] hover:text-white'}`}
                  title="Larger text"
                >
                  A+
                </button>
              </div>

              {/* Bookmark */}
              <button
                onClick={() => onToggleSave(article.id)}
                className={`p-2 rounded-[8px] border transition-colors ${
                  isSaved 
                    ? 'bg-[#9E77ED] text-[#0C111D] border-[#9E77ED]' 
                    : 'bg-[#161B26] text-[#CECFD2] border-[#222938] hover:text-white hover:border-[#9E77ED]'
                }`}
                title={isSaved ? 'Remove from bookmarks' : 'Bookmark story'}
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>

              {/* Share */}
              <button
                onClick={handleShare}
                className="p-2 rounded-[8px] bg-[#161B26] border border-[#222938] text-[#CECFD2] hover:text-white hover:border-[#9E77ED] transition-colors relative"
                title="Share article link"
              >
                {shareCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                {shareCopied && (
                  <span className="absolute -bottom-8 right-0 bg-[#161B26] text-emerald-400 text-xs px-2 py-1 rounded border border-[#333B48] shadow-lg whitespace-nowrap">
                    Link copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Article Body Container (65-75 characters optimal line length) */}
        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 md:py-12 w-full space-y-8">
          {/* Category Chip & Metadata */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[rgba(158,119,237,0.15)] border border-[#9E77ED]/30 text-[#9E77ED] font-heading font-semibold text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#9E77ED] animate-pulse" />
              {article.category}
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] text-[#F9FAFB] tracking-tight">
              {article.title}
            </h1>

            <p className="font-body text-xl text-[#CECFD2] leading-relaxed">
              {article.excerpt}
            </p>

            {/* Author Byline Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#222938] text-sm text-[#94969C]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(158,119,237,0.15)] text-[#9E77ED] border border-[#9E77ED]/30 flex items-center justify-center font-bold text-sm">
                  {article.author.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-[#F9FAFB]">{article.author.name}</h4>
                  <p className="text-xs text-[#94969C]">{article.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#9E77ED]" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#9E77ED]" />
                  {article.readTime}
                </span>
                {article.views && (
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#9E77ED]" />
                    {article.views} views
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Audio Listen Dispatch Bar */}
          <div className="bg-[#161B26] border border-[#222938] rounded-[12px] p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="w-10 h-10 rounded-full bg-[#9E77ED] hover:bg-[#7F56D9] text-[#0C111D] flex items-center justify-center transition-colors shadow-[0_0_12px_rgba(158,119,237,0.3)]"
                title={isPlayingAudio ? 'Pause Narration' : 'Listen to Audio Narration'}
              >
                {isPlayingAudio ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <div>
                <p className="text-xs font-semibold text-[#F9FAFB]">Audio Edition Narration</p>
                <p className="text-[11px] text-[#94969C]">Synthesized high-fidelity journalist voice · {article.readTime}</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3 flex-1 max-w-xs">
              <div className="w-full bg-[#1F242F] h-1.5 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-[#9E77ED] rounded-full transition-all duration-300 ${isPlayingAudio ? 'animate-pulse' : ''}`}
                  style={{ width: `${audioProgress}%` }}
                />
              </div>
              <span className="text-[11px] text-[#94969C] tabular-nums">0:45 / 4:30</span>
            </div>
          </div>

          {/* Hero Photography with Figure Caption */}
          <div className="space-y-2">
            <div className="w-full aspect-[16/9] rounded-[16px] overflow-hidden bg-[#161B26] border border-[#222938]">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-[#94969C] italic text-center">
              Figure 1. Modern technical infrastructure visual documentation, NewsPortal Archives 2026.
            </p>
          </div>

          {/* Longform Prose Sections */}
          <div className={`space-y-8 ${getFontSizeClass()} text-[#CECFD2]`}>
            {article.sections && article.sections.length > 0 ? (
              article.sections.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  {sec.heading && (
                    <h2 className="font-heading font-semibold text-2xl text-[#F9FAFB] pt-4 tracking-tight border-b border-[#222938] pb-2">
                      {sec.heading}
                    </h2>
                  )}

                  {sec.paragraphs.map((p, pIdx) => (
                    <p 
                      key={pIdx} 
                      className={idx === 0 && pIdx === 0 ? "first-letter:text-5xl first-letter:font-heading first-letter:font-bold first-letter:text-[#9E77ED] first-letter:float-left first-letter:mr-3 first-letter:leading-none" : ""}
                    >
                      {p}
                    </p>
                  ))}

                  {sec.pullQuote && (
                    <blockquote className="my-6 p-6 rounded-[12px] bg-[#161B26] border-y border-[#333B48] text-center italic text-[#F9FAFB] text-xl font-heading">
                      "{sec.pullQuote}"
                    </blockquote>
                  )}

                  {sec.keyTakeaways && (
                    <div className="my-6 p-5 rounded-[12px] bg-[#1F242F] border border-[#333B48] space-y-2">
                      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#9E77ED]">
                        <Sparkles className="w-4 h-4" />
                        <span>Key Editorial Takeaways</span>
                      </div>
                      <ul className="space-y-2 text-sm text-[#CECFD2] pl-1">
                        {sec.keyTakeaways.map((item, kIdx) => (
                          <li key={kIdx} className="flex items-start gap-2">
                            <span className="text-[#9E77ED] font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>Full editorial dispatch is currently compiling in the central newsroom index.</p>
            )}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-[#222938] flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#94969C] uppercase font-semibold mr-1">Filed Under:</span>
            {article.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-[6px] bg-[#161B26] border border-[#222938] text-[#CECFD2]">
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="p-6 rounded-[16px] bg-[#161B26] border border-[#222938] flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-[rgba(158,119,237,0.2)] text-[#9E77ED] border border-[#9E77ED]/40 flex items-center justify-center font-bold text-lg shrink-0">
              {article.author.initials}
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-heading font-semibold text-[#F9FAFB] text-lg">Written by {article.author.name}</h4>
              <p className="text-xs text-[#9E77ED] font-medium">{article.author.role}</p>
              <p className="text-sm text-[#94969C] pt-1">
                {article.author.bio || 'Covers breaking stories and technical deep dives across the global news network.'}
              </p>
            </div>
          </div>

          {/* Claps / Reaction Bar */}
          <div className="py-6 border-y border-[#222938] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handleClap}
                className={`flex items-center gap-2 px-4 py-2 rounded-[8px] transition-all duration-200 ${
                  hasClapped 
                    ? 'bg-[#9E77ED] text-[#0C111D] font-bold shadow-[0_0_15px_rgba(158,119,237,0.3)]' 
                    : 'bg-[#161B26] border border-[#222938] text-[#F9FAFB] hover:border-[#9E77ED]'
                }`}
              >
                <ThumbsUp className="w-4 h-4 fill-current" />
                <span className="tabular-nums">{claps} Applause</span>
              </button>
            </div>

            <button
              onClick={handleShare}
              className="text-xs text-[#94969C] hover:text-[#F9FAFB] flex items-center gap-1.5"
            >
              <Share2 className="w-4 h-4" />
              <span>Share this piece</span>
            </button>
          </div>

          {/* Comments Section */}
          <div className="space-y-6 pt-2">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-semibold text-xl text-[#F9FAFB] flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#9E77ED]" />
                <span>Discussion ({comments.length})</span>
              </h3>
            </div>

            {/* Add Comment Input */}
            <form onSubmit={handleAddComment} className="space-y-3">
              <textarea
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder="Add to the discussion or submit an editorial clarification..."
                rows={3}
                className="w-full bg-[#161B26] border border-[#333B48] rounded-[10px] p-3 text-sm text-[#F9FAFB] placeholder:text-[#94969C] focus:outline-none focus:border-[#9E77ED] focus:ring-1 focus:ring-[#9E77ED] transition-all"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!newCommentText.trim()}
                  className="px-4 py-2 rounded-[8px] bg-[#9E77ED] hover:bg-[#7F56D9] text-[#0C111D] font-semibold text-xs transition-colors disabled:opacity-50 flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post Remark</span>
                </button>
              </div>
            </form>

            {/* Comment List */}
            <div className="space-y-4 pt-2">
              {comments.map((c) => (
                <div key={c.id} className="p-4 rounded-[12px] bg-[#161B26] border border-[#222938] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[rgba(158,119,237,0.15)] text-[#9E77ED] flex items-center justify-center font-bold text-[10px]">
                        {c.initials}
                      </div>
                      <span className="font-semibold text-[#F9FAFB]">{c.author}</span>
                    </div>
                    <span className="text-[#94969C]">{c.timestamp}</span>
                  </div>
                  <p className="text-sm text-[#CECFD2] pl-8">{c.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Stories */}
          {relatedArticles.length > 0 && (
            <div className="pt-8 border-t border-[#222938] space-y-4">
              <h3 className="font-heading font-semibold text-xl text-[#F9FAFB]">
                Recommended Next Reads
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.slice(0, 2).map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectArticle(rel);
                      window.scrollTo(0, 0);
                    }}
                    className="p-4 rounded-[12px] bg-[#161B26] border border-[#222938] hover:border-[#333B48] hover:bg-[#1F242F] cursor-pointer transition-colors space-y-2"
                  >
                    <span className="text-xs font-semibold text-[#9E77ED]">{rel.category}</span>
                    <h4 className="font-heading font-semibold text-sm text-[#F9FAFB] line-clamp-2">{rel.title}</h4>
                    <p className="text-xs text-[#94969C] flex items-center gap-1">
                      <span>{rel.readTime}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-auto text-[#9E77ED]" />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
