import Link from "next/link"
import {
  LEARNING_PATHS_CONTENT,
  type LearningPathCategoryItem,
} from "@/constants/learningPaths"

interface LearningPathCardProps {
  category: LearningPathCategoryItem
}

const LearningPathCard = ({ category }: LearningPathCardProps) => {
  const Icon = category.icon

  return (
    <Link
      href={category.href}
      className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-card px-4 py-8 text-center text-card-foreground hover:border-foreground/25 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <span
        aria-hidden="true"
        className="flex size-14 shrink-0 items-center justify-center rounded-full bg-lime-glow text-foreground"
      >
        <Icon className="size-6 stroke-[2]" />
      </span>
      <span className="text-sm font-medium text-foreground">
        {category.title}
      </span>
    </Link>
  )
}

const LearningPaths = () => {
  if (!LEARNING_PATHS_CONTENT.categories.length) {
    return null
  }

  return (
    <section
      aria-labelledby="learning-paths-heading"
      className="w-full bg-background px-4 py-12 sm:px-6 md:px-12 lg:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="max-w-3xl text-center">
          <h2
            id="learning-paths-heading"
            className="font-heading text-2xl leading-tight font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
          >
            {LEARNING_PATHS_CONTENT.heading}
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
            {LEARNING_PATHS_CONTENT.description}
          </p>
        </div>

        <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
          {LEARNING_PATHS_CONTENT.categories.map((category) => (
            <LearningPathCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningPaths

