import Link from "next/link"
import Image from "next/image"
import * as motion from "motion/react-client"

/* ======================================================================== */
/* IMAGENS */
import spirecode from "@/assets/images/SPIRECODE.svg"

async function Footer() {
  return(
    <footer className="footer background-section px-4 py-6 xs:px-6 mlg:px-8 xs:py-8 font-ds-ibm-mono">
      <div className="footer__content @container/footer max-w-content bg-ds-pine text-ds-off-white px-8 py-10 mlg:p-10 rounded-3xl flex flex-col gap-8">
        <div className="footer__row flex-col-reverse @min-4xl:flex-row flex justify-between @min-4xl:items-end gap-4 gap-y-8">
          <article className="footer__article flex flex-col gap-2 w-full max-w-74">
            <h2 className="footer__title uppercase font-semibold">Sede Brasil</h2>
            
            <nav className="footer__nav text-sm">
              <ul className="footer__list flex flex-col gap-1.5">
                <li className="footer__item"><address><a href="https://maps.app.goo.gl/LdHncQMnuKUHEe6U8" target="_blank" className="footer__link hover:text-ds-neutral-150 transition-opacity">Praça José Ferreira, 226, centro, Guanambi - BA</a></address></li>
                <li className="footer__item"><a href="mailto:contato@spirecode.com.br" className="footer__link hover:text-ds-neutral-150 transition-opacity">contato@spirecode.com.br</a></li>
                <li className="footer__item"><a href="https://wa.me/5577988481208" target="_blank" rel="noopener noreferrer" className="footer__link hover:text-ds-neutral-150 transition-opacity">+55 77 98848-1208</a></li>
              </ul>
            </nav>
          </article>

          <nav className="footer__nav footer__nav--pages font-medium uppercase w-full @min-4xl:max-w-155">
            <ul className="footer__list flex w-full xs:justify-between gap-6 flex-wrap">
              <li className="footer__item"><Link href="/" className="footer__link link-underline">Início</Link></li>
              <li className="footer__item"><Link href="/cases" className="footer__link link-underline">Cases</Link></li>
              <li className="footer__item"><Link href="/servicos" className="footer__link link-underline">Serviços</Link></li>
              <li className="footer__item"><Link href="/blog" className="footer__link link-underline">Blog</Link></li>
              <li className="footer__item"><a href="#contato" className="footer__link link-underline">Contato</a></li>
            </ul>
          </nav>
        </div>

        {/* LOGO */}
        <div className="footer__row">
          <Image className="footer__banner w-full h-auto" src={spirecode} alt="spirecode"/>
        </div>

        {/* COPYRIGHT */}
        <div className="footer__row text-sm flex justify-between flex-col-reverse @min-xl:flex-row gap-8">
          <p className="footer__copyright">Todos os direitos reservados</p>

          <nav className="footer__nav">
            <ul className="footer__list flex gap-x-8 gap-y-3 flex-col-reverse @min-xl:flex-row">
              <li className="footer__item"><a href="#" className="footer__link underline hover:text-ds-neutral-150 transition-opacity">Política de privacide</a></li>
              <li className="footer__item"><a href="#" className="footer__link underline hover:text-ds-neutral-150 transition-opacity">Termos de uso</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer