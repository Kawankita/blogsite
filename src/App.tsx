import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';
import { Header } from './components/Header';
import { BreakingTicker } from './components/BreakingTicker';
import { HeroFeatured } from './components/HeroFeatured';
import { ArticleCard } from './components/ArticleCard';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { SearchModal } from './components/SearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { AuthModal } from './components/AuthModal';
import { InfoModal } from './components/InfoModal';
import { 
  FEATURED_ARTICLE, 
  LATEST_ARTICLES, 
  CATEGORIES_LIST,
  BREAKING_NEWS_ITEMS
} from './data/articles';
import { Article, UserProfile } from './types';

export default function App() {
  // All articles combined for lookup
  const allArticles: Article[] = [FEATURED_ARTICLE, ...LATEST_ARTICLES];

  // User Profile State
  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('newsportal_user');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return {
      name: 'Rizky Afriansyah',
      email: 'rizkyafriansyah90@gmail.com',
      initials: 'RA',
      isLoggedIn: true,
      savedArticleIds: ['autonomous-research-labs', 'scalable-design-tokens'],
      newsletterSubscribed: false
    };
  });

  // State
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [bookmarksDrawerOpen, setBookmarksDrawerOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [infoModal, setInfoModal] = useState<{ isOpen: boolean; title: string; category: string }>({
    isOpen: false,
    title: '',
    category: ''
  });

  // Refs for scrolling
  const heroRef = useRef<HTMLDivElement>(null);
  const latestRef = useRef<HTMLDivElement>(null);

  // Sync user changes to local storage
  useEffect(() => {
    localStorage.setItem('newsportal_user', JSON.stringify(user));
  }, [user]);

  // Global keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Bookmark toggle handler
  const handleToggleSave = (articleId: string) => {
    setUser((prev) => {
      const exists = prev.savedArticleIds.includes(articleId);
      const updated = exists 
        ? prev.savedArticleIds.filter((id) => id !== articleId)
        : [...prev.savedArticleIds, articleId];
      return { ...prev, savedArticleIds: updated };
    });
  };

  // Clear all bookmarks
  const handleClearAllBookmarks = () => {
    setUser((prev) => ({ ...prev, savedArticleIds: [] }));
  };

  // Auth handlers
  const handleLogin = (name: string, email: string) => {
    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'US';

    setUser((prev) => ({
      ...prev,
      name,
      email,
      initials,
      isLoggedIn: true
    }));
  };

  const handleSignOut = () => {
    setUser((prev) => ({
      ...prev,
      isLoggedIn: false
    }));
  };

  // Scroll helpers
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToLatest = () => {
    latestRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter articles based on category
  const filteredArticles = selectedCategory === 'all'
    ? LATEST_ARTICLES
    : LATEST_ARTICLES.filter((article) => {
        const catMap: Record<string, string> = {
          'ai': 'Artificial Intelligence',
          'sustainability': 'Sustainability',
          'design': 'Design & UX',
          'urban': 'Urban Technology',
          'cybersecurity': 'Cybersecurity',
          'culture': 'Culture & Remote'
        };
        const target = catMap[selectedCategory] || selectedCategory;
        return article.category.toLowerCase() === target.toLowerCase();
      });

  // Saved articles object array
  const savedArticles = allArticles.filter((a) => user.savedArticleIds.includes(a.id));

  // Handle breaking news click
  const handleSelectBreakingNews = (headline: string) => {
    const matched = allArticles.find((a) => 
      headline.toLowerCase().includes(a.category.toLowerCase()) || 
      a.title.toLowerCase().includes(headline.slice(0, 15).toLowerCase())
    ) || FEATURED_ARTICLE;
    setSelectedArticle(matched);
  };

  return (
    <div className="min-h-screen bg-[#0C111D] text-[#CECFD2] font-body selection:bg-[#9E77ED]/30 selection:text-[#F9FAFB]">
      {/* 1. TOP NAVIGATION BAR (Height: 80px) */}
      <Header
        user={user}
        savedCount={user.savedArticleIds.length}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenBookmarks={() => setBookmarksDrawerOpen(true)}
        onOpenAuth={(mode) => {
          setAuthMode(mode);
          setAuthModalOpen(true);
        }}
        onOpenAbout={() => setInfoModal({ isOpen: true, title: 'About Us', category: 'Company' })}
        onSelectCategory={(catId) => setSelectedCategory(catId)}
        onScrollToLatest={scrollToLatest}
        onScrollToHero={scrollToHero}
        onSignOut={handleSignOut}
      />

      {/* Breaking News Ticker */}
      <div className="pt-20">
        <BreakingTicker onSelectBreakingNews={handleSelectBreakingNews} />
      </div>

      {/* MAIN CONTAINER */}
      <main className="w-full bg-[#0C111D]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12 md:space-y-16">
          
          {/* 2. HERO SECTION: Featured Article Top Banner */}
          <div ref={heroRef}>
            <HeroFeatured
              article={FEATURED_ARTICLE}
              isSaved={user.savedArticleIds.includes(FEATURED_ARTICLE.id)}
              onSelectArticle={(article) => setSelectedArticle(article)}
              onToggleSave={handleToggleSave}
            />
          </div>

          {/* 3. CONTENT SECTION: BLOG & NEWS GRID (3-Column Layout) */}
          <section ref={latestRef} className="w-full space-y-6">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#222938]">
              <div>
                <h2 className="font-heading font-semibold text-[24px] leading-[32px] text-[#F9FAFB] tracking-tight">
                  Latest Articles &amp; News
                </h2>
                <p className="font-body text-sm text-[#94969C] mt-1">
                  Curated analysis, engineering updates, and longform dispatches.
                </p>
              </div>

              <div className="flex items-center gap-3">
                {selectedCategory !== 'all' && (
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="text-xs text-[#94969C] hover:text-white underline cursor-pointer"
                  >
                    Reset Filter
                  </button>
                )}
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    scrollToLatest();
                  }}
                  className="group inline-flex items-center gap-1 text-[#9E77ED] text-sm font-semibold hover:text-[#7F56D9] transition-colors cursor-pointer"
                >
                  <span>View all</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {CATEGORIES_LIST.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-[8px] text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#9E77ED] text-[#0C111D] shadow-[0_0_12px_rgba(158,119,237,0.3)]'
                        : 'bg-[#161B26] border border-[#222938] text-[#94969C] hover:text-[#F9FAFB] hover:border-[#333B48]'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* 3-Column Responsive Grid (32px / gap-8) */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    isSaved={user.savedArticleIds.includes(article.id)}
                    onSelectArticle={(art) => setSelectedArticle(art)}
                    onToggleSave={handleToggleSave}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center space-y-3 bg-[#161B26] rounded-[16px] border border-[#222938]">
                <p className="text-base font-semibold text-[#F9FAFB]">No dispatches found in this category</p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="px-4 py-2 rounded-[8px] bg-[#9E77ED] text-[#0C111D] font-bold text-xs"
                >
                  Browse all dispatches
                </button>
              </div>
            )}
          </section>

          {/* 4. CTA BANNER SECTION: Dark Container Newsletter Subscription */}
          <NewsletterSection 
            onSubscribeSuccess={(email) => {
              setUser((prev) => ({ ...prev, newsletterSubscribed: true }));
            }} 
          />

        </div>
      </main>

      {/* 5. MULTI-COLUMN FOOTER */}
      <Footer
        onOpenInfoModal={(title, category) => {
          setInfoModal({ isOpen: true, title, category });
        }}
        onScrollToTop={scrollToHero}
      />

      {/* Full Article Longform Reader Modal */}
      {selectedArticle && (
        <ArticleReaderModal
          article={selectedArticle}
          isSaved={user.savedArticleIds.includes(selectedArticle.id)}
          onClose={() => setSelectedArticle(null)}
          onToggleSave={handleToggleSave}
          onSelectArticle={(art) => setSelectedArticle(art)}
          relatedArticles={allArticles.filter((a) => a.id !== selectedArticle.id)}
        />
      )}

      {/* Quick Search Modal (Cmd+K) */}
      <SearchModal
        articles={allArticles}
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* Bookmarks / Saved Stories Drawer */}
      <BookmarksDrawer
        isOpen={bookmarksDrawerOpen}
        onClose={() => setBookmarksDrawerOpen(false)}
        savedArticles={savedArticles}
        onSelectArticle={(art) => setSelectedArticle(art)}
        onRemoveBookmark={handleToggleSave}
        onClearAll={handleClearAllBookmarks}
      />

      {/* Auth Modal (Log in / Sign up) */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onLogin={handleLogin}
      />

      {/* Info Modal (About, Terms, Privacy, Careers, etc.) */}
      <InfoModal
        isOpen={infoModal.isOpen}
        title={infoModal.title}
        category={infoModal.category}
        onClose={() => setInfoModal({ isOpen: false, title: '', category: '' })}
      />
    </div>
  );
}
