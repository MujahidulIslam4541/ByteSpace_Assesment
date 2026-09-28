import type { StaticImageData } from "next/image"
import creatorBenefitImage from "@/assets/creatorBenifitImage.png"

export interface CreatorBenefitItem {
  id: string
  label: string
}

export interface CreatorBenefitsContent {
  heading: string
  brandHighlight: string
  descriptionRemainder: string
  imageSrc: StaticImageData
  imageAlt: string
  benefits: CreatorBenefitItem[]
}

export const CREATOR_BENEFITS_CONTENT: CreatorBenefitsContent = {
  heading: "Create & Manage Courses Easily.",
  brandHighlight: "ByteSpace",
  descriptionRemainder:
    " supports individuals or entities in the creation, publication, and administration of educational courses.",
  imageSrc: creatorBenefitImage,
  imageAlt:
    "Smiling course creator holding a tablet surrounded by revenue and happy students statistics cards",
  benefits: [
    { id: "share-expertise", label: "Share Your Expertise" },
    { id: "monetize-passion", label: "Monetize Your Passion" },
    { id: "flexibility-autonomy", label: "Flexibility and Autonomy" },
    { id: "build-community", label: "Build a Community" },
  ],
}

