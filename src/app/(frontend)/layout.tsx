/* ======================================================================== */
/* VERCEL */
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
import MotionProvider from '@/components/providers/MotionProvider'

/* ======================================================================== */
/* IMPORTAÇÃO DE CSS */
import './base.css'

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

const organizationId = `${siteUrl}/#organization`

const logoUrl = new URL(spirecodeLogo.src, siteUrl).toString()

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

        {/* SCHEMA.ORG */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* CONTEÚDO */}
        <MotionProvider>
          {children}
        </MotionProvider>

        {/* ANÁLISES (VERCEL) */}
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  )
}
