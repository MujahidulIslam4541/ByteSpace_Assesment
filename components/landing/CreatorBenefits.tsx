import Image from "next/image"
import {
  CREATOR_BENEFITS_CONTENT,
  type CreatorBenefitItem,
} from "@/constants/creatorBenefits"

interface CreatorBenefitListItemProps {
  benefit: CreatorBenefitItem
}

const CreatorBenefitListItem = ({ benefit }: CreatorBenefitListItemProps) => {
  return (
    <li className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="flex size-5 shrink-0 items-center justify-center rounded-full bg-role-blue text-primary-foreground"
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="size-3"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
        </svg>
      </span>
      <span className="text-sm font-medium text-foreground/85 sm:text-base">
        {benefit.label}
      </span>
    </li>
  )
}

const CreatorBenefits = () => {
  return (
    <section
      aria-labelledby="creator-benefits-heading"
      className="relative w-full overflow-hidden bg-background px-4 py-12 sm:px-6 md:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-20 size-80 rounded-full bg-blue-glow/45 blur-3xl md:size-112"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-16 size-80 rounded-full bg-lime-glow/55 blur-3xl md:size-112"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -bottom-24 size-80 rounded-full bg-blue-glow/45 blur-3xl md:size-112"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative order-2 mx-auto w-full max-w-lg lg:order-1 lg:max-w-none">
          <Image
            src={CREATOR_BENEFITS_CONTENT.imageSrc}
            alt={CREATOR_BENEFITS_CONTENT.imageAlt}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <h2
            id="creator-benefits-heading"
            className="max-w-md font-heading text-3xl leading-tight font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            {CREATOR_BENEFITS_CONTENT.heading}
          </h2>

          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            <strong className="font-semibold text-foreground">
              {CREATOR_BENEFITS_CONTENT.brandHighlight}
            </strong>
            {CREATOR_BENEFITS_CONTENT.descriptionRemainder}
          </p>

          <ul className="mt-1 flex flex-col gap-3.5">
            {CREATOR_BENEFITS_CONTENT.benefits.map((benefit) => (
              <CreatorBenefitListItem key={benefit.id} benefit={benefit} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CreatorBenefits