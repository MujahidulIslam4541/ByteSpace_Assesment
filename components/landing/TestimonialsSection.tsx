import Image from "next/image"
import {
  TESTIMONIALS_CONTENT,
  type TestimonialItem,
} from "@/constants/testimonials"

interface TestimonialCardProps {
  testimonial: TestimonialItem
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <article className="flex flex-col gap-5 rounded-3xl bg-card p-6 text-card-foreground shadow-xs sm:p-8">
      <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-muted">
        <Image
          src={testimonial.avatarSrc}
          alt={testimonial.avatarAlt}
          width={56}
          height={56}
          className="size-full rounded-full object-cover"
        />
      </div>

      <div className="space-y-1">
        <h3 className="font-heading text-base font-bold text-foreground">
          {testimonial.name}
        </h3>
        <p className="text-sm font-medium text-role-blue">{testimonial.role}</p>
      </div>

      <blockquote className="text-sm leading-relaxed text-muted-foreground">
        {testimonial.quote}
      </blockquote>
    </article>
  )
}

const TestimonialsSection = () => {
  if (!TESTIMONIALS_CONTENT.length) {
    return null
  }

  return (
    <section className="relative w-full overflow-hidden  bg-background py-12 lg:py-20">

      <div className="pointer-events-none absolute top-4 left-1/3 size-80 -translate-x-1/4 rounded-full bg-lime-glow/40 blur-3xl md:size-112" />

      <div className="pointer-events-none absolute top-1/3 -right-16 size-80 rounded-full bg-lime-glow/40 blur-3xl md:size-112" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 size-80 rounded-full bg-blue-glow/40 blur-3xl md:size-112" />

      <div className="relative z-10 mx-auto flex max-w-300 flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <h2 className="max-w-3xl font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-[44px]">
            Discover What Our Community Is Saying
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS_CONTENT.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

