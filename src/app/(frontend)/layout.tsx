/* ======================================================================== */
/* IMPORTAÇÃO DE FONTES */
import { IBM_Plex_Sans, IBM_Plex_Mono, Figtree } from 'next/font/google'

const IBM_mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-ibm-mono',
})

const IBM_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-ibm-sans',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-figtree',
})

/* ======================================================================== */
/* IMPORTAÇÃO DE COMPONENTES */
import SkipLink from '@/components/acessibility/SkipLink'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

/* ======================================================================== */
/* IMPORTAÇÃO DE CSS */
import './base.css'
import MotionProvider from '@/components/providers/MotionProvider'

/* ======================================================================== */
/* METADADOS */
import openGraphBanner from '@/assets/images/openGraph-banner.jpg'

const siteUrl = 'https://spirecode.com.br'
const siteDescription = 'A Spirecode desenvolve sites, landing pages e sistemas sob medida para negócios que querem crescer online, unindo design, performance e acessibilidade em cada projeto.'

export const metadata = {
  title: 'Spirecode | Sites e sistemas sob medida',
  applicationName: "Spirecode",
  description: siteDescription,
  keywords: ['desenvolvimento de sites', 'landing page', 'sistemas sob medida', 'ERP', 'agência de tecnologia', 'Spirecode'],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  authors: [
    { name: 'Gustavo Costa', url: 'https://spirecode.com.br' },
    { name: 'Marlon Perez', url: 'https://spirecode.com.br' }
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images: openGraphBanner,
    title: 'Spirecode | Sites e sistemas sob medida',
    description: 'Sites, landing pages e sistemas sob medida para o seu negócio crescer online, unindo design, performance e acessibilidade em cada projeto.',
    type: 'website',
    siteName: 'Spirecode',
    locale: 'pt_BR',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spirecode | Sites e sistemas sob medida',
    description: 'Sites, landing pages e sistemas sob medida para o seu negócio crescer online, unindo design, performance e acessibilidade em cada projeto.',
    images: [openGraphBanner],
  },
  robots: { index: true, follow: true },
}

/* ======================================================================== */
/* SCHEMA.ORG */
import type { ProfessionalService, WebSite, WithContext } from 'schema-dts'
import spirecodeLogo from '@/assets/images/SPIRECODE.svg'

/* '@id' compartilhado entre os dois blocos: o WebSite referencia a
   ProfessionalService como publisher em vez de duplicar os dados, então
   o Google entende que é a mesma entidade nos dois lugares. */
const organizationId = `${siteUrl}/#organization`

/* .src é o único jeito de virar string: o campo `logo` do schema.org quer
   uma URL, e o import de asset do Next devolve um StaticImageData. */
const logoUrl = new URL(spirecodeLogo.src, siteUrl).toString()

/* ProfessionalService (não Organization genérico) porque a Spirecode tem
   endereço físico e o esforço comercial começa local, em Guanambi - BA —
   areaServed é o que sinaliza isso sem implicar atendimento presencial
   (o serviço em si é remoto). Ambição nacional vem depois, ampliando esse
   campo, sem trocar o tipo. */
const professionalServiceJsonLd: WithContext<ProfessionalService> = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': organizationId,
  name: 'Spirecode',
  url: siteUrl,
  logo: logoUrl,
  email: 'contato@spirecode.com.br',
  telephone: '+5577988481208',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Praça José Ferreira, 226, centro',
    addressLocality: 'Guanambi',
    addressRegion: 'BA',
    addressCountry: 'BR',
  },
  areaServed: {
    '@type': 'City',
    name: 'Guanambi',
  },
}

const websiteJsonLd: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: siteUrl,
  name: 'Spirecode',
  description: siteDescription,
  inLanguage: 'pt-BR',
  publisher: { '@id': organizationId },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="pt-br" className={`${IBM_mono.variable} ${IBM_sans.variable} ${figtree.variable}`}>
      <body className='flex flex-col min-h-screen bg-ds-off-white overflow-x-hidden max-w-dvw'>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <MotionProvider>
          <SkipLink/>
          <Header/>
          <main id='main' className='main grow'>{children}</main>
          <Footer/>
        </MotionProvider>
      </body>
    </html>
  )
}
