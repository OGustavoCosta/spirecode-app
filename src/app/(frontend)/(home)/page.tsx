/* ======================================================================== */
/* IMPORTAÇÃO DE COMPONENTES */
import HeroSection from "./components/HeroSection"
import WhyUsSection from "@/components/sections/WhyUsSection"
import BlogSection from "./components/BlogSection"
import ContactSection from "@/components/sections/ContactSection"
import ServicesSection from "./components/ServicesSection"
import ServicesSectionV2 from "./components/ServicesSectionV2"

function HomePage() {
  return (
    <>
      <HeroSection/>
      <ServicesSection/>
      <WhyUsSection/>
      <BlogSection/>
      <ContactSection/>
    </>
  )
}

export default HomePage
