import React from 'react';
import { X, Shield, FileText, Briefcase, Mail, Info, CheckCircle2 } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  title: string;
  category: string;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  title,
  category,
  onClose
}) => {
  if (!isOpen) return null;

  const getContent = () => {
    switch (title.toLowerCase()) {
      case 'about':
      case 'about us':
        return {
          icon: <Info className="w-6 h-6 text-[#9E77ED]" />,
          headline: 'Independent Hybrid Journalism for 2026 and Beyond',
          body: (
            <div className="space-y-4 text-sm text-[#CECFD2] leading-relaxed">
              <p>
                Founded in 2024 and re-architected in 2026, <strong className="text-[#F9FAFB]">NewsPortal</strong> is an independent digital newsroom committed to high-density investigative dispatches, technical analysis, and cultural reporting.
              </p>
              <p>
                We unite autonomous verification meshes with seasoned editorial judgment. Our reporting focuses on artificial intelligence governance, planetary energy transitions, sustainable urban architecture, and distributed human labor.
              </p>
              <div className="p-4 rounded-[12px] bg-[#161B26] border border-[#222938] space-y-2">
                <h4 className="font-semibold text-[#F9FAFB]">Core Editorial Pledges:</h4>
                <ul className="space-y-1.5 text-xs text-[#94969C]">
                  <li>• Every dataset is cryptographically signed and publicly verifiable.</li>
                  <li>• Zero clickbait, zero automated filler, zero hallucinated attributions.</li>
                  <li>• Reader privacy guaranteed: no behavioral tracking or ad network brokers.</li>
                </ul>
              </div>
            </div>
          )
        };
      case 'privacy':
        return {
          icon: <Shield className="w-6 h-6 text-[#9E77ED]" />,
          headline: 'Reader Privacy & Cryptographic Integrity',
          body: (
            <div className="space-y-3 text-sm text-[#CECFD2]">
              <p>We believe reading habits should remain private. NewsPortal does not sell user telemetry, install third-party tracking pixels, or build behavioral dossiers.</p>
              <p>All bookmarks and reading progress stay client-side in your secure browser storage. When you subscribe to our newsletter, your email is solely used for delivering the daily editorial dispatch.</p>
            </div>
          )
        };
      case 'terms':
        return {
          icon: <FileText className="w-6 h-6 text-[#9E77ED]" />,
          headline: 'Editorial Terms & Open Citation Policy',
          body: (
            <div className="space-y-3 text-sm text-[#CECFD2]">
              <p>NewsPortal content is syndicated under creative editorial licenses for academic and non-commercial attribution. Commercial redistribution requires explicit syndication permissions from our desk.</p>
            </div>
          )
        };
      case 'careers':
        return {
          icon: <Briefcase className="w-6 h-6 text-[#9E77ED]" />,
          headline: 'Join the NewsPortal Bureau',
          body: (
            <div className="space-y-3 text-sm text-[#CECFD2]">
              <p>We are actively looking for technical writers, computational journalists, and visual data architects to join our distributed newsroom across North America, Europe, and Asia-Pacific.</p>
              <p className="text-xs text-[#94969C]">Send your portfolio and published investigative links to <span className="text-[#9E77ED]">careers@newsportal.media</span>.</p>
            </div>
          )
        };
      default:
        return {
          icon: <Info className="w-6 h-6 text-[#9E77ED]" />,
          headline: `${title} — NewsPortal ${category}`,
          body: (
            <div className="space-y-3 text-sm text-[#CECFD2]">
              <p>Information, documentation, and services regarding <strong>{title}</strong> under the <strong>{category}</strong> department of NewsPortal.</p>
              <p className="text-xs text-[#94969C]">For urgent press inquiries or syndication partnerships, reach out directly to desk@newsportal.media.</p>
            </div>
          )
        };
    }
  };

  const { icon, headline, body } = getContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-[#161B26] border border-[#333B48] rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#222938] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-[10px] bg-[rgba(158,119,237,0.15)] border border-[#9E77ED]/30">
              {icon}
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E77ED]">{category}</span>
              <h3 className="font-heading font-bold text-lg text-[#F9FAFB]">{title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#94969C] hover:text-white rounded-[6px] hover:bg-[#1F242F]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h4 className="font-heading font-semibold text-base text-[#F9FAFB]">{headline}</h4>
          {body}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0C111D] border-t border-[#222938] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-[8px] bg-[#9E77ED] text-[#0C111D] font-bold text-xs hover:bg-[#7F56D9] hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
