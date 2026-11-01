import React, { useState, useRef, useEffect } from 'react'
import { ShieldCheck, User as UserIcon, LogOut, ChevronDown } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { Language } from '../data/translations'

interface UserMenuProps {
  lang: Language
  onOpenArticleEditor?: () => void
}

export const UserMenu: React.FC<UserMenuProps> = ({ lang }) => {
  const { user, isAdmin, logout } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)
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
        <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-brand-secondary border border-brand-border p-3 shadow-2xl z-50 animate-fade-in backdrop-blur-xl">
          <div className="px-3 py-2.5 border-b border-brand-border/60">
            <span className="font-display font-bold text-sm text-brand-text block truncate">
              {user.name}
            </span>
            <span className="font-mono text-[11px] text-brand-muted block truncate mt-0.5">
              {user.email}
            </span>
            <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono border bg-brand-elevated border-brand-border/80">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-brand-subtext">
                {isAdmin
                  ? lang === 'VI' ? 'Quyền: Toàn quyền Quản trị' : 'Role: Administrator'
                  : lang === 'VI' ? 'Quyền: Thành viên' : 'Role: Member'}
              </span>
            </div>
          </div>

          <div className="py-2">
            {isAdmin ? (
              <div className="px-3 py-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono mb-2">
                <span className="font-bold block mb-0.5">👑 {lang === 'VI' ? 'Chế độ Admin' : 'Admin Mode'}</span>
                <span className="text-[10px] text-amber-200/80 leading-tight block">
                  {lang === 'VI'
                    ? 'Bạn có quyền đăng tin tức và quản trị bảng tin trên toàn trang.'
                    : 'You have full publishing and dispatch permissions.'}
                </span>
              </div>
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

            <button
              onClick={() => {
                setDropdownOpen(false)
                logout()
              }}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono text-rose-400 hover:bg-rose-500/10 transition-colors text-left"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{lang === 'VI' ? 'Đăng xuất tài khoản' : 'Sign Out'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
