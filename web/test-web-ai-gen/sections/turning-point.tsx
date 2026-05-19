import { CalendarDays } from "lucide-react"

export function TurningPoint() {
  return (
    <section className="bg-background flex flex-col items-center justify-center overflow-hidden px-32 py-16 shrink-0 w-full">
      <div className="bg-blue-600 border border-border flex gap-2 items-start px-8 py-8 rounded-2xl w-full">
        {/* Text */}
        <div className="flex flex-1 flex-col gap-2 items-start min-w-0 text-white">
          <div className="font-semibold text-2xl tracking-normal w-full">
            <p className="leading-8 mb-0">ให้ &ldquo;เรื่องสุขภาพดี&rdquo; เป็นเรื่องใกล้ตัว</p>
            <p className="leading-8">ใกล้หมอคลินิก หมอใกล้บ้านที่พร้อมดูแลคุณทุกวัน</p>
          </div>
          <div className="font-normal overflow-hidden text-base text-ellipsis tracking-normal w-full whitespace-pre-wrap">
            <p className="leading-6 mb-0 text-base">{`ให้คุณอุ่นใจทุกครั้งที่ปรึกษา เพียงแอด LINE @KindMoreClinic เพื่อนัดพบหมอ `}</p>
            <p className="leading-6 text-base">
              รับส่วนลดพิเศษ และอัปเดตสาระสุขภาพดี ๆ ส่งตรงจากทีมหมอใกล้บ้านที่เข้าใจคุณ
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 items-center shrink-0">
          <button className="bg-background border border-border flex h-8 items-center justify-center px-4 py-[6px] rounded-lg shadow-xs shrink-0">
            <span className="font-medium leading-5 text-foreground text-sm tracking-normal whitespace-nowrap">
              แผนที่คลินิก
            </span>
          </button>
          <button className="bg-background border border-border flex gap-1.5 h-8 items-center justify-center px-3 rounded-lg shadow-xs shrink-0">
            <CalendarDays className="size-4" />
            <span className="font-medium leading-5 text-foreground text-sm tracking-normal whitespace-nowrap">
              นัดหมายพบแพทย์
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
