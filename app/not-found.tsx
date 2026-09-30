import Link from "next/link"

const NotFoundBackgroundGrid = () => {
  const cells = Array.from({ length: 40 }, (_, index) => index)

  return (
    <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-4 grid-rows-5 border-t border-l border-primary-foreground/15 sm:grid-cols-6 lg:grid-cols-8">
      {cells.map((cellIndex) => (
        <div
          key={cellIndex}
          className="border-r border-b border-primary-foreground/15"
        />
      ))}
    </div>
  )
}

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-role-blue px-4 pt-24 pb-16 text-primary-foreground sm:px-6 lg:px-8">
      <NotFoundBackgroundGrid />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="bg-linear-to-b from-lime-glow via-lime-glow/70 to-transparent bg-clip-text text-[7.5rem] leading-none font-extrabold tracking-tight text-transparent select-none sm:text-[12rem] md:text-[16rem] lg:text-[20rem]">
          404
        </span>

        <h1 className="-mt-6 max-w-3xl font-heading text-2xl leading-tight font-extrabold tracking-tight text-primary-foreground sm:-mt-12 sm:text-4xl md:-mt-16 md:text-5xl lg:-mt-20 lg:text-6xl">
          The page you are looking
          <br className="hidden sm:inline" /> for doesn&rsquo;t exist
        </h1>

        <p className="mt-5 max-w-md text-xs leading-relaxed text-primary-foreground/85 sm:mt-6 sm:text-sm md:text-base">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-4xl bg-lime-glow px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-lime-glow/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}

