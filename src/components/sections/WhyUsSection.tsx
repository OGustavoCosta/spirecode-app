'use client'

/* ======================================================================== */
/* IMPORTAÇÃO DO SWIPER */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

/* ======================================================================== */
/* IMPORTAÇÃO DE ÍCONES */
import { MonitorCog, Globe, Bolt } from "lucide-react"
import { Accessibility } from "@/components/Icons"

/* ======================================================================== */
/* IMPORTAÇÃO DE TIPOS */
import type { IconComponent } from "@/components/Icons"

type CardInfo = {
  id: number,
  icon: IconComponent
  title: string
  text: string
}

/* TODO: os dois últimos ainda estão com texto de exemplo */
const cardInfo: CardInfo[] = [
  {
    id: 1,
    icon: MonitorCog,
    title: 'Mobile que converte',
    text: '60% do seu tráfego é celular, mas quase todo site só encolhe a versão desktop e espera dar certo. O seu nasce no mobile, onde a venda acontece.',
  },
  {
    id: 2,
    icon: Accessibility,
    title: 'A gente constrói pra todo mundo. Inclusive quem os outros esquecem.',
    text: 'Site acessível não é extra nosso — é o mínimo de fazer certo. E a maioria não faz nem o básico.',
  },
  {
    id: 3,
    icon: Globe,
    title: 'Lorem ipsum dolor sit amet.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pretium mauris. Suspendisse ornare posuere consequat.',
  },
  {
    id: 4,
    icon: Bolt,
    title: 'Maecenas posuere pretium mauris',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pretium mauris. Suspendisse ornare posuere consequat. Vestibulum interdum nisi in vulputate tincidunt.',
  },
]

const gap24 = { spaceBetween: 24, slidesOffsetBefore: 24, slidesOffsetAfter: 24 }
const gap32 = { spaceBetween: 32, slidesOffsetBefore: 32, slidesOffsetAfter: 32 }

const swiperBreakpoints = {
  512:  { ...gap24, slidesPerView: 1.4 },
  768:  { ...gap24, slidesPerView: 2.1 },
  992:  { ...gap32, slidesPerView: 2.5 },
  1100: { ...gap32, slidesPerView: 3.2 },
  1320: { ...gap32, slidesPerView: 4 },
  1440: { spaceBetween: 40, slidesOffsetBefore: 0, slidesOffsetAfter: 0, slidesPerView: 4 },
}

function WhyUsSection(){
  return(
    <div className="whyUs__background background-section py-10 px-0 min-[90rem]:px-8">
      <section className="whyUs max-w-content">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          breakpoints={swiperBreakpoints}
        >
          {cardInfo.map(({ icon: Icon, title, text, id }) => (
            <SwiperSlide className='h-auto!' key={id}>
              <article className="whyUsCard h-full flex flex-col p-8 border border-ds-pine text-ds-pine gap-4">
                <Icon size={40} strokeWidth={1}/>
                <h3 className="whyUsCard__title text-base/[120%] sm:text-lg/[120%] font-ds-ibm-mono">{title}</h3>
                <p className="whyUsCard__text text-sm sm:text-base">{text}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}

export default WhyUsSection
