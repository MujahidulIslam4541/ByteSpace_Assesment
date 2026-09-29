import {
  Building2,
  Camera,
  CodeXml,
  Laptop,
  PencilRuler,
  Speech,
  type LucideIcon,
} from "lucide-react"

export interface LearningPathCategoryItem {
  id: string
  title: string
  href: string
  icon: LucideIcon
}

export interface LearningPathsContent {
  heading: string
  description: string
  categories: LearningPathCategoryItem[]
}

export const LEARNING_PATHS_CONTENT: LearningPathsContent = {
  heading: "Explore Diverse Learning Paths at Bytespace",
  description:
    "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
  categories: [
    {
      id: "design",
      title: "Design",
      href: "/categories/design",
      icon: PencilRuler,
    },
    {
      id: "development",
      title: "Development",
      href: "/categories/development",
      icon: CodeXml,
    },
    {
      id: "it-software",
      title: "IT & Software",
      href: "/categories/it-software",
      icon: Laptop,
    },
    {
      id: "business",
      title: "Business",
      href: "/categories/business",
      icon: Building2,
    },
    {
      id: "marketing",
      title: "Marketing",
      href: "/categories/marketing",
      icon: Speech,
    },
    {
      id: "photography",
      title: "Photography",
      href: "/categories/photography",
      icon: Camera,
    },
  ],
}

