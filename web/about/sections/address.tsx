import { Phone, MapPin, Globe } from "lucide-react"

const imgGroup  = "https://www.figma.com/api/mcp/asset/055b40b6-d86b-4766-b1d1-a22f5630daf9"
const imgGroup1 = "https://www.figma.com/api/mcp/asset/244bdb1c-d136-4f10-9536-f6ac07eb3f96"
const imgMap    = "https://www.figma.com/api/mcp/asset/8ad4ad3f-ef7c-4dec-95f0-d9de7385aef9"

function IconBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-orange-100 flex items-center justify-center rounded-lg shrink-0 size-8">
      {children}
    </div>
  )
}

export function Address() {
  return (
    <section className="bg-background flex flex-col gap-12 items-center justify-center overflow-hidden px-32 py-32 shrink-0 w-full">
      {/* Contact card */}
      <div className="bg-card border border-border flex gap-8 items-start px-16 py-16 relative rounded-2xl shrink-0 w-full overflow-hidden">
        {/* Title */}
        <p className="font-semibold leading-10 text-foreground text-4xl tracking-normal whitespace-nowrap shrink-0">
          ติดต่อเรา
        </p>

        {/* Contact list */}
        <div className="flex flex-col gap-6 items-start shrink-0">
          {/* Phone */}
          <div className="flex gap-2 items-center">
            <IconBubble><Phone className="size-4 text-orange-600" /></IconBubble>
            <p className="font-normal leading-8 text-foreground text-2xl tracking-normal whitespace-nowrap">
              02-124-5743
            </p>
          </div>

          {/* Address */}
          <div className="flex gap-2 items-start">
            <IconBubble><MapPin className="size-4 text-orange-600" /></IconBubble>
            <div className="font-normal text-foreground text-2xl tracking-normal whitespace-nowrap">
              <p className="leading-8 mb-0">เลขที่ 12 ซอยเจริญรัด 4, คลองต้นไทร, คลองสาน,</p>
              <p className="leading-8">กรุงเทพมหานคร 10600</p>
            </div>
          </div>

          {/* LINE */}
          <div className="flex gap-2 items-center">
            <IconBubble><Globe className="size-4 text-orange-600" /></IconBubble>
            <p className="font-normal leading-8 text-foreground text-2xl tracking-normal whitespace-nowrap">
              @KindMoreClinic
            </p>
          </div>
        </div>

        {/* Decorative illustration — starts above card, shows doctors from head down */}
        <div className="absolute flex h-[358px] items-start overflow-hidden pt-[11.5px] right-8 top-[-55px] pointer-events-none">
          <div className="relative h-[715px] w-[223px] shrink-0 mr-[-44px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
          </div>
          <div className="relative h-[733px] w-[183px] shrink-0">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
          </div>
        </div>
      </div>

      {/* Map image */}
      <div className="aspect-[1062/453] relative rounded-2xl shrink-0 w-full overflow-hidden">
        <img
          alt="แผนที่ใกล้หมอคลินิก"
          className="absolute h-[100.44%] left-[-0.21%] max-w-none top-[-0.44%] w-[100.24%] pointer-events-none"
          src={imgMap}
        />
      </div>
    </section>
  )
}
