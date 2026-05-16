import { ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "รักษาโรคทั่วไป",
    desc: "ไข้หวัด ปวดหัว ท้องเสีย ภูมิแพ้ เจ็บคอ ผื่น ฯลฯ  ปรึกษาหมอได้ทันที ไม่ต้องรอคิวนาน",
  },
  {
    title: "ตัดไหม ทำแผล ทำหัตถการ",
    desc: "บริการทำแผล ล้างแผล ตัดไหม เย็บแผล ดูแล ใส่ใจ ตั้งแต่แผลขนาดเล็กถึงแผลขนาดใหญ่   ",
  },
  {
    title: "เบาหวาน ความดัน ไขมัน",
    desc: "เบาหวาน ความดัน ไขมันสูง ดูแลติดตามอาการ และจ่ายยาต่อเนื่อง ด้วยความใกล้ชิด",
  },
  {
    title: "วัคซีนเด็ก-ผู้ใหญ่",
    desc: "วัคซีนพื้นฐานสำหรับเด็กและผู้ใหญ่  เช่น วัคซีน ไข้หวัดใหญ่ บาดทะยัก ตับอักเสบเอ/บี HPV ",
  },
  {
    title: "แพ็กเกจตรวจสุขภาพ",
    desc: "ตรวจสุขภาพประจำปี ตรวจเลือด ตรวจน้ำตาล  ตรวจปัสสวะ ตรวจไขมันตรวจการทำงานของไต ",
  },
  {
    title: "ใบรับรองแพทย์",
    desc: "ออกใบรับรองแพทย์ด่วน สำหรับสมัครงาน ทำใบขับขี่ ราคาเดียว 150 บาท จบใน 15 นาที",
  },
]

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-card border border-border flex flex-1 flex-col gap-2 items-end min-w-0 px-4 py-4 rounded-2xl">
      <p className="font-semibold leading-8 min-w-full text-card-foreground text-2xl tracking-normal w-min">
        {title}
      </p>
      <p className="font-normal leading-6 min-w-full overflow-hidden text-base text-muted-foreground text-ellipsis tracking-normal w-min whitespace-pre-wrap">
        {desc}
      </p>
      <button className="bg-secondary flex items-center justify-center rounded-lg size-8 shrink-0">
        <ArrowUpRight className="size-4" />
      </button>
    </div>
  )
}

export function Services() {
  const [row1, row2] = [services.slice(0, 3), services.slice(3)]
  return (
    <section className="bg-background flex flex-col gap-12 items-center justify-center overflow-hidden px-32 py-32 shrink-0 w-full">
      <div className="flex flex-col gap-2 items-center text-foreground tracking-normal whitespace-nowrap">
        <p className="font-semibold leading-10 text-4xl">ครบทุกบริการสุขภาพ</p>
        <p className="font-normal leading-8 text-2xl">
          หมอใกล้บ้านที่เข้าใจคุณ ดูแลด้วยความใส่ใจในทุกการรักษา
        </p>
      </div>

      <div className="flex flex-col gap-4 items-start w-full">
        <div className="flex gap-6 items-center w-full">
          {row1.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
        <div className="flex gap-6 items-center w-full">
          {row2.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  )
}
