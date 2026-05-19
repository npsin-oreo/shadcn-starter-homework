import { Navbar }       from "@/web/shared/navbar"
import { Hero }         from "./sections/hero"
import { Sales }        from "./sections/sales"
import { Services }     from "./sections/services"
import { TurningPoint } from "./sections/turning-point"
import { Doctors }      from "./sections/doctors"
import { Articles }     from "./sections/articles"
import { Footer }       from "@/web/shared/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-svh flex-col items-start w-full">
      <Navbar />
      <main className="flex flex-col items-start w-full">
        <Hero />
        <Sales />
        <Services />
        <TurningPoint />
        <Doctors />
        <Articles />
      </main>
      <Footer />
    </div>
  )
}
