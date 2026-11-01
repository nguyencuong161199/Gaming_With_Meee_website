import React, { useState, useEffect, useMemo, memo } from 'react'
import { UpdateItem, UpdateTag } from '../types/content'
import { INITIAL_UPDATES } from '../data/updatesData'
import { Language, TRANSLATIONS } from '../data/translations'
import { SectionHeading } from './SectionHeading'
import { Pin, ArrowUpRight, Plus, X, Search, Calendar, ShieldCheck, Trash2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'

interface UpdateBoardProps {
  lang?: Language
  onSelectUpdate?: (update: UpdateItem) => void
  onRequireLogin?: () => void
}

const TAG_STYLES: Record<UpdateTag, string> = {
  ANNOUNCEMENT: 'text-brand-accent border-brand-accent/30 bg-brand-accent/10',
  'NEW VIDEO': 'text-sky-400 border-sky-400/30 bg-sky-400/10',
  DEVLOG: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
  COMMUNITY: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  'PATCH NOTES': 'text-slate-300 border-slate-500/30 bg-slate-500/10'
}

export const UpdateBoard: React.FC<UpdateBoardProps> = memo(({
  lang = 'EN',
  onSelectUpdate,
  onRequireLogin
}) => {
  const { user, isAdmin } = useAuth()

  const [updates, setUpdates] = useState<UpdateItem[]>(() => {
    try {
      const saved = localStorage.getItem('gwm_board_updates')
      if (saved) return JSON.parse(saved)
    } catch {
      // fallback
    }
    return INITIAL_UPDATES
  })

  const [activeTag, setActiveTag] = useState<string>('ALL')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)

  const t = TRANSLATIONS[lang].board

  // Form states
  const [newTitle, setNewTitle] = useState('')
  const [newTag, setNewTag] = useState<UpdateTag>('ANNOUNCEMENT')
  const [newSummary, setNewSummary] = useState('')
  const [newContent, setNewContent] = useState('')
  const [newLink, setNewLink] = useState('')
  const [newLinkText, setNewLinkText] = useState('')
  const [isPinned, setIsPinned] = useState(false)

  // Fetch live updates from Supabase Cloud Database
  useEffect(() => {
    const fetchCloudUpdates = async () => {
      try {
        const { data, error } = await supabase
          .from('updates')
          .select('*')
          .order('pinned', { ascending: false })
          .order('created_at', { ascending: false })

        if (!error && data && data.length > 0) {
          const cloudUpdates: UpdateItem[] = data.map((d: any) => ({
            id: d.id,
            date: d.date,
            time: d.time,
            tag: d.tag,
            title: d.title,
            summary: d.summary,
            content: d.content,
            pinned: Boolean(d.pinned),
            link: d.link || undefined,
            linkText: d.link_text || undefined,
            author: d.author || 'Gaming with meee'
          }))
          setUpdates(cloudUpdates)
          localStorage.setItem('gwm_board_updates', JSON.stringify(cloudUpdates))
        }
      } catch {
        // Fallback to local storage if offline or tables not initialized yet
      }
    }

    fetchCloudUpdates()
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('gwm_board_updates', JSON.stringify(updates))
    } catch {
      // Ignore storage errors
    }
  }, [updates])

  const tagList: { id: string; label: string }[] = useMemo(() => [
    { id: 'ALL', label: lang === 'VI' ? 'TẤT CẢ' : 'ALL' },
    { id: 'ANNOUNCEMENT', label: 'ANNOUNCEMENT' },
    { id: 'NEW VIDEO', label: 'NEW VIDEO' },
    { id: 'DEVLOG', label: 'DEVLOG' },
    { id: 'COMMUNITY', label: 'COMMUNITY' },
    { id: 'PATCH NOTES', label: 'PATCH NOTES' }
  ], [lang])

  const sortedUpdates = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return updates
      .filter((item) => {
        const matchesTag = activeTag === 'ALL' || item.tag === activeTag
        const matchesSearch =
          !query ||
          item.title.toLowerCase().includes(query) ||
          item.summary.toLowerCase().includes(query) ||
          (item.content && item.content.toLowerCase().includes(query))
        return matchesTag && matchesSearch
      })
      .sort((a, b) => {
        if (a.pinned && !b.pinned) return -1
        if (!a.pinned && b.pinned) return 1
        return 0
      })
  }, [updates, activeTag, searchQuery])

  const handleOpenAddModal = () => {
    if (!isAdmin) {
      onRequireLogin?.()
      return
    }
    setIsAddModalOpen(true)
  }

  const handleDeletePost = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    if (!isAdmin) return
    const confirmed = window.confirm(
      lang === 'VI' ? 'Bạn có chắc chắn muốn xóa tin này?' : 'Delete this update post?'
    )
    if (confirmed) {
      setUpdates((prev) => prev.filter((item) => item.id !== id))
      try {
        await supabase.from('updates').delete().eq('id', id)
      } catch {
        // ignore
      }
    }
  }

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTitle.trim() || !newSummary.trim()) return

    const now = new Date()
    const formattedDate = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`
    const formattedTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

    const newPost: UpdateItem = {
      id: `up-${Date.now()}`,
      date: formattedDate,
      time: formattedTime,
      tag: newTag,
      title: newTitle.trim(),
      summary: newSummary.trim(),
      content: newContent.trim() || newSummary.trim(),
      pinned: isPinned,
      link: newLink.trim() || undefined,
      linkText: newLinkText.trim() || (newLink ? (lang === 'VI' ? 'Xem chi tiết' : 'View Link') : undefined),
      author: user?.name || 'Mr. Cuong (Edward)'
    }

    setUpdates((prev) => [newPost, ...prev])
    setNewTitle('')
    setNewSummary('')
    setNewContent('')
    setNewLink('')
    setNewLinkText('')
    setIsPinned(false)
    setIsAddModalOpen(false)

    // Save to Supabase Cloud Database
    try {
      await supabase.from('updates').insert({
        id: newPost.id,
        date: newPost.date,
        time: newPost.time,
        tag: newPost.tag,
        title: newPost.title,
        summary: newPost.summary,
        content: newPost.content,
        pinned: newPost.pinned,
        link: newPost.link || null,
        link_text: newPost.linkText || null,
        author: newPost.author
      })
    } catch {
      // Local copy already saved
    }
  }

  const getTagStyle = (tag: UpdateTag) => {
    return TAG_STYLES[tag] || 'text-slate-300 border-slate-500/30 bg-slate-500/10'
  }

  return (
    <section id="board" className="h-screen w-full flex flex-col justify-center relative overflow-hidden pt-16 pb-8 bg-brand-secondary/30">
      <div className="max-w-content mx-auto px-5 sm:px-8 w-full my-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <SectionHeading
            number={t.number}
            tag={t.tag}
            title={t.title}
            subtitle={t.subtitle}
          />

          <div className="flex items-center gap-3">
            {isAdmin ? (
              <button
                onClick={handleOpenAddModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-amber-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{t.addBtn}</span>
              </button>
            ) : (
              <button
                onClick={handleOpenAddModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-elevated border border-brand-border hover:border-brand-accent text-brand-subtext hover:text-white font-mono text-xs font-medium uppercase tracking-wider transition-all"
              >
                <Plus className="w-4 h-4 text-brand-accent" />
                <span>{lang === 'VI' ? 'ĐĂNG TIN (CẦN ADMIN)' : 'POST UPDATE (ADMIN)'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Controls: Search and Filter Tags */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-brand-border/50">
          <div className="flex items-center flex-wrap gap-2" role="tablist" aria-label="Update tags">
            {tagList.map((tag) => {
              const isSelected = activeTag === tag.id
              return (
                <button
                  key={tag.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTag(tag.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                    isSelected
                      ? 'bg-brand-accent text-white font-bold'
                      : 'bg-brand-secondary border border-brand-border text-brand-subtext hover:text-white'
                  }`}
                >
                  {tag.label}
                </button>
              )
            })}
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-brand-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              aria-label={t.searchPlaceholder}
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-brand-elevated border border-brand-border text-xs text-brand-text placeholder:text-brand-muted focus:outline-none focus:border-brand-accent font-mono"
            />
          </div>
        </div>

        {/* Board Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedUpdates.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelectUpdate?.(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onSelectUpdate?.(item)
                }
              }}
              className={`group relative rounded-2xl bg-brand-secondary border p-5 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-0.5 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                item.pinned
                  ? 'border-brand-accent/70 bg-gradient-to-b from-brand-secondary to-brand-elevated/70'
                  : 'border-brand-border hover:border-brand-accent/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border ${getTagStyle(item.tag)}`}>
                      {item.tag}
                    </span>
                    {item.pinned && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-brand-accent bg-brand-accent/10 px-1.5 py-0.5 rounded border border-brand-accent/30 font-semibold">
                        <Pin className="w-3 h-3 rotate-45" />
                        {t.pinned}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-brand-muted flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </span>

                    {/* Admin Delete Action */}
                    {isAdmin && (
                      <button
                        onClick={(e) => handleDeletePost(e, item.id)}
                        title={lang === 'VI' ? 'Xóa bài đăng này' : 'Delete update'}
                        className="p-1 rounded hover:bg-rose-500/20 text-brand-muted hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-brand-text group-hover:text-brand-accent transition-colors tracking-tight line-clamp-2 mb-2">
                  {item.title}
                </h3>

                <p className="text-brand-subtext text-xs font-light leading-relaxed line-clamp-2 mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/40 flex items-center justify-between text-xs font-mono">
                <span className="text-brand-accent group-hover:text-white flex items-center gap-1 font-medium text-[11px]">
                  <span>{t.viewDetail}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>

                {item.time && (
                  <span className="text-brand-muted text-[10px]">
                    {item.time}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {sortedUpdates.length === 0 && (
          <div className="py-12 text-center text-brand-muted font-mono text-xs">
            {t.empty}
          </div>
        )}
      </div>

      {/* Add New Post Modal */}
      {isAddModalOpen && (
        <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-bg/85 backdrop-blur-md animate-fade-in">
          <div
            data-scrollable="true"
            className="relative w-full max-w-lg bg-brand-secondary border border-brand-border rounded-2xl p-6 sm:p-7 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setIsAddModalOpen(false)}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-xl bg-brand-elevated border border-brand-border text-brand-subtext hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                {lang === 'VI' ? 'BẢNG ĐIỀU KHIỂN QUẢN TRỊ VIÊN' : 'ADMIN DISPATCH CONTROL'}
              </span>
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-text mb-5">
              {t.modalTitle}
            </h3>

            <form onSubmit={handleCreatePost} className="space-y-3.5 text-xs font-mono">
              <div>
                <label className="block text-brand-subtext mb-1 uppercase">{t.formTitle}</label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'VI' ? 'Nhập tiêu đề...' : 'Enter title...'}
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-brand-elevated border border-brand-border text-brand-text text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-brand-subtext mb-1 uppercase">{t.formTag}</label>
                  <select
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value as UpdateTag)}
                    className="w-full px-3 py-2 rounded-xl bg-brand-elevated border border-brand-border text-brand-text font-mono"
                  >
                    <option value="ANNOUNCEMENT">ANNOUNCEMENT</option>
                    <option value="NEW VIDEO">NEW VIDEO</option>
                    <option value="DEVLOG">DEVLOG</option>
                    <option value="COMMUNITY">COMMUNITY</option>
                    <option value="PATCH NOTES">PATCH NOTES</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 pt-5">
                  <label className="flex items-center gap-2 cursor-pointer text-brand-text">
                    <input
                      type="checkbox"
                      checked={isPinned}
                      onChange={(e) => setIsPinned(e.target.checked)}
                      className="w-4 h-4 rounded bg-brand-elevated border-brand-border text-brand-accent"
                    />
                    <span>{t.formPin}</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-brand-subtext mb-1 uppercase">{t.formSummary}</label>
                <textarea
                  required
                  rows={2}
                  placeholder={lang === 'VI' ? 'Tóm tắt ngắn...' : 'Brief summary...'}
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-brand-elevated border border-brand-border text-brand-text text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>

              <div>
                <label className="block text-brand-subtext mb-1 uppercase">{t.formContent}</label>
                <textarea
                  rows={2}
                  placeholder={lang === 'VI' ? 'Nội dung chi tiết...' : 'Detailed body...'}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-brand-elevated border border-brand-border text-brand-text text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-brand-subtext mb-1 uppercase">{t.formLink}</label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={newLink}
                    onChange={(e) => setNewLink(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-brand-elevated border border-brand-border text-brand-text"
                  />
                </div>
                <div>
                  <label className="block text-brand-subtext mb-1 uppercase">{t.formLinkText}</label>
                  <input
                    type="text"
                    placeholder={lang === 'VI' ? 'Chữ trên nút...' : 'Button label...'}
                    value={newLinkText}
                    onChange={(e) => setNewLinkText(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-brand-elevated border border-brand-border text-brand-text"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-brand-elevated border border-brand-border text-brand-subtext hover:text-white transition-colors"
                >
                  {t.cancel}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold transition-colors shadow-md"
                >
                  {t.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
})

UpdateBoard.displayName = 'UpdateBoard'
