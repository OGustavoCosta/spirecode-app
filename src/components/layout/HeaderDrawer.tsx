'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { FocusTrap } from "focus-trap-react"

import { X, Menu } from "lucide-react"

import * as motion from "motion/react-client"
import { fadeDownItem } from "@/lib/animation"

function HeaderDrawer(){
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }), [isOpen]

  function close() {
    setIsOpen(false)
  }

  return(
    <>
      {/* BOTÃO SANDUÍCHE */}
      <motion.button
        className="headerDrawer__button md:hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menu de navegação"
        aria-expanded={isOpen}
        aria-controls="header-drawer"
        variants={fadeDownItem}
        initial="hidden"
        animate="visible"
      >
        <Menu className='headerDrawer__icon' size={24} strokeWidth={2} aria-hidden="true"/>
      </motion.button>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-10 ${ isOpen ? 'block' : 'hidden'}`}
        aria-hidden="true"
        onClick={close}
      />

      {/* DRAWER */}
      <FocusTrap active={isOpen} focusTrapOptions={{ onDeactivate: close, initialFocus: '#drawer-close', allowOutsideClick: true }}>
        <div
          id="header-drawer"
          className={`fixed top-0 left-0 w-full h-full max-w-[420px] bg-white z-20 p-5 flex flex-col gap-6 transition-transform bg-ds-yellow-5 text-ds-blue-130 ${ isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          role="dialog"
          aria-modal={true}
          aria-label="Menu de navegação"
          inert={!isOpen}
        >
          <div className="headerDrawer__wrapper">
            <button
              id="drawer-close"
              className="headerDrawer__button cursor-pointer"
              onClick={close}
              aria-label="Fechar menu"
            >
              <X className='headerDrawer__icon' size={24} strokeWidth={2} aria-hidden="true"/>
            </button>
          </div>

          <nav className="headerDrawer__navigation">
            <ul className="headerDrawer__list grid gap-1">
              <li className="headerDrawer__item"><Link href="/" className="headerDrawer__link py-1 link-underline" onClick={close}>Início</Link></li>
              <li className="headerDrawer__item"><Link href="/cases" className="headerDrawer__link py-1 link-underline" onClick={close}>Cases</Link></li>
              <li className="headerDrawer__item"><Link href="/servicos" className="headerDrawer__link py-1 link-underline" onClick={close}>Serviços</Link></li>
              <li className="headerDrawer__item"><Link href="/blog" className="headerDrawer__link py-1 link-underline" onClick={close}>Blog</Link></li>
              <li className="headerDrawer__item"><a href="#contato" className="headerDrawer__link py-1 link-underline" onClick={close}>Contato</a></li>
            </ul>
          </nav>
        </div>
      </FocusTrap>
    </>
  )
}

export default HeaderDrawer