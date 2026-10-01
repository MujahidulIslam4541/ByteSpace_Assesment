import Image from "next/image"
import { CTA_CONTENT, type CtaFloatingShapeItem } from "@/constants/cta"
import { BackgroundGrid } from "../BackgroundGrid"

interface CtaFloatingShapeProps {
  shape: CtaFloatingShapeItem
}

const CtaFloatingShape = ({ shape }: CtaFloatingShapeProps) => {
  return (
    <div className={shape.wrapperClassName}>
      <Image
        src={shape.src}
        alt={shape.alt}
        className={shape.imageClassName}
      />
    </div>
  )
}


const CtaSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-role-blue py-16 text-primary-foreground sm:py-20">
      <BackgroundGrid cellsCount={72} rowsClass="grid-rows-5" />


      {CTA_CONTENT.map((shape) => (
        <CtaFloatingShape key={shape.id} shape={shape} />
      ))}

      <div className="relative z-20 flex flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h2 className="max-w-2xl font-heading text-3xl leading-tight font-semibold tracking-tight text-primary-foreground sm:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="mt-6 max-w-4xl text-xs leading-relaxed text-primary-foreground/85 sm:text-sm md:text-base">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="mt-8 cursor-pointer rounded-4xl bg-lime-glow px-8 py-3.5 text-sm font-medium text-foreground hover:bg-lime-glow/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Join as Creator
        </button>
      </div>
    </section>
  )
}

export default CtaSection
