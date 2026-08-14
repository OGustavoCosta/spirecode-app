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

/* ======================================================================== */
/* IMPORTAÇÃO DE ÍCONES */
import { ArrowLeftLong, ArrowRightLong } from "@/components/Icons"

/* ======================================================================== */
/* IMPORTAÇÃO DE ANIMAÇÕES */
import { nudge } from "@/lib/animation"
import Link from 'next/link';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

/* ======================================================================== */
/* IMPORTAÇÃO DE IMAGENS */
import serviceBanner from '@/assets/images/services/service-banner.png'

type ServiceInfo = {
  id: number
  header: string
  color?: string
  title: string
  text: string
  button: string
  link: string
  banner: string
  altBanner: string
  badge: StaticImageData
}

/* TODO: copy é rascunho e as fotos são do Picsum — revisar com o time */
const serviceInfo: ServiceInfo[] = [
  {
    id: 1,
    header: 'Time de T.I',
    color: 'bg-ds-ascend',
    title: 'Seu time de tecnologia, sem folha de pagamento.',
    text: 'Contratar dev sênior custa caro e demora meses de processo seletivo. A gente entra como o time que você montaria — já entrosado e já pronto para começar.',
    button: 'Quero saber mais',
    link: '/servicos#time-de-ti',
    banner: 'https://picsum.photos/seed/spire-service-ti/600/800',
    altBanner: 'Dupla de desenvolvedores trabalhando lado a lado em um mesmo projeto',
    badge: serviceBanner,
  },
  {
    id: 2,
    header: 'Sites',
    color: 'bg-ds-pine',
    title: 'O site que sua empresa já deveria ter há dois anos.',
    text: 'Nada de template genérico com o seu logo por cima. A gente parte do seu negócio, desenha a jornada e entrega um site que carrega rápido e aparece no Google.',
    button: 'Ver como funciona',
    link: '/servicos#sites',
    banner: 'https://picsum.photos/seed/spire-service-sites/600/800',
    altBanner: 'Notebook aberto exibindo a página inicial de um site institucional',
    badge: serviceBanner,
  },
  {
    id: 3,
    header: 'Landing pages',
    color: 'bg-ds-slate',
    title: 'Uma página com um objetivo só: converter.',
    text: 'Campanha no ar e ninguém preenche o formulário? Landing page é ofício à parte — copy, hierarquia e teste. A gente faz, mede e ajusta.',
    button: 'Quero converter mais',
    link: '/servicos#landing-pages',
    banner: 'https://picsum.photos/seed/spire-service-landing/600/800',
    altBanner: 'Celular na mão de uma pessoa com uma landing page aberta na tela',
    badge: serviceBanner,
  },
  {
    id: 4,
    header: 'E-commerce',
    color: 'bg-ds-neutral-600',
    title: 'Loja online que não perde venda no checkout.',
    text: 'Boa parte do carrinho abandonado nasce de detalhe técnico: cálculo de frete lento, campo demais no cadastro, página que trava no celular. É aí que a gente mexe.',
    button: 'Falar sobre minha loja',
    link: '/servicos#e-commerce',
    banner: 'https://picsum.photos/seed/spire-service-ecommerce/600/800',
    altBanner: 'Pessoa finalizando uma compra pelo celular com o cartão em mãos',
    badge: serviceBanner,
  },
  {
    id: 5,
    header: 'Sistemas',
    color: 'bg-ds-neutral-500',
    title: 'O que hoje vive numa planilha pode virar sistema.',
    text: 'Controle feito na mão trava assim que a operação cresce. A gente transforma esse processo em ferramenta, com acesso por perfil, histórico e relatório.',
    button: 'Quero um orçamento',
    link: '/servicos#sistemas',
    banner: 'https://picsum.photos/seed/spire-service-sistemas/600/800',
    altBanner: 'Monitor exibindo o painel de um sistema web com gráficos e tabelas',
    badge: serviceBanner,
  },
]

function ServicesSection(){
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
    <div className="services__background background-section py-10 px-0 min-[1440px]:px-8">
      <section className="services max-w-content w-full space-y-10 relative">
        <header className="services__header text-ds-pine flex flex-col md:flex-row justify-start md:items-end gap-y-8 gap-x-20 px-4 md:px-8 mlg:px-10 min-[1440px]:px-0!">
          <h2 className="services__title text-[2rem]/[100%] font-ds-ibm-mono font-bold uppercase">SERVIÇOS</h2>
          <div className="services__wrapper flex gap-24 items-center w-full md:w-auto justify-between">
            <a href="" className="services__link underline hover:scale-101 hover:opacity-80 transition-all block whitespace-nowrap shrink-0">Ver Todos</a>
            <div className="services__buttons flex gap-3">
              <button
                type="button"
                aria-label="Ver posts anteriores"
                onClick={(event) => { swiperRef.current?.slidePrev(); nudge(event.currentTarget, -1) }}
                disabled={isBeginning}
                className={`services__button ${buttonStyle}`}
              >
                <ArrowLeftLong/>
              </button>
              <button
                type="button"
                aria-label="Ver próximos posts"
                onClick={(event) => { swiperRef.current?.slideNext(); nudge(event.currentTarget, 1) }}
                disabled={isEnd}
                className={`services__button ${buttonStyle}`}
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

          onSwiper={(swiper) => { swiperRef.current = swiper; syncEdges(swiper) }}
          onSlideChange={syncEdges}
          onResize={syncEdges}
        >
          {serviceInfo.map(({banner, altBanner, badge, header, color = 'bg-ds-ascend', title, text, button, link, id}) => (
            <SwiperSlide key={id}>
              <article className='serviceCard w-full relative px-4 xs:px-6 lg:px-16 min-[1440px]:px-8 flex flex-col items-end'>
                <header 
                  className={`serviceCard__header relative mlg:absolute w-fit top-0 right-0 xs:right-20 mlg:right-28 min-[1440px]:right-40! ${color} py-8 sm:py-12 px-10 sm:px-18 pr-30 sm:pr-40 md:pr-50`}
                  data-swiper-parallax="-300"
                >
                  <h3 className="serviceCard__title max-w-52 xs:max-w-56 text-ds-off-white text-[2rem]/[115%] xs:text-[2.5rem]/[115%] sm:text-5xl/[115%] font-ds-ibm-mono font-bold">{header}</h3>
                  <Image src={badge} alt="" className="serviceCard__badge absolute w-full max-w-70 xs:max-w-90 sm:max-w-100 md:max-w-110 top-0 -right-22 xs:-right-40" data-swiper-parallax="-200"/>
                </header>
                <div className="serviceCard__wrapper w-full flex flex-col-reverse xl:flex-row justify-start items-start xl:items-end gap-10 md:gap-13 md:gap-y-26 pt-36 xs:pt-52 md:pt-28 xl:pt-0">
                  <div className="serviceCard__banner xl:aspect-3/4 overflow-hidden w-full h-145 xl:h-auto xl:max-w-125 rounded-3xl">
                    <img src={banner} alt={altBanner} className="serviceCard__image w-full h-full object-cover" />
                  </div>
                  <div className="serviceCard__wrapper flex flex-col w-full max-w-100 md:max-w-75 gap-6 xl:translate-y-[-20%]">
                    <div className="serviceCard__content flex flex-col gap-13">
                      <h4 className="serviceCard__subtitle text-2xl/[120%] font-ds-ibm-mono" data-swiper-parallax="-100">{title}</h4>
                      <p className="serviceCard__text" data-swiper-parallax="-200">{text}</p>
                    </div>
                    <Link href={link} className={`serviceCard__button ${color} text-ds-off-white text-lg/[100%] font-medium font-ds-ibm-mono px-6 py-3 w-fit block`} data-swiper-parallax="-300">{button}</Link>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}

export default ServicesSection
