export type Language = 'VI' | 'EN'

export const TRANSLATIONS = {
  VI: {
    nav: {
      gaming: 'GAMING HUB',
      about: 'GIỚI THIỆU',
      connect: 'LIÊN HỆ',
      academy: 'ACADEMY',
      store: 'STORE',
      parentBrand: 'THƯƠNG HIỆU SÁNG TẠO BỞI NMC CORP'
    },
    hero: {
      tagline: 'PLAY. EXPLORE. CREATE.',
      headline1: 'WELCOME',
      headline2: 'TO MY',
      headline3: 'WORLD.',
      subheadPrefix: 'Thương hiệu sáng tạo bởi',
      subheadMid: 'khám phá',
      subheadSuffix: 'Gaming, Công nghệ & Trí tuệ nhân tạo (AI).',
      btnExplore: 'GAMING HUB',
      btnBoard: 'THI THỬ ACADEMY',
      audioOn: 'ÂM THANH: BẬT',
      audioOff: 'ÂM THANH: TẮT'
    },
    stories: {
      number: '02',
      tag: 'BÀI VIẾT ĐẶC SẮC',
      title: 'BÀI VIẾT & TIỂU LUẬN',
      subtitle: 'Góc nhìn công nghệ, đồ họa game và xu hướng nội dung tương tác mới.',
      filter: 'LỌC:',
      all: 'TẤT CẢ',
      readStory: 'ĐỌC BÀI VIẾT',
      readTime: 'phút đọc',
      badge: 'Đặc sắc',
      bookmark: 'LƯU BÀI',
      share: 'CHIA SẺ',
      bookmarkedNotice: 'Đã lưu bài viết vào danh sách yêu thích!',
      copiedNotice: 'Đã sao chép liên kết bài viết!'
    },
    board: {
      number: '03',
      tag: 'BULLETIN // THÔNG BÁO',
      title: 'BẢNG TIN CẬP NHẬT',
      subtitle: 'Tin tức, thông báo chính thức, video mới và tiến độ dự án từ Gaming with meee.',
      addBtn: 'ĐĂNG THÔNG BÁO MỚI',
      searchPlaceholder: 'Tìm kiếm thông báo...',
      pinned: 'GHIM',
      viewDetail: 'XEM CHI TIẾT',
      share: 'CHIA SẺ',
      empty: 'Không tìm thấy thông báo phù hợp với từ khóa.',
      modalTitle: 'Đăng thông báo mới',
      formTitle: 'Tiêu đề thông báo *',
      formTag: 'Danh mục tag',
      formPin: 'Ghim lên đầu bảng tin',
      formSummary: 'Tóm tắt ngắn (1-2 câu) *',
      formContent: 'Nội dung chi tiết (Tùy chọn)',
      formLink: 'Liên kết đính kèm (Tùy chọn)',
      formLinkText: 'Chữ trên nút liên kết (Tùy chọn)',
      cancel: 'HỦY',
      submit: 'XÁC NHẬN ĐĂNG'
    },
    explore: {
      number: '00',
      tag: 'CHUYÊN MỤC',
      title: 'KHÁM PHÁ NỘI DUNG',
      subtitle: 'Ba trục nội dung sáng tạo dẫn dắt hành trình của chúng tôi.',
      dispatches: 'BÀI VIẾT',
      exploreDomain: 'KHÁM PHÁ CHUYÊN MỤC'
    },
    about: {
      number: '02',
      tag: 'THƯƠNG HIỆU',
      title: 'VỀ GAMING WITH MEEE',
      subtitle: 'Thương hiệu giải trí sáng tạo cá nhân tiên phong khám phá thế giới số.',
      quote: '"Chúng tôi không chỉ trải nghiệm văn hóa số — chúng tôi mổ xẻ cơ chế và tái tạo những điều thú vị."',
      pillarPlay: 'CHƠI',
      pillarPlayDesc: 'Khám phá thế giới ảo và cơ chế gameplay.',
      pillarExplore: 'KHÁM PHÁ',
      pillarExploreDesc: 'Nghiên cứu mô hình AI và công nghệ mới.',
      pillarCreate: 'SÁNG TẠO',
      pillarCreateDesc: 'Video điện ảnh, công cụ và nguyên mẫu mã nguồn mở.'
    },
    academy: {
      number: '03',
      tag: 'HỌC TẬP // CHỨNG CHỈ',
      title: 'NMC ACADEMY // THI THỬ',
      subtitle: 'Nền tảng đề thi thử chứng chỉ chuyên nghiệp Scrum Master (PSM I) & Federal Reserve (CCAR-F).',
      startBtn: 'VÀO THI NGAY',
      reviewBtn: 'XEM KẾT QUẢ',
      historyTitle: 'LỊCH SỬ THI'
    },
    playground: {
      number: '04',
      tag: 'GAMING & ESPORTS',
      title: 'GAMING HUB // PLAYGROUND',
      subtitle: 'Tâm điểm chiến thuật & cẩm nang leo rank: Đấu Trường Chân Lý, LMHT, FC Online & PUBG Mobile.',
      launch: 'Mở Cẩm Nang',
      running: 'ĐANG NẠP DỮ LIỆU META... 100% HOÀN TẤT'
    },
    store: {
      number: '05',
      tag: 'CỬA HÀNG // SẢN PHẨM',
      title: 'NMC STORE // CYBER SHOP',
      subtitle: 'Phụ kiện gaming cao cấp, tài liệu ôn thi độc quyền và sản phẩm số tuyển chọn từ NMC Corp.',
      buyNow: 'XEM CHI TIẾT',
      inStock: 'CÒN HÀNG',
      outOfStock: 'HẾT HÀNG'
    },
    connect: {
      number: '06',
      tag: 'KẾT NỐI',
      title: 'KÊNH LIÊN HỆ & MẠNG XÃ HỘI',
      subtitle: 'Theo dõi dispatches trên mạng xã hội hoặc liên hệ trực tiếp cho dự án hợp tác.',
      contactPerson: 'NGƯỜI ĐẠI DIỆN',
      callNow: 'GỌI NGAY',
      visit: 'TRUY CẬP',
      sendMail: 'GỬI EMAIL'
    },
    footer: {
      tagline: 'PLAY. EXPLORE. CREATE.',
      desc: 'Khám phá Gaming, Công nghệ & Trí tuệ nhân tạo AI.',
      contact: 'LIÊN HỆ',
      backToTop: 'LÊN ĐẦU TRANG',
      rights: 'Bảo lưu mọi quyền.',
      crafted: 'Thương hiệu sáng tạo bởi NMC Corp'
    },
    dots: {
      home: '01. HOME',
      about: '02. GIỚI THIỆU',
      academy: '03. ACADEMY',
      gaming: '04. GAMING HUB',
      store: '05. STORE',
      connect: '06. LIÊN HỆ'
    }
  },
  EN: {
    nav: {
      gaming: 'GAMING HUB',
      about: 'ABOUT',
      connect: 'CONNECT',
      academy: 'ACADEMY',
      store: 'STORE',
      parentBrand: 'A CREATIVE BRAND BY NMC CORP'
    },
    hero: {
      tagline: 'PLAY. EXPLORE. CREATE.',
      headline1: 'WELCOME',
      headline2: 'TO MY',
      headline3: 'WORLD.',
      subheadPrefix: 'A creative brand by',
      subheadMid: 'exploring',
      subheadSuffix: 'Gaming, Technology & AI.',
      btnExplore: 'GAMING HUB',
      btnBoard: 'ACADEMY EXAMS',
      audioOn: 'AUDIO: ON',
      audioOff: 'AUDIO: OFF'
    },
    stories: {
      number: '02',
      tag: 'CURATED EDITORIAL',
      title: 'FEATURED STORIES & ESSAYS',
      subtitle: 'Digital dispatches on competitive gaming, algorithmic models, and interactive entertainment.',
      filter: 'FILTER:',
      all: 'ALL',
      readStory: 'READ STORY',
      readTime: 'min read',
      badge: 'Featured',
      bookmark: 'BOOKMARK',
      share: 'SHARE',
      bookmarkedNotice: 'Story saved to bookmarks!',
      copiedNotice: 'Story link copied to clipboard!'
    },
    board: {
      number: '03',
      tag: 'BULLETIN // DISPATCH',
      title: 'LIVE BULLETIN BOARD',
      subtitle: 'Official announcements, new videos, devlogs and updates from Gaming with meee.',
      addBtn: 'POST NEW UPDATE',
      searchPlaceholder: 'Search updates...',
      pinned: 'PINNED',
      viewDetail: 'VIEW DETAILS',
      share: 'SHARE',
      empty: 'No updates found matching your search.',
      modalTitle: 'Post New Update',
      formTitle: 'Update Title *',
      formTag: 'Tag Category',
      formPin: 'Pin to top of board',
      formSummary: 'Short Summary (1-2 sentences) *',
      formContent: 'Detailed Content (Optional)',
      formLink: 'Attached Link (Optional)',
      formLinkText: 'Button Text (Optional)',
      cancel: 'CANCEL',
      submit: 'CONFIRM POST'
    },
    explore: {
      number: '00',
      tag: 'DOMAINS',
      title: 'EXPLORE DOMAINS',
      subtitle: 'Three primary creative axes guiding our videos, breakdowns, and experiments.',
      dispatches: 'DISPATCHES',
      exploreDomain: 'EXPLORE DOMAIN'
    },
    about: {
      number: '02',
      tag: 'BRAND',
      title: 'ABOUT GAMING WITH MEEE',
      subtitle: 'A personal creative entertainment brand exploring the digital frontier.',
      quote: '"We don\'t just consume digital culture — we disassemble the machinery and rebuild something unforgettable."',
      pillarPlay: 'PLAY',
      pillarPlayDesc: 'Immersive gameplay and mechanics breakdowns.',
      pillarExplore: 'EXPLORE',
      pillarExploreDesc: 'Synthetic AI models and emerging tech.',
      pillarCreate: 'CREATE',
      pillarCreateDesc: 'Cinematic reels, custom tools, and open prototypes.'
    },
    academy: {
      number: '03',
      tag: 'LEARNING // EXAMS',
      title: 'NMC ACADEMY // MOCK EXAMS',
      subtitle: 'Official-standard certification simulators: Professional Scrum Master (PSM I) & Federal Reserve CCAR.',
      startBtn: 'START EXAM',
      reviewBtn: 'VIEW RESULTS',
      historyTitle: 'ATTEMPT HISTORY'
    },
    playground: {
      number: '04',
      tag: 'GAMING & ESPORTS',
      title: 'GAMING HUB // PLAYGROUND',
      subtitle: 'Tactical compendium & ranked meta: Teamfight Tactics, League of Legends, FC Online & PUBG Mobile.',
      launch: 'Launch Guide',
      running: 'LOADING META INTEL... 100% COMPLETE'
    },
    store: {
      number: '05',
      tag: 'STORE // PRODUCTS',
      title: 'NMC STORE // CYBER SHOP',
      subtitle: 'Curated mechanical keyboard keycaps, comprehensive exam kits, and precision gaming accessories.',
      buyNow: 'VIEW DETAILS',
      inStock: 'IN STOCK',
      outOfStock: 'OUT OF STOCK'
    },
    connect: {
      number: '06',
      tag: 'CONTACT',
      title: 'CONNECT & CHANNELS',
      subtitle: 'Follow our dispatches across social platforms or reach out directly for collaborations.',
      contactPerson: 'CONTACT PERSON',
      callNow: 'CALL NOW',
      visit: 'VISIT',
      sendMail: 'SEND EMAIL'
    },
    footer: {
      tagline: 'PLAY. EXPLORE. CREATE.',
      desc: 'Exploring Gaming, Technology & AI.',
      contact: 'CONTACT',
      backToTop: 'BACK TO TOP',
      rights: 'All rights reserved.',
      crafted: 'A creative brand by NMC Corp'
    },
    dots: {
      home: '01. HOME',
      about: '02. ABOUT',
      academy: '03. ACADEMY',
      gaming: '04. GAMING HUB',
      store: '05. STORE',
      connect: '06. CONNECT'
    }
  }
}

export const BILINGUAL_CONTENT = {
  VI: {
    categories: [
      {
        id: "gaming",
        name: "Gaming",
        tagline: "Gameplay & Cơ chế trò chơi",
        description: "Thế giới game thế hệ mới, phân tích cơ chế và chiều sâu trải nghiệm.",
        count: 12,
        accent: "#398BFF",
        iconName: "Gamepad2"
      },
      {
        id: "ai-technology",
        name: "AI & Công nghệ",
        tagline: "Biên giới Trí tuệ Nhân tạo",
        description: "Mô hình tạo sinh, công cụ sáng tạo và kỹ thuật số tiên tiến.",
        count: 16,
        accent: "#60A5FA",
        iconName: "Cpu"
      },
      {
        id: "entertainment",
        name: "Giải trí số",
        tagline: "Truyền thông & Văn hóa mạng",
        description: "Hình ảnh điện ảnh, thử nghiệm video và văn hóa sáng tạo mới.",
        count: 8,
        accent: "#38BDF8",
        iconName: "Sparkles"
      }
    ],
    stories: [
      {
        id: "story-1",
        title: "THẾ GIỚI PROCEDURAL: BÊN TRONG ENGINE GAME THẾ HỆ MỚI",
        subtitle: "Quy trình kết xuất đồ họa bằng Neural Network và lưới đa giác thời gian thực.",
        category: "Gaming",
        readTime: "4 phút",
        date: "2026",
        summary: "Cách thức tạo lập thế giới tự sinh (procedural generation) tái định hình toàn bộ thiết kế màn chơi.",
        featured: true,
        layoutSpan: "large",
        badge: "Đặc sắc"
      },
      {
        id: "story-2",
        title: "ĐẠO DIỄN NEURAL: SẢN XUẤT VIDEO ĐIỆN ẢNH VỚI AI",
        subtitle: "Kiểm soát góc máy quay và mô phỏng vật lý qua pipeline prompt đa phương thức.",
        category: "AI & Công nghệ",
        readTime: "3 phút",
        date: "2026",
        summary: "Quy trình đằng sau công nghệ tạo video khuếch tán và chuyển động nhân vật mạch lạc.",
        featured: true,
        layoutSpan: "medium",
        badge: "Công nghệ AI"
      },
      {
        id: "story-3",
        title: "AVATAR TỔNG HỢP & BỘ CÔNG CỤ STREAMER THẾ HỆ MỚI",
        subtitle: "Bắt chuyển động thời gian thực kết hợp trợ lý ảo tương tác tự động.",
        category: "Giải trí số",
        readTime: "3 phút",
        date: "2026",
        summary: "Công nghệ kết hợp motion capture độ trễ thấp với các agent thông minh phản hồi người xem.",
        featured: false,
        layoutSpan: "small"
      },
      {
        id: "story-4",
        title: "CƠ CHẾ CHIẾN ĐẤU & CẢM GIÁC ĐIỀU KHIỂN (GAME FEEL)",
        subtitle: "Độ trễ từng khung hình và tính toán vi mô đằng sau mỗi đòn đánh.",
        category: "Gaming",
        readTime: "4 phút",
        date: "2026",
        summary: "Kỹ thuật toán học vô hình tạo nên sự thỏa mãn xúc giác trong trò chơi điện tử.",
        featured: false,
        layoutSpan: "small"
      }
    ],
    playground: [
      {
        id: "play-tft",
        title: "TFT // Đấu Trường Chân Lý: Meta Tier List & Lõi Công Nghệ",
        category: "Game Chiến Thuật",
        tag: "TFT Meta",
        description: "Xếp hạng đội hình S-Tier, cách giữ chuỗi win/loss eco vàng và phân tích tối ưu nâng cấp Lõi Hextech.",
        status: "Live Meta",
        accentColor: "#398BFF",
        linkText: "Xem Đội Hình"
      },
      {
        id: "play-lol",
        title: "LOL // Liên Minh Huyền Thoại: Macro & Cẩm Nang Tướng",
        category: "MOBA Esports",
        tag: "LOL Macro",
        description: "Phân tích meta đường đơn, thời điểm roam, cắm mắt kiểm soát và chiến thuật giao tranh rồng/Baron.",
        status: "Sách Lược",
        accentColor: "#60A5FA",
        linkText: "Xem Cẩm Nang"
      },
      {
        id: "play-fco",
        title: "FC Online // Sơ Đồ Chiến Thuật 4-2-3-1 & Đội Hình Quốc Dân",
        category: "Bóng Đá Thể Thao",
        tag: "FC Online",
        description: "Thiết lập sơ đồ leo rank GLXH/1vs1, tối ưu ngân sách quỹ lương và bảng xếp hạng cầu thủ hiệu quả nhất.",
        status: "Chiến Thuật",
        accentColor: "#38BDF8",
        linkText: "Xem Sơ Đồ"
      },
      {
        id: "play-pubgm",
        title: "PUBG Mobile // Bảng Độ Nhạy Gyroscope & Kỹ Năng Sấy Bo",
        category: "Bắn Súng Sinh Tồn",
        tag: "PUBG Mobile",
        description: "Bộ thông số cảm biến con quay con lắc tối ưu cho từng scope (3x, 4x, 6x), kỹ thuật ghìm tâm và chọn vị trí bo cuối.",
        status: "Pro Config",
        accentColor: "#93C5FD",
        linkText: "Xem Cài Đặt"
      }
    ]
  },
  EN: {
    categories: [
      {
        id: "gaming",
        name: "Gaming",
        tagline: "Gameplay & Mechanics",
        description: "Next-gen game worlds, mechanics, and deep dives.",
        count: 12,
        accent: "#398BFF",
        iconName: "Gamepad2"
      },
      {
        id: "ai-technology",
        name: "AI & Technology",
        tagline: "Synthetic Frontiers",
        description: "Generative intelligence, tools, and digital craft.",
        count: 16,
        accent: "#60A5FA",
        iconName: "Cpu"
      },
      {
        id: "entertainment",
        name: "Entertainment",
        tagline: "Digital Media",
        description: "Cinematic visuals, experiments, and creative culture.",
        count: 8,
        accent: "#38BDF8",
        iconName: "Sparkles"
      }
    ],
    stories: [
      {
        id: "story-1",
        title: "PROCEDURAL WORLDS: INSIDE NEXT-GEN ENGINES",
        subtitle: "Real-time generative mesh and neural rendering pipelines.",
        category: "Gaming",
        readTime: "4 min",
        date: "2026",
        summary: "How procedural generation and neural render passes reshape interactive level design.",
        featured: true,
        layoutSpan: "large",
        badge: "Featured"
      },
      {
        id: "story-2",
        title: "NEURAL DIRECTORS: CINEMATIC AI VIDEO",
        subtitle: "Multimodal prompt control and physics synthesis.",
        category: "AI & Technology",
        readTime: "3 min",
        date: "2026",
        summary: "Workflows behind diffusion-driven camera control and coherent motion generation.",
        featured: true,
        layoutSpan: "medium",
        badge: "AI Tech"
      },
      {
        id: "story-3",
        title: "SYNTHETIC AVATARS & STREAM TECH",
        subtitle: "Real-time motion rigging meets reactive agents.",
        category: "Entertainment",
        readTime: "3 min",
        date: "2026",
        summary: "The creator stack blending low-latency motion capture with autonomous assistants.",
        featured: false,
        layoutSpan: "small"
      },
      {
        id: "story-4",
        title: "COMBAT MECHANICS & TACTILE POLISH",
        subtitle: "Micro-timings and game feel design.",
        category: "Gaming",
        readTime: "4 min",
        date: "2026",
        summary: "The invisible mathematical polish behind responsive gameplay.",
        featured: false,
        layoutSpan: "small"
      }
    ],
    playground: [
      {
        id: "play-tft",
        title: "TFT // Teamfight Tactics: Meta Tier List & Augment Guide",
        category: "Auto Battler",
        tag: "TFT Meta",
        description: "S-Tier team compositions, economic streak management, and hextech augment synergies.",
        status: "Live Meta",
        accentColor: "#398BFF",
        linkText: "View Comps"
      },
      {
        id: "play-lol",
        title: "LOL // League of Legends: Macro & Champion Mastery",
        category: "MOBA Esports",
        tag: "LOL Macro",
        description: "Lane priority, jungle tracking, wave control mechanics, and late-game teamfight execution.",
        status: "Playbook",
        accentColor: "#60A5FA",
        linkText: "View Playbook"
      },
      {
        id: "play-fco",
        title: "FC Online // Tactical Formations & Meta Squad Builder",
        category: "Sports Sim",
        tag: "FC Online",
        description: "Ranked 4-2-3-1 / 4-2-2-2 custom tactics, wage cap optimization, and meta player tier breakdown.",
        status: "Tactics",
        accentColor: "#38BDF8",
        linkText: "View Tactics"
      },
      {
        id: "play-pubgm",
        title: "PUBG Mobile // Gyroscope Calibration & Recoil Control",
        category: "Battle Royale",
        tag: "PUBG Mobile",
        description: "Calibrated gyroscope sensitivity curves per scope magnification (3x, 4x, 6x) and zone rotations.",
        status: "Pro Config",
        accentColor: "#93C5FD",
        linkText: "View Config"
      }
    ]
  }
}
