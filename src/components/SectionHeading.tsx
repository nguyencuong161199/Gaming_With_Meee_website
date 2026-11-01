import React, { memo } from 'react'

interface SectionHeadingProps {
  number?: string
  tag: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export const SectionHeading: React.FC<SectionHeadingProps> = memo(({
  number,
  tag,
  title,
  subtitle,
  align = 'left'
}) => {
  return (
    <div className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      <div className={`inline-flex items-center gap-2 px-2.5 py-0.5 mb-3 rounded-full border border-brand-border bg-brand-secondary/60 text-brand-muted text-[11px] font-mono uppercase tracking-widest ${align === 'center' ? 'justify-center' : ''}`}>
        {number && <span className="text-brand-accent font-bold">[{number}]</span>}
        <span>{tag}</span>
      </div>
      
      <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-text tracking-tight uppercase leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-brand-subtext font-light max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
})

SectionHeading.displayName = 'SectionHeading'
