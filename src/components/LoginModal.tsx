import React, { useState, useEffect } from 'react'
import { X, ShieldCheck, UserCheck, ArrowRight, Sparkles } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { ADMIN_EMAILS } from '../types/auth'
import { Language } from '../data/translations'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  lang: Language
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, lang }) => {
  const { loginWithGoogle, loginWithFacebook, loginAsAdmin, loginAsUser } = useAuth()
  const [customEmail, setCustomEmail] = useState('')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleGoogleLogin = () => {
    loginWithGoogle(customEmail.trim() || undefined)
    onClose()
  }

  const handleFacebookLogin = () => {
    loginWithFacebook()
    onClose()
  }

  const handleAdminQuickLogin = () => {
    loginAsAdmin()
    onClose()
  }

  const handleUserQuickLogin = () => {
    loginAsUser()
    onClose()
  }

  return (
    <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-bg/85 backdrop-blur-md animate-fade-in">
      <div
        data-scrollable="true"
        className="relative w-full max-w-md bg-brand-secondary border border-brand-border rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
      >
        {/* Background decorative glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close login dialog"
          className="absolute top-5 right-5 p-2 rounded-xl bg-brand-elevated border border-brand-border text-brand-subtext hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-brand-border bg-black shrink-0">
            <img
              src="/assets/nmc-gwm-logo.jpeg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-brand-text tracking-tight uppercase leading-tight">
              {lang === 'VI' ? 'ĐĂNG NHẬP HỆ THỐNG' : 'SIGN IN / PORTAL'}
            </h3>
            <span className="font-mono text-[10px] text-brand-accent tracking-wider uppercase block">
              GAMING WITH MEEE // NMC CORP
            </span>
          </div>
        </div>

        <p className="text-xs text-brand-subtext mb-6 font-light leading-relaxed">
          {lang === 'VI'
            ? 'Đăng nhập để tương tác, lưu bài viết yêu thích hoặc quản lý nội dung nếu bạn là Quản trị viên.'
            : 'Sign in to interact, save favorite stories, or manage site dispatches if you are an Administrator.'}
        </p>

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-6">
          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-sans font-semibold text-xs transition-all flex items-center justify-center gap-3 shadow-md hover:scale-[1.01] active:scale-[0.99]"
          >
            {/* Google SVG Logo */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>{lang === 'VI' ? 'Tiếp tục với Google (Gmail)' : 'Continue with Google'}</span>
          </button>

          {/* Facebook Button */}
          <button
            onClick={handleFacebookLogin}
            className="w-full py-3 px-4 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-sans font-semibold text-xs transition-all flex items-center justify-center gap-3 shadow-md hover:scale-[1.01] active:scale-[0.99]"
          >
            {/* Facebook SVG Logo */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>{lang === 'VI' ? 'Tiếp tục với Facebook' : 'Continue with Facebook'}</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6">
          <div className="border-t border-brand-border w-full" />
          <span className="bg-brand-secondary px-3 text-[10px] font-mono text-brand-muted uppercase tracking-widest absolute">
            {lang === 'VI' ? 'HOẶC THỬ NGHIỆM PHÂN QUYỀN' : 'OR QUICK ROLE DEMO'}
          </span>
        </div>

        {/* Quick Role Tester */}
        <div className="space-y-2.5">
          <button
            onClick={handleAdminQuickLogin}
            className="w-full p-3 rounded-xl bg-brand-elevated border border-brand-accent/40 hover:border-brand-accent text-left transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-brand-accent/10 border border-brand-accent/30 text-brand-accent">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="font-display font-bold text-xs text-brand-text group-hover:text-brand-accent transition-colors block">
                  {lang === 'VI' ? 'Đăng nhập vai trò Admin (Quản trị viên)' : 'Login as Admin (Mr. Cuong)'}
                </span>
                <span className="font-mono text-[10px] text-brand-muted">
                  nmc.corp16@gmail.com • {lang === 'VI' ? 'Toàn quyền đăng bài' : 'Full publishing rights'}
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-muted group-hover:text-brand-accent group-hover:translate-x-0.5 transition-all" />
          </button>

          <button
            onClick={handleUserQuickLogin}
            className="w-full p-3 rounded-xl bg-brand-elevated border border-brand-border hover:border-emerald-500/50 text-left transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="font-display font-bold text-xs text-brand-text group-hover:text-emerald-400 transition-colors block">
                  {lang === 'VI' ? 'Đăng nhập vai trò User (Thành viên)' : 'Login as Member (User)'}
                </span>
                <span className="font-mono text-[10px] text-brand-muted">
                  user.demo@gmail.com • {lang === 'VI' ? 'Đọc & Tương tác' : 'Read & Comment'}
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-muted group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>

        {/* Custom Email Role Tester */}
        <div className="mt-4 pt-4 border-t border-brand-border/40">
          <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1.5 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-brand-accent" />
            <span>{lang === 'VI' ? 'Kiểm tra email Admin tự động:' : 'Test auto Admin email check:'}</span>
          </label>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Nhập email bất kỳ..."
              value={customEmail}
              onChange={(e) => setCustomEmail(e.target.value)}
              className="flex-1 px-3 py-1.5 rounded-lg bg-brand-elevated border border-brand-border text-xs text-brand-text font-mono focus:outline-none focus:border-brand-accent"
            />
            <button
              onClick={handleGoogleLogin}
              className="px-3 py-1.5 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-mono font-bold"
            >
              OK
            </button>
          </div>
          <span className="text-[10px] font-mono text-brand-muted/70 block mt-1">
            (Email: <code className="text-brand-accent">{ADMIN_EMAILS[0]}</code> {lang === 'VI' ? 'tự động nhận quyền Admin' : 'auto grants Admin'})
          </span>
        </div>
      </div>
    </div>
  )
}
