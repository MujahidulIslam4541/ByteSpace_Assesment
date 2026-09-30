import Image from "next/image"
import platformStatsImage from "@/assets/platfromState.png"
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
      <dd className="order-1 text-2xl font-extrabold tracking-tight text-role-blue sm:text-3xl">
        {stat.value}
      </dd>
    </div>
  )
}

const PlatformStats = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background px-4 py-12 sm:px-6 md:px-12">
      <div className="pointer-events-none absolute -top-24 left-8 size-80 rounded-full bg-lime-glow/55 blur-3xl md:left-24 md:size-112" />
      <div className="pointer-events-none absolute -top-16 -right-16 size-80 rounded-full bg-blue-glow/45 blur-3xl md:size-112" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 size-80 rounded-full bg-blue-glow/45 blur-3xl md:size-112" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="max-w-lg font-heading text-3xl leading-tight font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Your Path to Professional Growth Starts Here!
          </h2>

          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <dl className="mt-2 flex flex-wrap items-center gap-8 sm:gap-14">
            {PLATFORM_STATS_CONTENT.map((stat) => (
              <StatMetricItem key={stat.id} stat={stat} />
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <Image
            src={platformStatsImage}
            alt="Smiling learner wearing headphones holding a laptop with course card and learning progress overlay"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default PlatformStats