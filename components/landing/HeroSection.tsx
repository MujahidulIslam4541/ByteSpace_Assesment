import Image from "next/image"
import { Search, Star } from "lucide-react"
import heroPersonImage from "@/assets/Image.png"
import {
  HERO_FLOATING_SHAPES,
  HERO_PARTNER_LOGOS,
  HERO_STUDENT_AVATARS,
  type HeroFloatingShapeItem,
} from "@/constants/hero"

interface HeroFloatingShapeProps {
  shape: HeroFloatingShapeItem
}

const HeroFloatingShape = ({ shape }: HeroFloatingShapeProps) => {
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

const HeroBackgroundGrid = () => {
  const cells = Array.from({ length: 96 }, (_, index) => index)

  return (
    <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-4 grid-rows-6 border-t border-l border-primary-foreground/15 sm:grid-cols-8 lg:grid-cols-12">
      {cells.map((cellIndex) => (
        <div
          key={cellIndex}
          className="border-r border-b border-primary-foreground/15"
        />
      ))}
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="relative w-full overflow-hidden bg-role-blue px-4 pt-28 text-primary-foreground sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        <HeroBackgroundGrid />

        {HERO_FLOATING_SHAPES.map((shape, index) => (
          <HeroFloatingShape key={index} shape={shape} />
        ))}

        <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="max-w-4xl font-heading text-3xl leading-tight font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-7xl">
            Get Access to Hundreds
            <br className="hidden sm:inline" /> Courses Available
          </h1>

          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-primary-foreground/85 sm:text-sm md:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses
          </p>

          <form
            action="#"
            className="mt-8 flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <div className="flex flex-1 items-center gap-3 rounded-full bg-background px-5 py-3.5 text-foreground shadow-sm">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer rounded-full bg-lime-glow px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-lime-glow/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Search
            </button>
          </form>
        </div>

        <div className="relative z-20 mx-auto mt-10 flex w-full max-w-4xl items-end justify-center sm:mt-14">
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[78%] w-[94%] -translate-x-1/2 rounded-t-full bg-lime-glow sm:h-[82%] sm:w-[86%]" />

          <div className="relative z-10 mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl">
            <Image
              src={heroPersonImage}
              alt="Smiling student wearing headphones and holding a laptop"
              priority
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="absolute top-[10%] left-[2%] z-20 rounded-2xl bg-card px-3.5 py-2.5 text-left text-card-foreground shadow-lg sm:top-[16%] sm:left-[8%] sm:px-5 sm:py-3.5 md:left-[11%]">
            <p className="text-xs font-bold text-foreground sm:text-sm">
              UI/UX Design
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-[10px] text-muted-foreground sm:text-xs">
              <span>200 Courses</span>
              <span>•</span>
              <span>1000+ Students</span>
            </p>
          </div>

          <div className="absolute top-[16%] right-[2%] z-20 rounded-2xl bg-card px-3.5 py-3 text-left text-card-foreground shadow-lg sm:top-[20%] sm:right-[6%] sm:px-5 sm:py-4 md:right-[9%]">
            <p className="text-[10px] font-medium text-muted-foreground sm:text-xs">
              Learning Progress
            </p>
            <p className="mt-1 text-xl font-extrabold text-foreground sm:text-3xl">
              55%
            </p>
            <div className="mt-2 h-1.5 w-24 overflow-hidden rounded-full bg-muted sm:mt-2.5 sm:w-36 md:w-44">
              <div className="h-full w-[55%] rounded-full bg-lime-glow" />
            </div>
          </div>

          <div className="absolute bottom-[8%] left-[2%] z-20 rounded-2xl bg-card px-3.5 py-2.5 text-left text-card-foreground shadow-lg sm:bottom-[14%] sm:left-[8%] sm:px-4 sm:py-3 md:left-[11%]">
            <p className="text-xs font-bold text-foreground sm:text-sm">
              Happy Students
            </p>
            <div className="mt-0.5 flex items-center gap-1 text-[10px] text-muted-foreground sm:text-xs">
              <span>4.9 (240)</span>
              <Star className="size-3 fill-amber-400 text-amber-400 sm:size-3.5" />
            </div>

            <div className="mt-2 flex items-center -space-x-2">
              {HERO_STUDENT_AVATARS.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar}
                  alt="Happy student"
                  width={28}
                  height={28}
                  className="size-6 rounded-full object-cover ring-2 ring-background sm:size-7"
                />
              ))}
              <span className="flex size-6 items-center justify-center rounded-full bg-lime-glow text-[9px] font-bold text-foreground ring-2 ring-background sm:size-7 sm:text-[10px]">
                2K+
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-muted/60 px-4 py-7 sm:px-6 sm:py-9 md:px-12">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 sm:justify-between sm:gap-10">
          {HERO_PARTNER_LOGOS.map((partner, index) => {
            const Icon = partner.icon
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 text-muted-foreground"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-muted-foreground/20 text-muted-foreground">
                  <Icon className="size-4" />
                </span>
                <span className="text-base font-bold tracking-tight sm:text-lg">
                  {partner.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HeroSection;