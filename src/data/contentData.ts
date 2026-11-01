import { SocialLinkItem } from '../types/content'

export const BRAND = {
  name: "Gaming with meee",
  parentBrand: "NMC Corp",
  attribution: "A creative brand by NMC Corp",
  tagline: "PLAY. EXPLORE. CREATE.",
  headline: "WELCOME TO MY WORLD.",
  positioning: "Exploring Gaming, Technology & AI.",
  contactPerson: "Mr. Cuong (Edward)",
  phone: "0337468883",
  email: "nmc.corp16@gmail.com",
} as const

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    platform: "Facebook",
    label: "Facebook",
    handle: "GamingNMC.Official",
    url: "https://www.facebook.com/GamingNMC.Official/",
    description: "Official Facebook page"
  },
  {
    platform: "Instagram",
    label: "Instagram",
    handle: "@_gamingwithmeee",
    url: "https://www.instagram.com/_gamingwithmeee/",
    description: "Visual stories & BTS"
  },
  {
    platform: "TikTok",
    label: "TikTok",
    handle: "@_gamingwithmeee",
    url: "https://www.tiktok.com/@_gamingwithmeee",
    description: "Short clips & highlights"
  },
  {
    platform: "Email",
    label: "Email",
    handle: "nmc.corp16@gmail.com",
    url: "mailto:nmc.corp16@gmail.com",
    description: "Direct email inquiry"
  },
  {
    platform: "Phone",
    label: "Hotline",
    handle: "0337468883",
    url: "tel:0337468883",
    description: "Mr. Cuong (Edward)"
  }
]
