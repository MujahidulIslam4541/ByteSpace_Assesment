import Image from "next/image"
import Link from "next/link"
import signInSignUpImage from "@/assets/SignInSignUpImag.png"

const SignUpBackgroundGrid = () => {
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

export default function SignUpPage() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-role-blue px-4 pt-24 pb-16 text-primary-foreground sm:px-6 sm:pt-28 md:px-12 lg:pt-32 lg:pb-20">
      <SignUpBackgroundGrid />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col lg:col-span-6">
          <h2 className="font-heading text-xl font-bold tracking-tight text-primary-foreground sm:text-2xl">
            Sign up and come in
          </h2>

          <p className="mt-3 max-w-md text-xs leading-relaxed text-primary-foreground/85 sm:text-sm">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no
            cost.
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
              Create an Account
            </p>

            <h1 className="mt-1.5 font-heading text-2xl leading-tight font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Welcome to
              <br />
              ByteSpace
            </h1>

            <form action="#" className="mt-8 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jamie Davis"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                />
              </div>

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
                  Continue
                </button>
              </div>
            </form>

            <p className="mt-12 text-center text-xs text-muted-foreground sm:mt-16">
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
