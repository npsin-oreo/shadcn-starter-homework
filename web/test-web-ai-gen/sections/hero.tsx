export function Hero() {
  return (
    <section className="bg-background flex flex-col gap-12 h-[810px] items-center justify-center overflow-hidden px-32 py-32 shrink-0 w-full">
      <div className="flex flex-col gap-4 items-center text-foreground tracking-normal whitespace-nowrap">
        <p className="font-bold leading-[128px] text-[128px]">ใกล้หมอ คลินิก</p>
        <p className="font-medium leading-[60px] text-[60px]">หมอใกล้บ้าน ที่เข้าใจคุณ</p>
      </div>
      <div className="flex gap-2 items-center shrink-0">
        <button className="bg-primary flex h-9 items-center justify-center px-4 py-2 rounded-lg shadow-xs shrink-0">
          <span className="font-medium leading-5 text-primary-foreground text-sm tracking-normal whitespace-nowrap">
            นัดหมายพบแพทย์
          </span>
        </button>
        <button className="flex h-9 items-center justify-center px-4 py-2 rounded-lg shrink-0">
          <span className="font-medium leading-5 text-foreground text-sm tracking-normal whitespace-nowrap">
            บริการทั้งหมด
          </span>
        </button>
      </div>
    </section>
  )
}
