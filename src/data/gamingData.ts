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
    shortName: 'TFT // ĐTCL',
    developer: 'Riot Games',
    genreVi: 'Cờ Nhân Phẩm / Auto Battler',
    genreEn: 'Auto Battler / Strategy',
    logo: '/assets/games/tft.svg',
    logoNeedsInvert: false,
    accentColor: 'text-amber-400',
    accentBorder: 'hover:border-amber-500/80',
    glowColor: 'bg-amber-500/10',
    taglineVi: 'Chiến thuật giữ chuỗi vàng, tối ưu Lõi Hextech & Đội hình S-Tier',
    taglineEn: 'Economic streak management, Hextech Augments & S-Tier Comps',
    descriptionVi:
      'Đấu Trường Chân Lý đòi hỏi tư duy quản trị tài chính nhạy bén, khả năng thích ứng linh hoạt với từng Lõi Công Nghệ và xoay bài nhanh theo cửa hàng.',
    descriptionEn:
      'Master economic thresholds, augment synergies, and flexible carry pivots to consistently finish in the top 4.',
    metaComps: [
      {
        id: 'tft-comp-1',
        name: 'Fast 8: Chủ Lực 4 Vàng & Đỡ Đòn Đa Năng',
        tier: 'S-TIER',
        playstyleVi: 'Tích 50 vàng sớm, lên cấp 8 ở vòng 4-2 và roll tìm tướng 4 tiền 2 sao',
        playstyleEn: 'Fast-8 econ curve, rolling down on Stage 4-2 for 2-star 4-cost carries',
        coreUnits: ['Carry 4 Tiền', 'Tanker 4 Tiền', 'Hỗ trợ khống chế', 'Kích hệ phụ trợ'],
        coreItemsOrTactics: ['Vô Cực Kiếm / Găng Bảo Thạch', 'Cuồng Đao Guinsoo', 'Giáp Máu / Thú Tượng'],
        tipsVi: 'Đừng ngại lắp trang bị sớm (slam item) từ round 2 để giữ máu và duy trì chuỗi thắng.',
        tipsEn: 'Slam flexible tempo items early in Stage 2 to conserve HP and build win streaks.'
      },
      {
        id: 'tft-comp-2',
        name: 'Slow Roll Cấp 6 / 7: Tướng 2 & 3 Tiền 3 Sao',
        tier: 'S-TIER',
        playstyleVi: 'Giữ trên 50 vàng, roll từ từ ở cấp 6 hoặc 7 để nâng tướng chủ lực lên 3 sao',
        playstyleEn: 'Slow roll above 50 gold at Level 6/7 to achieve 3-star core carries',
        coreUnits: ['Chủ lực 3 sao', 'Tiên phong cứng', 'Tướng kích hoạt hệ mốc 4/6'],
        coreItemsOrTactics: ['Huyết Kiếm', 'Quyền Năng Khổng Lồ', 'Nỏ Sét / Dao Điện'],
        tipsVi: 'Quan sát lobby (soi bài đối thủ), nếu có trên 2 nhà cùng chơi thì nên chuyển hướng sang Fast 8.',
        tipsEn: 'Scout lobbies continuously; if contested by 2+ players, pivot immediately toward Fast 8.'
      }
    ],
    settings: [
      {
        nameVi: 'Phím tắt Mua & Khóa Cửa Hàng',
        nameEn: 'Shop & Lock Hotkeys',
        value: 'D (Roll), F (Lên Cấp), E (Bán tướng)',
        noteVi: 'Cài đặt phím tắt tiêu chuẩn giúp thao tác xả tiền nhanh dưới 15 giây.',
        noteEn: 'Standard keybindings for sub-15s roll-downs without misclicks.'
      },
      {
        nameVi: 'Tốc độ cuộn camera & Soi bài',
        nameEn: 'Camera Scroll & Scouting',
        value: '1 & 3 (Duyệt bàn cờ đối thủ)',
        noteVi: 'Dùng phím 1 và 3 để chuyển góc nhìn soi đối thủ liên tục trước mỗi round giao tranh.',
        noteEn: 'Cycle enemy boards with numerical shortcuts before each combat round.'
      }
    ],
    guides: [
      {
        id: 'tft-g1',
        titleVi: 'Nguyên tắc quản trị lợi tức 10 / 20 / 30 / 40 / 50 vàng',
        titleEn: 'Compound Interest Economics: 10 to 50 Gold Rules',
        tag: 'KINH TẾ ECO',
        summaryVi: 'Mỗi 10 vàng cho thêm 1 vàng lợi tức cuối round. Đạt 50 vàng càng sớm, tiềm lực nâng cấp càng mạnh.',
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
    metaComps: [
      {
        id: 'lol-meta-1',
        name: 'Giao Tranh Rồng & Baron (Front-to-Back Combat)',
        tier: 'S-TIER',
        playstyleVi: 'Đấu sĩ/Đỡ đòn che chắn tuyến trước, Pháp sư và Xạ thủ xả sát thương tối đa từ tuyến sau',
        playstyleEn: 'Frontline tanks absorb poke while mid and ADC free-hit from maximum range',
        coreUnits: ['Top Đỡ Đòn / Đấu Sĩ', 'Rừng Mở Giao Tranh', 'Mid Pháp Sư Kiểm Soát', 'Xạ Thủ Hyper Carry', 'Hỗ Trợ Enchanter'],
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
        coreUnits: ['Đấu Sĩ Đẩy Đường Mạnh', 'Sát Thủ Dồn Sát Thương', 'Hỗ Trợ Móc / Trói'],
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
          'Freeze: Giữ 3-4 lính đánh xa đối phương ngoài tầm trụ mình để giữ thế lính an toàn',
          'Slow Push: Chỉ last-hit lính đánh xa, để đợt lính của bạn dồn thành 2-3 đợt lính lớn trước khi ập vào trụ',
          'Hard Push: Xả toàn bộ kỹ năng dọn lính thật nhanh để roam hỗ trợ rừng hoặc biến về mua đồ'
        ],
        keyPointsEn: [
          'Freeze: Hold 3-4 enemy ranged minions outside your turret range to starve opponent',
          'Slow Push: Only last-hit casters to accumulate a massive 2-3 wave crash into enemy tower',
          'Hard Shove: Clear wave with abilities instantly to roam or execute free base timings'
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
    logoNeedsInvert: true,
    accentColor: 'text-emerald-400',
    accentBorder: 'hover:border-emerald-500/80',
    glowColor: 'bg-emerald-500/10',
    taglineVi: 'Sơ đồ chiến thuật 4-2-3-1 & 4-2-2-2, tối ưu quỹ lương và kỹ năng ZD/D sút xa',
    taglineEn: 'Tactical 4-2-3-1 formations, wage cap optimization & curled ZD finesse finishes',
    descriptionVi:
      'FC Online đòi hỏi khả năng phối hợp nhịp nhàng giữa chiến thuật đội hình tổng thể, kiểm soát cự ly đội hình và kỹ thuật bấm bóng, chọc khe QW chính xác.',
    descriptionEn:
      'Master custom tactics, compact defensive line spacing, and lethal finesse shots to conquer ranked 1vs1 divisions.',
    metaComps: [
      {
        id: 'fco-meta-1',
        name: 'Sơ Đồ 4-2-3-1 Cân Bằng Toàn Diện (Meta Quốc Dân)',
        tier: 'S-TIER',
        playstyleVi: 'Cặp tiền vệ phòng ngự CDM bọc lót chắc chắn, bộ 3 tiền vệ công CAM/LAM/RAM cơ động phân phối bóng',
        playstyleEn: 'Double pivot CDMs protect backline while dynamic attacking trident supports lone ST',
        coreUnits: ['1 ST Cắm toàn diện', '1 CAM Nhạc trưởng', '2 Tiền vệ cánh LAM/RAM', '2 CDM Đánh chặn quét bóng', '4 Hậu vệ'],
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
        coreUnits: ['1 ST Mục tiêu tì đè', '1 ST Tốc độ chạy chỗ luồn lách', '2 CAM Lệch cánh', '2 CDM Thu hồi bóng'],
        coreItemsOrTactics: ['Chiến thuật chuyền: Chọc khe kiến tạo', 'Tạt bóng sớm', 'Sút xa ZD hiểm hóc'],
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
    metaComps: [
      {
        id: 'pubgm-meta-1',
        name: 'Cặp Súng Thi Đấu Cân Bằng: M416 + DMR (Mini14 / SLR)',
        tier: 'S-TIER',
        playstyleVi: 'M416 đảm nhận giao tranh tầm gần và trung bình (0 - 80m), DMR bắn tỉa tầm xa (100 - 300m)',
        playstyleEn: 'M416 handles close-to-mid range spray transfers while DMR snipes high-damage tags at distance',
        coreUnits: ['M416 (Đủ phụ kiện)', 'Mini14 / SLR', 'Bộ phụ kiện Giảm Giật', 'Scope 3x & 6x hạ 3x'],
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
        coreUnits: ['UMP45 (Nòng giảm thanh + Laser)', 'Beryl M762', 'M24 / AWM'],
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
