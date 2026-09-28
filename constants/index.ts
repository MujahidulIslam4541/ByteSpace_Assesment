export interface FooterLinkItem {
  label: string
  href: string
}

export interface FooterNavigationColumn {
  id: string
  ariaLabel: string
  links: FooterLinkItem[]
}

export const FOOTER_NAVIGATION_COLUMNS: FooterNavigationColumn[] = [
  {
    id: "categories-primary",
    ariaLabel: "Featured and business categories",
    links: [
      { label: "Featured Courses", href: "/courses/featured" },
      { label: "Featured Categories", href: "/categories/featured" },
      { label: "Business", href: "/categories/business" },
      { label: "IT", href: "/categories/it" },
      { label: "Design", href: "/categories/design" },
    ],
  },
  {
    id: "categories-secondary",
    ariaLabel: "Additional course categories",
    links: [
      { label: "Development", href: "/categories/development" },
      { label: "Marketing", href: "/categories/marketing" },
      { label: "Photography", href: "/categories/photography" },
      { label: "Finance", href: "/categories/finance" },
      { label: "Sport", href: "/categories/sport" },
    ],
  },
  {
    id: "company-links",
    ariaLabel: "Company and support links",
    links: [
      { label: "Become a Creator", href: "/creator" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
]

export const FOOTER_LEGAL_LINKS: FooterLinkItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookies Settings", href: "/cookies-settings" },
]

