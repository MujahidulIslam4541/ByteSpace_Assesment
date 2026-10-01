import Image from "next/image"
import Link from "next/link"
import signInSignUpImage from "@/assets/SignInSignUpImag.png"
import BackgroundGrid from "@/components/BackgroundGrid"

export default function SignUpPage() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-role-blue px-4 pt-16 pb-6 text-primary-foreground sm:px-6 md:px-12 lg:h-screen lg:min-h-0 lg:pt-14 lg:pb-6">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col lg:col-span-6">
          <h2 className="font-heading text-lg font-bold tracking-tight text-primary-foreground sm:text-xl lg:text-2xl">
            Sign up and come in
          </h2>

          <p className="mt-2 max-w-md text-xs leading-relaxed text-primary-foreground/85 sm:text-sm">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no
            cost.
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
              Create an Account
            </p>

            <h1 className="mt-1 font-heading text-xl leading-tight font-extrabold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
              Welcome to
              <br />
              ByteSpace
            </h1>

            <form action="#" className="mt-5 flex flex-col gap-3 sm:mt-6 sm:gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="signup-name" className="text-xs font-medium text-foreground">
                  Full Name
                </label>
                <input
                  id="signup-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jamie Davis"
                  className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="signup-email" className="text-xs font-medium text-foreground">
                  Email
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  required
                  placeholder="designer@example.com"
                  className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="signup-password" className="text-xs font-medium text-foreground">
                  Password
                </label>
                <input
                  id="signup-password"
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
                  Continue
                </button>
              </div>
            </form>

            <p className="mt-5 text-center text-xs text-muted-foreground sm:mt-6">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-medium text-role-blue hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
