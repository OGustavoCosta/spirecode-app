'use client'

/* ======================================================================== */
/* IMPORTAÇÃO DE ÍCONES */
import { ArrowRightLong } from "../Icons"

/* ======================================================================== */
/* IMPORTAÇÃO DE COMPONENTES */
import Select from "../form/Select"

/* ======================================================================== */
/* IMPORTAÇÃO DE TIPOS */
import type { SelectOption } from "../form/Select"
import type { SubmitEvent } from "react"

/* TODO: valores de exemplo — trocar pelos serviços reais */
const serviceOptions: SelectOption[] = [
  { value: 'site-institucional', label: 'Site institucional' },
  { value: 'landing-page', label: 'Landing page' },
  { value: 'e-commerce', label: 'E-commerce' },
  { value: 'sistema-web', label: 'Sistema web' },
  { value: 'identidade-visual', label: 'Identidade visual' },
  { value: 'outro', label: 'Outro' },
]

function ContactSection(){
  /* TODO: enviar os dados; por enquanto só evita o reload da página */
  function handleSubmit(event: SubmitEvent<HTMLFormElement>){
    event.preventDefault()
  }

  const labelStyle = 'group relative flex flex-col pt-4'

  const spanStyle = 'absolute left-0 top-7 font-medium transition-all duration-200 ease-out group-focus-within:top-0 group-focus-within:text-[0.7rem] group-has-[input:not(:placeholder-shown)]:top-0 group-has-[input:not(:placeholder-shown)]:text-[0.7rem]'

  const inputStyle = 'rounded-none border-[0px] border-b border-ds-pine/50 text-sm px-0 py-3 text-ds-neutral-400 focus:outline-none'

  return(
    <div className="contactUs__background background-section py-16">
      <section className="contactUs max-w-content flex flex-col items-center md:flex-row gap-8 xl:gap-16 xl:pr-8">
        {/* BAGACEIRA (onde o filho chora e a mão não vê!) */}
        <div className="contactUs__banner flex-1 w-full min-h-135 relative flex flex-col justify-end items-end @container/contact-banner">
          <img className="contactUs__img w-full h-full object-cover rounded-3xl bg-ds-neutral-200 absolute inset-0 -z-1" src="https://picsum.photos/700/400/?blur" alt="" />

          <div className="ContactUs__wrapper w-full p-4 @min-3xl:p-6 xl:p-8">
            <h2 className="contactUs__title font-ds-ibm-mono font-medium text-3xl/[120%] @min-sm:text-[2.5rem]/[120%] @min-3xl:text-5xl/[120%] text-ds-off-white @min-3xl:max-w-110 @min-3xl:translate-y-1/2">Prefere que a Spire entre em contato?</h2>
          </div>

          <div className="contactUs__card bg-ds-off-white pt-4 pl-4 sm:pt-6 sm:pl-6 rounded-tl-3xl max-w-[65%] w-95 @min-3xl:max-w-[40%] @min-3xl:w-95 relative">
            <p className="contactUs__text text-sm/[120%]  @min-lg:text-lg/[120%] @min-3xl:text-2xl/[120%]">Sem compromisso! A gente entende sua demanda e te dá um caminho.</p>
            
            <span className="w-6 aspect-square absolute bottom-0 left-0 -translate-x-full block bg-[radial-gradient(circle_at_top_left,transparent_23.5px,var(--color-ds-off-white)_24px)]" aria-hidden="true"></span>
            <span className="w-6 aspect-square absolute top-0 right-0 -translate-y-full block bg-[radial-gradient(circle_at_top_left,transparent_23.5px,var(--color-ds-off-white)_24px)]" aria-hidden="true"></span>
          </div>
        </div>

        {/* FORMULÁRIO */}
        <div className="contactUs__wrapper w-full max-w-130 md:max-w-95 lg:max-w-110">
          <form onSubmit={handleSubmit} className="contactUs__form w-full max-w-110 font-ds-ibm-mono text-sm text-ds-pine flex flex-col gap-6">

            {/* Nome */}
            <label htmlFor="user" className={`contactUs__label contactUs__label--user ${labelStyle}`}>
              <span className={`contactUs__span ${spanStyle}`}>Nome</span>
              <input type="text" id="user" name="user" placeholder=" " className={`contactUs__input ${inputStyle}`} />
            </label>

            {/* WhatsApp */}
            <label htmlFor="tel" className={`contactUs__label contactUs__label--tel ${labelStyle}`}>
              <span className={`contactUs__span ${spanStyle}`}>WhatsApp</span>
              <input type="tel" id="tel" name="tel" placeholder=" " className={`contactUs__input ${inputStyle}`} />
            </label>

            {/* Empresa */}
            <label htmlFor="company" className={`contactUs__label contactUs__label--company ${labelStyle}`}>
              <span className={`contactUs__span ${spanStyle}`}>Empresa</span>
              <input type="text" id="company" name="company" placeholder=" " className={`contactUs__input ${inputStyle}`} />
            </label>

            {/* Site ou rede social */}
            <label htmlFor="website" className={`contactUs__label contactUs__label--website ${labelStyle}`}>
              <span className={`contactUs__span ${spanStyle}`}>Site ou rede social</span>
              <input type="text" id="website" name="website" placeholder=" " className={`contactUs__input ${inputStyle}`} />
            </label>

            {/* Serviço */}
            <Select name="service" label="Serviço" options={serviceOptions} className="contactUs__select"/>

            <button type="submit" className="contactUs__button group bg-ds-pine text-ds-off-white w-full h-9 flex justify-center items-center overflow-hidden cursor-pointer active:scale-98 active:brightness-90 transition-all duration-150 ease-out">
              <span className="contactUs__text text-sm/[100%]">Quero que chamem!</span>
              <span className="contactUs__arrow flex w-0 opacity-0 overflow-hidden transition-all duration-300 ease-out group-hover:w-10.5 group-hover:opacity-100 group-focus-visible:w-10.5 group-focus-visible:opacity-100" aria-hidden="true">
                <ArrowRightLong size={30} className="ml-3 shrink-0"/>
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactSection