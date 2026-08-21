/* ======================================================================== */
/* IMPORTAÇÃO DE COMPONENTES */
import PostsSection from "@/components/sections/PostsSection"

/* ======================================================================== */
/* METADADOS */
export const metadata = {
  title: 'Cases',
}

/* ======================================================================== */
/* RASCUNHO DO SCHEMA — NÃO USADO EM LUGAR NENHUM AINDA

   Este objeto é o desenho do que vai virar a collection `cases` no Payload.
   Ele descreve UM case, então o lugar definitivo dele é `cases/[slug]/page.tsx`
   (esta rota, `/cases`, deve virar a listagem).

   Notas de transcrição para o Payload:
   - `Img` vira relação com a collection `media` (o `alt` já é required lá).
   - `sections[].body` vira campo `richText` (lexical), não string.
   - `sections[]` vira um `array` field; `services`/`segments` viram `array`
     de texto ou relação com uma collection de tags.
   - Os campos do topo (até `segments`) são os que o card da home consome;
     `sections` só a página de detalhe usa.
*/

type Img = {
  src: string
  alt: string
}

type CaseSection = {
  slug: string                    /* âncora do sumário lateral: #desafio */
  title: string                   /* rótulo do sumário lateral */
  body: string                    /* vira richText (lexical) no Payload */
  image?: Img
  variant?: 'title' | 'logo'      /* 'logo' mostra a marca no lugar do título */
}

type Case = {
  /* --- identidade --- */
  slug: string
  title: string
  logo: Img
  cover: { desktop: Img; mobile: Img }
  websiteUrl: string

  /* --- resumo (consumido pelo card de cases da home) --- */
  excerpt: string
  description: string
  services: string[]
  segments: string[]

  /* --- corpo da página de detalhe --- */
  sections: CaseSection[]
}

const data: Case = {
  slug: 'pousada-canto-da-serra',
  title: 'Pousada Canto da Serra',
  logo: {
    src: '',
    alt: 'Marca da Pousada Canto da Serra',
  },
  cover: {
    desktop: {
      src: '',
      alt: 'Fachada da Pousada Canto da Serra vista do jardim',
    },
    mobile: {
      src: '',
      alt: 'Fachada da Pousada Canto da Serra vista do jardim',
    },
  },
  websiteUrl: 'https://www.cantodaserra.com',

  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pretium mauris.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pretium mauris. Suspendisse ornare posuere consequat. Vestibulum interdum nisi in vulputate tincidunt.',
  services: ['Landing page', 'ERP', 'Time alocado'],
  segments: ['Hotelaria', 'Turismo'],

  sections: [
    {
      slug: 'empresa',
      title: 'Empresa',
      variant: 'logo',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pretium mauris. Suspendisse ornare posuere consequat. Vestibulum interdum nisi in vulputate tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pretium mauris. Suspendisse ornare posuere consequat. Vestibulum interdum nisi in vulputate tincidunt.',
      image: {
        src: '',
        alt: 'Sala de estar da pousada com sofás e televisão',
      },
    },
    {
      slug: 'desafio',
      title: 'Desafio',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pretium mauris. Suspendisse ornare posuere consequat. Vestibulum interdum nisi in vulputate tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pretium mauris. Suspendisse ornare posuere consequat. Vestibulum interdum nisi in vulputate tincidunt.',
      image: {
        src: '',
        alt: 'Mesa de café da manhã servida com frutas, bolos e sucos',
      },
    },
    {
      slug: 'solucao',
      title: 'Solução',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pretium mauris. Suspendisse ornare posuere consequat. Vestibulum interdum nisi in vulputate tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pretium mauris. Suspendisse ornare posuere consequat. Vestibulum interdum nisi in vulputate tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pretium mauris. Suspendisse ornare posuere consequat. Vestibulum interdum nisi in vulputate tincidunt.',
      image: {
        src: '',
        alt: 'Bolo de milho servido sobre aparador de madeira',
      },
    },
  ],
}

function CasePage() {
  return (
    <>
      <PostsSection/>
    </>
  )
}

export default CasePage
