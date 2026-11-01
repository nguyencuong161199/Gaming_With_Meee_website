import { useState, useRef, useEffect, useCallback } from 'react'

interface UseScreenSliderOptions {
  totalScreens: number
  disabled?: boolean
  transitionDuration?: number
}

export function useScreenSlider({
  totalScreens,
  disabled = false,
  transitionDuration = 650
}: UseScreenSliderOptions) {
  const [currentScreen, setCurrentScreen] = useState<number>(0)
  const currentScreenRef = useRef<number>(0)
  currentScreenRef.current = currentScreen

  const isLockedRef = useRef<boolean>(false)
  const lastWheelTime = useRef<number>(0)
  const touchStartY = useRef<number>(0)
  const touchStartX = useRef<number>(0)

  const goToScreen = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalScreens) return
      isLockedRef.current = true
      lastWheelTime.current = Date.now()
      setCurrentScreen(index)

      setTimeout(() => {
        isLockedRef.current = false
      }, transitionDuration)
    },
    [totalScreens, transitionDuration]
  )

  const nextScreen = useCallback(() => {
    if (currentScreenRef.current < totalScreens - 1) {
      goToScreen(currentScreenRef.current + 1)
    }
  }, [totalScreens, goToScreen])

  const prevScreen = useCallback(() => {
    if (currentScreenRef.current > 0) {
      goToScreen(currentScreenRef.current - 1)
    }
  }, [goToScreen])

  useEffect(() => {
    if (disabled) return

    const isInsideInteractiveElement = (target: EventTarget | null): boolean => {
      if (!target || !(target instanceof HTMLElement)) return false
      if (document.querySelector('.modal-backdrop')) return true
      const tagName = target.tagName.toLowerCase()
      if (['input', 'textarea', 'select', 'button'].includes(tagName)) return true
      return Boolean(target.closest('.modal-backdrop, [data-scrollable="true"]'))
    }

    const handleWheel = (e: WheelEvent) => {
      if (isInsideInteractiveElement(e.target)) return

      // Prevent default page scroll to allow smooth slider transitions
      e.preventDefault()

      const now = Date.now()
      if (now - lastWheelTime.current < transitionDuration) return
      if (isLockedRef.current) return

      if (Math.abs(e.deltaY) > 8) {
        if (e.deltaY > 0) {
          nextScreen()
        } else {
          prevScreen()
        }
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartY.current = e.touches[0].clientY
        touchStartX.current = e.touches[0].clientX
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isInsideInteractiveElement(e.target)) return
      if (isLockedRef.current) return
      if (e.changedTouches.length === 0) return

      const touchEndY = e.changedTouches[0].clientY
      const touchEndX = e.changedTouches[0].clientX
      const diffY = touchStartY.current - touchEndY
      const diffX = touchStartX.current - touchEndX

      // Ensure vertical swipe is intentional and exceeds horizontal movement
      if (Math.abs(diffY) > 40 && Math.abs(diffY) > Math.abs(diffX) * 1.5) {
        if (diffY > 0) {
          nextScreen()
        } else {
          prevScreen()
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      const tagName = target?.tagName?.toLowerCase()
      if (['input', 'textarea', 'select'].includes(tagName || '')) return
      if (document.querySelector('.modal-backdrop')) return
      if (isLockedRef.current) return

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        nextScreen()
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        prevScreen()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goToScreen(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goToScreen(totalScreens - 1)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [disabled, totalScreens, transitionDuration, nextScreen, prevScreen, goToScreen])

  return {
    currentScreen,
    goToScreen,
    nextScreen,
    prevScreen
  }
}

