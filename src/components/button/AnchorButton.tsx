/* ======================================================================== */
/* IMPORTAÇÃO DE COMPONENTES */
import Link from 'next/link'

/* ======================================================================== */
/* IMPORTAÇÃO DE ÍCONES */
import { ArrowUpRight } from 'lucide-react'

type AnchorButtonProps = {
  text: string
  link: string
  variant?: 'solid' | 'outline'
  tone?: 'light' | 'dark'
  className?: string
}

const variantStyles = {
  solid: {
    light: {
      surface: 'bg-ds-off-white text-ds-pine',
      hover: 'hover:text-ds-off-white focus-visible:text-ds-off-white',
      fill: 'bg-ds-pine',
    },
    dark: {
      surface: 'bg-ds-pine text-ds-off-white',
      hover: 'hover:text-ds-pine focus-visible:text-ds-pine',
      fill: 'bg-ds-off-white',
    },
  },
  outline: {
    light: {
      surface: 'border border-ds-off-white text-ds-off-white',
      hover: 'hover:text-ds-pine focus-visible:text-ds-pine',
      fill: 'bg-ds-off-white',
    },
    dark: {
      surface: 'border border-ds-pine text-ds-pine',
      hover: 'hover:text-ds-off-white focus-visible:text-ds-off-white',
      fill: 'bg-ds-pine',
    },
  },
} as const

const externalLink = /^(https?:)?\/\/|^mailto:|^tel:/

function AnchorButton({ text, link, variant = 'solid', tone = 'light', className }: AnchorButtonProps){
  const { surface, hover, fill } = variantStyles[variant][tone]
  const isExternal = externalLink.test(link)

  const classes = `anchorButton group relative overflow-hidden w-fit flex items-center px-4 py-3 text-sm/[100%] font-ds-ibm-mono font-medium transition-colors duration-500 ${surface} ${hover} ${className ?? ''}`

  const content = (
    <>
      {/* z-10 mantém o conteúdo por cima do círculo. A seta acompanha a troca
          de cor sozinha porque o lucide desenha em currentColor. */}
      <span className="anchorButton__content relative z-10 flex items-center gap-3">
        {text}
        {isExternal && <span className="sr-only">(abre em nova aba)</span>}
        <ArrowUpRight size={16} strokeWidth={1.5}/>
      </span>

      {/* O círculo espera fora do botão e, no hover, entra pela esquerda e
          cresce até cobrir tudo. O overflow-hidden do wrapper é que recorta
          o excesso nos cantos. */}
      <span className="anchorButton__fill absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className={`absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150 group-focus-visible:translate-x-0 group-focus-visible:scale-150 motion-reduce:transition-none ${fill}`}></span>
      </span>
    </>
  )

  if (isExternal) {
    return(
      <a href={link} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    )
  }

  return(
    <Link href={link} className={classes}>
      {content}
    </Link>
  )
}

export default AnchorButton