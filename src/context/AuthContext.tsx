import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react'
import { User, UserRole, ADMIN_EMAILS } from '../types/auth'
import { supabase } from '../lib/supabase'

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isAdmin: boolean
  loginWithGoogle: () => Promise<void>
  loginWithFacebook: () => Promise<void>
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

  // Automatically check if user is Admin based on email
  const checkRole = (email: string): UserRole => {
    const normalized = email.toLowerCase().trim()
    const isAdminEmail = ADMIN_EMAILS.some((adminEmail) => adminEmail.toLowerCase() === normalized)
    return isAdminEmail ? 'admin' : 'user'
  }

  // Listen to Supabase Real Auth State Changes
  useEffect(() => {
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (session?.user) {
          const email = session.user.email || ''
          const role = checkRole(email)
          const name =
            session.user.user_metadata?.full_name ||
            session.user.user_metadata?.name ||
            (role === 'admin' ? 'Mr. Cuong (Edward)' : email.split('@')[0])
          const avatar =
            session.user.user_metadata?.avatar_url ||
            (role === 'admin' ? '/assets/nmc-gwm-logo.jpeg' : '')

          setUser({
            id: session.user.id,
            name,
            email,
            avatar: avatar || '/assets/nmc-gwm-logo.jpeg',
            provider: (session.user.app_metadata?.provider as any) || 'google',
            role
          })
        }
      } catch {
        // ignore
      }
    }

    getInitialSession()

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const email = session.user.email || ''
        const role = checkRole(email)
        const name =
          session.user.user_metadata?.full_name ||
          session.user.user_metadata?.name ||
          (role === 'admin' ? 'Mr. Cuong (Edward)' : email.split('@')[0])
        const avatar =
          session.user.user_metadata?.avatar_url ||
          (role === 'admin' ? '/assets/nmc-gwm-logo.jpeg' : '')

        setUser({
          id: session.user.id,
          name,
          email,
          avatar: avatar || '/assets/nmc-gwm-logo.jpeg',
          provider: (session.user.app_metadata?.provider as any) || 'google',
          role
        })
      }
    })

    return () => {
      authListener?.subscription?.unsubscribe()
    }
  }, [])

  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      })
      if (error) {
        // If Google OAuth is not enabled in Supabase yet, sign in as Admin for testing
        console.warn('Supabase OAuth notice:', error.message)
        loginWithEmail('nguyencuong161199@gmail.com', 'Mr. Cuong (Edward)')
      }
    } catch {
      loginWithEmail('nguyencuong161199@gmail.com', 'Mr. Cuong (Edward)')
    }
  }

  const loginWithFacebook = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
          redirectTo: window.location.origin,
          scopes: 'public_profile'
        }
      })
      if (error) {
        console.warn('Supabase OAuth notice:', error.message)
        loginWithEmail('facebook.user@gmail.com', 'Facebook Member')
      }
    } catch {
      loginWithEmail('facebook.user@gmail.com', 'Facebook Member')
    }
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

  const logout = async () => {
    try {
      await supabase.auth.signOut()
    } catch {
      // ignore
    }
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
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
