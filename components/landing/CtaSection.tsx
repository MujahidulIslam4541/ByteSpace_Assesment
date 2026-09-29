import Image from "next/image"
import { CTA_CONTENT, type CtaFloatingShapeItem } from "@/constants/cta"

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

const CtaBackgroundGrid = () => {
  const cells = Array.from({ length: 48 }, (_, index) => index)

  return (
    <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-4 grid-rows-3 border-t border-l border-primary-foreground/15 sm:grid-cols-6 lg:grid-cols-8">
      {cells.map((cellIndex) => (
        <div
          key={cellIndex}
          className="border-r border-b border-primary-foreground/15"
        />
      ))}
    </div>
  )
}

const CtaSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-role-blue py-16 text-primary-foreground sm:py-20 lg:py-28">
      <CtaBackgroundGrid />

      {CTA_CONTENT.map((shape) => (
        <CtaFloatingShape key={shape.id} shape={shape} />
      ))}

      <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h2 className="max-w-xl font-heading text-3xl leading-tight font-extrabold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-primary-foreground/85 sm:text-sm md:text-base">
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
