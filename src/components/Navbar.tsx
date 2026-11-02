import React, { useMemo, useState, memo } from 'react'
import { Menu, X, Globe, LogIn } from 'lucide-react'
import { Language, TRANSLATIONS } from '../data/translations'
import { useAuth } from '../context/AuthContext'
import { UserMenu } from './UserMenu'

export type AppView = 'home' | 'about' | 'academy' | 'gaming' | 'store' | 'connect'

interface NavbarProps {
  currentView: AppView
  onNavigateView: (view: AppView) => void
  lang: Language
  onToggleLang: (lang: Language) => void
  onOpenLogin: () => void
}

export const Navbar: React.FC<NavbarProps> = memo(({
  currentView = 'home',
  onNavigateView,
  lang,
  onToggleLang,
  onOpenLogin
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, isAuthenticated } = useAuth()
  const t = TRANSLATIONS[lang].nav

  // Exactly in user order: 1. Giới thiệu, 2. Academy, 3. Gaming Hub, 4. Store, 5. Liên hệ
  const navItems = useMemo(() => [
    { id: 'about', label: t.about, view: 'about' as AppView },
    { id: 'academy', label: t.academy, view: 'academy' as AppView },
    { id: 'gaming', label: t.gaming, view: 'gaming' as AppView },
    { id: 'store', label: t.store, view: 'store' as AppView },
    { id: 'connect', label: t.connect, view: 'connect' as AppView },
  ], [t])

  const handleItemClick = (e: React.MouseEvent, view: AppView) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    onNavigateView(view)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 bg-brand-bg/90 backdrop-blur-xl border-b border-brand-border/60 transition-all duration-300">
      <div className="max-w-content mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand identity & Logo */}
        <button
          onClick={() => {
            setMobileMenuOpen(false)
            onNavigateView('home')
          }}
          className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg"
          aria-label="Gaming with meee - Back to Home"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-brand-border group-hover:border-brand-accent transition-colors shrink-0 bg-brand-secondary shadow-md">
            <img
              src="/assets/nmc-gwm-logo.jpeg"
              alt="Gaming with meee logo"
              width={40}
              height={40}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-brand-text group-hover:text-brand-accent transition-colors flex items-center gap-1.5">
              GAMING WITH MEEE
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent inline-block" />
            </span>
            <span className="font-mono text-[9px] text-brand-muted tracking-wider uppercase">
              {t.parentBrand}
            </span>
          </div>
        </button>

        {/* Desktop Navigation - 100% Uniform UI for all items */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = currentView === item.view
            return (
              <button
                key={item.id}
                onClick={(e) => handleItemClick(e, item.view)}
                className={`text-xs font-mono font-medium tracking-widest transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded ${
                  isActive ? 'text-brand-accent font-bold' : 'text-brand-subtext hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent" />
                )}
              </button>
            )
          })}

          {/* Language Selector */}
          <div className="inline-flex items-center p-1 rounded-lg bg-brand-elevated border border-brand-border/80 shadow-inner" role="group" aria-label="Language selector">
            <Globe className="w-3.5 h-3.5 text-brand-muted mr-1.5 ml-1" />
            <button
              onClick={() => onToggleLang('EN')}
              aria-pressed={lang === 'EN'}
              className={`px-2 py-0.5 rounded text-[11px] font-mono tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                lang === 'EN'
                  ? 'bg-brand-accent text-white font-bold shadow-sm'
                  : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              EN
            </button>
            <span className="text-brand-border text-xs px-1" aria-hidden="true">/</span>
            <button
              onClick={() => onToggleLang('VI')}
              aria-pressed={lang === 'VI'}
              className={`px-2 py-0.5 rounded text-[11px] font-mono tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                lang === 'VI'
                  ? 'bg-brand-accent text-white font-bold shadow-sm'
                  : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              VI
            </button>
          </div>

          {/* User Auth Section */}
          {isAuthenticated && user ? (
            <UserMenu lang={lang} />
          ) : (
            <button
              onClick={onOpenLogin}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-md shadow-brand-accent/25 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{lang === 'VI' ? 'ĐĂNG NHẬP' : 'SIGN IN'}</span>
            </button>
          )}
        </nav>

        {/* Mobile menu button and quick lang */}
        <div className="flex md:hidden items-center gap-2">
          {isAuthenticated && user ? (
            <UserMenu lang={lang} />
          ) : (
            <button
              onClick={onOpenLogin}
              className="px-2.5 py-1 rounded-lg bg-brand-accent text-white text-[11px] font-mono font-bold"
            >
              {lang === 'VI' ? 'LOGIN' : 'SIGN IN'}
            </button>
          )}

          <div className="inline-flex items-center p-0.5 rounded-lg bg-brand-elevated border border-brand-border" role="group" aria-label="Language selector">
            <button
              onClick={() => onToggleLang('EN')}
              aria-pressed={lang === 'EN'}
              className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                lang === 'EN' ? 'bg-brand-accent text-white font-bold' : 'text-brand-muted'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onToggleLang('VI')}
              aria-pressed={lang === 'VI'}
              className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                lang === 'VI' ? 'bg-brand-accent text-white font-bold' : 'text-brand-muted'
              }`}
            >
              VI
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="p-2 rounded-lg bg-brand-secondary border border-brand-border text-brand-text hover:text-brand-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-secondary/95 backdrop-blur-2xl border-b border-brand-border px-6 py-6 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = currentView === item.view
              return (
                <button
                  key={item.id}
                  onClick={(e) => handleItemClick(e, item.view)}
                  className={`text-left text-sm font-mono tracking-widest py-2.5 border-b border-brand-border/40 transition-colors ${
                    isActive
                      ? 'text-brand-accent font-bold'
                      : 'text-brand-subtext hover:text-brand-accent'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
})

Navbar.displayName = 'Navbar'
