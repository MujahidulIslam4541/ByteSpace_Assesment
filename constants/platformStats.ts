import type { StaticImageData } from "next/image"
import platformStatsImage from "@/assets/platfromState.png"

export interface PlatformStatItem {
  id: string
  value: string
  label: string
}

export interface PlatformStatsContent {
  heading: string
  description: string
  imageSrc: StaticImageData
  imageAlt: string
  stats: PlatformStatItem[]
}

export const PLATFORM_STATS_CONTENT: PlatformStatsContent = {
  heading: "Your Path to Professional Growth Starts Here!",
  description:
    "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
  imageSrc: platformStatsImage,
  imageAlt:
    "Smiling learner wearing headphones holding a laptop with course card and learning progress overlay",
  stats: [
    { id: "students", value: "12K", label: "Students" },
    { id: "courses", value: "70+", label: "Courses" },
    { id: "creators", value: "16", label: "Creators" },
  ],
}

