const imgRectangle = "https://www.figma.com/api/mcp/asset/980a7334-2d50-4541-b16f-97085ca06ca4"

export function HeroImage() {
  return (
    <div className="h-[810px] w-full overflow-hidden relative shrink-0">
      <img
        alt="ใกล้หมอ คลินิก — doctor consultation"
        className="w-full h-full object-cover block"
        src={imgRectangle}
      />
    </div>
  )
}
