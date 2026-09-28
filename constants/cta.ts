import type { StaticImageData } from "next/image"
import whiteCone from "@/assets/Cone.png"
import whiteCylinder from "@/assets/Cone (1).png"
import limeTorus from "@/assets/Cone (2).png"
import whiteSpring from "@/assets/Frame.png"
import limeSpiral from "@/assets/Mask Group.png"
import limeSpiral2 from "@/assets/Frame (2).png"
import limePyramid from "@/assets/vectorimage.png"

export interface CtaFloatingShapeItem {
  id: string
  src: StaticImageData
  alt: string
  wrapperClassName: string
  imageClassName: string
}

export interface CtaSectionContent {
  heading: string
  description: string
  buttonLabel: string
  gridColumnsMobile: number
  gridColumnsTablet: number
  gridColumnsDesktop: number
  gridRows: number
  gridCellCount: number
  shapes: CtaFloatingShapeItem[]
}

export const CTA_CONTENT: CtaSectionContent = {
  heading: "Unlock Your Potential as a Creator with ByteSpace",
  description:
    "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
  buttonLabel: "Join as Creator",
  gridColumnsMobile: 4,
  gridColumnsTablet: 6,
  gridColumnsDesktop: 12,
  gridRows: 4,
  gridCellCount: 48,
  shapes: [
    {
      id: "top-left-lime-spiral",
      src: limeSpiral,
      alt: "Decorative lime spiral shape",
      wrapperClassName:
        "pointer-events-none absolute -top-2 -left-2 z-10 w-20 sm:w-28 md:w-36 lg:w-44",
      imageClassName: "h-auto w-full object-contain",
    },
    {
      id: "top-left-white-spring",
      src: whiteSpring,
      alt: "Decorative white spring shape",
      wrapperClassName:
        "pointer-events-none absolute top-6 left-[14%] z-10 hidden w-16 sm:block md:w-24 lg:w-32",
      imageClassName: "h-auto w-full object-contain",
    },
    {
      id: "middle-left-white-cone",
      src: whiteCone,
      alt: "Decorative white cone shape",
      wrapperClassName:
        "pointer-events-none absolute bottom-12 -left-2 z-10 w-16 sm:w-24 md:w-28 lg:w-32",
      imageClassName: "h-auto w-full object-contain",
    },
    {
      id: "bottom-left-lime-torus",
      src: limeTorus,
      alt: "Decorative lime ring shape",
      wrapperClassName:
        "pointer-events-none absolute -bottom-2 left-[4%] z-10 w-32 sm:w-44 md:w-56 lg:w-64",
      imageClassName: "h-auto w-full object-contain",
    },
    {
      id: "top-right-lime-pyramid",
      src: limePyramid,
      alt: "Decorative lime pyramid shape",
      wrapperClassName:
        "pointer-events-none absolute top-6 right-[14%] z-10 hidden w-16 sm:block md:w-24 lg:w-32",
      imageClassName: "h-auto w-full object-contain",
    },
    {
      id: "middle-right-white-cylinder",
      src: whiteCylinder,
      alt: "Decorative white cylinder shape",
      wrapperClassName:
        "pointer-events-none absolute top-8 -right-2 z-10 w-20 sm:w-28 md:w-36 lg:w-44",
      imageClassName: "h-auto w-full object-contain",
    },
    {
      id: "bottom-right-lime-spiral",
      src: limeSpiral2,
      alt: "Decorative bottom right lime spiral shape",
      wrapperClassName:
        "pointer-events-none absolute -bottom-0 right-[7%] z-10 w-24 sm:w-32 md:w-40 lg:w-48",
      imageClassName: "h-auto w-full  object-contain",
    },
  ],
}

