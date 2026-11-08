import React, { memo } from 'react'
import { SocialLinkItem } from '../types/content'
import { Language, TRANSLATIONS } from '../data/translations'
import { Mail, ArrowUpRight, MessageSquare, Video, Instagram, Phone } from 'lucide-react'

interface SocialLinksProps {
  links: SocialLinkItem[]
  lang?: Language
}

export const SocialLinks: React.FC<SocialLinksProps> = memo(({ links, lang = 'EN' }) => {
  const t = TRANSLATIONS[lang].connect

  const getSocialIcon = (platform: SocialLinkItem['platform']) => {
    switch (platform) {
      case 'TikTok':
        return <Video className="w-5 h-5 text-sky-400" />
      case 'Instagram':
        return <Instagram className="w-5 h-5 text-pink-400" />
      case 'Facebook':
        return <MessageSquare className="w-5 h-5 text-blue-400" />
      case 'Email':
        return <Mail className="w-5 h-5 text-brand-accent" />
      case 'Phone':
        return <Phone className="w-5 h-5 text-emerald-400" />
      default:
        return <ArrowUpRight className="w-5 h-5 text-brand-accent" />
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
      {links.map((item) => {
        const isDirectContact = item.platform === 'Email' || item.platform === 'Phone'
        return (
          <a
            key={item.platform}
            href={item.url}
            target={isDirectContact ? undefined : '_blank'}
            rel={isDirectContact ? undefined : 'noopener noreferrer'}
            className="group relative rounded-xl bg-brand-secondary/90 border border-brand-border hover:border-brand-accent p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-brand-elevated border border-brand-border group-hover:scale-105 transition-transform">
                  {getSocialIcon(item.platform)}
                </div>
                <span className="font-mono text-[10px] text-brand-muted tracking-wider uppercase">
                  {item.platform}
                </span>
              </div>

              <h4 className="font-display font-bold text-xs sm:text-sm text-brand-text group-hover:text-brand-accent transition-colors tracking-tight break-all leading-snug">
                {item.handle}
              </h4>

              {(item.descriptionVi || item.description) && (
                <p className="text-brand-subtext text-xs font-light mt-1.5 leading-relaxed">
                  {lang === 'VI' ? (item.descriptionVi || item.description) : (item.descriptionEn || item.description)}
                </p>
              )}
            </div>

            <div className="mt-4 pt-2.5 border-t border-brand-border/40 flex items-center justify-between text-[11px] font-mono text-brand-accent font-medium">
              <span>
                {item.platform === 'Phone' ? t.callNow : item.platform === 'Email' ? t.sendMail : t.visit}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        )
      })}
    </div>
  )
})

SocialLinks.displayName = 'SocialLinks'
