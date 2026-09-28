import Image from "next/image"
import {
  PLATFORM_STATS_CONTENT,
  type PlatformStatItem,
} from "@/constants/platformStats"

interface StatMetricItemProps {
  stat: PlatformStatItem
}

const StatMetricItem = ({ stat }: StatMetricItemProps) => {
  return (
    <div className="flex flex-col gap-1">
      <dt className="order-2 text-xs text-muted-foreground sm:text-sm">
        {stat.label}
      </dt>
      <dd className="order-1 font-heading text-2xl font-extrabold tracking-tight text-role-blue sm:text-3xl">
        {stat.value}
      </dd>
    </div>
  )
}

const PlatformStats = () => {
  return (
    <section
      aria-labelledby="platform-stats-heading"
      className="relative w-full overflow-hidden bg-background px-4 py-12 sm:px-6 md:px-12 "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-8 size-80 rounded-full bg-lime-glow/55 blur-3xl md:left-24 md:size-112"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 size-80 rounded-full bg-blue-glow/45 blur-3xl md:size-112"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 size-80 rounded-full bg-blue-glow/45 blur-3xl md:size-112"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6">
          <h2
            id="platform-stats-heading"
            className="max-w-lg font-heading text-3xl leading-tight font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            {PLATFORM_STATS_CONTENT.heading}
          </h2>

          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            {PLATFORM_STATS_CONTENT.description}
          </p>

          <dl className="mt-2 flex flex-wrap items-center gap-8 sm:gap-14">
            {PLATFORM_STATS_CONTENT.stats.map((stat) => (
              <StatMetricItem key={stat.id} stat={stat} />
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <Image
            src={PLATFORM_STATS_CONTENT.imageSrc}
            alt={PLATFORM_STATS_CONTENT.imageAlt}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default PlatformStats