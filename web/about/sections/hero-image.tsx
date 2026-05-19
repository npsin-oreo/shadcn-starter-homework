const imgRectangle = "https://www.figma.com/api/mcp/asset/980a7334-2d50-4541-b16f-97085ca06ca4"

export function HeroImage() {
  return (
    <div className="relative shrink-0 w-full overflow-hidden" style={{ height: "810px" }}>
      <img
        alt="ใกล้หมอ คลินิก — doctor consultation"
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={imgRectangle}
      />
    </div>
  )
}
