import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.png"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-360 flex-col overflow-x-hidden lg:min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex max-w-6xl items-center px-4 py-4 sm:px-6 md:px-12 md:py-5">
          <Link href="/" className="inline-flex items-center">
            <Image
              src={logo}
              alt="ByteSpace logo"
              width={28}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>
      </header>
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  )
}
