/* ======================================================================== */
/* ROTAS */
import Link from 'next/link';

/* ======================================================================== */
/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeDownItem} from "@/lib/animation"

/* ======================================================================== */
/* COMPONENTES */
import HeaderDrawer from './HeaderDrawer';
import HeaderScroll from './HeaderScroll';

/* ======================================================================== */
/* IMAGENS */
import spire from '@/assets/images/header/SPIRE.svg'
import Image from 'next/image';

function Header({ fixed }: {fixed?: boolean}){
  return(
    <header className={`header background-section flex flex-col items-center w-full absolute text-ds-pine font-ds-ibm-mono z-10 border-ds-neutral-200 ${fixed ? 'border-b py-4 sticky top-0 bg-ds-neutral-50' : 'py-6'}`}>
      {/* HEADER PRINCIPAL */}
      <div className={`header__main max-w-content w-full flex items-center ${fixed ? 'justify-between' : 'justify-center'}`}>
        {/* LOGO */}
        <motion.div className={`header__logo ${fixed ? '' : 'hidden'}`} aria-hidden="true">
          <Image src={spire} alt="" className="header__img"/>
        </motion.div>

        {/* MENU MOBILE */}
        <HeaderDrawer fixed={!fixed}/>

        {/* NAVEGAÇÃO */}
        <nav className="header__nav md:flex justify-between items-center hidden text-base font-medium uppercase" aria-label="Menu principal">

          <motion.ul 
            className="header__list gap-8 flex items-center"
            variants={motionContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.li className="header__item" variants={fadeDownItem}><Link href="/" className="header__link link-underline">Início</Link></motion.li>
            <motion.li className="header__item" variants={fadeDownItem}><Link href="/cases" className="header__link link-underline">Cases</Link></motion.li>
            <motion.li className="header__item" variants={fadeDownItem}><Link href="/servicos" className="header__link link-underline">Serviços</Link></motion.li>
            <motion.li className="header__item" variants={fadeDownItem}><Link href="/blog" className="header__link link-underline">Blog</Link></motion.li>
            <motion.li className="header__item" variants={fadeDownItem}><a href="#contato" className="header__link link-underline">Contato</a></motion.li>
          </motion.ul>
        </nav>
      </div>
      

      {/* HEADER DA PÁGINA */}
      <HeaderScroll/>
    </header>
  )
}

export default Header