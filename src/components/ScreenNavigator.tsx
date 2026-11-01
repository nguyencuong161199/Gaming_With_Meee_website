import React, { memo } from 'react'

interface ScreenNavigatorProps {
  currentScreen: number
  screenNames: string[]
  onNavigate: (index: number) => void
}

export const ScreenNavigator: React.FC<ScreenNavigatorProps> = memo(({
  currentScreen,
  screenNames,
  onNavigate
}) => {
  return (
    <aside
      aria-label="Screen navigator"
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 p-2 rounded-full bg-brand-secondary/80 backdrop-blur-md border border-brand-border/60 shadow-xl"
    >
      {screenNames.map((name, index) => {
        const isActive = currentScreen === index
        return (
          <button
            key={name}
            onClick={() => onNavigate(index)}
            aria-label={`Jump to screen ${name}`}
            aria-current={isActive ? 'step' : undefined}
            className="group relative flex items-center justify-center p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-full"
          >
            {/* Tooltip on hover */}
            <span className="absolute right-8 px-2.5 py-1 rounded bg-brand-elevated border border-brand-border text-[10px] font-mono text-brand-text whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
              {name}
            </span>

            {/* Dot indicator */}
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-3.5 h-3.5 bg-brand-accent shadow-md shadow-brand-accent/50 scale-110'
                  : 'w-2 h-2 bg-brand-muted/50 group-hover:bg-brand-text'
              }`}
            />
          </button>
        )
      })}
    </aside>
  )
})

ScreenNavigator.displayName = 'ScreenNavigator'

