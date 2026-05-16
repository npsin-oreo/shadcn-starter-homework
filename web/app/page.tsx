// Figma MCP asset URLs — valid ~7 days from generation
const clinicPhoto  = "https://www.figma.com/api/mcp/asset/89225e8f-103b-4e24-86c0-acfd007d8a07"
const doctorImg1   = "https://www.figma.com/api/mcp/asset/f5cc4a40-1549-45e3-82b3-0d66fdb98b7f"
const doctorImg2   = "https://www.figma.com/api/mcp/asset/02898b3e-b644-4e62-9f70-f1e145a6d17b"
const doctorImg3   = "https://www.figma.com/api/mcp/asset/c62656aa-1174-46a9-a6af-7cde80595c61"
const articleImg1  = "https://www.figma.com/api/mcp/asset/f723ae67-0801-4a3f-a20b-75e7a9fd2c57"
const articleImg2  = "https://www.figma.com/api/mcp/asset/fb6cb30a-8bf8-4ff8-b36a-56dd6f6d1678"
const articleImg3  = "https://www.figma.com/api/mcp/asset/59c4bad8-4a85-40bc-b2ac-cae63eb3fdda"
const articleImg4  = "https://www.figma.com/api/mcp/asset/078a852c-b3a3-41eb-8656-3327126de444"

// ─── Icon components (inline SVG, lucide style) ──────────────────────────────

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

function CalendarDays({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </svg>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-card border border-border flex flex-1 flex-col gap-2 items-end min-w-0 px-4 py-4 rounded-2xl">
      <p className="font-semibold leading-8 min-w-full text-card-foreground text-2xl tracking-normal w-min">
        {title}
      </p>
      <p className="font-normal leading-6 min-w-full overflow-hidden text-base text-muted-foreground text-ellipsis tracking-normal w-min whitespace-pre-wrap">
        {description}
      </p>
      <button className="bg-secondary flex items-center justify-center rounded-lg size-8 shrink-0">
        <ArrowUpRight />
      </button>
    </div>
  )
}

function DoctorCard({
  image,
  name,
  credentials,
  badges,
}: {
  image: string
  name: string
  credentials: [string, string]
  badges: [string, string]
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
          <p className="font-normal leading-6 mb-0 text-base">{credentials[0]}</p>
          <p className="font-normal leading-6 text-base">{credentials[1]}</p>
        </div>
      </div>
      <div className="flex gap-1 items-start">
        {badges.map((badge) => (
          <span
            key={badge}
            className="bg-secondary flex h-[22px] items-center justify-center px-2.5 rounded-lg shrink-0"
          >
            <span className="font-medium leading-4 text-secondary-foreground text-xs tracking-normal whitespace-nowrap">
              {badge}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

function ArticleCard({
  image,
  title,
  date,
  badge,
}: {
  image: string
  title: string
  date: string
  badge: string
}) {
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function KindmorePage() {
  return (
    <div className="flex flex-col items-start w-full">

      {/* ── Header ── */}
      <header className="bg-background flex items-center justify-between overflow-hidden px-32 py-3.5 shrink-0 w-full">
        <p className="font-bold leading-7 text-primary text-xl tracking-normal whitespace-nowrap">
          ใกล้หมอ คลินิกเวชกรรม
        </p>
        <nav className="flex gap-2 items-center shrink-0">
          {(["เกี่ยวกับ", "แพทย์", "โปรโมชัน", "แผนที่คลินิก"] as const).map((label) => (
            <button
              key={label}
              className="flex h-9 items-center justify-center px-4 py-2 rounded-lg shrink-0"
            >
              <span className="font-medium leading-5 text-foreground text-sm tracking-normal whitespace-nowrap">
                {label}
              </span>
            </button>
          ))}
          <button className="bg-primary flex h-9 items-center justify-center px-4 py-2 rounded-lg shadow-xs shrink-0">
            <span className="font-medium leading-5 text-primary-foreground text-sm tracking-normal whitespace-nowrap">
              ปรึกษาปัญหาสุขภาพ
            </span>
          </button>
        </nav>
      </header>

      {/* ── Hero ── */}
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

      {/* ── Sales ── */}
      <section className="bg-primary flex gap-12 items-center overflow-hidden px-32 py-32 shrink-0 w-full">
        {/* Clinic photo */}
        <div className="aspect-[160/90] flex-1 min-w-0 overflow-hidden relative">
          <img
            alt="ใกล้หมอคลินิก"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={clinicPhoto}
          />
        </div>
        {/* Feature list */}
        <div className="flex flex-col gap-12 items-start justify-center text-primary-foreground w-[448px] shrink-0">
          <div className="flex flex-col gap-2 items-start">
            <p className="font-semibold leading-8 text-2xl tracking-normal">รักษาตรงจุด</p>
            <div className="font-normal text-base tracking-normal">
              <p className="leading-6 mb-0 whitespace-pre">{`วินิจนิจฉัยแม่นยำ ตรงอาการด้วยความใส่ใจทุกรายละเอียด `}</p>
              <p className="leading-6 whitespace-pre">จากทีมแพทย์ผู้เชี่ยวชาญ</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className="font-semibold leading-8 text-2xl tracking-normal">รอคิวไม่นาน</p>
            <div className="font-normal text-base tracking-normal">
              <p className="leading-6 mb-0 whitespace-pre">{`ลงทะเบียน รับยาจบไวจองคิวพบหมอผ่าน LINE `}</p>
              <p className="leading-6 whitespace-pre">ในวันและเวลาที่สะดวกให้คุณมีเวลาปรึกษาหมอได้มากขึ้น</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className="font-semibold leading-8 text-2xl tracking-normal">ราคาไม่แพง</p>
            <div className="font-normal text-base tracking-normal">
              <p className="leading-6 mb-0 whitespace-pre">{`ให้คุณรักษาได้สบายใจ สำหรับโรคทั่วไป 300–500 บาท `}</p>
              <p className="leading-6 whitespace-pre">รวมค่าหมอและค่ายา</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-background flex flex-col gap-12 items-center justify-center overflow-hidden px-32 py-32 shrink-0 w-full">
        <div className="flex flex-col gap-2 items-center text-foreground tracking-normal whitespace-nowrap">
          <p className="font-semibold leading-10 text-4xl">ครบทุกบริการสุขภาพ</p>
          <p className="font-normal leading-8 text-2xl">
            หมอใกล้บ้านที่เข้าใจคุณ ดูแลด้วยความใส่ใจในทุกการรักษา
          </p>
        </div>
        <div className="flex flex-col gap-4 items-start w-full">
          <div className="flex gap-6 items-center w-full">
            <ServiceCard
              title="รักษาโรคทั่วไป"
              description={`ไข้หวัด ปวดหัว ท้องเสีย ภูมิแพ้ เจ็บคอ ผื่น ฯลฯ  ปรึกษาหมอได้ทันที ไม่ต้องรอคิวนาน`}
            />
            <ServiceCard
              title="ตัดไหม ทำแผล ทำหัตถการ"
              description={`บริการทำแผล ล้างแผล ตัดไหม เย็บแผล ดูแล ใส่ใจ ตั้งแต่แผลขนาดเล็กถึงแผลขนาดใหญ่   `}
            />
            <ServiceCard
              title="เบาหวาน ความดัน ไขมัน"
              description="เบาหวาน ความดัน ไขมันสูง ดูแลติดตามอาการ และจ่ายยาต่อเนื่อง ด้วยความใกล้ชิด"
            />
          </div>
          <div className="flex gap-6 items-center w-full">
            <ServiceCard
              title="วัคซีนเด็ก-ผู้ใหญ่"
              description={`วัคซีนพื้นฐานสำหรับเด็กและผู้ใหญ่  เช่น วัคซีน ไข้หวัดใหญ่ บาดทะยัก ตับอักเสบเอ/บี HPV `}
            />
            <ServiceCard
              title="แพ็กเกจตรวจสุขภาพ"
              description={`ตรวจสุขภาพประจำปี ตรวจเลือด ตรวจน้ำตาล  ตรวจปัสสวะ ตรวจไขมันตรวจการทำงานของไต `}
            />
            <ServiceCard
              title="ใบรับรองแพทย์"
              description="ออกใบรับรองแพทย์ด่วน สำหรับสมัครงาน ทำใบขับขี่ ราคาเดียว 150 บาท จบใน 15 นาที"
            />
          </div>
        </div>
      </section>

      {/* ── Turning Point ── */}
      <section className="bg-background flex flex-col items-center justify-center overflow-hidden px-32 py-16 shrink-0 w-full">
        <div className="bg-primary border border-border flex gap-2 items-start px-8 py-8 rounded-2xl w-full">
          <div className="flex flex-1 flex-col gap-2 items-start min-w-0 text-primary-foreground">
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
          <div className="flex gap-2 items-center shrink-0">
            <button className="bg-primary flex h-9 items-center justify-center px-4 py-2 rounded-lg shadow-xs shrink-0">
              <span className="font-medium leading-5 text-primary-foreground text-sm tracking-normal whitespace-nowrap">
                แผนที่คลินิก
              </span>
            </button>
            <button className="bg-background border border-border flex gap-1.5 h-8 items-center justify-center px-3 rounded-lg shadow-xs shrink-0">
              <CalendarDays />
              <span className="font-medium leading-5 text-foreground text-sm tracking-normal whitespace-nowrap">
                นัดหมายพบแพทย์
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Doctor List ── */}
      <section className="bg-background flex flex-col gap-12 items-center justify-center overflow-hidden px-32 py-32 shrink-0 w-full">
        <div className="flex flex-col gap-2 items-center text-foreground tracking-normal whitespace-nowrap">
          <p className="font-semibold leading-10 text-4xl">ทีมแพทย์ใกล้หมอ</p>
          <p className="font-normal leading-8 text-2xl">อุ่นใจด้วยทีมหมอที่พร้อมดูแลด้วยความเข้าใจ</p>
        </div>
        <div className="flex gap-6 items-center w-full">
          <DoctorCard
            image={doctorImg1}
            name="พญ. สุขกาย สบายใจ"
            credentials={["แพทย์ศาสตรบัณฑิต", "มหาวิทยาลัยแห่งหนึ่ง"]}
            badges={["เวชศาตร์ทั่วไป", "สาขาวงเวียนใหญ่"]}
          />
          <DoctorCard
            image={doctorImg2}
            name="นพ. สมชาย ใจดี"
            credentials={["แพทย์ศาสตรบัณฑิต", "มหาวิทยาลัยแห่งหนึ่ง"]}
            badges={["เวชศาตร์ทั่วไป", "สาขาวงเวียนใหญ่"]}
          />
          <DoctorCard
            image={doctorImg3}
            name="นพ. เกรียรติศักดิ์ ชัยชาญชีวิญ"
            credentials={["แพทย์ศาสตรบัณฑิต", "มหาวิทยาลัยแห่งหนึ่ง"]}
            badges={["เวชศาตร์ทั่วไป", "สาขาวงเวียนใหญ่"]}
          />
        </div>
        <button className="bg-background border border-border flex gap-1.5 h-8 items-center justify-center px-3 rounded-lg shadow-xs shrink-0">
          <ArrowUpRight />
          <span className="font-medium leading-5 text-foreground text-sm tracking-normal whitespace-nowrap">
            ดูทีมแพทย์ทั้งหมดของเรา
          </span>
        </button>
      </section>

      {/* ── Content / Articles ── */}
      <section className="bg-background flex flex-col gap-12 items-center justify-center overflow-hidden px-32 py-16 shrink-0 w-full">
        <div className="flex flex-col gap-2 items-center text-foreground tracking-normal whitespace-nowrap">
          <p className="font-semibold leading-10 text-4xl">บทความสุขภาพ</p>
          <p className="font-normal leading-8 text-2xl">ความรู้สุขภาพดี ๆ จากทีมใกล้หมอ</p>
        </div>
        <div className="flex gap-6 items-center w-full">
          <ArticleCard
            image={articleImg1}
            title="5 หลักการกินเพื่อสุขภาพ ที่ดี ในชีวิตประจำวัน"
            date="9 มี.ค. 2569"
            badge="เวชศาตร์ทั่วไป"
          />
          <ArticleCard
            image={articleImg2}
            title="รู้ทันความดันโลหิตสูง ภัยเงียบที่ป้องกันได้"
            date="9 มี.ค. 2569"
            badge="เวชศาตร์ทั่วไป"
          />
          <ArticleCard
            image={articleImg3}
            title="ทำไมต้องฉีดวัคซีนทุกปี ?"
            date="9 มี.ค. 2569"
            badge="เวชศาตร์ทั่วไป"
          />
          <ArticleCard
            image={articleImg4}
            title="ดูแลผู้ป่วยเบาหวานที่บ้าน อย่างไร ให้ปลอดภัย"
            date="9 มี.ค. 2569"
            badge="เวชศาตร์ทั่วไป"
          />
        </div>
        <button className="bg-background border border-border flex gap-1.5 h-8 items-center justify-center px-3 rounded-lg shadow-xs shrink-0">
          <ArrowUpRight />
          <span className="font-medium leading-5 text-foreground text-sm tracking-normal whitespace-nowrap">
            ดูบทความทั้งหมด
          </span>
        </button>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-primary flex flex-col gap-12 items-start overflow-hidden px-32 py-16 shrink-0 w-full">
        <div className="flex gap-12 items-start w-full">
          {/* Brand */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold leading-10 mb-0 text-4xl text-primary-foreground tracking-normal">ใกล้หมอ</p>
            <p className="font-semibold leading-10 text-4xl text-primary-foreground tracking-normal">คลินิกเวชกรรม</p>
          </div>

          {/* Link columns */}
          <div className="flex gap-6 items-center text-primary-foreground tracking-normal shrink-0">
            {/* Services */}
            <div className="flex flex-col gap-2 items-start">
              <p className="font-semibold leading-7 text-lg">บริการ</p>
              <div className="flex gap-2 items-start font-normal leading-5 text-sm whitespace-nowrap">
                <div className="flex flex-col gap-2 items-start w-32">
                  <p className="overflow-hidden text-ellipsis">รักษาโรคทั่วไป</p>
                  <p className="overflow-hidden text-ellipsis">รักษาโรคเรื้อรัง</p>
                  <p className="overflow-hidden text-ellipsis">หัตถการ</p>
                </div>
                <div className="flex flex-col gap-2 items-start w-32">
                  <p className="overflow-hidden text-ellipsis">วัคซีน</p>
                  <p className="overflow-hidden text-ellipsis">ตรวจสุขภาพ</p>
                  <p className="overflow-hidden text-ellipsis">ใบรับรองแพทย์</p>
                </div>
              </div>
            </div>
            {/* About */}
            <div className="flex flex-col gap-2 items-start">
              <p className="font-semibold leading-7 text-lg">เกี่ยวกับเรา</p>
              <div className="flex gap-2 items-start font-normal leading-5 text-sm whitespace-nowrap">
                <div className="flex flex-col gap-2 items-start w-32">
                  <p className="text-sm">แผนที่คลินิก</p>
                  <p className="overflow-hidden text-ellipsis text-sm">ทีมแพทย์และบุคลากร</p>
                  <p className="overflow-hidden text-ellipsis text-sm">สาขาของคลินิก</p>
                </div>
                <div className="flex flex-col gap-2 items-start text-sm w-40">
                  <p className="overflow-hidden text-ellipsis">นโยบายความเป็นส่วนตัว</p>
                  <p className="overflow-hidden text-ellipsis">เงื่อนไขการให้บริการ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment CTA */}
          <button className="bg-background border border-border flex gap-1.5 h-8 items-center justify-center px-3 rounded-lg shadow-xs shrink-0">
            <CalendarDays />
            <span className="font-medium leading-5 text-foreground text-sm tracking-normal whitespace-nowrap">
              นัดหมายพบแพทย์
            </span>
          </button>
        </div>

        <p className="font-normal leading-5 overflow-hidden text-ellipsis text-muted-foreground text-sm tracking-normal whitespace-nowrap">
          © 2026 ใกล้หมอคลีนิก. All rights reserved.
        </p>
      </footer>

    </div>
  )
}
