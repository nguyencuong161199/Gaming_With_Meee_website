import React, { useState, useRef, useEffect, memo } from 'react'
import { PlaygroundItem } from '../types/content'
import { Language, TRANSLATIONS } from '../data/translations'
import { Terminal, Activity, FlaskConical, Play } from 'lucide-react'

interface PlaygroundCardProps {
  item: PlaygroundItem
  lang?: Language
}

export const PlaygroundCard: React.FC<PlaygroundCardProps> = memo(({ item, lang = 'EN' }) => {
  const [isDemoRunning, setIsDemoRunning] = useState(false)
  const timerRef = useRef<number | null>(null)
  const t = TRANSLATIONS[lang].playground

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  const getStatusBadge = (status: string) => {
    const sLower = status.toLowerCase()
    if (sLower.includes('live') || sLower.includes('demo')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          LIVE DEMO
        </span>
      )
    }
    if (sLower.includes('progress') || sLower.includes('phát triển')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono">
          <Activity className="w-3 h-3" />
          {lang === 'VI' ? 'ĐANG PHÁT TRIỂN' : 'IN PROGRESS'}
        </span>
      )
    }
    if (sLower.includes('prototype') || sLower.includes('nguyên mẫu')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-[10px] font-mono">
          <FlaskConical className="w-3 h-3" />
          {lang === 'VI' ? 'NGUYÊN MẪU' : 'PROTOTYPE'}
        </span>
      )
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-500/10 border border-slate-500/30 text-slate-300 text-[10px] font-mono">
        {lang === 'VI' ? 'NGHIÊN CỨU' : 'RESEARCH'}
      </span>
    )
  }

  const runSimulatedLab = () => {
    if (isDemoRunning) return
    setIsDemoRunning(true)
    timerRef.current = window.setTimeout(() => {
      setIsDemoRunning(false)
      timerRef.current = null
    }, 2200)
  }

  return (
    <div className="relative rounded-2xl bg-brand-secondary border border-brand-border hover:border-brand-accent/60 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group shadow-md">
      <div>
        {/* Header telemetry */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="font-mono text-xs text-brand-muted tracking-wider uppercase flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-brand-accent" />
            <span>{item.category}</span>
          </span>
          {getStatusBadge(item.status)}
        </div>

        {/* Tag Pill */}
        <div className="mb-2.5">
          <span className="px-2 py-0.5 rounded bg-brand-elevated text-brand-accent border border-brand-border text-[10px] font-mono tracking-widest uppercase">
            {item.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg sm:text-xl text-brand-text group-hover:text-brand-accent transition-colors tracking-tight uppercase leading-snug mb-2">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-brand-subtext text-xs sm:text-sm font-light leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Simulated Output */}
        {isDemoRunning && (
          <div className="p-2.5 mb-4 rounded-lg bg-brand-bg border border-brand-accent/40 font-mono text-[11px] text-brand-accent animate-fade-in flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
            <span>{t.running}</span>
          </div>
        )}
      </div>

      {/* Action Area */}
      <div className="pt-3 border-t border-brand-border/40 flex items-center justify-between">
        <button
          onClick={runSimulatedLab}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-brand-text hover:text-brand-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded"
        >
          <Play className="w-3.5 h-3.5 fill-current text-brand-accent" />
          <span>{item.linkText || t.launch}</span>
        </button>
      </div>
    </div>
  )
})

PlaygroundCard.displayName = 'PlaygroundCard'
