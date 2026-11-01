import React, { memo } from 'react'
import { ArrowUp, Sparkles, Phone, Mail } from 'lucide-react'
import { BRAND } from '../data/contentData'
import { Language, TRANSLATIONS } from '../data/translations'

interface FooterProps {
  lang?: Language
  onBackToTop?: () => void
  onNavigateScreen?: (index: number) => void
}

export const Footer: React.FC<FooterProps> = memo(({ lang = 'EN', onBackToTop, onNavigateScreen }) => {
  const t = TRANSLATIONS[lang].footer

  const handleBackToTop = () => {
    if (onBackToTop) {
      onBackToTop()
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-brand-secondary/90 border-t border-brand-border/80 pt-8 pb-5 relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-brand-border/60">
          {/* Brand Identity */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-2.5">
              <button
                onClick={() => onNavigateScreen ? onNavigateScreen(0) : handleBackToTop()}
                className="w-8 h-8 rounded-xl overflow-hidden border border-brand-border bg-brand-elevated shrink-0 text-left cursor-pointer hover:border-brand-accent transition-colors"
                aria-label="Back to home"
              >
                <img
                  src="/assets/nmc-gwm-logo.jpeg"
                  alt="Gaming with meee logo"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </button>
              <div>
                <button
                  onClick={() => onNavigateScreen ? onNavigateScreen(0) : handleBackToTop()}
                  className="font-display font-bold text-base text-brand-text tracking-tight block hover:text-brand-accent transition-colors text-left"
                >
                  GAMING WITH MEEE
                </button>
                <span className="font-mono text-[9px] text-brand-muted tracking-widest uppercase block">
                  A CREATIVE BRAND BY NMC CORP
                </span>
              </div>
            </div>

            <p className="text-brand-subtext text-xs font-light leading-relaxed max-w-sm mb-3">
              {t.desc}
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-elevated border border-brand-border text-brand-accent text-[10px] font-mono">
              <Sparkles className="w-3 h-3" />
              <span>{t.tagline}</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 text-xs font-mono space-y-1.5">
            <span className="text-brand-text uppercase font-bold tracking-widest block mb-2">
              {t.contact}
            </span>
            <p className="text-brand-subtext font-medium text-xs">
              {BRAND.contactPerson}
            </p>
            <p>
              <a href={`tel:${BRAND.phone}`} className="text-brand-accent hover:underline flex items-center gap-1.5 text-xs">
                <Phone className="w-3 h-3" />
                <span>{BRAND.phone}</span>
              </a>
            </p>
            <p>
              <a href={`mailto:${BRAND.email}`} className="text-brand-subtext hover:text-brand-accent flex items-center gap-1.5 text-xs">
                <Mail className="w-3 h-3" />
                <span>{BRAND.email}</span>
              </a>
            </p>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-3 flex md:justify-end items-start">
            <button
              onClick={handleBackToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-elevated border border-brand-border hover:border-brand-accent text-brand-text hover:text-brand-accent font-mono text-xs transition-all group shadow-md hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              <span>{t.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono text-brand-muted">
          <div>
            &copy; {new Date().getFullYear()} Gaming with meee. {t.rights}
          </div>
          <div className="text-brand-muted/80">
            {t.crafted}
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'
