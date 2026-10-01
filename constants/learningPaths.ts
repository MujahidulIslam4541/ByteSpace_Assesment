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

export const LEARNING_PATHS_CONTENT: LearningPathCategoryItem[] = [
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
]
