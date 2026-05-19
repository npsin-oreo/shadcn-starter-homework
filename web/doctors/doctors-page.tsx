import { Navbar }     from "@/web/shared/navbar"
import { DoctorList } from "./sections/doctor-list"
import { Footer }     from "@/web/shared/footer"

export default function DoctorsPage() {
  return (
    <div className="flex min-h-svh flex-col items-start w-full">
      <Navbar activePage="/doctors" />
      <main className="flex flex-col items-start w-full">
        <DoctorList />
      </main>
      <Footer />
    </div>
  )
}
