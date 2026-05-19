import { Navbar }      from "@/web/shared/navbar"
import { HeroImage }   from "./sections/hero-image"
import { AboutClinic } from "./sections/about-clinic"
import { Address }     from "./sections/address"
import { Footer }      from "@/web/shared/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-svh flex-col items-start w-full">
      <Navbar activePage="/about" />
      <main className="flex flex-col items-start w-full">
        <HeroImage />
        <AboutClinic />
        <Address />
      </main>
      <Footer />
    </div>
  )
}
