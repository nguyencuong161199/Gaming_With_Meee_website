import React, { useRef, useState, useEffect, memo } from 'react'
import { Volume2, VolumeX, ArrowDownRight, Compass, Sparkles, Terminal } from 'lucide-react'
import { Language, TRANSLATIONS } from '../data/translations'

interface HeroSectionProps {
  lang?: Language
  onExploreClick?: () => void
  onBoardClick?: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = memo(({
  lang = 'EN',
  onExploreClick,
  onBoardClick
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const t = TRANSLATIONS[lang].hero

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause()
    }
  }, [])

  const toggleSound = () => {
    if (!videoRef.current) return
    const nextMuted = !isMuted
    videoRef.current.muted = nextMuted
    setIsMuted(nextMuted)
  }

  return (
    <section id="home" className="h-screen w-full flex items-center justify-center relative overflow-hidden select-none">
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 overflow-hidden bg-black pointer-events-none z-0">
        <video
          ref={videoRef}
          src="/assets/intro-gwm.mp4"
          poster="/assets/nmc-gwm-logo.jpeg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover scale-105 opacity-40 sm:opacity-50 transition-opacity duration-1000 filter brightness-90 contrast-110"
        />

        {/* Cinematic Scrim & Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/50 to-brand-bg/80" />
        <div className="absolute inset-0 grid-backdrop opacity-25" />
      </div>

      {/* 2. Single Floating Sound Toggle Button */}
      <div className="absolute bottom-8 right-5 sm:right-8 z-30">
        <button
          onClick={toggleSound}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-brand-secondary/85 hover:bg-brand-elevated border border-brand-border hover:border-brand-accent backdrop-blur-xl text-xs font-mono tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-brand-muted group-hover:text-brand-accent transition-colors" />
              <span className="text-brand-muted group-hover:text-brand-text text-[11px]">{t.audioOff}</span>
            </>
          ) : (
            <>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
              </span>
              <Volume2 className="w-4 h-4 text-brand-accent" />
              <span className="text-brand-accent font-bold text-[11px]">{t.audioOn}</span>
            </>
          )}
        </button>
      </div>

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

        {/* Minimalist Subhead */}
        <p className="text-sm sm:text-base md:text-lg text-brand-subtext font-light tracking-wide max-w-xl mb-7">
          {t.subheadPrefix} <span className="text-brand-text font-medium">NMC Corp</span> {t.subheadMid}{' '}
          <span className="text-brand-accent font-medium">Gaming</span>,{' '}
          <span className="text-brand-accent font-medium">Technology</span> &{' '}
          <span className="text-brand-accent font-medium">AI</span>.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-accent/30 hover:shadow-brand-accent/50 hover:-translate-y-0.5 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            <span>{t.btnExplore}</span>
            <ArrowDownRight className="w-4 h-4" />
          </button>

          <button
            onClick={onBoardClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-secondary/80 hover:bg-brand-elevated border border-brand-border hover:border-brand-accent backdrop-blur-md text-brand-text font-mono text-xs font-medium uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <Terminal className="w-4 h-4 text-brand-accent" />
            <span>{t.btnBoard}</span>
          </button>
        </div>
      </div>
    </section>
  )
})

HeroSection.displayName = 'HeroSection'
