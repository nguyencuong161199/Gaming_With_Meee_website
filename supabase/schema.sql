-- ==============================================================================
-- Gaming with meee - Supabase Database Schema
-- Run this script in Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. BẢNG TIN TỨC / CẬP NHẬT (Updates Board)
CREATE TABLE IF NOT EXISTS public.updates (
    id TEXT PRIMARY KEY,
    date TEXT NOT NULL,
    time TEXT,
    tag TEXT NOT NULL DEFAULT 'ANNOUNCEMENT',
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    content TEXT,
    pinned BOOLEAN DEFAULT FALSE,
    link TEXT,
    link_text TEXT,
    author TEXT DEFAULT 'Gaming with meee',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Bật Row Level Security (RLS)
ALTER TABLE public.updates ENABLE ROW LEVEL SECURITY;

-- Cho phép tất cả mọi người đọc tin tức
CREATE POLICY "Allow public read on updates"
ON public.updates FOR SELECT USING (true);

-- Cho phép thêm mới tin tức
CREATE POLICY "Allow insert on updates"
ON public.updates FOR INSERT WITH CHECK (true);

-- Cho phép xóa tin tức
CREATE POLICY "Allow delete on updates"
ON public.updates FOR DELETE USING (true);

-- Dữ liệu ban đầu
INSERT INTO public.updates (id, date, time, tag, title, summary, content, pinned, link, link_text, author)
VALUES 
('up-1', '01.11.2026', '22:30', 'ANNOUNCEMENT', 'Official Launch: Gaming with meee Design System & Web Hub', 'Ra mắt chính thức nền tảng web cá nhân Gaming with meee under NMC Corp với giao diện Editorial công nghệ hiện đại.', 'Chào mừng các bạn đến với Gaming with meee! Nền tảng chính thức mở ra không gian chia sẻ chuyên sâu về Gaming, Trí tuệ nhân tạo (AI), công nghệ tương tác và văn hóa số. Mọi cập nhật lịch stream, video mới và dự án thử nghiệm sẽ được đăng tải trực tiếp tại bảng tin này.', true, 'https://www.facebook.com/GamingNMC.Official/', 'Theo dõi Facebook', 'Mr. Cuong (Edward)'),
('up-2', '28.10.2026', '19:00', 'NEW VIDEO', 'Reel Khởi động: Series Khám phá Kỹ thuật Đồ họa Trò chơi 2026', 'Video intro 1:1 và tập đầu tiên phân tích engine procedural thế hệ mới đã chính thức lên sóng trên TikTok và Facebook.', 'Đón xem clip phân tích ngắn giải mã cách các studio tối ưu khung hình và áp dụng AI render pass trực tiếp trong game thực tế.', false, 'https://www.tiktok.com/@_gamingwithmeee', 'Xem trên TikTok', 'Gaming with meee Team'),
('up-3', '20.10.2026', '15:45', 'DEVLOG', 'MUSE-01: Thử nghiệm tương tác NPC thông minh thời gian thực', 'Hoàn tất giai đoạn prototype đầu tiên của agent đối thoại tự sinh trong môi trường gameplay sandbox.', 'Mô hình xử lý cục bộ với độ trễ dưới 80ms, mở ra tiềm năng tạo các nhiệm vụ tương tác không giới hạn kịch bản cố định.', false, NULL, NULL, 'NMC Lab')
ON CONFLICT (id) DO NOTHING;

-- 2. BẢNG BÌNH LUẬN BÀI VIẾT (Article Comments)
CREATE TABLE IF NOT EXISTS public.comments (
    id TEXT PRIMARY KEY,
    article_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    user_name TEXT NOT NULL,
    user_avatar TEXT,
    user_role TEXT DEFAULT 'user',
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Bật Row Level Security (RLS)
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Cho phép tất cả mọi người đọc bình luận
CREATE POLICY "Allow public read on comments"
ON public.comments FOR SELECT USING (true);

-- Cho phép đăng bình luận
CREATE POLICY "Allow insert on comments"
ON public.comments FOR INSERT WITH CHECK (true);

-- Cho phép xóa bình luận
CREATE POLICY "Allow delete on comments"
ON public.comments FOR DELETE USING (true);
