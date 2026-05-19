import { Navbar }   from "@/web/shared/navbar"
import { Services } from "./sections/services"
import { Footer }   from "@/web/shared/footer"

export default function PromotionsPage() {
  return (
    <div className="flex min-h-svh flex-col items-start w-full">
      <Navbar activePage="/promotions" />
      <main className="flex flex-col items-start w-full">
        <Services />
      </main>
      <Footer />
    </div>
  )
}
