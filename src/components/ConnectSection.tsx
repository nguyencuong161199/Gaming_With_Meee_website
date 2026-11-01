import React, { memo } from 'react'
import { Phone, Mail } from 'lucide-react'
import { Language, TRANSLATIONS } from '../data/translations'
import { BRAND, SOCIAL_LINKS } from '../data/contentData'
import { SectionHeading } from './SectionHeading'
import { SocialLinks } from './SocialLinks'
import { Footer } from './Footer'

interface ConnectSectionProps {
  lang: Language
  onBackToTop: () => void
  onNavigateScreen: (index: number) => void
}

export const ConnectSection: React.FC<ConnectSectionProps> = memo(({
  lang,
  onBackToTop,
  onNavigateScreen
}) => {
  const t = TRANSLATIONS[lang]

  return (
    <section id="connect" className="w-full h-full shrink-0 relative flex flex-col justify-between pt-20 px-5 sm:px-8">
      <div className="max-w-content mx-auto w-full my-auto">
        <SectionHeading
          number={t.connect.number}
          tag={t.connect.tag}
          title={t.connect.title}
          subtitle={t.connect.subtitle}
        />

        {/* Social Grid */}
        <SocialLinks links={SOCIAL_LINKS} lang={lang} />

        {/* Direct Contact Banner */}
        <div className="mt-6 p-6 sm:p-7 rounded-2xl bg-brand-secondary/90 border border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div>
              <span className="font-mono text-[10px] text-brand-muted uppercase tracking-wider block">
                {t.connect.contactPerson}
              </span>
              <span className="font-display font-bold text-lg text-brand-text">
                {BRAND.contactPerson}
              </span>
            </div>
            <a
              href={`tel:${BRAND.phone}`}
              className="inline-flex items-center gap-2 font-mono text-sm text-brand-accent hover:underline"
            >
              <Phone className="w-4 h-4" />
              <span>{BRAND.phone}</span>
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2 font-mono text-sm text-brand-subtext hover:text-brand-accent hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>{BRAND.email}</span>
            </a>
          </div>

          <a
            href={`tel:${BRAND.phone}`}
            className="px-5 py-2.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-md shadow-brand-accent/20"
          >
            {t.connect.callNow} ({BRAND.phone})
          </a>
        </div>
      </div>

      {/* Footer attached to the bottom of Screen 6 */}
      <Footer
        lang={lang}
        onBackToTop={onBackToTop}
        onNavigateScreen={onNavigateScreen}
      />
    </section>
  )
})

ConnectSection.displayName = 'ConnectSection'

