/* ======================================================================== */
/* IMPORTAÇÃO DE COMPONENTES */
import HeroSection from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection"
import WhyUsSection from "@/components/sections/WhyUsSection"
import CasesSection from "./components/CasesSection"
import BlogSection from "./components/BlogSection"
import ContactSection from "@/components/sections/ContactSection"

function HomePage() {
  return (
    <>
      <HeroSection/>
      <ServicesSection/>
      <WhyUsSection/>
      <CasesSection/>
      <BlogSection/>
      <ContactSection/>
    </>
  )
}

export default HomePage
