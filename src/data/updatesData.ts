import { UpdateItem } from '../types/content'

export const INITIAL_UPDATES: UpdateItem[] = [
  {
    id: "up-1",
    date: "01.11.2026",
    time: "22:30",
    tag: "ANNOUNCEMENT",
    title: "Official Launch: Gaming with meee Design System & Web Hub",
    summary: "Ra mắt chính thức nền tảng web cá nhân Gaming with meee under NMC Corp với giao diện Editorial công nghệ hiện đại.",
    content: "Chào mừng các bạn đến với Gaming with meee! Nền tảng chính thức mở ra không gian chia sẻ chuyên sâu về Gaming, Trí tuệ nhân tạo (AI), công nghệ tương tác và văn hóa số. Mọi cập nhật lịch stream, video mới và dự án thử nghiệm sẽ được đăng tải trực tiếp tại bảng tin này.",
    pinned: true,
    link: "https://www.facebook.com/GamingNMC.Official/",
    linkText: "Theo dõi Facebook",
    author: "Mr. Cuong (Edward)"
  },
  {
    id: "up-2",
    date: "28.10.2026",
    time: "19:00",
    tag: "NEW VIDEO",
    title: "Reel Khởi động: Series Khám phá Kỹ thuật Đồ họa Trò chơi 2026",
    summary: "Video intro 1:1 và tập đầu tiên phân tích engine procedural thế hệ mới đã chính thức lên sóng trên TikTok và Facebook.",
    content: "Đón xem clip phân tích ngắn giải mã cách các studio tối ưu khung hình và áp dụng AI render pass trực tiếp trong game thực tế.",
    pinned: false,
    link: "https://www.tiktok.com/@_gamingwithmeee",
    linkText: "Xem trên TikTok",
    author: "Gaming with meee Team"
  },
  {
    id: "up-3",
    date: "20.10.2026",
    time: "15:45",
    tag: "DEVLOG",
    title: "MUSE-01: Thử nghiệm tương tác NPC thông minh thời gian thực",
    summary: "Hoàn tất giai đoạn prototype đầu tiên của agent đối thoại tự sinh trong môi trường gameplay sandbox.",
    content: "Mô hình xử lý cục bộ với độ trễ dưới 80ms, mở ra tiềm năng tạo các nhiệm vụ tương tác không giới hạn kịch bản cố định.",
    pinned: false,
    author: "NMC Lab"
  },
  {
    id: "up-4",
    date: "05.11.2026",
    time: "10:00",
    tag: "ANNOUNCEMENT",
    title: "Mở kho đề luyện thi Professional Scrum Master I (PSM I) chuẩn quốc tế",
    summary: "Hệ thống thi thử PSM I với 100+ câu hỏi song ngữ Anh-Việt, chế độ mô phỏng áp lực thời gian thực 60 phút và giải thích chi tiết theo Scrum Guide.",
    content: "Gaming with meee Academy chính thức ra mắt bộ công cụ luyện thi Professional Scrum Master I (PSM I). Bộ đề được thiết kế chuẩn Scrum Guide mới nhất, gồm các câu hỏi tình huống thực tế về Scrum Framework, Vai trò Scrum Master, Product Owner, Sprint Planning và Daily Scrum. Đạt tỷ lệ đúng trên 85% để nhận chứng chỉ số GWM Academy.",
    pinned: false,
    link: "#academy",
    linkText: "Luyện thi PSM I ngay",
    author: "GWM Academy"
  }
]
