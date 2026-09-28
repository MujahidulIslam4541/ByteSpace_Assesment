import Image from "next/image"
import { CTA_CONTENT, type CtaFloatingShapeItem } from "@/constants/cta"

interface CtaFloatingShapeProps {
  shape: CtaFloatingShapeItem
}

const CtaFloatingShape = ({ shape }: CtaFloatingShapeProps) => {
  return (
    <div aria-hidden="true" className={shape.wrapperClassName}>
      <Image
        src={shape.src}
        alt={shape.alt}
        className={shape.imageClassName}
      />
    </div>
  )
}

const CtaBackgroundGrid = () => {
  const cells = Array.from(
    { length: CTA_CONTENT.gridCellCount },
    (_, index) => index
  )

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 grid grid-cols-4 grid-rows-3 border-t border-l border-primary-foreground/15 sm:grid-cols-6 lg:grid-cols-8"
    >
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
    <section
      aria-labelledby="cta-heading"
      className="relative w-full overflow-hidden bg-role-blue py-16 text-primary-foreground sm:py-20 lg:py-28"
    >
      <CtaBackgroundGrid />

      {CTA_CONTENT.shapes.map((shape) => (
        <CtaFloatingShape key={shape.id} shape={shape} />
      ))}

      <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="cta-heading"
          className="max-w-xl font-heading text-3xl leading-tight font-extrabold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl"
        >
          {CTA_CONTENT.heading}
        </h2>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-primary-foreground/85 sm:text-sm md:text-base">
          {CTA_CONTENT.description}
        </p>

        <button
          type="button"
          className="mt-8 cursor-pointer rounded-4xl bg-lime-glow px-8 py-3.5 text-sm font-medium text-foreground hover:bg-lime-glow/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          {CTA_CONTENT.buttonLabel}
        </button>
      </div>
    </section>
  )
}

export default CtaSection

