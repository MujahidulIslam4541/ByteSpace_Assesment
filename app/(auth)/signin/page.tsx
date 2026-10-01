import Image from "next/image"
import Link from "next/link"
import signInSignUpImage from "@/assets/SignInSignUpImag.png"
import BackgroundGrid from "@/components/BackgroundGrid"

export default function SignInPage() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-role-blue px-4 pt-16 pb-6 text-primary-foreground sm:px-6 md:px-12 lg:h-screen lg:min-h-0 lg:pt-14 lg:pb-6">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col lg:col-span-6">
          <h2 className="font-heading text-lg font-bold tracking-tight text-primary-foreground sm:text-xl lg:text-2xl">
            Sign in with ease
          </h2>

          <p className="mt-2 max-w-md text-xs leading-relaxed text-primary-foreground/85 sm:text-sm">
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
          </p>

          <div className="mt-4 flex w-full max-w-sm justify-center sm:max-w-md lg:mt-6 lg:max-w-120 xl:max-w-md">
            <Image
              src={signInSignUpImage}
              alt="ByteSpace courses and happy students preview"
              priority
              className="h-auto max-h-[36vh] w-full object-contain lg:max-h-[60vh]"
            />
          </div>
        </div>

        <div className="flex justify-center lg:col-span-6 lg:justify-start">
          <div className="w-full max-w-md rounded-3xl bg-card p-6 text-card-foreground shadow-xl sm:p-7 lg:max-w-120 lg:p-8">
            <p className="text-xs font-medium text-role-blue sm:text-sm">
              Sign In
            </p>

            <h1 className="mt-1 font-heading text-xl leading-tight font-extrabold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
              Welcome Back
            </h1>

            <form action="#" className="mt-5 flex flex-col gap-3.5 sm:mt-6 sm:gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="signin-email" className="text-xs font-medium text-foreground">
                  Email
                </label>
                <input
                  id="signin-email"
                  name="email"
                  type="email"
                  required
                  placeholder="designer@example.com"
                  className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="signin-password" className="text-xs font-medium text-foreground">
                  Password
                </label>
                <input
                  id="signin-password"
                  name="password"
                  type="password"
                  required
                  placeholder="********"
                  className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                />
              </div>

              <div className="mt-0.5 flex justify-end">
                <button
                  type="submit"
                  className="cursor-pointer rounded-full bg-lime-glow px-7 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-lime-glow/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="my-4 flex items-center gap-4 sm:my-5">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground">or</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Sign in with Facebook"
                className="flex size-10 cursor-pointer items-center justify-center rounded-2xl border border-border bg-background text-foreground transition-colors hover:bg-muted sm:size-11"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 sm:size-5"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Sign in with Google"
                className="flex size-10 cursor-pointer items-center justify-center rounded-2xl border border-border bg-background text-foreground transition-colors hover:bg-muted sm:size-11"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 sm:size-5"
                >
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground sm:mt-5">
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
