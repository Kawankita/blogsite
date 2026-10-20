import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'signup';
  onClose: () => void;
  onLogin: (name: string, email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode,
  onClose,
  onLogin
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const finalName = name.trim() || email.split('@')[0] || 'Subscriber';
    onLogin(finalName, email);
    onClose();
  };

  const handleQuickDemo = (demoName: string, demoEmail: string) => {
    onLogin(demoName, demoEmail);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#161B26] border border-[#333B48] rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#222938] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9E77ED] to-[#7F56D9] flex items-center justify-center text-[#0C111D]">
              <span className="material-symbols-outlined text-[18px]">view_quilt</span>
            </div>
            <span className="font-heading font-bold text-lg text-[#F9FAFB]">NewsPortal Access</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#94969C] hover:text-white rounded-[6px] hover:bg-[#1F242F]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 p-1.5 bg-[#0C111D] border-b border-[#222938] text-sm">
          <button
            onClick={() => setMode('login')}
            className={`py-2 rounded-[8px] font-semibold transition-all ${
              mode === 'login'
                ? 'bg-[#161B26] text-[#9E77ED] shadow-sm'
                : 'text-[#94969C] hover:text-white'
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`py-2 rounded-[8px] font-semibold transition-all ${
              mode === 'signup'
                ? 'bg-[#161B26] text-[#9E77ED] shadow-sm'
                : 'text-[#94969C] hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {mode === 'signup' && (
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#CECFD2]">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-[#94969C] absolute left-3 top-3.5" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Julian Wright"
                  className="w-full bg-[#0C111D] border border-[#333B48] rounded-[8px] pl-9 pr-3 py-2.5 text-sm text-[#F9FAFB] placeholder:text-[#94969C] focus:outline-none focus:border-[#9E77ED]"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#CECFD2]">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#94969C] absolute left-3 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@organization.com"
                className="w-full bg-[#0C111D] border border-[#333B48] rounded-[8px] pl-9 pr-3 py-2.5 text-sm text-[#F9FAFB] placeholder:text-[#94969C] focus:outline-none focus:border-[#9E77ED]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#CECFD2]">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#94969C] absolute left-3 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#0C111D] border border-[#333B48] rounded-[8px] pl-9 pr-3 py-2.5 text-sm text-[#F9FAFB] placeholder:text-[#94969C] focus:outline-none focus:border-[#9E77ED]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-[8px] bg-[#9E77ED] hover:bg-[#7F56D9] text-[#0C111D] hover:text-white font-heading font-bold text-sm transition-all shadow-[0_2px_12px_rgba(158,119,237,0.25)] cursor-pointer mt-2"
          >
            {mode === 'login' ? 'Sign In to Portal' : 'Create Free Reader Account'}
          </button>

          {/* Quick Demo Logins */}
          <div className="pt-4 border-t border-[#222938] space-y-2">
            <p className="text-[11px] text-[#94969C] text-center font-medium uppercase tracking-wider">
              Or Instant Demo Sign-in
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => handleQuickDemo('Rizky Afriansyah', 'rizkyafriansyah90@gmail.com')}
                className="p-2 rounded-[8px] bg-[#1F242F] border border-[#333B48] hover:border-[#9E77ED] text-[#CECFD2] text-center font-medium transition-colors"
              >
                Rizky (Active User)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemo('Dr. Elena Drake', 'e.drake@newsportal.media')}
                className="p-2 rounded-[8px] bg-[#1F242F] border border-[#333B48] hover:border-[#9E77ED] text-[#CECFD2] text-center font-medium transition-colors"
              >
                Staff Editor Demo
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
