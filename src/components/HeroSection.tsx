import React, { memo } from 'react'
import { Play, ArrowDownRight, Gamepad2, Sparkles, GraduationCap } from 'lucide-react'
import { Language, TRANSLATIONS } from '../data/translations'

interface HeroSectionProps {
  lang?: Language
  onExploreClick?: () => void
  onBoardClick?: () => void
  onReplayIntro?: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = memo(({
  lang = 'EN',
  onExploreClick,
  onBoardClick,
  onReplayIntro
}) => {
  const t = TRANSLATIONS[lang].hero

  return (
    <section id="home" className="h-full w-full flex items-center justify-center relative overflow-hidden select-none">
      {/* 1. Background Logo Layer (100% Lightweight, GPU & CPU Free) */}
      <div className="absolute inset-0 overflow-hidden bg-brand-bg pointer-events-none z-0 flex items-center justify-center">
        {/* Ambient radial glow */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-brand-accent/10 blur-[140px] pointer-events-none" />

        {/* Ambient logo graphic */}
        <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-[460px] md:h-[460px] rounded-3xl overflow-hidden opacity-25 filter contrast-125 brightness-95 pointer-events-none border border-brand-accent/20 shadow-2xl shadow-brand-accent/10">
          <img
            src="/assets/nmc-gwm-logo.jpeg"
            alt="NMC GWM Background Logo"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        {/* Cinematic Scrim & Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-brand-bg/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-transparent to-brand-bg" />
        <div className="absolute inset-0 grid-backdrop opacity-25" />
      </div>

      {/* 2. Floating Replay Intro Button */}
      {onReplayIntro && (
        <div className="absolute bottom-8 right-5 sm:right-8 z-30">
          <button
            onClick={onReplayIntro}
            aria-label="Replay Intro Video"
            className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-brand-secondary/85 hover:bg-brand-elevated border border-brand-border hover:border-brand-accent backdrop-blur-xl text-xs font-mono tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <Play className="w-3.5 h-3.5 text-brand-accent group-hover:scale-110 transition-transform fill-brand-accent/20" />
            <span className="text-brand-subtext group-hover:text-brand-text text-[11px]">
              {lang === 'VI' ? 'XEM LẠI INTRO' : 'REPLAY INTRO'}
            </span>
          </button>
        </div>
      )}

      {/* 3. Foreground Content */}
      <div className="max-w-content mx-auto px-5 sm:px-8 relative z-20 text-center flex flex-col items-center justify-center my-auto pt-14">
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-secondary/90 border border-brand-border text-brand-accent text-xs font-mono font-medium tracking-widest uppercase mb-5 shadow-md backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.tagline}</span>
        </div>

        {/* Oversized Headline */}
        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[92px] text-brand-text leading-[0.9] tracking-tighter uppercase editorial-title mb-5 max-w-5xl">
          {t.headline1} <br />
          <span className="text-stroke-tech">{t.headline2}</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text via-brand-accent to-sky-400">
            {t.headline3}
          </span>
        </h1>

        {/* Minimalist Subhead (2 Clean Balanced Lines) */}
        <p className="text-sm sm:text-base md:text-lg text-brand-subtext font-light tracking-wide max-w-xl mb-7 leading-relaxed">
          <span className="block">
            {t.subheadPrefix} <span className="text-brand-text font-semibold">NMC Corp</span>
          </span>
          <span className="block mt-1 sm:mt-1.5">
            {lang === 'VI' ? 'Khám phá ' : 'Exploring '}
            <span className="text-brand-accent font-medium">Gaming</span>,{' '}
            <span className="text-brand-accent font-medium">Technology</span> &amp;{' '}
            <span className="text-brand-accent font-medium">AI</span>.
          </span>
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-accent/30 hover:shadow-brand-accent/50 hover:-translate-y-0.5 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <Gamepad2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>{t.btnExplore}</span>
            <ArrowDownRight className="w-4 h-4" />
          </button>

          <button
            onClick={onBoardClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-secondary/80 hover:bg-brand-elevated border border-brand-border hover:border-brand-accent backdrop-blur-md text-brand-text font-mono text-xs font-medium uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <GraduationCap className="w-4 h-4 text-brand-accent" />
            <span>{t.btnBoard}</span>
          </button>
        </div>
      </div>
    </section>
  )
})

HeroSection.displayName = 'HeroSection'
