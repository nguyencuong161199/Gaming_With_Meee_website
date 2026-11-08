export interface GameMetaComp {
  id: string
  name: string
  tier: 'S-TIER' | 'A-TIER' | 'B-TIER'
  playstyleVi: string
  playstyleEn: string
  coreUnits: string[]
  coreItemsOrTactics: string[]
  tipsVi: string
  tipsEn: string
}

export interface GameSettingItem {
  nameVi: string
  nameEn: string
  value: string
  noteVi: string
  noteEn: string
}

export interface GameGuideItem {
  id: string
  titleVi: string
  titleEn: string
  tag: string
  summaryVi: string
  summaryEn: string
  keyPointsVi: string[]
  keyPointsEn: string[]
}

export interface GameItem {
  id: 'tft' | 'lol' | 'fco' | 'pubgm'
  name: string
  nameVi: string
  nameEn: string
  shortName: string
  developer: string
  genreVi: string
  genreEn: string
  logo: string
  logoNeedsInvert?: boolean
  accentColor: string
  accentBorder: string
  glowColor: string
  taglineVi: string
  taglineEn: string
  descriptionVi: string
  descriptionEn: string
  featureBadges: {
    iconType: 'trophy' | 'sliders' | 'book'
    labelVi: string
    labelEn: string
  }[]
  tabTitles: {
    tab1Vi: string
    tab1En: string
    tab2Vi: string
    tab2En: string
    tab3Vi: string
    tab3En: string
  }
  patchVersion?: string
  unitLabelVi?: string
  unitLabelEn?: string
  itemsLabelVi?: string
  itemsLabelEn?: string
  compSectionTitleVi?: string
  compSectionTitleEn?: string
  metaComps: GameMetaComp[]
  settings: GameSettingItem[]
  guides: GameGuideItem[]
}

export const GAMING_DATA: GameItem[] = [
  {
    id: 'tft',
    name: 'Teamfight Tactics',
    nameVi: 'Đấu Trường Chân Lý (TFT)',
    nameEn: 'Teamfight Tactics (TFT)',
    shortName: 'TFT // ĐTCL LIVE META',
    developer: 'Riot Games',
    genreVi: 'Cờ Nhân Phẩm / Auto Battler',
    genreEn: 'Auto Battler / Strategy',
    logo: '/assets/games/tft.svg',
    logoNeedsInvert: false,
    accentColor: 'text-amber-400',
    accentBorder: 'hover:border-amber-500/80',
    glowColor: 'bg-amber-500/10',
    taglineVi: 'Meta Chiến Thuật Mới Nhất — Tối ưu Lõi Nâng Cấp & Chuỗi Thắng Fast 8',
    taglineEn: 'Live Ranked Meta — Optimal Augments, Fast-8 Tempo Curves & S-Tier Boards',
    descriptionVi:
      'Đấu Trường Chân Lý mùa giải hiện tại đòi hỏi tư duy quản trị tài chính nhạy bén, khả năng thích ứng linh hoạt với Lõi Nâng Cấp và xoay bài nhanh quanh các chủ lực 4-5 tiền theo nhịp độ trận đấu.',
    descriptionEn:
      'Teamfight Tactics demands razor-sharp economy milestones, adaptive augment synergy, and fast pivoting around 4-cost and 5-cost carries according to lobby tempo.',
    featureBadges: [
      { iconType: 'trophy', labelVi: 'Đội hình Meta S-Tier', labelEn: 'S-Tier Meta Comps' },
      { iconType: 'sliders', labelVi: 'Phím tắt Roll dưới 15s', labelEn: 'Sub-15s Roll Keybinds' },
      { iconType: 'book', labelVi: 'Quản trị Lợi tức 50 Vàng', labelEn: 'Compound Interest Eco' }
    ],
    tabTitles: {
      tab1Vi: 'ĐỘI HÌNH META S-TIER',
      tab1En: 'S-TIER META COMPS',
      tab2Vi: 'CÀI ĐẶT THAO TÁC ROLL',
      tab2En: 'PRO ROLL SETTINGS',
      tab3Vi: 'CẨM NANG KINH TẾ & LÕI',
      tab3En: 'ECONOMY & AUGMENT PLAYBOOK'
    },
    patchVersion: 'Patch Mới Nhất // Live Meta',
    unitLabelVi: 'Tướng & Tộc Hệ cốt lõi:',
    unitLabelEn: 'Core Champions & Synergies:',
    itemsLabelVi: 'Trang bị chuẩn (BiS) & Lõi Nâng Cấp:',
    itemsLabelEn: 'BiS Items & Hextech Augments:',
    compSectionTitleVi: '// CÁC ĐỘI HÌNH META HIỆN TẠI ĐẠT TỶ LỆ THẮNG CAO NHẤT',
    compSectionTitleEn: '// HIGHEST WIN-RATE LIVE META TEAM COMPS',
    metaComps: [
      {
        id: 'tft-comp-1',
        name: '6 Cảnh Binh Bắn Tỉa // Caitlyn & Vi Siêu Gánh Kèo',
        tier: 'S-TIER',
        playstyleVi: 'Tích 50 vàng chuẩn chỉ, lên cấp 8 ở vòng 4-2 và roll tìm Caitlyn & Vi 2 sao hoàn thiện form 6 Cảnh Binh',
        playstyleEn: 'Fast-8 economy curve, rolling on Stage 4-2 to hit 2-star Caitlyn and Vi frontline',
        coreUnits: ['Caitlyn (4 tiền - Carry)', 'Vi (4 tiền - Đỡ đòn)', 'Loris', 'Maddie', 'Steb', 'Twisted Fate'],
        coreItemsOrTactics: [
          'Caitlyn: Vô Cực Kiếm + Ngọn Giáo Shojin + Cung Xanh',
          'Vi: Giáp Máu Warmog + Thú Tượng Thạch Giáp + Trái Tim Kiên Định',
          'Maddie giữ đồ hộ ở giai đoạn đầu trận'
        ],
        tipsVi: 'Lắp trang bị sớm từ round 2-1 cho Maddie để giữ máu. Khi lên cấp 8 đổi đồ sang Caitlyn để sốc sát thương hạ gục hàng sau đối phương.',
        tipsEn: 'Slam AD items early onto Maddie to winstreak Stage 2. Transfer full kit to Caitlyn upon hitting Level 8.'
      },
      {
        id: 'tft-comp-2',
        name: 'Hóa Kỹ Thống Trị // Silco Độc Dược & Sevika Đấu Sĩ',
        tier: 'S-TIER',
        playstyleVi: 'Tích cộng dồn Shimmer Hóa Kỹ ở chuỗi thua có kiểm soát, nổ hũ ở mốc 300+ Shimmer rồi đổi bài sang form Silco phép',
        playstyleEn: 'Controlled loss-streak to stack Chem-Baron Shimmer, cash out at 300+ mark and transition into Silco carry',
        coreUnits: ['Silco (4 tiền - Phép)', 'Sevika (5 tiền - Đấu Sĩ)', 'Renata Glasc', 'Singed', 'Smeech', 'Renni'],
        coreItemsOrTactics: [
          'Silco: Bùa Xanh + Quỷ Thư Morello + Mũ Phù Thủy Rabadon',
          'Sevika: Huyết Kiếm + Quyền Năng Khổng Lồ + Móng Vuốt Sterak',
          'Singed: Nỏ Sét giảm kháng phép'
        ],
        tipsVi: 'Nỏ Sét trên Singed là tối quan trọng để khuếch đại sát thương diện rộng của chiêu thức Silco.',
        tipsEn: 'Ionic Spark on Singed is mandatory to shred magic resistance for Silco monster poison waves.'
      },
      {
        id: 'tft-comp-3',
        name: 'Chinh Phục Đao Phủ // Ambessa & Corki Siêu Bạo Kích',
        tier: 'S-TIER',
        playstyleVi: 'Form đánh đôi công toàn diện kết hợp sát thương vật lý tầm gần của Ambessa và hỏa lực diện rộng của Corki',
        playstyleEn: 'Dual-threat physical assault pairing Ambessa melee execution with Corki backline rocket barrages',
        coreUnits: ['Ambessa (4 tiền)', 'Corki (4 tiền)', 'Swain', 'Draven', 'Rell', 'Mordekaiser'],
        coreItemsOrTactics: [
          'Ambessa: Huyết Kiếm + Móng Vuốt Sterak + Bàn Tay Công Lý',
          'Corki: Vô Cực Kiếm + Cung Xanh + Cuồng Đao Guinsoo',
          'Swain: Thú Tượng Thạch Giáp'
        ],
        tipsVi: 'Xếp Ambessa ở ô thứ 2 từ ngoài vào để cô nàng lướt vòng qua tướng đỡ đòn đối phương và áp sát trực tiếp chủ lực.',
        tipsEn: 'Place Ambessa on second hex from flank so her dashes bypass enemy frontline directly into enemy squishies.'
      }
    ],
    settings: [
      {
        nameVi: 'Phím tắt Mua & Khóa Cửa Hàng',
        nameEn: 'Shop & Lock Hotkeys',
        value: 'D (Roll), F (Lên Cấp), E (Bán tướng), Space (Về sàn)',
        noteVi: 'Cài đặt phím tắt tiêu chuẩn giúp thao tác xả 50 vàng tìm tướng hoàn thiện bài dưới 15 giây.',
        noteEn: 'Standard keybindings for sub-15s 50-gold roll-downs without misclicks.'
      },
      {
        nameVi: 'Tốc độ cuộn camera & Soi bài',
        nameEn: 'Camera Scroll & Scouting',
        value: 'Phím 1 & 3 (Duyệt nhanh bàn cờ 7 đối thủ)',
        noteVi: 'Dùng phím 1 và 3 để chuyển góc nhìn soi đối thủ liên tục trước mỗi round giao tranh để né Lốc và đổi góc Zephyr.',
        noteEn: 'Cycle enemy boards with numerical shortcuts before each combat round to dodge Zephyrs.'
      }
    ],
    guides: [
      {
        id: 'tft-g1',
        titleVi: 'Nguyên tắc quản trị lợi tức 10 / 20 / 30 / 40 / 50 vàng',
        titleEn: 'Compound Interest Economics: 10 to 50 Gold Rules',
        tag: 'KINH TẾ ECO',
        summaryVi: 'Mỗi 10 vàng cho thêm 1 vàng lợi tức cuối round. Đạt 50 vàng càng sớm, tiềm lực nâng cấp tướng 4 tiền càng mạnh.',
        summaryEn: 'Each 10 gold yields +1 interest up to +5 at 50 gold. Maximizing compound interest determines late game strength.',
        keyPointsVi: [
          'Chấp nhận bán bớt quân dự bị nếu việc đó giúp chạm mốc tròn 10, 20 hoặc 30 vàng',
          'Chuỗi 5 trận thắng hoặc thua liên tiếp cộng thêm tối đa +3 vàng mỗi round',
          'Chỉ xả vàng trước cấp 8 khi máu tụt xuống ngưỡng báo động dưới 35 HP'
        ],
        keyPointsEn: [
          'Sell bench units without hesitation if it hits a 10g interest breakpoint',
          'Maintain clean win or loss streaks for up to +3 bonus gold per round',
          'Do not roll down before Level 8 unless your health drops below 35 HP'
        ]
      }
    ]
  },
  {
    id: 'lol',
    name: 'League of Legends',
    nameVi: 'Liên Minh Huyền Thoại (LOL)',
    nameEn: 'League of Legends (LOL)',
    shortName: 'LOL // LMHT',
    developer: 'Riot Games',
    genreVi: 'Chiến Thuật MOBA Esports',
    genreEn: 'MOBA / Competitive Esports',
    logo: '/assets/games/lol.svg',
    logoNeedsInvert: false,
    accentColor: 'text-cyan-400',
    accentBorder: 'hover:border-cyan-500/80',
    glowColor: 'bg-cyan-500/10',
    taglineVi: 'Kiểm soát đợt lính (Wave Control), cắm mắt kiểm soát & giao tranh mục tiêu lớn',
    taglineEn: 'Wave management, deep vision control & neutral objective setups',
    descriptionVi:
      'Liên Minh Huyền Thoại kết hợp kỹ năng cá nhân thượng thừa với khả năng đọc bản đồ vĩ mô (Macro), kiểm soát tầm nhìn và phối hợp combat đồng đội.',
    descriptionEn:
      'League of Legends demands sharp individual mechanics married with macro vision control, tempo recall timings, and neutral objective setups.',
    featureBadges: [
      { iconType: 'trophy', labelVi: 'Tổ hợp Giao tranh & Đẩy lẻ', labelEn: 'Teamfight & Split Comps' },
      { iconType: 'sliders', labelVi: 'Cài đặt Quick Cast không trễ', labelEn: 'Zero-delay Quick Cast' },
      { iconType: 'book', labelVi: 'Bộ 3 thế lính Freeze & Push', labelEn: '3 Wave States Trilogy' }
    ],
    tabTitles: {
      tab1Vi: 'LỐI CHƠI & CHIẾN THUẬT META',
      tab1En: 'META PLAYSTYLES & COMBAT',
      tab2Vi: 'CÀI ĐẶT THI ĐẤU PRO',
      tab2En: 'PRO COMPETITIVE SETTINGS',
      tab3Vi: 'CẨM NANG KIỂM SOÁT MACRO',
      tab3En: 'MACRO & WAVE PLAYBOOK'
    },
    patchVersion: 'Mùa Giải 2026 // Live Patch',
    unitLabelVi: 'Tướng chủ chốt theo vai trò đường:',
    unitLabelEn: 'Core Champions by Lane Role:',
    itemsLabelVi: 'Trang bị trấn phái & Phép bổ trợ:',
    itemsLabelEn: 'Core Items & Summoner Spells:',
    compSectionTitleVi: '// CÁC CHIẾN THUẬT & ĐỘI HÌNH GIAO TRANH HIỆU QUẢ CAO NHẤT',
    compSectionTitleEn: '// HIGHEST WIN-RATE COMBAT & MACRO STRATEGIES',
    metaComps: [
      {
        id: 'lol-meta-1',
        name: 'Giao Tranh Rồng & Baron (Front-to-Back Combat)',
        tier: 'S-TIER',
        playstyleVi: 'Đấu sĩ/Đỡ đòn che chắn tuyến trước, Pháp sư và Xạ thủ xả sát thương tối đa từ tuyến sau',
        playstyleEn: 'Frontline tanks absorb poke while mid and ADC free-hit from maximum range',
        coreUnits: [
          'Top: Aatrox / K\'Sante',
          'Jungle: Sejuani / Vi / Maokai',
          'Mid: Orianna / Syndra',
          'ADC: Jinx / Kai\'Sa',
          'Support: Thresh / Nautilus'
        ],
        coreItemsOrTactics: ['Vô Cực Kiếm / Nỏ Tử Thủ', 'Đồng Hồ Cát Zhonya', 'Mặt Nạ Vực Thẳm / Giáp Tâm Linh'],
        tipsVi: 'Luôn di chuyển kiểm soát tầm nhìn trước hang Rồng/Baron ít nhất 45 giây trước khi mục tiêu xuất hiện.',
        tipsEn: 'Establish perimeter vision around Baron/Dragon at least 45 seconds prior to spawn.'
      },
      {
        id: 'lol-meta-2',
        name: 'Đẩy Lẻ Chiến Thuật 1-3-1 & Bắt Lẻ (Pick-off Comp)',
        tier: 'S-TIER',
        playstyleVi: 'Tận dụng 2 đường biên đẩy mạnh để kéo giãn đội hình đối phương và cô lập mục tiêu',
        playstyleEn: 'Dual side-lane split pressure to stretch enemy defenses and catch rotations',
        coreUnits: [
          'Top: Fiora / Jax',
          'Jungle: Lee Sin / Viego',
          'Mid: LeBlanc / Ahri',
          'ADC: Ezreal / Lucian',
          'Support: Rakan / Bard'
        ],
        coreItemsOrTactics: ['Tam Hợp Kiếm / Gươm Vô Danh', 'Kiếm Ma Youmuu', 'Dịch Chuyển (Teleport)'],
        tipsVi: 'Chỉ đẩy cao khi đã có mắt kiểm soát trong rừng đối thủ để tránh bị gank 3 người.',
        tipsEn: 'Only push past river when deep wards secure enemy jungle collapse routes.'
      }
    ],
    settings: [
      {
        nameVi: 'Dùng Chiêu Nhanh (Quick Cast)',
        nameEn: 'Quick Cast with Indicator',
        value: 'Bật Quick Cast toàn bộ Q, W, E, R',
        noteVi: 'Loại bỏ bước click chuột giúp tung kỹ năng nhanh hơn 0.15 - 0.25 giây.',
        noteEn: 'Removes target confirm click, shaving 0.2s off reaction times.'
      },
      {
        nameVi: 'Chỉ định mục tiêu Tướng (Target Champions Only)',
        nameEn: 'Target Champions Only Toggle',
        value: 'Gán phím ` (Tilde) hoặc nút cạnh chuột',
        noteVi: 'Ngăn việc đánh nhầm vào trụ hoặc lính trong các pha băng trụ quyết định.',
        noteEn: 'Prevents misclicking minions or turrets during tower dives.'
      },
      {
        nameVi: 'Tấn Công Di Chuyển (Player Attack Move Click)',
        nameEn: 'Player Attack Move Click (A-Click Kiting)',
        value: 'Gán phím A hoặc Shift + Chuột phải',
        noteVi: 'Bắt buộc cho Xạ thủ (ADC) để thả diều tối đa tầm bắn mà không bao giờ vô tình bước hụt về phía đối thủ.',
        noteEn: 'Essential for marksmen to kite at max range without accidental misclicks toward enemies.'
      },
      {
        nameVi: 'Tỷ lệ Bản đồ nhỏ & Giao diện (Minimap & HUD Scale)',
        nameEn: 'Competitive Minimap & HUD Scaling',
        value: 'Minimap: 100% / HUD: 30% - 35%',
        noteVi: 'Mở rộng tối đa kích thước radar bản đồ nhỏ để đọc hướng di chuyển đối phương, đồng thời thu gọn HUD giải phóng góc nhìn.',
        noteEn: 'Max out minimap to spot enemy rotations early while reducing HUD size to declutter fight vision.'
      },
      {
        nameVi: 'Điều khiển Camera Linh Hoạt (Unlocked Camera & Spacebar)',
        nameEn: 'Unlocked Camera & Spacebar Centering',
        value: 'Tắt Camera Lock (Phím Y), dùng Space để kéo tâm',
        noteVi: 'Góc nhìn tự do giúp quan sát góc khuất sương mù, thế lính và kỹ năng định hướng tầm xa trước khi giao tranh.',
        noteEn: 'Unlocked camera allows scouting fog-of-war and long-range skillshots before committing.'
      }
    ],
    guides: [
      {
        id: 'lol-g1',
        titleVi: '3 Kỹ thuật Đóng băng lính (Freeze), Đẩy chậm (Slow Push) & Đẩy nhanh (Hard Push)',
        titleEn: 'Wave Management Trilogy: Freeze, Slow Push, Hard Shove',
        tag: 'MACRO ĐƯỜNG',
        summaryVi: 'Kiểm soát thế lính là chìa khóa định đoạt lượng vàng, kinh nghiệm và thời điểm biến về hoàn hảo.',
        summaryEn: 'Controlling minion wave states dictates lane economy, XP advantages, and perfect recall timers.',
        keyPointsVi: [
          'Freeze: Giữ 3-4 lính đánh xa đối phương ngoài tầm trụ mình để giữ thế lính an toàn và cô lập đối thủ',
          'Slow Push: Chỉ last-hit lính đánh xa, để đợt lính của bạn dồn thành 2-3 đợt lính lớn trước khi ập vào trụ',
          'Hard Push: Xả toàn bộ kỹ năng dọn lính thật nhanh để roam hỗ trợ rừng hoặc biến về mua đồ tự do'
        ],
        keyPointsEn: [
          'Freeze: Hold 3-4 enemy ranged minions outside your turret range to starve opponent and deny XP',
          'Slow Push: Only last-hit casters to accumulate a massive 2-3 wave crash into enemy tower',
          'Hard Shove: Clear wave with abilities instantly to roam or execute free base timings'
        ]
      },
      {
        id: 'lol-g2',
        titleVi: 'Chiến thuật Cắm Mắt Sâu & Kiểm Soát Tầm Nhìn Hang Rồng / Baron',
        titleEn: 'Deep Vision Control & Neutral Objective Setups (Dragon & Baron)',
        tag: 'TẦM NHÌN & MACRO',
        summaryVi: 'Thiết lập mạng lưới tầm nhìn trước thời điểm mục tiêu xuất hiện 45 giây để chặn hoàn toàn góc dịch chuyển và mai phục.',
        summaryEn: 'Establish vision grids 45 seconds prior to objective spawn to neutralize flanks and secure setup positions.',
        keyPointsVi: [
          'Chu kỳ 45s: Biến về mua Mắt Kiểm Soát (Pink Ward) và đổi Máy Quét 1 phút trước khi Rồng/Baron xuất hiện',
          'Tam giác Mắt Sâu: Cắm mắt tại ngã ba bùa xanh/đỏ đối thủ để phát hiện sớm hướng di chuyển của Rừng và Mid',
          'Kiểm soát Hạt Thông Nổ & Cua Kỳ Cục: Phá hạt thông nổ để chặn các pha mở combat bất ngờ từ vách tường'
        ],
        keyPointsEn: [
          '45s Objective Timer: Recall for Control Wards and Oracle Lens 60 seconds before Dragon/Baron spawns',
          'Deep Ward Triangle: Plant vision in enemy jungle choke points to track jungle and mid rotations',
          'Clear Blast Cones & Scuttle: Pop blast cones to deny surprise flank engages over pit walls'
        ]
      },
      {
        id: 'lol-g3',
        titleVi: 'Lộ Trình Rừng Hiện Đại & Nguyên Tắc Can Thiệp Đường (Gank Timing Windows)',
        titleEn: 'Modern Jungle Pathing & Gank Timing Windows',
        tag: 'CHIẾN THUẬT RỪNG',
        summaryVi: 'Tối ưu hóa vòng rừng full clear 3:15 phút tranh chấp Cua Kỳ Cục và nhận diện điều kiện thắng (win condition) trước khi gank.',
        summaryEn: 'Master 3:15 full clear into Scuttle Crab contention and identify lane priority win conditions before committing.',
        keyPointsVi: [
          'Full Clear 3:15: Duy trì bãi quái hồi liên tục để đảm bảo lượng vàng và chạm mốc cấp 6 sớm nhất bản đồ',
          'Ưu tiên Đường Thắng: Hỗ trợ đường có khống chế cứng và thế lính thuận lợi thay vì cố cứu đường thua sâu',
          'Phản Gank (Counter-Gank): Đọc hướng đi của Rừng đối phương dựa trên bùa khởi đầu để đón đầu pha can thiệp'
        ],
        keyPointsEn: [
          '3:15 Full Clear: Keep camps on respawn timer to maximize XP/gold and rush key level 6 power spikes',
          'Play to Winning Lanes: Dive and dive-protect lanes with CC rather than salvaging heavily lost lanes',
          'Counter-Ganking: Anticipate enemy jungler quadrant based on starting buff to turn 2v2/3v3 skirmishes'
        ]
      }
    ]
  },
  {
    id: 'fco',
    name: 'EA Sports FC Online',
    nameVi: 'FC Online (FIFA Online 4)',
    nameEn: 'EA Sports FC Online',
    shortName: 'FC ONLINE',
    developer: 'EA Sports & Nexon',
    genreVi: 'Bóng Đá Mô Phỏng Thể Thao',
    genreEn: 'Sports Simulation / Football',
    logo: '/assets/games/fco.svg',
    logoNeedsInvert: false,
    accentColor: 'text-emerald-400',
    accentBorder: 'hover:border-emerald-500/80',
    glowColor: 'bg-emerald-500/10',
    taglineVi: 'Sơ đồ chiến thuật 4-2-3-1 & 4-2-2-2, tối ưu quỹ lương và kỹ năng ZD/D sút xa',
    taglineEn: 'Tactical 4-2-3-1 formations, wage cap optimization & curled ZD finesse finishes',
    descriptionVi:
      'FC Online đòi hỏi khả năng phối hợp nhịp nhàng giữa chiến thuật đội hình tổng thể, kiểm soát cự ly đội hình và kỹ thuật bấm bóng, chọc khe QW chính xác.',
    descriptionEn:
      'Master custom tactics, compact defensive line spacing, and lethal finesse shots to conquer ranked 1vs1 divisions.',
    featureBadges: [
      { iconType: 'trophy', labelVi: 'Sơ đồ 4-2-3-1 & 4-2-2-2', labelEn: '4-2-3-1 & 4-2-2-2 Formations' },
      { iconType: 'sliders', labelVi: 'Chuyền Bán Tự Động (Semi)', labelEn: 'Semi-Assisted Passing' },
      { iconType: 'book', labelVi: 'Kỹ thuật Cứa lòng ZD 45°', labelEn: '45° ZD Finesse Guide' }
    ],
    tabTitles: {
      tab1Vi: 'SƠ ĐỒ CHIẾN THUẬT META',
      tab1En: 'META FORMATIONS & TACTICS',
      tab2Vi: 'CÀI ĐẶT TAY CẦM / PHÍM',
      tab2En: 'CONTROLLER & CAMERA SETUP',
      tab3Vi: 'CẨM NANG DỨT ĐIỂM & BAN BẬT',
      tab3En: 'FINISHING & PASSING PLAYBOOK'
    },
    patchVersion: 'Roster Update // Gameplay Mùa Mới',
    unitLabelVi: 'Cầu thủ & Vị trí trong sơ đồ chiến thuật:',
    unitLabelEn: 'Key Players & Squad Positions:',
    itemsLabelVi: 'Chiến thuật đơn & Kỹ năng bấm bóng ZD/D:',
    itemsLabelEn: 'Individual Tactics & Finishing Skills:',
    compSectionTitleVi: '// CÁC SƠ ĐỒ CHIẾN THUẬT QUỐC DÂN TỐI ƯU QUỸ LƯƠNG',
    compSectionTitleEn: '// OPTIMAL WAGE-CAP META FORMATIONS',
    metaComps: [
      {
        id: 'fco-meta-1',
        name: 'Sơ Đồ 4-2-3-1 Cân Bằng Toàn Diện (Meta Quốc Dân Mùa Mới)',
        tier: 'S-TIER',
        playstyleVi: 'Cặp tiền vệ phòng ngự CDM bọc lót chắc chắn, bộ 3 tiền vệ công CAM/LAM/RAM cơ động phân phối bóng',
        playstyleEn: 'Double pivot CDMs protect backline while dynamic attacking trident supports lone ST',
        coreUnits: [
          'ST: Ronaldo de Lima (R9) / Shevchenko',
          'CAM: Ruud Gullit / Zinedine Zidane',
          'LAM/RAM: Son Heung-min / Pavel Nedved',
          'CDM: Michael Ballack / Rodri / Patrick Vieira',
          'CB & GK: Van Dijk / Rudiger & Thibaut Courtois'
        ],
        coreItemsOrTactics: ['Chiến thuật đội: Cân bằng / Áp sát khi mất bóng', 'Độ rộng 50 - Chiều sâu 55', 'Đá ngắn phối hợp'],
        tipsVi: 'Ưu tiên tiền vệ phòng ngự có chỉ số Thể lực trên 105 và thể hình cao trên 1m85 để làm chủ tranh chấp trung tuyến.',
        tipsEn: 'Deploy CDMs with 105+ stamina and 185cm+ physical frames to dominate midfield duels.'
      },
      {
        id: 'fco-meta-2',
        name: 'Sơ Đồ 4-2-2-2 Tấn Công Trực Diện & Phản Công Nhanh',
        tier: 'S-TIER',
        playstyleVi: '2 tiền đạo cắm phối hợp đập nhả 1-2 xé toang trung lộ hàng thủ đối phương',
        playstyleEn: 'Twin striker partnership unlocking quick 1-2 give-and-go vertical line breaks',
        coreUnits: [
          'ST1 (Tì đè làm tường): Harry Kane / Lewandowski',
          'ST2 (Bứt tốc xẻ nách): Kylian Mbappe / Thierry Henry',
          '2 CAM Lệch cánh: Kevin De Bruyne / Kaka',
          '2 CDM Càn quét: Yaya Toure / Frank Rijkaard'
        ],
        coreItemsOrTactics: ['Chiến thuật chuyền: Chọc khe kiến tạo ZW', 'Tạt bóng sớm QA', 'Sút xa ZD hiểm hóc'],
        tipsVi: 'Sử dụng nút gọi đồng đội chạy chỗ (Q + Chuyền) để tiền đạo tự động bứt tốc vượt qua bẫy việt vị.',
        tipsEn: 'Trigger manual forward runs with Q-pass triggers to beat offside traps.'
      }
    ],
    settings: [
      {
        nameVi: 'Cài Đặt Tay Cầm / Bàn Phím',
        nameEn: 'Controller / Keyboard Config',
        value: 'Hỗ trợ chuyền: Bán tự động (Semi)',
        noteVi: 'Bán tự động giúp bóng đi đúng lực mong muốn thay vì bị máy tự động can thiệp quỹ đạo.',
        noteEn: 'Semi-assisted passing provides precise directional power without AI overriding.'
      },
      {
        nameVi: 'Góc Nhìn Camera Trận Đấu',
        nameEn: 'Camera Perspective',
        value: 'Truyền hình Trực tiếp (Tele Broadcast) / Chiều cao 18 - Zoom 2',
        noteVi: 'Mở rộng tầm nhìn toàn cảnh sân bóng giúp quan sát đường chạy của tiền đạo ở biên đối diện.',
        noteEn: 'Expanded panoramic view to spot off-ball striker runs across both flanks.'
      }
    ],
    guides: [
      {
        id: 'fco-g1',
        titleVi: 'Kỹ thuật dứt điểm ZD cứa lòng & Sút sệt D hiểm hóc',
        titleEn: 'Finesse Curler (ZD) & Low Driven Finishing Mastery',
        tag: 'DỨT ĐIỂM BÀN THẮNG',
        summaryVi: 'Dứt điểm góc xa với phím ZD ngoài vòng cấm là vũ khí ghi bàn có tỷ lệ chuyển hóa bàn thắng cao nhất meta.',
        summaryEn: 'Outside-the-box finesse shots (ZD) curling into the far top corner offer the highest conversion rates.',
        keyPointsVi: [
          'Góc sút tối ưu: Nghiêng 45 độ so với khung thành, lực sút từ 2.2 đến 2.8 vạch',
          'Sút sệt D + D trong vòng cấm khi thủ môn đối phương băng ra khép góc',
          'Hạn chế sút bằng chân không thuận nếu cầu thủ không có chỉ số ẩn "Tránh dùng chân không thuận" hoặc 2 chân 5/5'
        ],
        keyPointsEn: [
          'Optimal shooting angle: 45-degree body orientation with 2.2-2.8 power bar fill',
          'Low-driven driven shots inside the box when opposing keeper rushes out',
          'Avoid weak-foot attempts unless player possesses 5-star weak foot rating'
        ]
      }
    ]
  },
  {
    id: 'pubgm',
    name: 'PUBG Mobile',
    nameVi: 'PUBG Mobile',
    nameEn: 'PUBG Mobile',
    shortName: 'PUBG MOBILE',
    developer: 'Krafton & Tencent Games',
    genreVi: 'Bắn Súng Sinh Tồn Battle Royale',
    genreEn: 'Battle Royale / Tactical Shooter',
    logo: '/assets/games/pubgm.svg',
    logoNeedsInvert: true,
    accentColor: 'text-rose-400',
    accentBorder: 'hover:border-rose-500/80',
    glowColor: 'bg-rose-500/10',
    taglineVi: 'Bảng độ nhạy Gyroscope chuẩn thi đấu, kỹ thuật sấy M416 x3 & di chuyển bo cuối',
    taglineEn: 'Pro Gyroscope sensitivity curves, M416 spray transfer & final zone rotation mastery',
    descriptionVi:
      'PUBG Mobile kiểm tra phản xạ tức thời, khả năng ghìm tâm súng sấy xa bằng con quay hồi chuyển và chiến thuật di chuyển bo địa hình hiểm trở.',
    descriptionEn:
      'Master gyroscope recoil calibration, micro-peeking, smoke cover lanes, and high-ground rotations in competitive final zones.',
    featureBadges: [
      { iconType: 'trophy', labelVi: 'Cặp Súng Thi Đấu Chuẩn', labelEn: 'Competitive Gun Loadouts' },
      { iconType: 'sliders', labelVi: 'Độ nhạy Gyroscope Full', labelEn: 'Full Gyro Sensitivity' },
      { iconType: 'book', labelVi: 'Chiến thuật Tường Khói Bo 5', labelEn: 'Circle 5 Smoke Wall' }
    ],
    tabTitles: {
      tab1Vi: 'COMBO SÚNG & LOADOUT THI ĐẤU',
      tab1En: 'PRO WEAPON LOADOUTS',
      tab2Vi: 'BẢNG ĐỘ NHẠY GYROSCOPE',
      tab2En: 'GYROSCOPE SENSITIVITY CALIBRATION',
      tab3Vi: 'CẨM NANG CHIẾN THUẬT BO CUỐI',
      tab3En: 'FINAL ZONE ROTATION PLAYBOOK'
    },
    patchVersion: 'Chiến Trường v3.5 // Frozen Realm',
    unitLabelVi: 'Combo Vũ khí & Cỡ đạn thi đấu:',
    unitLabelEn: 'Competitive Weapon Pairs & Ammo:',
    itemsLabelVi: 'Phụ kiện giảm giật & Ống ngắm Scope:',
    itemsLabelEn: 'Recoil Attachments & Scope Setup:',
    compSectionTitleVi: '// CÁC COMBO VŨ KHÍ & BỘ TRANG BỊ CHUẨN THI ĐẤU ESPORTS',
    compSectionTitleEn: '// COMPETITIVE WEAPON LOADOUTS & SPRAY SETUPS',
    metaComps: [
      {
        id: 'pubgm-meta-1',
        name: 'Cặp Súng Thi Đấu Cân Bằng: M416 + DMR (Mini14 / SLR)',
        tier: 'S-TIER',
        playstyleVi: 'M416 đảm nhận giao tranh tầm gần và trung bình (0 - 80m), DMR bắn tỉa tầm xa (100 - 300m)',
        playstyleEn: 'M416 handles close-to-mid range spray transfers while DMR snipes high-damage tags at distance',
        coreUnits: [
          'Vũ khí chính: M416 (Đạn 5.56mm)',
          'Vũ khí phụ: Mini14 / SLR (Bắn tỉa bán tự động)',
          'Phụ kiện M416: Nòng Giảm Giật + Tay Cầm Thẳng Đứng + Báng Súng Tắc Kè + Băng Đạn Thay Nhanh Mở Rộng',
          'Ống ngắm: Scope 3x (Sấy) & Scope 6x hạ 3x'
        ],
        coreItemsOrTactics: ['Tay cầm thẳng đứng (Vertical)', 'Nòng giảm giật (Compensator)', 'Băng đạn mở rộng thay nhanh'],
        tipsVi: 'Nòng giảm giật kết hợp Tay cầm thẳng đứng triệt tiêu tới 40% độ giật dọc của M416 khi ngồi sấy.',
        tipsEn: 'Compensator combined with Vertical Foregrip eliminates up to 40% vertical recoil while crouching.'
      },
      {
        id: 'pubgm-meta-2',
        name: 'Cặp Súng Đẩy Nhà Cận Chiến: UMP45 / Beryl M762 + AWM / M416',
        tier: 'S-TIER',
        playstyleVi: 'Dồn sát thương cận chiến cực nhanh với đạn .45 ACP hoặc 7.62mm khi công nhà hoặc giao tranh đô thị',
        playstyleEn: 'Devastating close-quarter DPS with .45 ACP or 7.62mm ARs during urban compound crashes',
        coreUnits: [
          'Vũ khí chính: UMP45 (.45 ACP) hoặc Beryl M762 (7.62mm)',
          'Vũ khí tầm xa: M24 / AWM hoặc M416',
          'Phụ kiện UMP: Nòng Giảm Thanh + Tay Cầm Laser + Băng Đạn Mở Rộng 35 viên'
        ],
        coreItemsOrTactics: ['Tay cầm Laser tăng độ chụm khi bắn không ngắm (Hipfire)', 'Bộ cứu thương & Nước tăng lực'],
        tipsVi: 'Bắn không bật ngắm (Hipfire) kết hợp di chuyển lách qua lại (Jiggle) ở khoảng cách dưới 10m.',
        tipsEn: 'Use Laser Sight hipfire with high-speed jiggle peeking inside 10-meter rooms.'
      }
    ],
    settings: [
      {
        nameVi: 'Cảm Biến Con Quay Hồi Chuyển (Gyroscope)',
        nameEn: 'Full Gyroscope Calibration',
        value: 'Luôn Bật (Always On)',
        noteVi: 'Nghiêng máy điện thoại để ghìm tâm súng, ngón tay hoàn toàn tự do để ngắm và di chuyển.',
        noteEn: 'Tilt device to control recoil, freeing right thumb for movement and aim tracking.'
      },
      {
        nameVi: 'Độ Nhạy Gyro Ngắm Bắn 3x & 4x',
        nameEn: 'Pro 3x & 4x Gyro Sensitivity',
        value: 'Scope 3x: 230% - 260% | Scope 4x: 180% - 210%',
        noteVi: 'Thông số tối ưu cho thao tác sấy cả băng đạn 40 viên chụm vào 1 điểm ở cự ly 80m.',
        noteEn: 'Calibrated sensitivity for laser-like 40-round sprays at 80m targets.'
      }
    ],
    guides: [
      {
        id: 'pubgm-g1',
        titleVi: 'Chiến thuật Di chuyển Vòng Bo Cuối & Sử dụng Lựu đạn Khói (Smoke Wall)',
        titleEn: 'Final Circle Edge Rotations & Smoke Wall Playbook',
        tag: 'CHIẾN THUẬT BO CUỐI',
        summaryVi: 'Ở vòng bo 5 trở đi, kiểm soát địa hình cao và rải khói mở đường sống là yếu tố quyết định Top 1.',
        summaryEn: 'From Circle 5 onwards, seizing high-ground elevation and layering smoke walls guarantees Chicken Dinners.',
        keyPointsVi: [
          'Luôn chuẩn bị tối thiểu 4-5 quả Smoke và 2 quả nổ Frag Grenade trước khi bước vào bo 5',
          'Rải khói theo đường thẳng nối dài để tạo hành lang an toàn băng qua bãi đất trống',
          'Bám mép vòng bo mỏng (vùng bo thu chậm nhất) để tránh bị bắn kẹp từ phía sau lưng'
        ],
        keyPointsEn: [
          'Inventory management: Carry at least 4-5 smoke grenades and 2 frag grenades into late circles',
          'Chain smokes in continuous linear paths to create safe crossing lanes across open fields',
          'Stick to the narrow side of zone where the blue line travels slowest to avoid backstabs'
        ]
      }
    ]
  }
]
