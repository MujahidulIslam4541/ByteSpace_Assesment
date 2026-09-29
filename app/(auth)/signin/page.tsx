import Image from "next/image"
import Link from "next/link"
import signInSignUpImage from "@/assets/SignInSignUpImag.png"

const SignInBackgroundGrid = () => {
  const cells = Array.from({ length: 48 }, (_, index) => index)

  return (
    <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-4 grid-rows-6 border-t border-l border-primary-foreground/15 sm:grid-cols-6 lg:grid-cols-8">
      {cells.map((cellIndex) => (
        <div
          key={cellIndex}
          className="border-r border-b border-primary-foreground/15"
        />
      ))}
    </div>
  )
}

export default function SignInPage() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-role-blue px-4 pt-24 pb-16 text-primary-foreground sm:px-6 sm:pt-28 md:px-12 lg:pt-32 lg:pb-20">
      <SignInBackgroundGrid />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col lg:col-span-6">
          <h2 className="font-heading text-xl font-bold tracking-tight text-primary-foreground sm:text-2xl">
            Sign in with ease
          </h2>

          <p className="mt-3 max-w-md text-xs leading-relaxed text-primary-foreground/85 sm:text-sm">
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
          </p>

          <div className="mt-8 w-full max-w-lg lg:mt-10">
            <Image
              src={signInSignUpImage}
              alt="ByteSpace courses and happy students preview"
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="flex justify-center lg:col-span-6 lg:justify-end">
          <div className="w-full max-w-lg rounded-3xl bg-card p-6 text-card-foreground shadow-xl sm:p-10 lg:p-12">
            <p className="text-xs font-medium text-role-blue sm:text-sm">
              Sign In
            </p>

            <h1 className="mt-1.5 font-heading text-2xl leading-tight font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Welcome Back
            </h1>

            <form action="#" className="mt-8 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="designer@example.com"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-foreground">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                />
              </div>

              <div className="mt-1 flex justify-end">
                <button
                  type="submit"
                  className="cursor-pointer rounded-full bg-lime-glow px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-lime-glow/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground">or</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                className="flex size-12 cursor-pointer items-center justify-center rounded-2xl border border-border bg-background text-foreground transition-colors hover:bg-muted"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </button>

              <button
                type="button"
                className="flex size-12 cursor-pointer items-center justify-center rounded-2xl border border-border bg-background text-foreground transition-colors hover:bg-muted"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </button>
            </div>

            <p className="mt-10 text-center text-xs text-muted-foreground sm:mt-12">
              New user?{" "}
              <Link
                href="/signup"
                className="font-medium text-role-blue hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
