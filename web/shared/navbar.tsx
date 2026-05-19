import Link from "next/link"

const imgLogo = "https://www.figma.com/api/mcp/asset/1da08f4e-77d6-41a6-9d1b-2661210d0ced"

const navLinks = [
  { label: "เกี่ยวกับ", href: "/about" },
  { label: "แพทย์",    href: "/doctors" },
  { label: "บริการ",   href: "/promotions" },
] as const

type NavHref = (typeof navLinks)[number]["href"]

interface NavbarProps {
  activePage?: NavHref
}

export function Navbar({ activePage }: NavbarProps) {
  return (
    <header className="bg-background flex items-center justify-between overflow-hidden px-8 py-[14px] shrink-0 w-full">
      <Link href="/test-web-ai-gen" className="h-8 overflow-hidden relative shrink-0 w-[108px] block">
        <img alt="ใกล้หมอ คลินิก" className="absolute block inset-0 max-w-none size-full" src={imgLogo} />
      </Link>
      <nav className="flex gap-2 items-center shrink-0">
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`flex h-9 items-center justify-center px-4 py-2 rounded-lg shrink-0 ${
              activePage === href ? "bg-input" : ""
            }`}
          >
            <span className="font-medium leading-5 text-foreground text-sm tracking-normal whitespace-nowrap">
              {label}
            </span>
          </Link>
        ))}
        <button className="bg-orange-600 flex h-9 items-center justify-center px-4 py-2 rounded-lg shadow-xs shrink-0">
          <span className="font-medium leading-5 text-white text-sm tracking-normal whitespace-nowrap">
            ปรึกษาปัญหาสุขภาพ
          </span>
        </button>
      </nav>
    </header>
  )
}
