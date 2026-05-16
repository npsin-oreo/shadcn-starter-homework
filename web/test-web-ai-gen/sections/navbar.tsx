const navLinks = ["เกี่ยวกับ", "แพทย์", "โปรโมชัน", "แผนที่คลินิก"] as const

export function Navbar() {
  return (
    <header className="bg-background flex items-center justify-between overflow-hidden px-32 py-3.5 shrink-0 w-full">
      <p className="font-bold leading-7 text-primary text-xl tracking-normal whitespace-nowrap">
        ใกล้หมอ คลินิกเวชกรรม
      </p>
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
        <button className="bg-primary flex h-9 items-center justify-center px-4 py-2 rounded-lg shadow-xs shrink-0">
          <span className="font-medium leading-5 text-primary-foreground text-sm tracking-normal whitespace-nowrap">
            ปรึกษาปัญหาสุขภาพ
          </span>
        </button>
      </nav>
    </header>
  )
}
