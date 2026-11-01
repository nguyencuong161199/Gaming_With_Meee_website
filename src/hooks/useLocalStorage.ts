import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null
      if (item !== null) {
        return JSON.parse(item)
      }
    } catch {
      // JSON parse error or access denied
    }
    return typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue
  })

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(storedValue))
      }
    } catch {
      // Ignore quota exceeded or storage disabled
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

