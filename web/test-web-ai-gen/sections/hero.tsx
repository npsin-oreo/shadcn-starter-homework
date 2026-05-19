const imgLogo1 = "https://www.figma.com/api/mcp/asset/4a28646c-3005-49dd-958f-6e270f8e2be3"
const imgArtworkContainer = "https://www.figma.com/api/mcp/asset/05558ac3-e8f3-43ac-a248-0af8a9f35dea"

export function Hero() {
  return (
    <section className="bg-background flex flex-col gap-12 h-[810px] items-start justify-center overflow-hidden px-32 py-32 relative shrink-0 w-full">
      {/* Background watermark logo */}
      <div className="absolute h-[823px] overflow-hidden right-[-115px] top-[-92px] w-[679px] pointer-events-none">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogo1} />
      </div>

      {/* Headline */}
      <div className="flex flex-col gap-4 items-start tracking-normal whitespace-nowrap relative shrink-0">
        <div className="font-bold leading-[128px] text-blue-600 text-[128px]">
          <p className="mb-0">ใกล้หมอ</p>
          <p>คลินิก</p>
        </div>
        <p className="font-medium leading-[60px] text-orange-500 text-[60px]">
          หมอใกล้บ้าน ที่เข้าใจคุณ
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 items-center relative shrink-0">
        <button className="bg-orange-600 flex h-9 items-center justify-center px-4 py-2 rounded-lg shadow-xs shrink-0">
          <span className="font-medium leading-5 text-white text-sm tracking-normal whitespace-nowrap">
            นัดหมายพบแพทย์
          </span>
        </button>
        <button className="bg-secondary flex h-9 items-center justify-center px-4 py-2 rounded-lg shadow-xs shrink-0">
          <span className="font-medium leading-5 text-secondary-foreground text-sm tracking-normal whitespace-nowrap">
            บริการทั้งหมด
          </span>
        </button>
      </div>

      {/* Doctor artwork */}
      <div className="absolute right-[124px] top-1/2 -translate-y-1/2 h-[499.5px] w-[520px] pointer-events-none">
        <img alt="" className="block size-full" src={imgArtworkContainer} />
      </div>
    </section>
  )
}
