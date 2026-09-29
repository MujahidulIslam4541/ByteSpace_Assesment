import Image from "next/image"
import { BarChart2, Star } from "lucide-react"
import { type Course } from "@/constants/courses"

interface CourseCardProps {
  course: Course
}

interface CourseMetaBadgeProps {
  label: string
}

const CourseMetaBadge = ({ label }: CourseMetaBadgeProps) => {
  return (
    <span className="rounded-full bg-background/75 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur-md">
      {label}
    </span>
  )
}

const CourseCard = ({ course }: CourseCardProps) => {
  const metaBadges: string[] = [
    `${course.lessons} Lessons`,
    course.duration,
    `${course.comments} Comments`,
  ]

  return (
    <article className="flex flex-col rounded-3xl border border-border bg-card p-3.5 text-card-foreground transition-colors hover:border-foreground/20 sm:p-4">
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-muted">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />

        <div className="absolute inset-x-2.5 bottom-2.5 flex flex-wrap items-center justify-between gap-1.5">
          {metaBadges.map((badgeText) => (
            <CourseMetaBadge key={badgeText} label={badgeText} />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-heading text-base font-bold text-foreground sm:text-lg">
            {course.title}
          </h3>
          <p className="mt-0.5 text-xs text-muted-foreground">
            by{" "}
            <span className="font-medium text-role-blue">
              {course.instructor}
            </span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1 pt-0.5 text-sm font-medium text-muted-foreground">
          <span>{course.rating}</span>
          <Star className="size-4 fill-muted-foreground/35 text-muted-foreground/35" />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3.5 py-1.5 text-xs font-medium text-foreground/80">
          <BarChart2 className="size-3.5 text-foreground" />
          <span>{course.level}</span>
        </span>

        <div className="flex items-center -space-x-2">
          {course.studentAvatars.map((avatarUrl, index) => (
            <div
              key={avatarUrl}
              className="relative size-7 shrink-0 overflow-hidden rounded-full border-2 border-card bg-muted"
            >
              <Image
                src={avatarUrl}
                alt={`${course.title} student ${index + 1}`}
                fill
                sizes="28px"
                className="object-cover"
              />
            </div>
          ))}
          <span className="relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-card bg-lime-glow text-[10px] font-bold text-foreground">
            {course.extraStudents}+
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-baseline">
        <span className="font-heading text-lg font-extrabold text-role-blue sm:text-xl">
          ${course.price}
        </span>
        <span className="text-xs text-muted-foreground">/lifetime</span>
      </div>
    </article>
  )
}

export default CourseCard
