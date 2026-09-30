import type { StaticImageData } from "next/image"
import type { LucideIcon } from "lucide-react"
import { Compass, Disc, Globe, Sun, Zap } from "lucide-react"
import rightBannerShape from "@/assets/bannerImage.png"
import whiteSpring from "@/assets/Frame.png"
import leftLimeSpiral from "@/assets/Mask Group.png"
import whiteTorus from "@/assets/Mask Group (1).png"
import whitePyramid from "@/assets/Mask Group (2).png"

export interface HeroFloatingShapeItem {
  src: StaticImageData
  alt: string
  wrapperClassName: string
  imageClassName: string
}

export interface HeroPartnerLogoItem {
  name: string
  icon: LucideIcon
}

export const HERO_FLOATING_SHAPES: HeroFloatingShapeItem[] = [
  {
    src: leftLimeSpiral,
    alt: "Decorative lime spiral shape",
    wrapperClassName:
      "pointer-events-none absolute top-[28%] left-0 z-10 w-20 sm:w-28 md:w-36 lg:w-44",
    imageClassName: "h-auto w-full object-contain",
  },
  {
    src: whiteSpring,
    alt: "Decorative small white spring shape",
    wrapperClassName:
      "pointer-events-none absolute top-[48%] left-[10%] z-10 hidden w-14 sm:block md:left-[14%] md:w-20 lg:w-32",
    imageClassName: "h-auto w-full object-contain",
  },
  {
    src: whiteTorus,
    alt: "Decorative white ring shape",
    wrapperClassName:
      "pointer-events-none absolute bottom-[3%] left-[2%] z-300 w-24 sm:left-[15%] sm:w-36 md:w-44 lg:w-52",
    imageClassName: "h-auto w-full object-contain",
  },
  {
    src: rightBannerShape,
    alt: "Decorative right banner shape",
    wrapperClassName:
      "pointer-events-none absolute top-[25%] right-0 z-10 w-20 sm:w-28 md:w-36 lg:w-44",
    imageClassName: "h-auto w-full object-contain",
  },
  {
    src: whitePyramid,
    alt: "Decorative white pyramid shape",
    wrapperClassName:
      "pointer-events-none absolute top-[43%] right-[10%] z-10 hidden w-14 sm:block md:right-[13%] md:w-22 lg:w-32",
    imageClassName: "h-auto w-full object-contain",
  },
  {
    src: whiteSpring,
    alt: "Decorative large white spring shape",
    wrapperClassName:
      "pointer-events-none absolute right-[3%] bottom-[4%] z-20 w-20 sm:right-[13%] sm:w-28 md:w-36 lg:w-60",
    imageClassName: "h-auto w-full object-contain",
  },
]

export const HERO_STUDENT_AVATARS: string[] = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/22.jpg",
]

export const HERO_PARTNER_LOGOS: HeroPartnerLogoItem[] = [
  { name: "Logoipsum", icon: Globe },
  { name: "Logoipsum", icon: Sun },
  { name: "Logoipsum", icon: Zap },
  { name: "Logoipsum", icon: Compass },
  { name: "Logoipsum", icon: Disc },
]

