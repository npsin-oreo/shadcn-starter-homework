import { ArrowUpRight } from "lucide-react"

const imgRectangle  = "https://www.figma.com/api/mcp/asset/519372da-dfc4-495c-92f2-7ad8755f5f4a"
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/8b531de2-00c1-4d3e-8327-ad1131325f9d"
const imgRectangle2 = "https://www.figma.com/api/mcp/asset/bf8e704d-c4f3-4e7a-8a28-1d4b8b51119c"

const doctors = [
  {
    image: imgRectangle,
    name: "พญ. สุขกาย สบายใจ",
    edu: ["แพทย์ศาสตรบัณฑิต", "มหาวิทยาลัยแห่งหนึ่ง"],
    badges: ["เวชศาตร์ทั่วไป", "สาขาวงเวียนใหญ่"],
  },
  {
    image: imgRectangle1,
    name: "นพ. สมชาย ใจดี",
    edu: ["แพทย์ศาสตรบัณฑิต", "มหาวิทยาลัยแห่งหนึ่ง"],
    badges: ["เวชศาตร์ทั่วไป", "สาขาวงเวียนใหญ่"],
  },
  {
    image: imgRectangle2,
    name: "นพ. เกรียรติศักดิ์ ชัยชาญชีวิญ",
    edu: ["แพทย์ศาสตรบัณฑิต", "มหาวิทยาลัยแห่งหนึ่ง"],
    badges: ["เวชศาตร์ทั่วไป", "สาขาวงเวียนใหญ่"],
  },
]

function DoctorCard({
  image,
  name,
  edu,
  badges,
}: {
  image: string
  name: string
  edu: string[]
  badges: string[]
}) {
  return (
    <div className="bg-card border border-border flex flex-1 flex-col gap-6 items-start min-w-0 px-4 py-4 rounded-2xl">
      <div className="aspect-square relative rounded-lg shrink-0 w-full">
        <img
          alt={name}
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-lg size-full"
          src={image}
        />
      </div>
      <div className="flex flex-col gap-2 items-start w-full">
        <p className="font-semibold leading-8 text-card-foreground text-2xl tracking-normal w-full">
          {name}
        </p>
        <div className="overflow-hidden text-muted-foreground text-base text-ellipsis tracking-normal w-full">
          <p className="font-normal leading-6 mb-0 text-base">{edu[0]}</p>
          <p className="font-normal leading-6 text-base">{edu[1]}</p>
        </div>
      </div>
      <div className="flex gap-1 items-start">
        {badges.map((badge) => (
          <span key={badge} className="bg-orange-100 flex h-[22px] items-center justify-center px-2.5 rounded-lg shrink-0">
            <span className="font-medium leading-4 text-orange-600 text-xs tracking-normal whitespace-nowrap">
              {badge}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Doctors() {
  return (
    <section className="bg-background flex flex-col gap-12 items-center justify-center overflow-hidden px-32 py-32 shrink-0 w-full">
      <div className="flex flex-col gap-2 items-center text-foreground tracking-normal whitespace-nowrap">
        <p className="font-semibold leading-10 text-4xl">ทีมแพทย์ใกล้หมอ</p>
        <p className="font-normal leading-8 text-2xl">อุ่นใจด้วยทีมหมอที่พร้อมดูแลด้วยความเข้าใจ</p>
      </div>

      <div className="flex gap-6 items-center w-full">
        {doctors.map((d) => (
          <DoctorCard key={d.name} {...d} />
        ))}
      </div>

      <button className="bg-background border border-border flex gap-1.5 h-8 items-center justify-center px-3 rounded-lg shadow-xs shrink-0">
        <ArrowUpRight className="size-4" />
        <span className="font-medium leading-5 text-foreground text-sm tracking-normal whitespace-nowrap">
          ดูทีมแพทย์ทั้งหมดของเรา
        </span>
      </button>
    </section>
  )
}
