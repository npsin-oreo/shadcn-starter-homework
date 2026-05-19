export function AboutClinic() {
  return (
    <section className="bg-background flex flex-col gap-12 items-center justify-center overflow-hidden px-32 py-32 shrink-0 tracking-normal w-full">
      {/* Header */}
      <div className="flex flex-col gap-2 items-center justify-center text-foreground w-full">
        <p className="font-semibold leading-10 text-4xl whitespace-nowrap">
          เกี่ยวกับเรา
        </p>
        <p className="font-normal leading-8 text-2xl w-full text-center">ใกล้หมอคลินิก (KindMore Clinic) คือคลินิกโรคทั่วไปที่ให้บริการชุมชนย่านเจริญรัด - วงเวียนใหญ่ ด้วยความตั้งใจ ที่จะเป็นที่พึ่งทางสุขภาพที่เข้าถึงง่าย เป็นกันเอง และไว้วางใจได้ เราให้บริการตรวจรักษาโรคทั่วไป ดูแลสุขภาพต่อเนื่อง และให้คำปรึกษา ด้านสุขภาพ โดยทีมแพทย์และเจ้าหน้าที่ที่พร้อมดูแลคุณเหมือนเป็นคนในครอบครัวเดียวกัน</p>
      </div>

      {/* Quote */}
      <p className="font-medium leading-[60px] text-orange-500 text-[60px] whitespace-nowrap">
        &ldquo;หมอใกล้บ้าน ที่เข้าใจคุณ&rdquo;
      </p>
    </section>
  )
}
