import React, { useState, useEffect, useMemo, memo } from 'react'
import { createPortal } from 'react-dom'
import { UpdateItem, UpdateTag } from '../types/content'
import { INITIAL_UPDATES } from '../data/updatesData'
import { Language, TRANSLATIONS } from '../data/translations'
import { SectionHeading } from './SectionHeading'
import { Pin, ArrowUpRight, Plus, X, Search, Calendar, ShieldCheck, Trash2, Sparkles, Wand2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import { useRiotDataDragon } from '../hooks/useRiotDataDragon'

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
  const [isRealtimeConnected, setIsRealtimeConnected] = useState<boolean>(false)

  const t = TRANSLATIONS[lang].board
  const riotData = useRiotDataDragon()

  // Form states
  const [newTitle, setNewTitle] = useState('')
  const [newTag, setNewTag] = useState<UpdateTag>('ANNOUNCEMENT')
  const [newSummary, setNewSummary] = useState('')
  const [newContent, setNewContent] = useState('')
  const [newLink, setNewLink] = useState('')
  const [newLinkText, setNewLinkText] = useState('')
  const [isPinned, setIsPinned] = useState(false)
  const [isAiGenerating, setIsAiGenerating] = useState(false)

  const handleAiGenerate = (topic: 'tft' | 'lol' | 'fco' | 'pubgm') => {
    setIsAiGenerating(true)
    setTimeout(() => {
      const patch = riotData.patchLabel || 'Patch 16.22'
      if (topic === 'tft') {
        setNewTag('PATCH NOTES')
        setIsPinned(true)
        setNewTitle(`Phân Tích Meta ĐTCL ${patch}: Top 3 Đội Hình Fast-8 Leo Thách Đấu`)
        setNewSummary(`Tổng hợp phân tích chuyên sâu các bài đấu hot nhất bản ${patch}. Lõi công nghệ tối ưu và trang bị chuẩn (BiS) giúp đảm bảo tỷ lệ vào Top 4 trên 65%.`)
        setNewContent(`### 📊 TỔNG QUAN META ĐTCL (${patch})
Bản cập nhật ${patch} chứng kiến sự dịch chuyển mạnh mẽ của nhịp độ trận đấu (Lobby Tempo). Chiến thuật Fast-8 đang chiếm ưu thế vượt trội so với lối chơi Slow Roll cấp 6-7.

---

### 🔥 3 ĐỘI HÌNH ĐẠT TỶ LỆ VÀO TOP CAO NHẤT

#### 1. Đội hình Bắn Tỉa Chủ Lực (Tỷ lệ Top 4: 68.2%)
- **Chủ lực (Carries):** Caitlyn (4 vàng) + Đấu Sĩ / Đỡ đòn tuyến trước (Vi / Loris 2 sao).
- **Trang bị trấn phái (BiS):**
  - *Caitlyn:* Vô Cực Kiếm, Cung Xanh, Ngọn Giáo Shojin.
  - *Dàn Chắn:* Giáp Máu Warmog, Thú Tượng Thạch Giáp, Trái Tim Kiên Định.
- **Chiến thuật vận hành:** Tích 50 vàng sớm từ Round 2-1, giữ máu bằng form 3 Tướng giữ đồ. Lên cấp 8 ở vòng 4-2, xả tiền roll kiếm chủ lực 2 sao hoàn thiện form.

#### 2. Đội hình Phép Thuật Kiểm Soát & Sát Thương Diện Rộng
- Tận dụng bùa lợi SMPT cộng dồn từ sớm, kích hoạt hệ Khống chế diện rộng.
- **Trang bị chuẩn:** Bùa Xanh, Quỷ Thư Morello, Mũ Phù Thủy Rabadon.

---

### 💡 MẸO TỐI ƯU KINH TẾ TỪ CƯỜNG NGUYỄN (EDWARD)
- Đừng ngần ngại lắp trang bị sớm ngay từ vòng 2-1 nếu có đồ chuẩn để giữ chuỗi thắng.
- Luôn quan sát sàn đấu đối phương trước 5 giây cuối mỗi vòng đấu để xếp dàn chắn lệch hướng kỹ năng sốc sát thương.`)
        setNewLink('/gaming')
        setNewLinkText(lang === 'VI' ? 'Xem cẩm nang ĐTCL' : 'View TFT Playbook')
      } else if (topic === 'lol') {
        setNewTag('PATCH NOTES')
        setIsPinned(true)
        setNewTitle(`Chi Tiết Cập Nhật LMHT ${patch}: Xạ Thủ & Pháp Sư Kiểm Soát Lên Ngôi`)
        setNewSummary(`Bản cập nhật LMHT ${patch} mang đến hàng loạt tinh chỉnh sức mạnh quan trọng cho tướng đường dưới và phép bổ trợ giao tranh mục tiêu lớn.`)
        setNewContent(`### ⚔️ TIÊU ĐIỂM BẢN CẬP NHẬT LMHT (${patch})
Hệ thống Riot Games Data Dragon đã chính thức cập nhật dữ liệu phiên bản ${patch} (v${riotData.patchVersion}). Đây là bản cập nhật định hình lối chơi giao tranh quanh hang Rồng và Sâu Hư Không.

---

### 🌟 DANH SÁCH TƯỚNG META HOTTEST (TIER S+)
1. **Xạ Thủ (Bot Lane):** Caitlyn & Jinx tiếp tục dẫn đầu tỷ lệ chọn với khả năng xả sát thương tầm xa cực kỳ an toàn.
2. **Đường Giữa (Mid Lane):** Ahri & Viktor với khả năng kiểm soát thế lính và dọn đợt lính (Wave Clear) siêu tốc.
3. **Đường Trên (Top Lane):** Aatrox & Ambessa thống trị các pha combat tổng nhờ lượng hút máu và mở giao tranh đột biến.

---

### 🎯 CHIẾN THUẬT MACRO THEN CHỐT
- **Kiểm soát thế lính (Wave Management):** Áp dụng thế Slow Push trước thời điểm Sâu Hư Không hoặc Rồng xuất hiện 45 giây để ép đối thủ phải lựa chọn giữa lính và mục tiêu.
- **Tầm nhìn sâu:** Cắm mắt kiểm soát tại ngã ba sông rừng đối phương để phát hiện sớm các hướng gank của rừng địch.`)
        setNewLink('/gaming')
        setNewLinkText(lang === 'VI' ? 'Xem cài đặt Pro LMHT' : 'View LoL Pro Settings')
      } else if (topic === 'fco') {
        setNewTag('COMMUNITY')
        setIsPinned(false)
        setNewTitle('FC Online: Hướng Dẫn Sơ Đồ 4-2-3-1 & Kỹ Thuật ZD Chuẩn Pro Player')
        setNewSummary('Phân tích chi tiết cách vận hành sơ đồ 4-2-3-1 cân bằng công thủ toàn diện, mẹo sút xoáy ZD góc hẹp và cách chọn thẻ mùa quốc dân.')
        setNewContent(`### ⚽ PHÂN TÍCH CHIẾN THUẬT FC ONLINE MÙA GIẢI MỚI
Sơ đồ 4-2-3-1 tiếp tục chứng minh vị thế "vua chiến thuật" trong chế độ Xếp Hạng 1vs1 Giả Lập & Bàn Phím.

---

### 📋 THIẾT LẬP CHIẾN THUẬT ĐỘI HÌNH (TACTICS SETUP)
- **Lối chơi:** Tốc độ 65, Chuyền 45 (Kiểm soát nhịp độ, cự ly đội hình hẹp).
- **Tấn công:** Chuyền 70, Tạt bóng 45, Sút 75 (Tạo nhiều khoảng trống trước vòng cấm).
- **Phòng thủ:** Gây áp lực 45, Quyết liệt 50, Biên độ 40 (Bọc lót chắc chắn, chống phản công chọc khe W).

---

### 👟 KỸ THUẬT SÚT XOÁY ZD & PHÒNG NGỰ C
- Nhả nút chạy nhanh (E) trước khi bấm Z+D để cầu thủ lấy đà chuẩn xác.
- Khi phòng ngự, giữ C để đối mặt và giữ vị trí, hạn chế lao vào xoạc bóng tạo lỗ hổng cho đối thủ chọc khe.`)
        setNewLink('/gaming')
        setNewLinkText(lang === 'VI' ? 'Xem chiến thuật FC Online' : 'View FC Online Tactics')
      } else if (topic === 'pubgm') {
        setNewTag('COMMUNITY')
        setIsPinned(false)
        setNewTitle('PUBG Mobile: Thông Số Độ Nhạy Con Quay (Gyroscope) Sấy M416 X3 Chuẩn Thi Đấu')
        setNewSummary('Chia sẻ bảng mã code độ nhạy Gyroscope sấy không giật từ Gaming with meee, mẹo ghìm tâm cự ly 100m+ và cách cài đặt nút 4 ngón linh hoạt.')
        setNewContent(`### 🎯 HƯỚNG DẪN CÀI ĐẶT ĐỘ NHẠY CON QUAY (GYROSCOPE)
Độ nhạy con quay chuẩn giúp bạn làm chủ đường đạn khi sấy M416 x3 hoặc x4 ở cự ly trên 100 mét mà tâm không bị rung lắc.

---

### ⚙️ THÔNG SỐ ĐỘ NHẠY ĐỀ XUẤT (GYROSCOPE SENSITIVITY)
- **Góc nhìn thứ 3 (Không ngắm):** 300% - 350%
- **Red Dot / Holographic / Thước ngắm phụ:** 320%
- **Ống ngắm 2x:** 300%
- **Ống ngắm 3x (Chuẩn M416):** 240% - 260%
- **Ống ngắm 4x:** 190% - 210%
- **Ống ngắm 6x (Kéo về 3x):** 160% - 180%

---

### 💡 MẸO SẤY ỔN ĐỊNH CỦA GAMING WITH MEEE
1. Luôn ngồi xuống (Crouch) trước khi mở sấy để giảm 30% độ giật ban đầu của súng.
2. Lắp Phụ kiện: Báng súng M416 + Nòng giảm giật (Compensator) + Tay cầm tam giác góc (Angled Grip) để giảm độ giật ngang tối đa.`)
        setNewLink('/gaming')
        setNewLinkText(lang === 'VI' ? 'Xem cẩm nang PUBG Mobile' : 'View PUBG Mobile Guide')
      }
      setIsAiGenerating(false)
    }, 350)
  }

  // Fetch live updates & subscribe to Supabase Realtime WebSocket changes
  useEffect(() => {
    let isSubscribed = true

    const fetchCloudUpdates = async () => {
      try {
        const { data, error } = await supabase
          .from('updates')
          .select('*')
          .order('pinned', { ascending: false })
          .order('created_at', { ascending: false })

        if (!error && data && data.length > 0 && isSubscribed) {
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
      } catch (err) {
        console.warn('[UPDATE BOARD] Cloud fetch fallback:', err)
      }
    }

    fetchCloudUpdates()

    // Realtime Postgres Changes Subscription
    const channel = supabase
      .channel('realtime:updates')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'updates' },
        (payload: any) => {
          console.log('[SUPABASE REALTIME] Updates event received:', payload.eventType, payload)
          if (payload.eventType === 'INSERT') {
            const d = payload.new
            const newPost: UpdateItem = {
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
            }
            setUpdates((prev) => {
              if (prev.some((p) => p.id === newPost.id)) return prev
              return [newPost, ...prev]
            })
          } else if (payload.eventType === 'DELETE') {
            const deletedId = payload.old?.id
            if (deletedId) {
              setUpdates((prev) => prev.filter((p) => p.id !== deletedId))
            }
          } else if (payload.eventType === 'UPDATE') {
            const d = payload.new
            setUpdates((prev) =>
              prev.map((p) =>
                p.id === d.id
                  ? {
                      ...p,
                      date: d.date,
                      time: d.time,
                      tag: d.tag,
                      title: d.title,
                      summary: d.summary,
                      content: d.content,
                      pinned: Boolean(d.pinned),
                      link: d.link || undefined,
                      linkText: d.link_text || undefined,
                      author: d.author || p.author
                    }
                  : p
              )
            )
          }
        }
      )
      .subscribe((status) => {
        if (isSubscribed) {
          setIsRealtimeConnected(status === 'SUBSCRIBED')
        }
      })

    return () => {
      isSubscribed = false
      supabase.removeChannel(channel)
    }
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
    <section id="board" className="h-full w-full flex flex-col justify-center relative overflow-hidden pt-16 pb-8 bg-brand-secondary/30">
      <div className="max-w-content mx-auto px-5 sm:px-8 w-full my-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <SectionHeading
            number={t.number}
            tag={t.tag}
            title={t.title}
            subtitle={t.subtitle}
          />

          <div className="flex flex-wrap items-center gap-3">
            {/* Realtime Live Status Indicator */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[11px] font-mono font-semibold transition-all shadow-sm ${
                isRealtimeConnected
                  ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-400 shadow-emerald-950/30'
                  : 'bg-brand-elevated border-brand-border text-brand-muted'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isRealtimeConnected ? 'bg-emerald-400 animate-pulse' : 'bg-brand-muted'
                }`}
              />
              <span>
                {isRealtimeConnected
                  ? (lang === 'VI' ? 'REALTIME // ĐÃ KẾT NỐI' : 'REALTIME // CONNECTED')
                  : (lang === 'VI' ? 'REALTIME // ĐANG ĐỒNG BỘ' : 'REALTIME // SYNCING')}
              </span>
            </div>

            <button
              onClick={handleOpenAddModal}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md focus:outline-none focus-visible:ring-2 ${
                isAdmin
                  ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-amber-500/20 focus-visible:ring-amber-400'
                  : 'bg-brand-accent hover:bg-brand-accent-hover text-white shadow-brand-accent/20 focus-visible:ring-brand-accent'
              }`}
            >
              {isAdmin ? <ShieldCheck className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              <span>{isAdmin ? (lang === 'VI' ? 'SOẠN BÀI (ADMIN)' : 'NEW POST (ADMIN)') : t.addBtn}</span>
            </button>
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
      {isAddModalOpen && createPortal(
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
                {isAdmin
                  ? (lang === 'VI' ? 'BẢNG ĐIỀU KHIỂN QUẢN TRỊ VIÊN' : 'ADMIN DISPATCH CONTROL')
                  : (lang === 'VI' ? 'ĐĂNG THÔNG BÁO MỚI' : 'POST NEW UPDATE')}
              </span>
            </div>

            {!isAdmin && onRequireLogin && (
              <div className="flex items-center justify-between gap-2 p-2.5 mb-3 rounded-xl bg-brand-elevated border border-brand-border text-xs font-mono">
                <span className="text-brand-subtext text-[11px]">
                  {lang === 'VI' ? '💡 Đang ở chế độ khách.' : '💡 Guest dispatch mode.'}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddModalOpen(false)
                    onRequireLogin()
                  }}
                  className="text-brand-accent hover:underline text-[11px] font-bold"
                >
                  {lang === 'VI' ? 'Đăng nhập Admin →' : 'Sign in as Admin →'}
                </button>
              </div>
            )}

            <div className="flex items-center justify-between gap-3 mb-4">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-text">
                {t.modalTitle}
              </h3>
            </div>

            {/* AI AUTO-GENERATE ASSISTANT BAR */}
            <div className="p-3.5 mb-5 rounded-2xl bg-gradient-to-r from-purple-950/60 via-brand-elevated to-cyan-950/60 border border-purple-500/30 shadow-lg">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono font-bold text-purple-300 flex items-center gap-1.5 uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'VI' ? 'AI Tự Động Viết Bài Chuyên Sâu (1-Click)' : 'AI Auto-Generate Article (1-Click)'}</span>
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold">
                  LIVE META SYNC
                </span>
              </div>
              <p className="text-[11px] text-brand-subtext font-light mb-3 leading-relaxed">
                {lang === 'VI'
                  ? 'Bấm vào 1 chủ đề dưới đây để AI tự động soạn bài phân tích, hướng dẫn trang bị & chiến thuật leo rank:'
                  : 'Click any game topic below to automatically generate full pro analysis with builds and tactics:'}
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled={isAiGenerating}
                  onClick={() => handleAiGenerate('tft')}
                  className="px-2.5 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-[10px] font-mono font-bold transition-all flex items-center gap-1 shadow-sm disabled:opacity-50"
                >
                  <Wand2 className="w-3 h-3" />
                  <span>🎲 ĐTCL Meta ({riotData.patchLabel})</span>
                </button>
                <button
                  type="button"
                  disabled={isAiGenerating}
                  onClick={() => handleAiGenerate('lol')}
                  className="px-2.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono font-bold transition-all flex items-center gap-1 shadow-sm disabled:opacity-50"
                >
                  <Wand2 className="w-3 h-3" />
                  <span>⚔️ LMHT Patch ({riotData.patchLabel})</span>
                </button>
                <button
                  type="button"
                  disabled={isAiGenerating}
                  onClick={() => handleAiGenerate('fco')}
                  className="px-2.5 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold transition-all flex items-center gap-1 shadow-sm disabled:opacity-50"
                >
                  <Wand2 className="w-3 h-3" />
                  <span>⚽ FC Online 4-2-3-1</span>
                </button>
                <button
                  type="button"
                  disabled={isAiGenerating}
                  onClick={() => handleAiGenerate('pubgm')}
                  className="px-2.5 py-1.5 rounded-xl bg-pink-500/15 hover:bg-pink-500/30 border border-pink-500/40 text-pink-300 text-[10px] font-mono font-bold transition-all flex items-center gap-1 shadow-sm disabled:opacity-50"
                >
                  <Wand2 className="w-3 h-3" />
                  <span>🎯 PUBG M. Gyro Ghìm Tâm</span>
                </button>
              </div>
            </div>

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
        </div>,
        document.body
      )}
    </section>
  )
})

UpdateBoard.displayName = 'UpdateBoard'
