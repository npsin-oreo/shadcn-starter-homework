const imgMale    = "https://www.figma.com/api/mcp/asset/73a124d6-5a4f-435e-b66c-283ddf5c2597"
const imgFemale1 = "https://www.figma.com/api/mcp/asset/cba640ae-380d-48c6-a208-71d29c102eb8"
const imgFemale2 = "https://www.figma.com/api/mcp/asset/da6b025b-288a-474f-8a28-0e2bd4456f80"
const imgCat     = "https://www.figma.com/api/mcp/asset/31969f18-4540-4a59-b61b-d11e9ecbcc77"

interface Doctor {
  name: string
  degree: string
  university: string
  specialties: string[]
  schedules: string[]
  photo: string
}

const doctors: Doctor[] = [
  { name: "นพ. ธีรวัฒน์ ธำรงค์",    degree: "แพทย์ศาสตรบัณฑิต", university: "มหาวิทยาลัยแห่งหนึ่ง", specialties: ["เวชศาตร์ทั่วไป", "สาขาวงเวียนใหญ่"], schedules: ["จันทร์-ศุกร์", "09:00 - 17.00"], photo: imgMale },
  { name: "พญ. อรัญญา อัครเดช",      degree: "แพทย์ศาสตรบัณฑิต", university: "มหาวิทยาลัยแห่งหนึ่ง", specialties: ["เวชศาตร์ทั่วไป", "สาขาวงเวียนใหญ่"], schedules: ["จันทร์-ศุกร์", "09:00 - 17.00"], photo: imgFemale1 },
  { name: "พญ. ศิริพร สุขเกษม",      degree: "แพทย์ศาสตรบัณฑิต", university: "มหาวิทยาลัยแห่งหนึ่ง", specialties: ["เวชศาตร์ทั่วไป", "สาขาวงเวียนใหญ่"], schedules: ["จันทร์-ศุกร์", "09:00 - 17.00"], photo: imgFemale1 },
  { name: "นพ. ชัยอนันต์ โชคดี",    degree: "แพทย์ศาสตรบัณฑิต", university: "มหาวิทยาลัยแห่งหนึ่ง", specialties: ["เวชศาตร์ทั่วไป", "สาขาวงเวียนใหญ่"], schedules: ["จันทร์-ศุกร์", "09:00 - 17.00"], photo: imgMale },
  { name: "พญ. ลลิตา เลิศวิมล",     degree: "แพทย์ศาสตรบัณฑิต", university: "มหาวิทยาลัยแห่งหนึ่ง", specialties: ["เวชศาตร์ทั่วไป", "สาขาวงเวียนใหญ่"], schedules: ["จันทร์-ศุกร์", "09:00 - 17.00"], photo: imgFemale2 },
  { name: "พญ. กมลชนก กิจรุ่งเรือง", degree: "แพทย์ศาสตรบัณฑิต", university: "มหาวิทยาลัยแห่งหนึ่ง", specialties: ["เวชศาตร์ทั่วไป", "สาขาวงเวียนใหญ่"], schedules: ["จันทร์-ศุกร์", "09:00 - 17.00"], photo: imgFemale1 },
]

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="bg-card border border-border flex flex-1 gap-6 items-start min-w-0 px-4 py-4 rounded-2xl">
      <div className="relative rounded-lg shrink-0 size-[200px]">
        <img
          alt={doctor.name}
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-lg size-full"
          src={doctor.photo}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 items-start min-w-0 self-stretch">
        <p className="font-semibold leading-8 min-w-full text-card-foreground text-2xl w-min">
          {doctor.name}
        </p>
        <div className="flex-1 font-normal leading-6 min-h-0 min-w-full overflow-hidden text-muted-foreground text-base text-ellipsis w-min">
          <p className="leading-6 mb-0">{doctor.degree}</p>
          <p className="leading-6">{doctor.university}</p>
        </div>
        <div className="flex gap-1 items-start shrink-0">
          {doctor.specialties.map((s) => (
            <span key={s} className="bg-orange-100 flex h-[22px] items-center justify-center px-2.5 rounded-lg shrink-0 text-orange-600 text-xs font-medium whitespace-nowrap">
              {s}
            </span>
          ))}
        </div>
        <div className="flex gap-1 items-start shrink-0">
          {doctor.schedules.map((s) => (
            <span key={s} className="bg-blue-100 flex h-[22px] items-center justify-center px-2.5 rounded-lg shrink-0 text-blue-600 text-xs font-medium whitespace-nowrap">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function DoctorList() {
  const rows = [doctors.slice(0, 2), doctors.slice(2, 4), doctors.slice(4, 6)]
  return (
    <section className="bg-background flex flex-col gap-12 items-center justify-center overflow-hidden px-32 py-32 relative shrink-0 w-full">
      {/* Decorative cat illustration */}
      <div className="absolute h-[165px] right-20 top-10 w-[185px] pointer-events-none">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCat} />
      </div>

      {/* Header */}
      <div className="flex flex-col gap-2 items-center justify-center text-foreground tracking-normal whitespace-nowrap">
        <p className="font-semibold leading-10 text-4xl">ทีมแพทย์ใกล้หมอ</p>
        <p className="font-normal leading-8 text-2xl">อุ่นใจด้วยทีมหมอที่พร้อมดูแลด้วยความเข้าใจ</p>
      </div>

      {/* Doctor grid — 3 rows × 2 columns */}
      <div className="flex flex-col gap-6 items-start w-full">
        {rows.map((row, i) => (
          <div key={i} className="flex gap-6 items-stretch w-full">
            {row.map((doctor) => (
              <DoctorCard key={doctor.name} doctor={doctor} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
