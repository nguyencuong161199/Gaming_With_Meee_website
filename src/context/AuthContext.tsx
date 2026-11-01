import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react'
import { User, UserRole, ADMIN_EMAILS } from '../types/auth'

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isAdmin: boolean
  loginWithGoogle: (customEmail?: string) => void
  loginWithFacebook: () => void
  loginAsAdmin: () => void
  loginAsUser: (name?: string, email?: string) => void
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

  const checkRole = (email: string, requestedRole?: UserRole): UserRole => {
    if (requestedRole) return requestedRole
    const normalized = email.toLowerCase().trim()
    return ADMIN_EMAILS.some((adminEmail) => adminEmail.toLowerCase() === normalized)
      ? 'admin'
      : 'user'
  }

  const loginWithGoogle = (customEmail?: string) => {
    const email = customEmail || 'nguyencuong161199@gmail.com'
    const role = checkRole(email)
    const newUser: User = {
      id: `google-${Date.now()}`,
      name: role === 'admin' ? 'Mr. Cuong (Edward)' : 'Google Member',
      email: email,
      avatar: '/assets/nmc-gwm-logo.jpeg',
      provider: 'google',
      role: role
    }
    setUser(newUser)
  }

  const loginWithFacebook = () => {
    const email = 'fb.user@gamingwithmeee.com'
    const newUser: User = {
      id: `fb-${Date.now()}`,
      name: 'Facebook Follower',
      email: email,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      provider: 'facebook',
      role: 'user'
    }
    setUser(newUser)
  }

  const loginAsAdmin = () => {
    const adminUser: User = {
      id: 'admin-01',
      name: 'Mr. Cuong (Edward)',
      email: 'nmc.corp16@gmail.com',
      avatar: '/assets/nmc-gwm-logo.jpeg',
      provider: 'demo',
      role: 'admin'
    }
    setUser(adminUser)
  }

  const loginAsUser = (name = 'Gamer Alpha', email = 'user.demo@gmail.com') => {
    const regularUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
      provider: 'demo',
      role: 'user'
    }
    setUser(regularUser)
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
      loginAsAdmin,
      loginAsUser,
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
