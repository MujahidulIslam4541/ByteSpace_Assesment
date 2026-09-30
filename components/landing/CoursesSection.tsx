"use client"

import { useState } from "react"
import CourseCard from "@/components/CourseCard"
import {
  COURSE_CATEGORIES,
  courses,
  EXTRA_COURSE_CATEGORIES,
} from "@/constants/courses"

interface CategoryFilterPillProps {
  category: string
  isActive: boolean
  onSelect: (category: string) => void
}

const CategoryFilterPill = ({
  category,
  isActive,
  onSelect,
}: CategoryFilterPillProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(category)}
      className={
        isActive
          ? "cursor-pointer rounded-full bg-lime-glow px-4 py-2 text-xs font-medium text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none sm:px-5 sm:py-2.5 sm:text-sm"
          : "cursor-pointer rounded-full bg-muted px-4 py-2 text-xs font-medium text-foreground/80 hover:bg-muted/80 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none sm:px-5 sm:py-2.5 sm:text-sm"
      }
    >
      {category}
    </button>
  )
}

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Featured")
  const [showAllCategories, setShowAllCategories] = useState<boolean>(false)

  const visibleCategories = showAllCategories
    ? [...COURSE_CATEGORIES, ...EXTRA_COURSE_CATEGORIES]
    : COURSE_CATEGORIES

  const filteredCourses =
    selectedCategory === "Featured"
      ? courses.slice(0, 6)
      : courses.filter((course) => course.category === selectedCategory)

  const displayedCourses = filteredCourses.length
    ? filteredCourses
    : courses.slice(0, 6)

  return (
    <section className="w-full bg-background px-4 py-12 sm:px-6 md:px-12 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="max-w-4xl text-center">
          <h2 className="mx-auto max-w-xl font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-[44px] ">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div className="mt-8 flex max-w-6xl flex-wrap items-center justify-center gap-2.5 sm:mt-10 sm:gap-3">
          {visibleCategories.map((category) => (
            <CategoryFilterPill
              key={category}
              category={category}
              isActive={selectedCategory === category}
              onSelect={setSelectedCategory}
            />
          ))}

          <button
            type="button"
            onClick={() => setShowAllCategories((prev) => !prev)}
            className="cursor-pointer px-3 py-2 text-xs font-semibold text-role-blue hover:underline focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:text-sm"
          >
            {showAllCategories ? "Show Less" : "+ More"}
          </button>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesSection
