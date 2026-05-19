import { CalendarDays } from "lucide-react"

const imgLogo2 = "https://www.figma.com/api/mcp/asset/3f988329-885d-42f0-892e-5dd5bdb4b703"

const serviceLinks = {
  col1: ["รักษาโรคทั่วไป", "รักษาโรคเรื้อรัง", "หัตถการ"],
  col2: ["วัคซีน", "ตรวจสุขภาพ", "ใบรับรองแพทย์"],
}

const aboutLinks = {
  col1: ["แผนที่คลินิก", "ทีมแพทย์และบุคลากร", "สาขาของคลินิก"],
  col2: ["นโยบายความเป็นส่วนตัว", "เงื่อนไขการให้บริการ"],
}

export function Footer() {
  return (
    <footer className="bg-blue-900 flex flex-col gap-12 items-start overflow-hidden px-32 py-16 shrink-0 w-full">
      <div className="flex gap-12 items-start w-full">
        {/* Brand */}
        <div className="flex flex-1 flex-col gap-2 items-start min-w-0">
          <div className="h-12 overflow-hidden relative shrink-0 w-[162px]">
            <img alt="ใกล้หมอ คลินิก" className="absolute block inset-0 max-w-none size-full" src={imgLogo2} />
          </div>
          <div className="flex items-center justify-center px-2 w-full">
            <p className="flex-1 font-semibold leading-7 min-w-0 text-white text-xl tracking-normal">
              คลินิกเวชกรรม
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-6 items-center text-white tracking-normal shrink-0">
          {/* Services */}
          <div className="flex flex-col gap-2 items-start">
            <p className="font-semibold leading-7 text-lg">บริการ</p>
            <div className="flex gap-2 items-start font-normal leading-5 text-sm whitespace-nowrap">
              <div className="flex flex-col gap-2 items-start w-32">
                {serviceLinks.col1.map((l) => <p key={l} className="overflow-hidden text-ellipsis">{l}</p>)}
              </div>
              <div className="flex flex-col gap-2 items-start w-32">
                {serviceLinks.col2.map((l) => <p key={l} className="overflow-hidden text-ellipsis">{l}</p>)}
              </div>
            </div>
          </div>

          {/* About */}
          <div className="flex flex-col gap-2 items-start">
            <p className="font-semibold leading-7 text-lg">เกี่ยวกับเรา</p>
            <div className="flex gap-2 items-start font-normal leading-5 text-sm whitespace-nowrap">
              <div className="flex flex-col gap-2 items-start w-32">
                {aboutLinks.col1.map((l) => <p key={l} className="overflow-hidden text-ellipsis text-sm">{l}</p>)}
              </div>
              <div className="flex flex-col gap-2 items-start text-sm w-40">
                {aboutLinks.col2.map((l) => <p key={l} className="overflow-hidden text-ellipsis">{l}</p>)}
              </div>
            </div>
          </div>
        </div>

        {/* Appointment CTA */}
        <button className="bg-background border border-border flex gap-1.5 h-8 items-center justify-center px-3 rounded-lg shadow-xs shrink-0">
          <CalendarDays className="size-4" />
          <span className="font-medium leading-5 text-foreground text-sm tracking-normal whitespace-nowrap">
            นัดหมายพบแพทย์
          </span>
        </button>
      </div>

      <p className="font-normal leading-5 overflow-hidden text-ellipsis text-muted text-sm tracking-normal whitespace-nowrap">
        © 2026 ใกล้หมอคลีนิก. All rights reserved.
      </p>
    </footer>
  )
}
