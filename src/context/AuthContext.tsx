import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react'
import { User, UserRole, ADMIN_EMAILS } from '../types/auth'

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isAdmin: boolean
  loginWithGoogle: (email?: string, name?: string) => void
  loginWithFacebook: (email?: string, name?: string) => void
  loginWithEmail: (email: string, name?: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const STORAGE_KEY = 'gwm_auth_user'

export const AuthProviderComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) return JSON.parse(saved)
    } catch {
      // ignore
    }
    return null
  })

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
      } else {
        localStorage.removeItem(STORAGE_KEY)
      }
    } catch {
      // ignore
    }
  }, [user])

  // System automatically determines role based on authenticated account email
  const checkRole = (email: string): UserRole => {
    const normalized = email.toLowerCase().trim()
    const isAdminEmail = ADMIN_EMAILS.some((adminEmail) => adminEmail.toLowerCase() === normalized)
    return isAdminEmail ? 'admin' : 'user'
  }

  const loginWithGoogle = (email = 'nguyencuong161199@gmail.com', name?: string) => {
    const role = checkRole(email)
    const displayName =
      name || (role === 'admin' ? 'Mr. Cuong (Edward)' : email.split('@')[0])

    const newUser: User = {
      id: `google-${Date.now()}`,
      name: displayName,
      email: email.trim(),
      avatar:
        role === 'admin'
          ? '/assets/nmc-gwm-logo.jpeg'
          : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      provider: 'google',
      role: role
    }
    setUser(newUser)
  }

  const loginWithFacebook = (email = 'facebook.member@gmail.com', name = 'Facebook Member') => {
    const role = checkRole(email)
    const newUser: User = {
      id: `fb-${Date.now()}`,
      name: role === 'admin' ? 'Mr. Cuong (Edward)' : name,
      email: email.trim(),
      avatar:
        role === 'admin'
          ? '/assets/nmc-gwm-logo.jpeg'
          : 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
      provider: 'facebook',
      role: role
    }
    setUser(newUser)
  }

  const loginWithEmail = (email: string, name?: string) => {
    if (!email.trim()) return
    const role = checkRole(email)
    const displayName =
      name || (role === 'admin' ? 'Mr. Cuong (Edward)' : email.split('@')[0])

    const newUser: User = {
      id: `email-${Date.now()}`,
      name: displayName,
      email: email.trim(),
      avatar:
        role === 'admin'
          ? '/assets/nmc-gwm-logo.jpeg'
          : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      provider: 'email',
      role: role
    }
    setUser(newUser)
  }

  const logout = () => {
    setUser(null)
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isAdmin: user?.role === 'admin',
      loginWithGoogle,
      loginWithFacebook,
      loginWithEmail,
      logout
    }),
    [user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProviderComponent')
  }
  return context
}
