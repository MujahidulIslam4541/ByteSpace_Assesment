import Image from "next/image"
import Link from "next/link"
import { Menu, ShoppingBag } from "lucide-react"
import logo from "@/assets/logo.png"
import { NAV_LINKS } from "@/constants/navbar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full bg-transparent text-primary-foreground">
      <div className="mx-auto flex max-w-360 items-center justify-between px-4 py-5 sm:px-6 md:px-12">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image
            src={logo}
            alt="ByteSpace logo"
            width={28}
            height={32}
            className="h-8 w-auto object-contain"
          />
          <span className="text-2xl font-extrabold tracking-tight">
            ByteSpace
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/signin"
              className="text-sm font-medium transition-colors hover:opacity-80"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium transition-colors hover:opacity-80"
            >
              Join Us
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center transition-opacity hover:opacity-80"
          >
            <ShoppingBag className="size-5" />
          </button>

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                  />
                }
              >
                <Menu className="size-5" />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" sideOffset={8} className="w-48">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Menu</DropdownMenuLabel>
                  {NAV_LINKS.map((link) => (
                    <DropdownMenuItem
                      key={link.label}
                      render={<Link href={link.href} />}
                    >
                      {link.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem render={<Link href="/signin" />}>
                    Sign In
                  </DropdownMenuItem>
                  <DropdownMenuItem render={<Link href="/signup" />}>
                    Join Us
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

