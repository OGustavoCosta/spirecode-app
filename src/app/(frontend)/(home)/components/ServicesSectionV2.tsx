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
import Link from 'next/link';
import Image from 'next/image';

/* ======================================================================== */
/* IMPORTAÇÃO DE ÍCONES */
import { ArrowLeftLong, ArrowRightLong } from "@/components/Icons"

/* ======================================================================== */
/* IMPORTAÇÃO DE ANIMAÇÕES */
import { nudge } from "@/lib/animation"

/* ======================================================================== */
/* IMPORTAÇÃO DE IMAGENS */
import serviceBanner from '@/assets/images/services/service-banner.png'
import type { StaticImageData } from 'next/image';

type ServiceInfo = {
  id: number
  header: string
  title: string
  text: string
  button: string
  link: string
  banner: string
  altBanner: string
  badge: StaticImageData
}

const serviceInfo: ServiceInfo[] = [
  {
    id: 1,
    header: 'Time de T.I',
    title: 'Lorem ipsum dolor sit amet.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pretium mauris. Suspendisse ornare posuere consequat. Vestibulum interdum nisi in vulputate tincidunt.',
    button: 'Quero saber mais',
    link: '/',
    banner: 'https://picsum.photos/seed/spire-service-4/600/800',
    altBanner: '',
    badge: serviceBanner,
  },
  {
    id: 2,
    header: 'Time de T.I',
    title: 'Lorem ipsum dolor sit amet.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pretium mauris. Suspendisse ornare posuere consequat. Vestibulum interdum nisi in vulputate tincidunt.',
    button: 'Quero saber mais',
    link: '/',
    banner: 'https://picsum.photos/seed/spire-service-4/600/800',
    altBanner: '',
    badge: serviceBanner,
  }
]

/* Card em subcomponente local: o layout tem duas colunas com ornamentos
   absolutos em cada uma, e separá-lo aqui evita um JSX de três níveis
   de aninhamento dentro do map do Swiper.

   Espelhado em relação ao original: no desktop a imagem fica à esquerda e o
   conteúdo à direita, então tudo que lá encostava à esquerda aqui encosta à
   direita (self-end no lugar de self-start, pr no lugar de pl, e por aí). */
function ServiceCard({ header, title, text, button, link, banner, altBanner, badge }: Omit<ServiceInfo, 'id'>){
  return(
    <article className="serviceCard w-full flex flex-col lg:flex-row-reverse justify-center items-center lg:items-start gap-15 sm:gap-20 px-4 md:px-8 mlg:px-10 min-[1440px]:px-0!">
      <div className="serviceCard__content flex flex-col items-start gap-15 relative w-full sm:w-fit">
        {/* Ornamento: 1/4 de círculo. O PNG ainda não existe — assim que
            entrar em public/images/background/patterns/ ele aparece sozinho.
            scale-x-[-1] espelha o quarto de círculo junto com o layout. */}
        <span
          aria-hidden="true"
          className="serviceCard__pattern bg-[url(/images/background/patterns/pattern-1-4-circle.png)] bg-center bg-cover w-[105%] min-w-96 aspect-square absolute right-[25%] md:right-[15%] top-5 z-0 scale-x-[-1]"
        ></span>

        <header
          data-swiper-parallax="300"
          className="serviceCard__header bg-ds-ascend p-5 sm:p-10 self-end pr-20 sm:pr-30 sm:ml-30 lg:ml-40 relative w-fit"
        >
          {/* O badge vaza para fora do bloco colorido — é o overflow-visible!
              do Swiper que o mantém inteiro. */}
          <Image
            data-swiper-parallax="200"
            src={badge}
            alt=""
            className="serviceCard__badge absolute top-10 -right-[40%] sm:-right-[50%] w-[70%] sm:w-[80%] max-w-72 h-auto"
          />
          <h3 className="serviceCard__title uppercase font-ds-ibm-mono font-bold text-4xl/[115%] sm:text-5xl/[115%] text-ds-off-white max-w-56">{header}</h3>
        </header>

        <div className="serviceCard__article flex flex-col items-end text-right gap-6 mr-22 text-ds-pine relative">
          <h4 data-swiper-parallax="400" className="serviceCard__subtitle text-2xl/[120%] font-ds-ibm-mono max-w-80">{title}</h4>
          <p data-swiper-parallax="500" className="serviceCard__text text-sm sm:text-base max-w-60 sm:max-w-80">{text}</p>
          <div data-swiper-parallax="700">
            <Link href={link} className="serviceCard__button bg-ds-ascend text-ds-off-white text-lg/[100%] font-medium font-ds-ibm-mono px-6 py-3 w-fit block">{button}</Link>
          </div>
        </div>
      </div>

      <div className="serviceCard__media relative flex justify-center">
        {/* Ornamento: círculo cheio. Mesmo caso do slot acima. */}
        <span
          aria-hidden="true"
          data-swiper-parallax="300"
          className="serviceCard__pattern bg-[url(/images/background/patterns/pattern-circle.png)] bg-center bg-cover w-[50%] aspect-square absolute right-[20%] top-20 z-0"
        ></span>
        <img
          data-swiper-parallax="100"
          src={banner}
          alt={altBanner}
          className="serviceCard__image mb-15 lg:mb-0 lg:mt-[35%] lg:max-w-96 relative lg:aspect-3/4 object-cover rounded-3xl"
        />
      </div>
    </article>
  )
}

function ServicesSectionV2(){
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
    <div className="servicesV2__background background-section py-10 px-0 min-[1440px]:px-8">
      <section className="servicesV2 max-w-content w-full space-y-10 relative">
        <header className="servicesV2__header text-ds-pine flex flex-col md:flex-row justify-start items-end gap-y-8 gap-x-20 px-4 md:px-8 mlg:px-10 min-[1440px]:px-0!">
          <h2 className="servicesV2__title text-[2rem]/[100%] font-ds-ibm-mono font-bold uppercase">SERVIÇOS</h2>
          <div className="servicesV2__wrapper flex gap-24 items-center w-full md:w-auto justify-between">
            <a href="" className="servicesV2__link underline hover:scale-101 hover:opacity-80 transition-all block whitespace-nowrap shrink-0">Ver Todos</a>
            <div className="servicesV2__buttons flex gap-3">
              <button
                type="button"
                aria-label="Ver serviço anterior"
                onClick={(event) => { swiperRef.current?.slidePrev(); nudge(event.currentTarget, -1) }}
                disabled={isBeginning}
                className={`servicesV2__button ${buttonStyle}`}
              >
                <ArrowLeftLong/>
              </button>
              <button
                type="button"
                aria-label="Ver próximo serviço"
                onClick={(event) => { swiperRef.current?.slideNext(); nudge(event.currentTarget, 1) }}
                disabled={isEnd}
                className={`servicesV2__button ${buttonStyle}`}
              >
                <ArrowRightLong/>
              </button>
            </div>
          </div>
        </header>

        {/* overflow-visible! é o que faz o badge e os ornamentos sobreviverem:
            o .swiper corta tudo por padrão. Quem segura o scroll horizontal é
            o overflow-x: clip do background-section, no container pai.

            Com o corte desligado, o slide vizinho passaria a aparecer nas
            laterais — daí o spaceBetween alto, que o empurra para fora da tela. */}
        <Swiper
          modules={[Parallax]}
          parallax={true}
          speed={1000}
          spaceBetween={300}
          slidesPerView={1}
          className="overflow-visible!"

          onSwiper={(swiper) => { swiperRef.current = swiper; syncEdges(swiper) }}
          onSlideChange={syncEdges}
          onResize={syncEdges}
        >
          {serviceInfo.map(({ id, ...service }) => (
            <SwiperSlide className="h-auto! pt-10 xl:pt-0" key={id}>
              <ServiceCard {...service}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}

export default ServicesSectionV2
