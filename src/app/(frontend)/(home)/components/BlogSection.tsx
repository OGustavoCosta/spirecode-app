'use client'

import { useRef, useState } from 'react'

/* ======================================================================== */
/* IMPORTAÇÃO DO SWIPER */
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';

/* ======================================================================== */
/* IMPORTAÇÃO DE COMPONENTES */
import BlogCard from '@/components/card/BlogCard';

/* ======================================================================== */
/* IMPORTAÇÃO DE ÍCONES */
import { ArrowLeftLong, ArrowRightLong } from "@/components/Icons"

type BlogCardInfo = {
  id: number
  banner: string
  badges: string[]
  title: string
}

const blogCardInfo: BlogCardInfo[] = [
  {
    id: 1,
    banner: 'https://picsum.photos/seed/spire-blog-1/800/800',
    badges: ['Lorem ipsum', 'Dolor sit'],
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    banner: 'https://picsum.photos/seed/spire-blog-2/800/800',
    badges: ['Consectetur', 'Adipiscing'],
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pretium.',
  },
  {
    id: 3,
    banner: 'https://picsum.photos/seed/spire-blog-3/800/800',
    badges: ['Maecenas', 'Posuere'],
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const gap24 = { spaceBetween: 24, slidesOffsetBefore: 24, slidesOffsetAfter: 24 }
const gap32 = { spaceBetween: 32, slidesOffsetBefore: 32, slidesOffsetAfter: 32 }

const swiperBreakpoints = {
  512:  { ...gap24, slidesPerView: 1.4 },
  768:  { ...gap24, slidesPerView: 2.1 },
  992:  { ...gap32, slidesPerView: 2.5 },
  1100: { ...gap32, slidesPerView: 3 },
  1280: { spaceBetween: 40, slidesOffsetBefore: 0, slidesOffsetAfter: 0, slidesPerView: 3 },
}

/* Empurra a seta para o lado que ela indica e traz de volta.
   Anima o <svg>, e não o próprio botão, para não brigar com o
   hover:scale-105 — os dois disputariam a mesma propriedade transform. */
function nudge(button: HTMLElement, direction: -1 | 1){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  button.querySelector('svg')?.animate(
    [
      { transform: 'translateX(0)' },
      { transform: `translateX(${direction * 0.5}rem)` },
      { transform: 'translateX(0)' },
    ],
    { duration: 300, easing: 'ease-out' },
  )
}

function BlogSection(){
  const swiperRef = useRef<SwiperInstance | null>(null)

  /* estado só para desabilitar as setas nas pontas */
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  function syncEdges(swiper: SwiperInstance){
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  const buttonStyle = 'cursor-pointer transition-all hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100'

  return(
    <div className="blog__background background-section py-10 px-0 min-[1280px]:px-8">
      <section className="blog max-w-content max-w-[1280px] w-full space-y-10">
        <header className="blog__header text-ds-pine flex flex-col md:flex-row justify-between gap-y-8 px-4 md:px-8 mlg:px-10">
          <h2 className="blog__title text-[2rem]/[100%] font-ds-ibm-mono font-bold max-w-90 lg:max-w-content">ASSUNTOS QUE PODEM TE INTERESSAR</h2>
          <div className="blog__wrapper flex gap-24 items-center w-full md:w-auto justify-between">
            <a href="" className="blog__link underline hover:scale-101 hover:opacity-80 transition-all block whitespace-nowrap shrink-0">Ver Todos</a>
            <div className="blog__buttons flex  min-[1100px]:hidden gap-3">
              <button
                type="button"
                aria-label="Ver posts anteriores"
                onClick={(event) => { swiperRef.current?.slidePrev(); nudge(event.currentTarget, -1) }}
                disabled={isBeginning}
                className={`blog__button ${buttonStyle}`}
              >
                <ArrowLeftLong/>
              </button>
              <button
                type="button"
                aria-label="Ver próximos posts"
                onClick={(event) => { swiperRef.current?.slideNext(); nudge(event.currentTarget, 1) }}
                disabled={isEnd}
                className={`blog__button ${buttonStyle}`}
              >
                <ArrowRightLong/>
              </button>
            </div>
          </div>
        </header>

        <Swiper
          spaceBetween={24}
          slidesPerView={1.2}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          breakpoints={swiperBreakpoints}
          onSwiper={(swiper) => { swiperRef.current = swiper; syncEdges(swiper) }}
          onSlideChange={syncEdges}
          onResize={syncEdges}
        >
          {blogCardInfo.map(({ id, banner, badges, title }) => (
            <SwiperSlide className='h-auto!' key={id}>
              <BlogCard banner={banner} badges={badges} title={title}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}

export default BlogSection