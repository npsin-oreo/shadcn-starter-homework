const imgLogo = "https://www.figma.com/api/mcp/asset/485c135c-0877-47e5-b7ec-e4b75c7db671"

const navLinks = ["เกี่ยวกับ", "แพทย์", "โปรโมชัน", "แผนที่คลินิก"] as const

export function Navbar() {
  return (
    <header className="bg-background flex items-center justify-between overflow-hidden px-8 py-[14px] shrink-0 w-full">
      <div className="h-8 overflow-hidden relative shrink-0 w-[108px]">
        <img alt="ใกล้หมอ คลินิก" className="absolute block inset-0 max-w-none size-full" src={imgLogo} />
      </div>
      <nav className="flex gap-2 items-center shrink-0">
        {navLinks.map((label) => (
          <button
            key={label}
            className="flex h-9 items-center justify-center px-4 py-2 rounded-lg shrink-0"
          >
            <span className="font-medium leading-5 text-foreground text-sm tracking-normal whitespace-nowrap">
              {label}
            </span>
          </button>
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
