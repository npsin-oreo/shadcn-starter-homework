import { ChevronDown } from "lucide-react"

interface Service {
  title: string
  description: string
  badge: string
}

const services: Service[] = [
  {
    title: "รักษาโรคทั่วไป",
    description: "ไข้หวัด ปวดหัว ท้องเสีย ภูมิแพ้ เจ็บคอ ผื่น ฯลฯ  ปรึกษาหมอได้ทันที ไม่ต้องรอคิวนาน",
    badge: "เหมาะสมกับผู้ที่ต้องการรักษาอาการป่วยเบื้องต้นทั่วไป",
  },
  {
    title: "ตัดไหม ทำแผล ทำหัตถการ",
    description: "บริการทำแผล ล้างแผล ตัดไหม เย็บแผล ดูแล ใส่ใจ ตั้งแต่แผลขนาดเล็กถึงแผลขนาดใหญ่   ",
    badge: "เหมาะสมกับผู้ที่ต้องการฉีดวัคซีนป้องกันโรคต่างๆ",
  },
  {
    title: "เบาหวาน ความดัน ไขมัน",
    description: "เบาหวาน ความดัน ไขมันสูง ดูแลติดตามอาการ และจ่ายยาต่อเนื่อง ด้วยความใกล้ชิด",
    badge: "เหมาะสมกับผู้ที่ต้องการดูแลรักษาโรคเรื้อรังต่อเนื่อง",
  },
  {
    title: "วัคซีนเด็ก-ผู้ใหญ่",
    description: "วัคซีนพื้นฐานสำหรับเด็กและผู้ใหญ่  เช่น วัคซีน ไข้หวัดใหญ่ บาดทะยัก ตับอักเสบเอ/บี HPV ",
    badge: "เหมาะสมกับผู้ที่ต้องการตรวจสุขภาพประจำปี",
  },
  {
    title: "แพ็กเกจตรวจสุขภาพ",
    description: "ตรวจสุขภาพประจำปี ตรวจเลือด ตรวจน้ำตาล  ตรวจปัสสวะ ตรวจไขมันตรวจการทำงานของไต ",
    badge: "เหมาะสมกับผู้ที่ต้องการการดูแลแผล ทำแผล และตัดไหม",
  },
  {
    title: "ใบรับรองแพทย์",
    description: "ออกใบรับรองแพทย์ด่วน สำหรับสมัครงาน ทำใบขับขี่ ราคาเดียว 150 บาท จบใน 15 นาที",
    badge: "เหมาะสมกับผู้ที่ต้องการใบรับรองแพทย์",
  },
]

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-card border border-border flex flex-col gap-2 items-start px-4 py-4 relative rounded-2xl shrink-0 w-full">
      <p className="font-semibold leading-8 min-w-full text-card-foreground text-2xl w-min">
        {service.title}
      </p>
      <p className="font-normal leading-6 min-w-full overflow-hidden text-muted-foreground text-base text-ellipsis tracking-normal w-min">
        {service.description}
      </p>
      <div className="flex flex-col items-start w-full">
        <span className="bg-blue-100 flex h-[22px] items-center justify-center px-2.5 rounded-lg shrink-0 text-blue-600 text-xs font-medium whitespace-nowrap">
          {service.badge}
        </span>
      </div>
      <div className="absolute bg-secondary flex items-center justify-center right-4 rounded-lg size-8 top-[15px]">
        <ChevronDown className="size-4 text-foreground" />
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section className="bg-muted flex flex-col gap-12 items-center justify-center overflow-hidden px-32 py-32 shrink-0 w-full">
      {/* Header */}
      <div className="flex flex-col gap-2 items-center justify-center text-foreground tracking-normal whitespace-nowrap">
        <p className="font-semibold leading-10 text-4xl">บริการ</p>
        <p className="font-normal leading-8 text-2xl">หมอใกล้บ้านที่เข้าใจคุณ ดูแลด้วยความใส่ใจในทุกการรักษา</p>
      </div>

      {/* Service list */}
      <div className="flex flex-col gap-6 items-start justify-center w-full">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      {/* Disclaimer */}
      <p className="font-normal leading-6 min-w-full overflow-hidden text-center text-muted-foreground text-base text-ellipsis tracking-normal w-min">
        * ราคาอาจเปลี่ยนแปลงได้ กรุณาสอบถามเพิ่มเติมก่อนรับบริการ
      </p>
    </section>
  )
}
