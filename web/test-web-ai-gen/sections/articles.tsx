import { ArrowUpRight } from "lucide-react"

const imgImage29 = "https://www.figma.com/api/mcp/asset/7f7ef03d-ec1d-488c-a3ed-a6affbb22505"
const imgImage30 = "https://www.figma.com/api/mcp/asset/a8830383-934e-4e7a-86b6-af8a50a6042b"
const imgImage31 = "https://www.figma.com/api/mcp/asset/7888a8ec-9b81-4d79-8969-6d601cba8caa"
const imgImage32 = "https://www.figma.com/api/mcp/asset/7de205af-63c5-4dbc-892e-8ef0fc954ef7"

const articles = [
  { image: imgImage29, title: "5 หลักการกินเพื่อสุขภาพ ที่ดี ในชีวิตประจำวัน", date: "9 มี.ค. 2569", badge: "เวชศาตร์ทั่วไป" },
  { image: imgImage30, title: "รู้ทันความดันโลหิตสูง ภัยเงียบที่ป้องกันได้",         date: "9 มี.ค. 2569", badge: "เวชศาตร์ทั่วไป" },
  { image: imgImage31, title: "ทำไมต้องฉีดวัคซีนทุกปี ?",                              date: "9 มี.ค. 2569", badge: "เวชศาตร์ทั่วไป" },
  { image: imgImage32, title: "ดูแลผู้ป่วยเบาหวานที่บ้าน อย่างไร ให้ปลอดภัย",       date: "9 มี.ค. 2569", badge: "เวชศาตร์ทั่วไป" },
]

function ArticleCard({ image, title, date, badge }: (typeof articles)[number]) {
  return (
    <div className="bg-card border border-border flex flex-1 flex-col gap-6 items-start min-w-0 px-4 py-4 rounded-2xl">
      <div className="aspect-square overflow-hidden relative rounded-lg shrink-0 w-full">
        <img
          alt={title}
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-lg size-full"
          src={image}
        />
      </div>
      <div className="flex flex-col gap-2 items-start w-full">
        <p className="font-semibold leading-7 text-card-foreground text-lg tracking-normal w-full">
          {title}
        </p>
        <div className="flex items-center justify-between w-full">
          <p className="font-normal leading-5 overflow-hidden text-muted-foreground text-sm text-ellipsis tracking-normal whitespace-nowrap">
            {date}
          </p>
          <span className="bg-secondary flex h-[22px] items-center justify-center px-2.5 rounded-lg shrink-0">
            <span className="font-medium leading-4 text-secondary-foreground text-xs tracking-normal whitespace-nowrap">
              {badge}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export function Articles() {
  return (
    <section className="bg-background flex flex-col gap-12 items-center justify-center overflow-hidden px-32 py-16 shrink-0 w-full">
      <div className="flex flex-col gap-2 items-center text-foreground tracking-normal whitespace-nowrap">
        <p className="font-semibold leading-10 text-4xl">บทความสุขภาพ</p>
        <p className="font-normal leading-8 text-2xl">ความรู้สุขภาพดี ๆ จากทีมใกล้หมอ</p>
      </div>

      <div className="flex gap-6 items-center w-full">
        {articles.map((a) => <ArticleCard key={a.title} {...a} />)}
      </div>

      <button className="bg-background border border-border flex gap-1.5 h-8 items-center justify-center px-3 rounded-lg shadow-xs shrink-0">
        <ArrowUpRight className="size-4" />
        <span className="font-medium leading-5 text-foreground text-sm tracking-normal whitespace-nowrap">
          ดูบทความทั้งหมด
        </span>
      </button>
    </section>
  )
}
