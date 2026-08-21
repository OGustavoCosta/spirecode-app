import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

/* ======================================================================== */
/* LINGUAGENS */
import { pt } from '@payloadcms/translations/languages/pt'

/* ======================================================================== */
/* COLEÇÕES */
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Cases } from './collections/Cases'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Cases],
  i18n: {
    supportedLanguages: { pt },
    fallbackLanguage: 'pt',
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    /* Em produção o schema só muda via migration. No dev o push continua
       ligado para iterar rápido — desde que o DATABASE_URL local aponte
       para um branch de desenvolvimento, nunca para o banco de produção. */
    push: process.env.NODE_ENV !== 'production',
  }),
  sharp,
  plugins: [],
})
