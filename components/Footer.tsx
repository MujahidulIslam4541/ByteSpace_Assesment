import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.png"
import {
  FOOTER_LEGAL_LINKS,
  FOOTER_NAVIGATION_COLUMNS,
  type FooterNavigationColumn,
} from "@/constants/footer"

interface FooterLinkColumnProps {
  column: FooterNavigationColumn
}

const FooterLinkColumn = ({ column }: FooterLinkColumnProps) => {
  if (!column.links.length) {
    return null
  }

  return (
    <ul aria-label={column.ariaLabel} className="flex flex-col gap-4">
      {column.links.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="text-sm text-foreground/80 hover:text-foreground focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const FooterNewsletter = () => {
  return (
    <section
      aria-label="ByteSpace newsletter"
      className="w-full max-w-md space-y-5"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        <Image
          src={logo}
          alt="ByteSpace logo"
          width={28}
          height={32}
          className="h-8 w-auto object-contain"
        />
        <span className="text-2xl font-extrabold tracking-tight text-foreground">
          ByteSpace
        </span>
      </Link>

      <p className="text-sm leading-relaxed text-foreground/80">
        Stay Up to date with our latest features and releases by joining our
        newsletter.
      </p>

      <form
        action="#"
        className="flex w-full flex-col gap-3 pt-1 sm:flex-row sm:items-center"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Enter your email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="min-w-0 flex-1 rounded-4xl border border-input bg-background px-6 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-full bg-lime-glow px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-lime-glow/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          Search
        </button>
      </form>

      <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
        By subscribing, you agree to our{" "}
        <Link
          href="/privacy-policy"
          className="underline underline-offset-2 hover:text-foreground focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          Privacy Policy
        </Link>{" "}
        and consent to receive updates from our company.
      </p>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="w-full bg-background text-foreground">
      <div className="mx-auto max-w-360 px-4 border-t-2 py-12 sm:px-6 md:px-12 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <FooterNewsletter />

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 xl:gap-24"
          >
            {FOOTER_NAVIGATION_COLUMNS.map((column) => (
              <FooterLinkColumn key={column.id} column={column} />
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>

          <nav aria-label="Legal links">
            <ul className="flex flex-wrap items-center gap-6">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-foreground focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
