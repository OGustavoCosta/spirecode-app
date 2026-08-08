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

export const metadata = {
  title: 'Spire',
  applicationName: "Spirecode",
  description: '',
  keywords: [],
  metadataBase: new URL('https://spirecode.com.br'),
  alternates: { canonical: '/' },
  authors: [
    { name: 'Gustavo Costa', url: '' },
    { name: 'Marlon Perez', url: '' }
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images: openGraphBanner,
    title: 'Spirecode',
    description: 'O Spirecode é uma iniciativa inovadora do Instituto Federal Baiano – Campus Guanambi, que utiliza drones para transformar o aprendizado de estudantes e professores [...]',
    type: 'website',
    siteName: 'Spirecode',
    locale: 'pt_BR',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spirecode',
    description: 'O Spirecode é uma iniciativa inovadora do Instituto Federal Baiano – Campus Guanambi, que utiliza drones para transformar o aprendizado de estudantes e professores [...]',
    images: [openGraphBanner],
  },
  robots: { index: true, follow: true },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="pt-br" className={`${IBM_mono.variable} ${IBM_sans.variable} ${figtree.variable}`}>
      <body className='flex flex-col min-h-screen bg-ds-neutral-50 overflow-x-hidden max-w-dvw'>
        <MotionProvider>
          <SkipLink/>
          <Header absolute={true}/>
          <main id='main' className='main grow'>{children}</main>
          <Footer/>
        </MotionProvider>
      </body>
    </html>
  )
}
