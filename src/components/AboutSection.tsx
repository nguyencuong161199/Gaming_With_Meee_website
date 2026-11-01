import React, { memo } from 'react'
import { Sparkles, Gamepad2, Brain, Video } from 'lucide-react'
import { Language, TRANSLATIONS } from '../data/translations'
import { BRAND } from '../data/contentData'
import { SectionHeading } from './SectionHeading'

interface AboutSectionProps {
  lang: Language
}

export const AboutSection: React.FC<AboutSectionProps> = memo(({ lang }) => {
  const t = TRANSLATIONS[lang]

  return (
    <section id="about" className="w-full h-full shrink-0 relative flex flex-col justify-center px-5 sm:px-8">
      <div className="max-w-content mx-auto w-full my-auto pt-16">
        <SectionHeading
          number={t.about.number}
          tag={t.about.tag}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Brand Card with Logo */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-brand-secondary/90 border border-brand-border p-6 sm:p-8 flex items-center gap-6 shadow-xl backdrop-blur-md">
              <div className="w-20 h-20 rounded-xl overflow-hidden border border-brand-border bg-black shrink-0">
                <img
                  src="/assets/nmc-gwm-logo.jpeg"
                  alt="Gaming with meee logo"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-brand-text uppercase">
                  {BRAND.name}
                </h3>
                <p className="font-mono text-xs text-brand-accent uppercase tracking-wider mt-0.5">
                  {BRAND.attribution}
                </p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-elevated border border-brand-border text-[11px] font-mono text-brand-subtext mt-3">
                  <Sparkles className="w-3 h-3 text-brand-accent" />
                  <span>{BRAND.tagline}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-brand-secondary/80 border border-brand-border backdrop-blur-md hover:border-brand-accent/50 transition-colors">
              <Gamepad2 className="w-5 h-5 text-brand-accent mb-2" />
              <h4 className="font-display font-bold text-sm text-brand-text uppercase">{t.about.pillarPlay}</h4>
              <p className="text-xs text-brand-subtext mt-1">{t.about.pillarPlayDesc}</p>
            </div>
            <div className="p-5 rounded-xl bg-brand-secondary/80 border border-brand-border backdrop-blur-md hover:border-cyan-400/50 transition-colors">
              <Brain className="w-5 h-5 text-cyan-400 mb-2" />
              <h4 className="font-display font-bold text-sm text-brand-text uppercase">{t.about.pillarExplore}</h4>
              <p className="text-xs text-brand-subtext mt-1">{t.about.pillarExploreDesc}</p>
            </div>
            <div className="p-5 rounded-xl bg-brand-secondary/80 border border-brand-border backdrop-blur-md hover:border-sky-400/50 transition-colors">
              <Video className="w-5 h-5 text-sky-400 mb-2" />
              <h4 className="font-display font-bold text-sm text-brand-text uppercase">{t.about.pillarCreate}</h4>
              <p className="text-xs text-brand-subtext mt-1">{t.about.pillarCreateDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = 'AboutSection'

