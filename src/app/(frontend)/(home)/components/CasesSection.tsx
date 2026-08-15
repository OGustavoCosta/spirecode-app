'use client'

/* ======================================================================== */
/* IMPORTAÇÃO DE HOOKS */
import { useRef, useState } from 'react'

/* ======================================================================== */
/* IMPORTAÇÃO DO SWIPER */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';
import 'swiper/css/parallax';

/* ======================================================================== */
/* IMPORTAÇÃO DE COMPONENTES */
import AnchorButton from '@/components/button/AnchorButton';

/* ======================================================================== */
/* IMPORTAÇÃO DE ÍCONES */
import { ArrowLeftLong, ArrowRightLong } from "@/components/Icons"

/* ======================================================================== */
/* IMPORTAÇÃO DE ANIMAÇÕES */
import { nudge } from "@/lib/animation"
import type { StaticImageData } from 'next/image';

type CaseInfo = {
  id: number
  badges: string[]
  banner: string
  altBanner: string
  title: string
  text: string
  caseLink: string
  projectLink: string
}

/* TODO: clientes e resultados são FICTÍCIOS, só para fechar o layout.
   Substituir por cases reais antes de publicar — e o projectLink precisa
   apontar para o site do cliente, não para '#'. */
const casesInfo: CaseInfo[] = [
  {
    id: 1,
    badges: ['site', 'landing page', 'erp'],
    banner: 'https://picsum.photos/seed/spire-case-canto-da-serra/1920/800',
    altBanner: 'Vista da varanda da Pousada Canto da Serra ao entardecer',
    title: 'Canto da Serra',
    text: 'A pousada dependia do WhatsApp para fechar diária. Colocamos site, página de campanha e um painel de reservas que enxerga a ocupação em tempo real.',
    caseLink: '/cases/canto-da-serra',
    projectLink: '#',
  },
  {
    id: 2,
    badges: ['time de T.I', 'sistema'],
    banner: 'https://picsum.photos/seed/spire-case-vale-verde/1920/800',
    altBanner: 'Plantação irrigada vista de cima por drone',
    title: 'Agro Vale Verde',
    text: 'Sete planilhas controlavam colheita, estoque e frota. Viraram um sistema só, com acesso por perfil e relatório que sai pronto para o contador.',
    caseLink: '/cases/agro-vale-verde',
    projectLink: '#',
  },
  {
    id: 3,
    badges: ['site', 'identidade visual'],
    banner: 'https://picsum.photos/seed/spire-case-vitalis/1920/800',
    altBanner: 'Recepção de uma clínica médica com iluminação clara',
    title: 'Clínica Vitalis',
    text: 'Marca refeita do zero e um site que agenda consulta em três toques. O telefone da recepção parou de ser o único canal de entrada.',
    caseLink: '/cases/clinica-vitalis',
    projectLink: '#',
  },
  {
    id: 4,
    badges: ['e-commerce', 'landing page'],
    banner: 'https://picsum.photos/seed/spire-case-casa-bahiana/1920/800',
    altBanner: 'Mesa posta com pratos típicos da culinária baiana',
    title: 'Casa Bahiana',
    text: 'Loja online de temperos e conservas, com checkout de uma página e frete calculado antes do carrinho — onde a venda costumava se perder.',
    caseLink: '/cases/casa-bahiana',
    projectLink: '#',
  },
  {
    id: 5,
    badges: ['time de T.I', 'sistema', 'site'],
    banner: 'https://picsum.photos/seed/spire-case-transrota/1920/800',
    altBanner: 'Caminhão de carga em estrada ao amanhecer',
    title: 'TransRota Logística',
    text: 'Rastreio de carga que o cliente final acompanha sozinho, sem ligar para o escritório. Menos telefonema, mais tempo para operar.',
    caseLink: '/cases/transrota-logistica',
    projectLink: '#',
  },
]

function CasesSection() {
  const swiperRef = useRef<SwiperInstance | null>(null)
  
  /* estado só para desabilitar as setas nas pontas */
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  function syncEdges(swiper: SwiperInstance){
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  const buttonStyle = 'cursor-pointer transition-all hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed'

  return(
    <div className="cases__background background-section py-10 px-0 min-[1440px]:px-8">
      <section className="cases max-w-content w-full space-y-10 relative">
        <header className="cases__header relative mlg:absolute top-0 mlg:right-8 z-8 text-ds-pine flex flex-row justify-between w-full mlg:w-auto gap-x-20 px-4 md:px-8 mlg:px-10 min-[1440px]:px-0! mlg:p-7">
          <h2 className="cases__title text-[2rem]/[100%] font-ds-ibm-mono font-bold uppercase">CASES</h2>
          <div className="cases__wrapper flex gap-24 items-center">
            <a href="" className="cases__link underline hover:scale-101 hover:opacity-80 transition-all block whitespace-nowrap shrink-0">Ver Todos</a>
            <div className="cases__buttons flex absolute right-0 -bottom-10 mlg:static p-10  mlg:p-0 gap-3 translate-y-full mlg:translate-y-0">
              <button
                type="button"
                aria-label="Ver posts anteriores"
                onClick={(event) => { swiperRef.current?.slidePrev(); nudge(event.currentTarget, -1) }}
                disabled={isBeginning}
                className={`cases__button ${buttonStyle}`}
              >
                <ArrowLeftLong/>
              </button>
              <button
                type="button"
                aria-label="Ver próximos posts"
                onClick={(event) => { swiperRef.current?.slideNext(); nudge(event.currentTarget, 1) }}
                disabled={isEnd}
                className={`cases__button ${buttonStyle}`}
              >
                <ArrowRightLong/>
              </button>
            </div>
          </div>
        </header>

        <Swiper
          modules={[Parallax]}
          parallax={true}
          speed={1000}
          spaceBetween={300}
          slidesPerView={1}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          breakpoints={{
            768: { slidesOffsetBefore: 24, slidesOffsetAfter: 24 },
            992: { slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
            1440: { slidesOffsetBefore: 0, slidesOffsetAfter: 0, },
          }}

          onSwiper={(swiper) => { swiperRef.current = swiper; syncEdges(swiper) }}
          onSlideChange={syncEdges}
          onResize={syncEdges}
        >
          {casesInfo.map(({id, banner, altBanner, badges, title, text, projectLink, caseLink}) => (
            <SwiperSlide key={id}>
              <article className="caseCard h-190 md:h-220 relative">
                {/* PLANO DE FUNDO */}
                <img src={banner} alt={altBanner} className="caseCard__img w-full h-full object-cover rounded-3xl bg-ds-neutral-200 absolute inset-0 -z-2" />
                <div className="caseCard__overlay rounded-3xl bg-linear-to-r from-black/20 to-black/20 md:to-black/0 absolute inset-0 -z-1"></div>

                {/* CONTEÚDO */}
                <div className="caseCard__wrapper px-6 sm:px-7 mlg:px-10 pt-30 sm:pt-12 pb-13 sm:pb-15 mlg:py-15 text-ds-off-white flex flex-col h-full w-full max-w-140 justify-between">
                  <header className="caseCard__header flex flex-col gap-6 sm:gap-19 mlg:gap-8 font-ds-ibm-mono">
                    <div className="caseCard__badges flex flex-wrap gap-y-4 gap-x-6 sm:gap-x-8" data-swiper-parallax="-200">
                      {badges.map(badge => (
                        <span key={badge} className="caseCard__badge block text-[0.625rem] sm:text-[0.75rem] px-3 py-1.5 rounded-lg bg-ds-off-white text-ds-pine font-semibold">{badge}</span>
                      ))}
                    </div>
                    <h3 className="caseCard__title text-5xl/[100%] xs:text-7xl/[100%] mlg:text-8xl/[100%]" data-swiper-parallax="-300">{title}</h3>
                  </header>

                  <div className="caseCard__content flex flex-col gap-8">
                    <p className="caseCard__text text-base/[120%] sm:text-lg/[120%]" data-swiper-parallax="-400">{text}</p>

                    <div className="caseCard__buttons flex flex-wrap gap-y-4 gap-x-6" data-swiper-parallax="-500">
                      <AnchorButton text="Entenda o projeto" link={caseLink} variant="solid" tone="light" className="caseCard__button"/>
                      <AnchorButton text="Visite" link={projectLink} variant="outline" tone="light" className="caseCard__button"/>
                    </div>
                  </div>
                </div>
 
                {/* RECORTE */}
                <div className="cases__wrapper h-22 w-36 mlg:w-128.75 absolute top-0 -right-px z-8 bg-ds-off-white rounded-bl-3xl">
                  {/* Bordas arredondadas */}
                  <span className="w-6 aspect-square absolute top-0 left-px -translate-x-full block bg-[radial-gradient(circle_at_bottom_left,transparent_23.5px,var(--color-ds-off-white)_24px)]" aria-hidden="true"></span>
                  <span className="w-6 aspect-square absolute bottom-0 right-0 translate-y-full block bg-[radial-gradient(circle_at_bottom_left,transparent_23.5px,var(--color-ds-off-white)_24px)]" aria-hidden="true"></span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}

export default CasesSection