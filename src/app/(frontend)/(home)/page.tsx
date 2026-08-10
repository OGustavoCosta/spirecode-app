/* ======================================================================== */
/* IMPORTAÇÃO DE COMPONENTES */
import HeroSection from "./components/HeroSection"
import WhyUsSection from "@/components/sections/WhyUsSection"
import ContactSection from "@/components/sections/ContactSection"

function HomePage() {
  return (
    <>
      <HeroSection/>
      <WhyUsSection/>
      <ContactSection/>
    </>
  )
}

export default HomePage
