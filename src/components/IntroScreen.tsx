import React, { useRef, useState, useEffect } from 'react'
import { Volume2, VolumeX, SkipForward } from 'lucide-react'
import { Language } from '../data/translations'

interface IntroScreenProps {
  onComplete: () => void
  lang?: Language
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete, lang = 'EN' }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)

  const handleEnd = () => {
    setIsFadingOut(true)
    setTimeout(() => {
      onComplete()
    }, 700)
  }

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    const nextMuted = !isMuted
    videoRef.current.muted = nextMuted
    setIsMuted(nextMuted)
  }

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleEnd()
  }

  // Auto-play attempt on mount with audio ON by default
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Attempt unmuted playback first
    video.muted = false
    const playPromise = video.play()

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false)
        })
        .catch((err) => {
          console.warn('[Intro Video] Browser policy blocked unmuted autoplay without prior gesture:', err)
          // If browser policy strictly blocks sound on cold start, play muted and let user tap anywhere
          video.muted = true
          setIsMuted(true)
          video.play().catch(() => {})
        })
    }
  }, [])

  const handleContainerClick = () => {
    // If browser auto-muted on initial load, any click/tap unmutes immediately
    if (videoRef.current) {
      videoRef.current.muted = false
      setIsMuted(false)
    }
  }

  return (
    <div
      onClick={handleContainerClick}
      className={`fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden transition-opacity duration-700 select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient Deep Black Base & Soft Ambient Backlight */}
      <div className="absolute inset-0 bg-[#050505] flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[160px]" />
      </div>

      {/* Centered High-Definition Video (Preserves Aspect Ratio, Zero Pixelation) */}
      <div className="relative w-full h-full max-w-5xl max-h-[82vh] sm:max-h-[85vh] flex items-center justify-center px-4 z-10">
        <video
          ref={videoRef}
          src="/assets/intro-gwm.mp4"
          poster="/assets/nmc-gwm-logo.jpeg"
          playsInline
          onEnded={handleEnd}
          className="w-full h-full object-contain filter contrast-105 brightness-100 drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        />

        {/* Seamless edge-feathering gradients to blend video borders into black */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#050505] via-transparent to-[#050505] opacity-50" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-50" />
      </div>

      {/* Full-screen Cinema Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_140px_rgba(5,5,5,0.95)]" />

      {/* Top Branding Pill */}
      <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-20 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/20 bg-black shadow-lg">
          <img
            src="/assets/nmc-gwm-logo.jpeg"
            alt="NMC GWM Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left font-mono text-[11px] tracking-widest text-white/90 uppercase drop-shadow-md">
          GAMING WITH MEEE <span className="text-brand-accent">// INTRO</span>
        </div>
      </div>

      {/* Control Buttons (Top Right) */}
      <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-20 flex items-center gap-2">
        {/* Sound Toggle Button */}
        <button
          onClick={toggleSound}
          aria-label={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white text-xs font-mono backdrop-blur-md transition-all active:scale-95 shadow-lg"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-white/70" />
              <span className="text-[11px] text-white/70">{lang === 'VI' ? 'ÂM THANH: TẮT' : 'AUDIO: OFF'}</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
              <span className="text-[11px] text-brand-accent font-bold">{lang === 'VI' ? 'ÂM THANH: BẬT' : 'AUDIO: ON'}</span>
            </>
          )}
        </button>

        {/* Skip Intro Button */}
        <button
          onClick={handleSkip}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-mono font-bold uppercase tracking-wider shadow-lg shadow-brand-accent/40 transition-all hover:scale-105 active:scale-95"
        >
          <span>{lang === 'VI' ? 'BỎ QUA' : 'SKIP INTRO'}</span>
          <SkipForward className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  )
}

