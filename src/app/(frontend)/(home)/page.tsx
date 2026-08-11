/* ======================================================================== */
/* IMPORTAÇÃO DE COMPONENTES */
import HeroSection from "./components/HeroSection"
import WhyUsSection from "@/components/sections/WhyUsSection"
import BlogSection from "./components/BlogSection"
import ContactSection from "@/components/sections/ContactSection"

function HomePage() {
  return (
    <>
      <HeroSection/>
      <WhyUsSection/>
      <BlogSection/>
      <ContactSection/>
    </>
  )
}

export default HomePage
