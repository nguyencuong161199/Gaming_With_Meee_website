import { SocialLinkItem } from '../types/content'

export const BRAND = {
  name: "Gaming with meee",
  parentBrand: "NMC Corp",
  founder: "Nguyễn Mạnh Cường (Edward)",
  founderShort: "Nguyễn Mạnh Cường",
  attribution: "A creative brand by NMC Corp",
  tagline: "PLAY. EXPLORE. CREATE.",
  headline: "WELCOME TO MY WORLD.",
  positioning: "Exploring Gaming, Technology & AI.",
  contactPerson: "Nguyễn Mạnh Cường (Mr. Edward)",
  phone: "0337 468 883",
  email: "nmc.corp16@gmail.com",
} as const

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    platform: "Facebook",
    label: "Facebook",
    handle: "GamingNMC.Official",
    url: "https://www.facebook.com/GamingNMC.Official/",
    description: "Trang Fanpage Facebook chính thức",
    descriptionVi: "Trang Fanpage Facebook chính thức",
    descriptionEn: "Official Facebook community page"
  },
  {
    platform: "YouTube",
    label: "YouTube",
    handle: "@gamingwithmeee16",
    url: "https://www.youtube.com/@gamingwithmeee16",
    description: "Video phân tích meta & hướng dẫn chuyên sâu",
    descriptionVi: "Video phân tích meta & hướng dẫn chuyên sâu",
    descriptionEn: "In-depth meta breakdowns & gaming guides"
  },
  {
    platform: "TikTok",
    label: "TikTok",
    handle: "@_gamingwithmeee",
    url: "https://www.tiktok.com/@_gamingwithmeee",
    description: "Highlight thi đấu & clip giải trí",
    descriptionVi: "Highlight thi đấu & clip giải trí",
    descriptionEn: "Short gaming clips & highlights"
  },
  {
    platform: "Instagram",
    label: "Instagram",
    handle: "@_gamingwithmeee",
    url: "https://www.instagram.com/_gamingwithmeee/",
    description: "Hình ảnh hậu trường & video ngắn",
    descriptionVi: "Hình ảnh hậu trường & video ngắn",
    descriptionEn: "Visual stories & behind-the-scenes"
  },
  {
    platform: "Email",
    label: "Email",
    handle: "nmc.corp16@gmail.com",
    url: "mailto:nmc.corp16@gmail.com",
    description: "Hợp tác kinh doanh & truyền thông",
    descriptionVi: "Hợp tác kinh doanh & truyền thông",
    descriptionEn: "Direct email inquiry & partnership"
  }
]
