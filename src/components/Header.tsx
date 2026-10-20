import React, { useState } from 'react';
import { 
  Bookmark, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  User as UserIcon,
  LogOut,
  Layers,
  Sparkles,
  BookOpen,
  Compass
} from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  user: UserProfile;
  savedCount: number;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenAbout: () => void;
  onSelectCategory: (category: string) => void;
  onScrollToLatest: () => void;
  onScrollToHero: () => void;
  onSignOut: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  savedCount,
  onOpenSearch,
  onOpenBookmarks,
  onOpenAuth,
  onOpenAbout,
  onSelectCategory,
  onScrollToLatest,
  onScrollToHero,
  onSignOut
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const categories = [
    { name: 'All Categories', id: 'all' },
    { name: 'Artificial Intelligence', id: 'ai' },
    { name: 'Sustainability', id: 'sustainability' },
    { name: 'Design & UX', id: 'design' },
    { name: 'Urban Technology', id: 'urban' },
    { name: 'Cybersecurity', id: 'cybersecurity' },
    { name: 'Culture & Remote', id: 'culture' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-[#0C111D]/90 backdrop-blur-xl border-b border-[#222938]">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <button 
          onClick={onScrollToHero}
          className="flex items-center gap-3 group text-left focus:outline-none"
          title="NewsPortal Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9E77ED] to-[#7F56D9] flex items-center justify-center text-[#0C111D] shadow-[0_0_15px_rgba(158,119,237,0.35)] group-hover:scale-105 transition-transform duration-200">
            <span className="material-symbols-outlined text-[22px] font-bold">view_quilt</span>
          </div>
          <span className="font-heading font-bold text-2xl text-[#F9FAFB] tracking-tight">
            NewsPortal
          </span>
        </button>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
          <button 
            onClick={onScrollToHero}
            className="flex items-center gap-1 px-3.5 py-2 rounded-[8px] bg-[rgba(158,119,237,0.15)] text-[#9E77ED] font-semibold text-sm transition-all"
          >
            <span>Home</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </button>

          {/* Categories Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
              onMouseEnter={() => setCategoriesDropdownOpen(true)}
              className="flex items-center gap-1 px-3.5 py-2 rounded-[8px] text-sm font-medium text-[#CECFD2] hover:text-[#F9FAFB] hover:bg-[#161B26] transition-colors"
            >
              <span>Categories</span>
              <ChevronDown className={`w-4 h-4 opacity-70 transition-transform duration-200 ${categoriesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {categoriesDropdownOpen && (
              <div 
                onMouseLeave={() => setCategoriesDropdownOpen(false)}
                className="absolute top-full left-0 mt-1 w-60 bg-[#161B26] border border-[#333B48] rounded-[12px] shadow-[0_12px_32px_rgba(0,0,0,0.6)] py-2 z-50 backdrop-blur-md"
              >
                <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#94969C]">
                  Filter by Topic
                </div>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(cat.id);
                      setCategoriesDropdownOpen(false);
                      onScrollToLatest();
                    }}
                    className="w-full text-left px-3.5 py-2 text-sm text-[#CECFD2] hover:text-[#F9FAFB] hover:bg-[#1F242F] transition-colors flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={onScrollToLatest}
            className="flex items-center gap-1 px-3.5 py-2 rounded-[8px] text-sm font-medium text-[#CECFD2] hover:text-[#F9FAFB] hover:bg-[#161B26] transition-colors"
          >
            <span>Latest News</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </button>

          <button 
            onClick={onScrollToLatest}
            className="flex items-center gap-1 px-3.5 py-2 rounded-[8px] text-sm font-medium text-[#CECFD2] hover:text-[#F9FAFB] hover:bg-[#161B26] transition-colors"
          >
            <span>Blog</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </button>

          <button 
            onClick={onOpenAbout}
            className="flex items-center gap-1 px-3.5 py-2 rounded-[8px] text-sm font-medium text-[#CECFD2] hover:text-[#F9FAFB] hover:bg-[#161B26] transition-colors"
          >
            <span>About</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 sm:px-3 sm:py-2 rounded-[8px] bg-[#161B26] border border-[#222938] text-[#CECFD2] hover:text-[#F9FAFB] hover:border-[#9E77ED]/50 transition-colors flex items-center gap-2"
            title="Search Articles (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-[#94969C]" />
            <span className="hidden md:inline text-xs text-[#94969C]">Search</span>
            <kbd className="hidden md:inline text-[10px] bg-[#1F242F] text-[#94969C] px-1.5 py-0.5 rounded border border-[#333B48]">⌘K</kbd>
          </button>

          {/* Bookmarks Drawer Trigger */}
          <button
            onClick={onOpenBookmarks}
            className="relative p-2 rounded-[8px] bg-[#161B26] border border-[#222938] text-[#CECFD2] hover:text-[#9E77ED] hover:border-[#9E77ED]/50 transition-colors"
            title="Saved Articles"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#9E77ED] text-[#0C111D] text-[10px] font-bold flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          {/* Auth Controls */}
          {user.isLoggedIn ? (
            <div className="relative">
              <button 
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 pl-2 pr-2.5 py-1.5 rounded-[8px] bg-[#161B26] border border-[#222938] hover:border-[#9E77ED] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[rgba(158,119,237,0.2)] text-[#9E77ED] border border-[#9E77ED]/40 flex items-center justify-center font-bold text-xs">
                  {user.initials}
                </div>
                <span className="hidden sm:inline text-xs font-semibold text-[#F9FAFB] max-w-[100px] truncate">
                  {user.name}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-[#94969C]" />
              </button>

              {profileDropdownOpen && (
                <div 
                  onMouseLeave={() => setProfileDropdownOpen(false)}
                  className="absolute right-0 mt-2 w-56 bg-[#161B26] border border-[#333B48] rounded-[12px] shadow-[0_12px_32px_rgba(0,0,0,0.6)] py-2 z-50 backdrop-blur-md"
                >
                  <div className="px-4 py-2 border-b border-[#222938]">
                    <p className="text-xs text-[#94969C]">Signed in as</p>
                    <p className="text-sm font-semibold text-[#F9FAFB] truncate">{user.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      onOpenBookmarks();
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-[#CECFD2] hover:text-[#F9FAFB] hover:bg-[#1F242F] flex items-center gap-2"
                  >
                    <Bookmark className="w-4 h-4 text-[#9E77ED]" />
                    <span>Saved Stories ({savedCount})</span>
                  </button>
                  <button
                    onClick={() => {
                      onOpenAbout();
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-[#CECFD2] hover:text-[#F9FAFB] hover:bg-[#1F242F] flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-[#9E77ED]" />
                    <span>About NewsPortal</span>
                  </button>
                  <div className="border-t border-[#222938] mt-1 pt-1">
                    <button
                      onClick={() => {
                        onSignOut();
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#1F242F] flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Log out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <button 
                onClick={() => onOpenAuth('login')}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-[8px] text-sm font-semibold text-[#F9FAFB] hover:bg-[#161B26] transition-colors"
              >
                Log in
              </button>
              <button 
                onClick={() => onOpenAuth('signup')}
                className="inline-flex items-center justify-center px-4 py-2 rounded-[8px] text-sm font-semibold bg-[#9E77ED] text-[#0C111D] hover:bg-[#7F56D9] hover:text-white transition-all shadow-[0_0_12px_rgba(158,119,237,0.25)]"
              >
                Sign up
              </button>
              <button 
                onClick={() => onOpenAuth('login')}
                className="w-8 h-8 rounded-full bg-[#161B26] border border-[#222938] flex items-center justify-center text-[#CECFD2] hover:border-[#9E77ED] transition-colors"
                title="Guest Profile"
              >
                <span className="material-symbols-outlined text-[18px]">person</span>
              </button>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-[8px] bg-[#161B26] text-[#CECFD2] hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C111D] border-b border-[#222938] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => {
                onScrollToHero();
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-[8px] bg-[rgba(158,119,237,0.15)] text-[#9E77ED] font-semibold text-sm"
            >
              Home
            </button>
            <div className="pt-2 pb-1 px-3 text-xs font-semibold text-[#94969C] uppercase tracking-wider">
              Categories
            </div>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setMobileMenuOpen(false);
                  onScrollToLatest();
                }}
                className="text-left px-3 py-2 rounded-[8px] text-sm text-[#CECFD2] hover:bg-[#161B26] hover:text-white"
              >
                {cat.name}
              </button>
            ))}
            <button
              onClick={() => {
                onOpenAbout();
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-[8px] text-sm text-[#CECFD2] hover:bg-[#161B26] hover:text-white"
            >
              About Editorial Desk
            </button>
          </div>

          {!user.isLoggedIn && (
            <div className="pt-4 border-t border-[#222938] flex items-center gap-3">
              <button
                onClick={() => {
                  onOpenAuth('login');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2 rounded-[8px] text-sm font-semibold border border-[#333B48] text-white hover:bg-[#161B26]"
              >
                Log in
              </button>
              <button
                onClick={() => {
                  onOpenAuth('signup');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2 rounded-[8px] text-sm font-semibold bg-[#9E77ED] text-[#0C111D] hover:bg-[#7F56D9] hover:text-white"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
