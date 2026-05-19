const clinicPhoto = "https://www.figma.com/api/mcp/asset/b54f01ba-9b04-4352-8edf-dc22e7291603"

const features = [
  {
    title: "รักษาตรงจุด",
    lines: [
      "วินิจนิจฉัยแม่นยำ ตรงอาการด้วยความใส่ใจทุกรายละเอียด ",
      "จากทีมแพทย์ผู้เชี่ยวชาญ",
    ],
  },
  {
    title: "รอคิวไม่นาน",
    lines: [
      "ลงทะเบียน รับยาจบไวจองคิวพบหมอผ่าน LINE ",
      "ในวันและเวลาที่สะดวกให้คุณมีเวลาปรึกษาหมอได้มากขึ้น",
    ],
  },
  {
    title: "ราคาไม่แพง",
    lines: [
      "ให้คุณรักษาได้สบายใจ สำหรับโรคทั่วไป 300–500 บาท ",
      "รวมค่าหมอและค่ายา",
    ],
  },
]

export function Sales() {
  return (
    <section className="bg-blue-600 flex gap-12 items-center overflow-hidden px-32 py-32 shrink-0 w-full">
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
        {features.map(({ title, lines }) => (
          <div key={title} className="flex flex-col gap-2 items-start">
            <p className="font-semibold leading-8 text-2xl tracking-normal">{title}</p>
            <div className="font-normal text-base tracking-normal">
              <p className="leading-6 mb-0 whitespace-pre">{lines[0]}</p>
              <p className="leading-6 whitespace-pre">{lines[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
