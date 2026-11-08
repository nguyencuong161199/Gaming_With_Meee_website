import React, { useState, useRef, useEffect } from 'react'
import {
  ShieldCheck,
  User as UserIcon,
  LogOut,
  ChevronDown,
  Newspaper,
  GraduationCap,
  RefreshCw,
  Gamepad2,
  CheckCircle2
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { Language } from '../data/translations'

interface UserMenuProps {
  lang: Language
  onOpenArticleEditor?: () => void
  onNavigateView?: (view: any) => void
}

export const UserMenu: React.FC<UserMenuProps> = ({ lang, onNavigateView }) => {
  const { user, isAdmin, logout } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [cacheCleared, setCacheCleared] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleClearCache = () => {
    try {
      localStorage.removeItem('gwm_board_updates')
      setCacheCleared(true)
      setTimeout(() => {
        window.location.reload()
      }, 500)
    } catch {
      window.location.reload()
    }
  }

  if (!user) return null

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 p-1 pl-1.5 pr-2.5 rounded-full bg-brand-elevated border border-brand-border hover:border-brand-accent transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        aria-label="User profile menu"
        aria-expanded={dropdownOpen}
      >
        {/* Avatar */}
        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-brand-border bg-black shrink-0">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-full h-full object-cover"
          />
          <span
            className={`absolute bottom-0 right-0 w-2 h-2 rounded-full border border-black ${
              isAdmin ? 'bg-amber-400' : 'bg-emerald-400'
            }`}
          />
        </div>

        {/* User Role Pill */}
        <div className="flex items-center gap-1.5">
          <span className="font-display font-bold text-xs text-brand-text max-w-[100px] truncate">
            {user.name}
          </span>
          <span
            className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-bold tracking-wider uppercase border flex items-center gap-0.5 ${
              isAdmin
                ? 'bg-amber-400/10 text-amber-300 border-amber-400/40'
                : 'bg-emerald-400/10 text-emerald-400 border-emerald-400/40'
            }`}
          >
            {isAdmin ? <ShieldCheck className="w-2.5 h-2.5" /> : <UserIcon className="w-2.5 h-2.5" />}
            <span>{isAdmin ? 'ADMIN' : 'USER'}</span>
          </span>
        </div>

        <ChevronDown className="w-3 h-3 text-brand-muted" />
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-brand-secondary/95 border border-brand-border p-3 shadow-2xl z-50 animate-fade-in backdrop-blur-2xl">
          {/* Header Profile Info */}
          <div className="px-3 py-2.5 border-b border-brand-border/60">
            <span className="font-display font-bold text-sm text-brand-text block truncate">
              {user.name}
            </span>
            <span className="font-mono text-[11px] text-brand-muted block truncate mt-0.5">
              {user.email}
            </span>
            <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono border bg-brand-elevated border-brand-border/80">
              <span className={`w-1.5 h-1.5 rounded-full ${isAdmin ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`} />
              <span className="text-brand-subtext font-semibold">
                {isAdmin
                  ? lang === 'VI' ? 'Quyền: QUẢN TRỊ VIÊN TỐI CAO' : 'Role: SUPERADMIN'
                  : lang === 'VI' ? 'Quyền: THÀNH VIÊN' : 'Role: MEMBER'}
              </span>
            </div>
          </div>

          <div className="py-2 space-y-2">
            {isAdmin ? (
              <>
                {/* Admin Status Panel */}
                <div className="px-3 py-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono">
                  <div className="flex items-center justify-between gap-1 mb-1 font-bold">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{lang === 'VI' ? 'Admin Hub' : 'Admin Hub'}</span>
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-200">
                      LIVE
                    </span>
                  </div>
                  <div className="text-[10px] space-y-0.5 text-amber-200/80">
                    <div className="flex items-center justify-between">
                      <span>Supabase Cloud:</span>
                      <span className="text-emerald-400 font-bold">Connected</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Riot Data Dragon:</span>
                      <span className="text-cyan-400 font-bold">Patch Ready</span>
                    </div>
                  </div>
                </div>

                {/* Admin Quick Action Shortcuts */}
                <div className="space-y-1 pt-1 border-t border-brand-border/40">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-muted px-2 block">
                    {lang === 'VI' ? 'ĐIỀU HƯỚNG QUẢN TRỊ' : 'ADMIN SHORTCUTS'}
                  </span>

                  <button
                    onClick={() => {
                      setDropdownOpen(false)
                      onNavigateView?.('home')
                      setTimeout(() => {
                        const el = document.getElementById('board')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-mono text-brand-text hover:bg-brand-elevated hover:text-cyan-400 transition-colors text-left"
                  >
                    <span className="flex items-center gap-2">
                      <Newspaper className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{lang === 'VI' ? 'Bảng tin & Soạn bài' : 'Dispatches & Board'}</span>
                    </span>
                    <span className="text-[10px] text-brand-muted">#board</span>
                  </button>

                  <button
                    onClick={() => {
                      setDropdownOpen(false)
                      onNavigateView?.('academy')
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-mono text-brand-text hover:bg-brand-elevated hover:text-amber-400 transition-colors text-left"
                  >
                    <span className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                      <span>{lang === 'VI' ? 'Học viện & Khảo thí' : 'NMC Academy'}</span>
                    </span>
                    <span className="text-[10px] text-brand-muted">PSM I</span>
                  </button>

                  <button
                    onClick={() => {
                      setDropdownOpen(false)
                      onNavigateView?.('gaming')
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-mono text-brand-text hover:bg-brand-elevated hover:text-purple-400 transition-colors text-left"
                  >
                    <span className="flex items-center gap-2">
                      <Gamepad2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>{lang === 'VI' ? 'Cẩm nang Game Pro' : 'Pro Gaming Playbook'}</span>
                    </span>
                    <span className="text-[10px] text-brand-muted">4 Games</span>
                  </button>

                  <button
                    onClick={handleClearCache}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-mono text-brand-subtext hover:bg-brand-elevated hover:text-white transition-colors text-left"
                  >
                    <span className="flex items-center gap-2">
                      {cacheCleared ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <RefreshCw className="w-3.5 h-3.5 text-brand-muted" />
                      )}
                      <span>
                        {cacheCleared
                          ? (lang === 'VI' ? 'Đang tải lại...' : 'Reloading...')
                          : (lang === 'VI' ? 'Làm mới bộ nhớ tạm' : 'Clear Cache & Reload')}
                      </span>
                    </span>
                    <span className="text-[10px] text-brand-muted">Reset</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="px-3 py-2 rounded-xl bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-xs font-mono mb-2">
                <span className="font-bold block mb-0.5">🎮 {lang === 'VI' ? 'Chế độ Thành viên' : 'Member Mode'}</span>
                <span className="text-[10px] text-emerald-200/80 leading-tight block">
                  {lang === 'VI'
                    ? 'Bạn có thể đọc bài, bình luận và lưu các bài viết yêu thích.'
                    : 'You can read, comment and save your favorite dispatches.'}
                </span>
              </div>
            )}

            <div className="pt-1 border-t border-brand-border/40">
              <button
                onClick={() => {
                  setDropdownOpen(false)
                  logout()
                }}
                className="w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs font-mono text-rose-400 hover:bg-rose-500/15 transition-colors text-left font-bold"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{lang === 'VI' ? 'Đăng xuất tài khoản' : 'Sign Out'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

