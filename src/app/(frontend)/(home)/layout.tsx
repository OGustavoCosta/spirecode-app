/* ======================================================================== */
/* COMPONENTES */
import SkipLink from "@/components/accessibility/SkipLink"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"


function HomeLayout({ children }: { children: React.ReactNode }) {
  return(
    <>
      <SkipLink/>
      <Header/>
      <main id='main' className='main grow'>{children}</main>
      <Footer/>
    </>
  )
}

export default HomeLayout