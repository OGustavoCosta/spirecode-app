import banner from '@/assets/images/hero-banner.jpg'

function HeroSection(){
  return(
    <div className="hero__background background-section py-6 md:py-8 h-svh">
      <section className="hero max-w-content max-w-480! flex-1 w-full min-h-135 relative flex flex-col justify-end md:justify-between items-start @container/contact-banner">
        <img className="hero__img w-full h-full object-cover rounded-3xl bg-ds-neutral-200 absolute inset-0 -z-1" src={banner.src} alt="o banner fodão" />

      <div className="hero__wrapper hidden md:flex justify-center w-full">
        <span className="hero__span block w-125 h-7 bg-ds-off-white rounded-b-[14px] relative">
          <span className="w-[14px] aspect-square absolute top-0 left-0 -translate-x-full block bg-[radial-gradient(circle_at_bottom_left,transparent_13.5px,var(--color-ds-off-white)_14px)]" aria-hidden="true"></span>
          <span className="w-[14px] aspect-square absolute top-0 right-0 translate-x-full block bg-[radial-gradient(circle_at_bottom_right,transparent_13.5px,var(--color-ds-off-white)_14px)]" aria-hidden="true"></span>
        </span>
      </div>

      <div className="hero__card bg-ds-off-white pt-4 px-4 pb-1 sm:pb-2 sm:pt-6 sm:px-8 w-185 max-w-[60%] sm:max-w-[65%] relative rounded-tr-3xl">
        <p className="hero__text text-sm/[120%] @min-sm:text-lg/[120%]  @min-lg:text-2xl/[120%] @min-4xl:text-[2rem]/[120%]">Uma empresa que aspira o topo <span className='font-bold'>precisa</span> de um parceiro à altura!</p>
        
        <span className="w-6 aspect-square absolute top-0 left-0 -translate-y-full block bg-[radial-gradient(circle_at_top_right,transparent_23.5px,var(--color-ds-off-white)_24px)]" aria-hidden="true"></span>
        <span className="w-6 aspect-square absolute bottom-0 right-0 translate-x-full block bg-[radial-gradient(circle_at_top_right,transparent_23.5px,var(--color-ds-off-white)_24px)]" aria-hidden="true"></span>
      </div>
      </section>
    </div>
  )
}

export default HeroSection