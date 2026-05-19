import { ArrowUpRight } from "lucide-react"

const imgArticleImage  = "https://www.figma.com/api/mcp/asset/cc669333-dee1-481e-9389-1646290808b2"
const imgArticleImage1 = "https://www.figma.com/api/mcp/asset/49d43e96-dd8f-4b63-aaee-06ea7d2671f1"
const imgArticleImage2 = "https://www.figma.com/api/mcp/asset/1d04220f-e3cc-41b3-a5d3-0cf460fde7c8"
const imgArticleImage3 = "https://www.figma.com/api/mcp/asset/5edc2c72-e620-448d-bad3-35b5ebcc3304"

const articles = [
  { image: imgArticleImage,  title: "5 หลักการกินเพื่อสุขภาพ ที่ดี ในชีวิตประจำวัน", date: "9 มี.ค. 2569", badge: "เวชศาตร์ทั่วไป" },
  { image: imgArticleImage1, title: "รู้ทันความดันโลหิตสูง ภัยเงียบที่ป้องกันได้",         date: "9 มี.ค. 2569", badge: "เวชศาตร์ทั่วไป" },
  { image: imgArticleImage2, title: "ทำไมต้องฉีดวัคซีนทุกปี ?",                              date: "9 มี.ค. 2569", badge: "เวชศาตร์ทั่วไป" },
  { image: imgArticleImage3, title: "ดูแลผู้ป่วยเบาหวานที่บ้าน อย่างไร ให้ปลอดภัย",       date: "9 มี.ค. 2569", badge: "เวชศาตร์ทั่วไป" },
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
          <span className="bg-orange-100 flex h-[22px] items-center justify-center px-2.5 rounded-lg shrink-0">
            <span className="font-medium leading-4 text-orange-600 text-xs tracking-normal whitespace-nowrap">
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
