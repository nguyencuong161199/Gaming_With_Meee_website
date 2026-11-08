import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode, useCallback } from 'react'
import { User, UserRole, ADMIN_EMAILS } from '../types/auth'
import { supabase } from '../lib/supabase'

interface AuthNotification {
  type: 'info' | 'error' | 'success'
  message: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isAdmin: boolean
  authNotification: AuthNotification | null
  setAuthNotification: (notif: AuthNotification | null) => void
  loginWithGoogle: () => Promise<void>
  loginWithFacebook: () => Promise<void>
  loginWithEmail: (email: string, name?: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const STORAGE_KEY = 'gwm_auth_user'

export const AuthProviderComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authNotification, setAuthNotification] = useState<AuthNotification | null>(null)
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) return JSON.parse(saved)
    } catch {
      // ignore
    }
    return null
  })

  // Auto-dismiss auth notification toast after duration (3.5s for success/info, 6s for error)
  useEffect(() => {
    if (!authNotification) return
    const duration = authNotification.type === 'error' ? 6000 : 3500
    const timer = setTimeout(() => {
      setAuthNotification(null)
    }, duration)
    return () => clearTimeout(timer)
  }, [authNotification])

  // Automatically check if user is Admin based on email or owner name
  const checkRole = useCallback((email: string, name?: string): UserRole => {
    const normEmail = (email || '').toLowerCase().trim()
    const normName = (name || '').toLowerCase().trim()
    const isAdminEmail = ADMIN_EMAILS.some((adminEmail) => adminEmail.toLowerCase() === normEmail)
    const isAdminName =
      normName.includes('cuong') ||
      normName.includes('cường') ||
      normName.includes('edward') ||
      normName.includes('nmc')

    return isAdminEmail || isAdminName ? 'admin' : 'user'
  }, [])

  const handleSession = useCallback((session: any, showToast = false) => {
    if (!session?.user) return
    const userObj = session.user
    const meta = userObj.user_metadata || {}

    const email = userObj.email || meta.email || ''
    const rawName = meta.full_name || meta.name || meta.user_name || ''
    const role = checkRole(email, rawName)

    const displayName =
      rawName || (role === 'admin' ? 'Mr. Cuong (Edward)' : email ? email.split('@')[0] : 'Thành viên')

    const rawAvatar =
      meta.avatar_url ||
      meta.picture?.data?.url ||
      meta.picture ||
      (role === 'admin' ? '/assets/nmc-gwm-logo.jpeg' : '')

    const providerType = userObj.app_metadata?.provider || 'facebook'
    const provider = providerType === 'google' ? 'google' : providerType === 'facebook' ? 'facebook' : 'email'

    const newUser: User = {
      id: userObj.id,
      name: displayName,
      email: email || `${displayName.toLowerCase().replace(/\s+/g, '')}@facebook.com`,
      avatar: rawAvatar || '/assets/nmc-gwm-logo.jpeg',
      provider: provider,
      role: role
    }

    setUser(newUser)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser))
    } catch {
      // ignore
    }

    // Only show toast notification if explicitly requested (e.g. fresh OAuth login)
    if (showToast) {
      setAuthNotification({
        type: 'success',
        message: `Đăng nhập thành công! Chào mừng ${displayName} (${role === 'admin' ? 'QUẢN TRỊ VIÊN' : 'THÀNH VIÊN'}).`
      })
    }
  }, [checkRole])

  // Listen to Supabase Real Auth State Changes & handle PKCE/OAuth redirects
  useEffect(() => {
    console.log('%c[GWM AUTH] App mounted at URL:', 'color: #38bdf8; font-weight: bold;', window.location.href)

    // 1. Clean Facebook's legacy hash fragment #_=_
    if (typeof window !== 'undefined' && window.location.hash.includes('_=_')) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }

    // 2. Check URL error parameters (from Facebook or Supabase)
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const error = urlParams.get('error')
      const errorDesc = urlParams.get('error_description')
      const errorCode = urlParams.get('error_code')

      if (error || errorDesc) {
        console.error('%c[GWM AUTH] OAuth Redirect Error:', 'color: #f43f5e; font-weight: bold;', { error, errorCode, errorDesc })
        setAuthNotification({
          type: 'error',
          message: `Lỗi OAuth (${error || 'Error'}): ${errorDesc || errorCode || 'Không thể hoàn tất đăng nhập.'}`
        })
        // Clean URL to prevent recurring notice
        window.history.replaceState(null, '', window.location.pathname)
      }
    }

    // 3. Process OAuth Code exchange or check active session
    const processOAuthRedirect = async () => {
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code')
        if (code) {
          console.log('%c[GWM AUTH] Detected OAuth code:', 'color: #eab308;', code.slice(0, 8) + '...')
          try {
            const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
            if (exchangeError) {
              console.warn('[GWM AUTH] exchangeCodeForSession notice:', exchangeError.message)
            } else if (data?.session) {
              console.log('[GWM AUTH] Session exchanged successfully!', data.session.user.id)
              handleSession(data.session, true) // Fresh login via OAuth redirect -> show toast
              window.history.replaceState(null, '', window.location.pathname)
              return
            }
          } catch (e: any) {
            console.warn('[GWM AUTH] Code exchange caught:', e?.message || e)
          }
        }
      }

      // Check existing session on mount (silent restore -> DO NOT show toast)
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        console.log('[GWM AUTH] getSession check:', session?.user ? `Logged in as ${session.user.email || session.user.id}` : 'No active session', error || '')
        if (session?.user) {
          handleSession(session, false)
        }
      } catch (err) {
        console.warn('[GWM AUTH] getSession error:', err)
      }
    }

    processOAuthRedirect()

    // 4. Listen to live Auth state change
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('%c[GWM AUTH] onAuthStateChange event:', 'color: #a855f7;', event, session?.user?.id || 'null')
      if (session?.user) {
        // Only show toast on genuine SIGNED_IN event (not on INITIAL_SESSION or TOKEN_REFRESHED)
        const isNewLogin = event === 'SIGNED_IN'
        handleSession(session, isNewLogin)
      } else if (event === 'SIGNED_OUT') {
        setUser(null)
      }
    })

    return () => {
      authListener?.subscription?.unsubscribe()
    }
  }, [handleSession])

  const loginWithGoogle = async () => {
    try {
      setAuthNotification({ type: 'info', message: 'Đang kết nối tới Google OAuth...' })
      console.log('[GWM AUTH] Starting loginWithGoogle...')
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      })
      if (error) {
        console.warn('Supabase OAuth notice:', error.message)
        setAuthNotification({ type: 'error', message: `Google OAuth: ${error.message}` })
      } else if (data?.url) {
        window.location.href = data.url
      }
    } catch (e: any) {
      setAuthNotification({ type: 'error', message: `Google error: ${e?.message || e}` })
    }
  }

  const loginWithFacebook = async () => {
    try {
      setAuthNotification({ type: 'info', message: 'Đang kết nối tới Facebook OAuth...' })
      console.log('[GWM AUTH] 1. Calling signInWithOAuth for Facebook with origin:', window.location.origin)
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
          redirectTo: window.location.origin,
          scopes: 'public_profile'
        }
      })

      console.log('[GWM AUTH] 2. signInWithOAuth response:', { data, error })

      if (error) {
        console.error('[GWM AUTH] Supabase OAuth returned error:', error)
        setAuthNotification({
          type: 'error',
          message: `Lỗi Supabase: ${error.message}`
        })
      } else if (data?.url) {
        console.log('[GWM AUTH] 3. Redirecting browser to:', data.url)
        window.location.href = data.url
      } else {
        console.warn('[GWM AUTH] No URL returned from signInWithOAuth!')
        setAuthNotification({
          type: 'error',
          message: 'Không nhận được đường dẫn đăng nhập từ Facebook.'
        })
      }
    } catch (err: any) {
      console.error('[GWM AUTH] Exception in loginWithFacebook:', err)
      setAuthNotification({
        type: 'error',
        message: `Lỗi kết nối Facebook: ${err?.message || err}`
      })
    }
  }

  const loginWithEmail = (email: string, name?: string) => {
    if (!email.trim()) return
    const role = checkRole(email, name)
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
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser))
    } catch {
      // ignore
    }
    setAuthNotification({
      type: 'success',
      message: `Đăng nhập Email thành công! Chào ${displayName} (${role === 'admin' ? 'ADMIN' : 'USER'}).`
    })
  }

  const logout = async () => {
    try {
      await supabase.auth.signOut()
    } catch {
      // ignore
    }
    setUser(null)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
    setAuthNotification({
      type: 'info',
      message: 'Bạn đã đăng xuất.'
    })
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isAdmin: user?.role === 'admin',
      authNotification,
      setAuthNotification,
      loginWithGoogle,
      loginWithFacebook,
      loginWithEmail,
      logout
    }),
    [user, authNotification, loginWithGoogle, loginWithFacebook]
  )

  return (
    <AuthContext.Provider value={value}>
      {children}
      {/* Real-time On-Screen Auth Feedback Toast (Auto-Dismissing) */}
      {authNotification && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-6 right-6 z-[99999] max-w-sm sm:max-w-md p-4 rounded-2xl border shadow-2xl backdrop-blur-xl transition-all duration-300 animate-slide-up flex flex-col gap-2 overflow-hidden ${
            authNotification.type === 'error'
              ? 'bg-rose-950/95 border-rose-500/60 text-rose-100 shadow-rose-950/50'
              : authNotification.type === 'success'
                ? 'bg-emerald-950/95 border-emerald-500/60 text-emerald-100 shadow-emerald-950/50'
                : 'bg-slate-900/95 border-cyan-500/60 text-cyan-100 shadow-cyan-950/50'
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 text-xs sm:text-sm font-sans leading-relaxed">
              <div className="font-bold uppercase tracking-wider text-[11px] mb-1 opacity-90 flex items-center gap-1.5">
                <span>
                  {authNotification.type === 'error'
                    ? '⚠️ Lỗi Đăng Nhập'
                    : authNotification.type === 'success'
                      ? '✅ Thông Báo'
                      : 'ℹ️ Trạng Thái'}
                </span>
              </div>
              <div>{authNotification.message}</div>
            </div>
            <button
              onClick={() => setAuthNotification(null)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors text-xs shrink-0"
              aria-label="Đóng thông báo"
            >
              ✕
            </button>
          </div>

          {/* Visual Auto-Dismiss Countdown Progress Bar */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-0.5">
            <div
              className={`h-full rounded-full animate-toast-shrink ${
                authNotification.type === 'error'
                  ? 'bg-rose-400'
                  : authNotification.type === 'success'
                    ? 'bg-emerald-400'
                    : 'bg-cyan-400'
              }`}
              style={{
                animationDuration: authNotification.type === 'error' ? '6s' : '3.5s'
              }}
            />
          </div>
        </div>
      )}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProviderComponent')
  }
  return context
}
