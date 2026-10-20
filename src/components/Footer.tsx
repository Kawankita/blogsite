import React from 'react';

interface FooterProps {
  onOpenInfoModal: (title: string, category: string) => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInfoModal, onScrollToTop }) => {
  const footerSections = [
    {
      title: 'Product',
      links: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'News', 'Media Kit', 'Contact']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Newsletter', 'Events', 'Help Centre', 'Tutorials', 'Support']
    },
    {
      title: 'Use cases',
      links: ['Startups', 'Enterprise', 'Government', 'SaaS', 'Marketplaces', 'Ecommerce']
    },
    {
      title: 'Social',
      links: ['Community', 'Channels', 'Discussions', 'GitHub', 'Dribbble', 'LinkedIn']
    },
    {
      title: 'Legal',
      links: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact']
    }
  ];

  return (
    <footer className="w-full bg-[#0C111D] border-t border-[#222938] text-[#F9FAFB] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 6-Column Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading text-sm font-semibold text-[#94969C] uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => onOpenInfoModal(link, section.title)}
                      className="text-[#CECFD2] hover:text-[#F9FAFB] hover:underline transition-colors text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#222938] flex flex-col md:flex-row items-center justify-between gap-4">
          <button 
            onClick={onScrollToTop}
            className="flex items-center gap-3 group cursor-pointer text-left"
          >
            <div className="w-8 h-8 rounded-[8px] bg-[rgba(158,119,237,0.15)] border border-[#9E77ED]/30 flex items-center justify-center text-[#9E77ED] group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[18px]">view_quilt</span>
            </div>
            <span className="font-heading font-semibold text-lg text-[#F9FAFB] tracking-tight">
              NewsPortal
            </span>
          </button>
          <p className="font-body text-sm text-[#94969C] text-center md:text-right">
            © 2026 NewsPortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
