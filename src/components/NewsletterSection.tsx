import React, { useState } from 'react';
import { Mail, CheckCircle2, Loader2 } from 'lucide-react';

interface NewsletterSectionProps {
  onSubscribeSuccess?: (email: string) => void;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubscribeSuccess }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      if (onSubscribeSuccess) {
        onSubscribeSuccess(email);
      }
    }, 700);
  };

  return (
    <section 
      aria-label="Newsletter Subscription"
      className="w-full bg-[#1F242F] border border-[#222938] rounded-[24px] py-16 px-6 sm:px-12 text-center text-[#F9FAFB] shadow-xl relative overflow-hidden"
    >
      {/* Subtle Decorative Ambient Aura */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#9E77ED]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#7F56D9]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        {/* Icon Container */}
        <div className="w-12 h-12 rounded-[12px] bg-[rgba(158,119,237,0.15)] border border-[#9E77ED]/30 flex items-center justify-center mb-6 text-[#9E77ED] shadow-[0_0_15px_rgba(158,119,237,0.2)]">
          <span className="material-symbols-outlined text-[26px]">mark_email_unread</span>
        </div>

        {/* Title */}
        <h2 className="font-heading font-semibold text-[24px] text-[#F9FAFB] mb-3 tracking-tight">
          Subscribe to our daily editorial digest
        </h2>

        {/* Subtitle */}
        <p className="font-body text-[18px] text-[#CECFD2] max-w-xl mx-auto mb-8">
          Get the most important stories delivered right to your inbox every morning.
        </p>

        {/* Input Row */}
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="w-full bg-[#161B26] border border-[#333B48] text-[#F9FAFB] placeholder:text-[#94969C] rounded-[8px] px-4 py-3 text-sm focus:outline-none focus:border-[#9E77ED] focus:ring-1 focus:ring-[#9E77ED] transition-all"
              />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-[#9E77ED] hover:bg-[#7F56D9] text-[#0C111D] hover:text-[#F9FAFB] font-heading font-bold text-sm whitespace-nowrap shadow-[0_2px_10px_rgba(158,119,237,0.25)] transition-all duration-200 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        ) : (
          <div className="px-5 py-3 rounded-[8px] bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-sm font-medium flex items-center gap-2.5 animate-in fade-in duration-300">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Thank you for subscribing! Check your inbox for your first briefing dispatch.</span>
          </div>
        )}

        {/* Micro Disclaimer */}
        <p className="font-body text-xs text-[#94969C] mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};
