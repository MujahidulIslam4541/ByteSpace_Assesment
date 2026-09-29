import type { StaticImageData } from "next/image"
import type { LucideIcon } from "lucide-react"
import { Compass, Disc, Globe, Sun, Zap } from "lucide-react"
import rightCylinder from "@/assets/Cone (1).png"
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
      "pointer-events-none absolute top-28 -left-2 z-10 w-20 sm:top-32 sm:w-32 md:w-40 lg:w-48",
    imageClassName: "h-auto w-full object-contain",
  },
  {
    src: whiteSpring,
    alt: "Decorative small white spring shape",
    wrapperClassName:
      "pointer-events-none absolute top-[40%] left-[12%] z-10 hidden w-14 sm:block md:left-[15%] md:w-20 lg:w-24",
    imageClassName: "h-auto w-full object-contain",
  },
  {
    src: whiteTorus,
    alt: "Decorative white ring shape",
    wrapperClassName:
      "pointer-events-none absolute bottom-4 left-[2%] z-20 w-24 sm:bottom-6 sm:left-[5%] sm:w-36 md:w-44 lg:w-52",
    imageClassName: "h-auto w-full object-contain",
  },
  {
    src: rightCylinder,
    alt: "Decorative cylinder shape",
    wrapperClassName:
      "pointer-events-none absolute top-24 -right-2 z-10 w-20 sm:top-28 sm:w-32 md:w-40 lg:w-48",
    imageClassName: "h-auto w-full object-contain",
  },
  {
    src: whitePyramid,
    alt: "Decorative white pyramid shape",
    wrapperClassName:
      "pointer-events-none absolute top-[38%] right-[12%] z-10 hidden w-16 sm:block md:right-[15%] md:w-24 lg:w-28",
    imageClassName: "h-auto w-full object-contain",
  },
  {
    src: whiteSpring,
    alt: "Decorative large white spring shape",
    wrapperClassName:
      "pointer-events-none absolute right-[4%] bottom-6 z-20 w-20 sm:right-[7%] sm:bottom-8 sm:w-32 md:w-40 lg:w-44",
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

