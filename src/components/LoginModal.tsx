import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, ArrowRight, Mail } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { Language } from '../data/translations'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  lang: Language
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, lang }) => {
  const { loginWithGoogle, loginWithFacebook, loginWithEmail } = useAuth()
  const [emailInput, setEmailInput] = useState('')

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
    loginWithGoogle()
    onClose()
  }

  const handleFacebookLogin = () => {
    loginWithFacebook()
    onClose()
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailInput.trim()) return
    loginWithEmail(emailInput.trim())
    setEmailInput('')
    onClose()
  }

  return createPortal(
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
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-brand-border bg-black shrink-0">
            <img
              src="/assets/nmc-gwm-logo.jpeg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-brand-text tracking-tight uppercase leading-tight">
              {lang === 'VI' ? 'ĐĂNG NHẬP' : 'SIGN IN'}
            </h3>
            <span className="font-mono text-[10px] text-brand-accent tracking-wider uppercase block">
              GAMING WITH MEEE // NMC CORP
            </span>
          </div>
        </div>

        <p className="text-xs text-brand-subtext mb-6 font-light leading-relaxed">
          {lang === 'VI'
            ? 'Đăng nhập để tương tác, bình luận, lưu bài viết yêu thích hoặc quản lý nội dung.'
            : 'Sign in to interact, leave comments, save favorite dispatches or manage content.'}
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
            {lang === 'VI' ? 'HOẶC DÙNG ĐỊA CHỈ EMAIL' : 'OR USE YOUR EMAIL'}
          </span>
        </div>

        {/* Email Login Form */}
        <form onSubmit={handleEmailSubmit} className="space-y-3">
          <div className="relative">
            <Mail className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              placeholder={lang === 'VI' ? 'Nhập email của bạn (ví dụ: name@gmail.com)...' : 'Enter your email...'}
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-elevated border border-brand-border text-xs text-brand-text placeholder:text-brand-muted font-mono focus:outline-none focus:border-brand-accent transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-brand-accent/20"
          >
            <span>{lang === 'VI' ? 'TIẾP TỤC ĐĂNG NHẬP' : 'CONTINUE'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Subtext info */}
        <p className="mt-4 text-[10px] font-mono text-center text-brand-muted/70 leading-relaxed">
          {lang === 'VI'
            ? 'Quyền Quản trị viên (Admin) hoặc Thành viên (Member) sẽ được hệ thống tự động nhận diện dựa trên tài khoản của bạn.'
            : 'Your role (Admin or Member) is automatically granted based on your authenticated account credentials.'}
        </p>
      </div>
    </div>,
    document.body
  )
}
