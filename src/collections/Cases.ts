import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const Cases: CollectionConfig = {
  slug: 'cases',

  labels: {
    singular: 'Case',
    plural: 'Cases',
  },

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    description: 'Projetos entregues, exibidos no carrossel da home e em página própria.',
  },

  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },

  versions: {
    drafts: true,
  },

  fields: [
    /* TÍTULO */
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true,
      admin: {
        description: 'Nome do cliente, como aparece no card e no topo da página.',
      },
    },

    /* SLUG */
    slugField({
      useAsSlug: 'title',
      overrides: (field) => {
        /* field.fields[0] é o checkbox, [1] é o texto do slug */
        const [checkbox, slug] = field.fields
        if (checkbox.type === 'checkbox') checkbox.label = 'Gerar slug automaticamente'
        if (slug.type === 'text') slug.label = 'Slug'
        return field
      },
    }),

    /* LOGO */
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: { contains: 'image' },
      },
      admin: {
        description: 'Marca do cliente, de preferência SVG ou PNG com fundo transparente.',
      },
    },

    /* CAPA */
    {
      name: 'cover',
      label: 'Capa',
      type: 'group',
      admin: {
        description: 'Imagem de fundo do card no carrossel de cases e na hero da página própria',
      },
      fields: [
        {
          name: 'desktop',
          label: 'Versão desktop',
          type: 'upload',
          relationTo: 'media',
          required: true,
          filterOptions: { mimeType: { contains: 'image' } },
          admin: { description: 'Formato horizontal, a partir de 1920px de largura.' },
        },
        {
          name: 'mobile',
          label: 'Versão mobile',
          type: 'upload',
          relationTo: 'media',
          required: true,
          filterOptions: { mimeType: { contains: 'image' } },
          admin: { description: 'Formato vertical, para telas estreitas.' },
        },
      ],
    },

    /* SITE DO CLIENTE */
    {
      name: 'websiteUrl',
      label: 'Site do cliente',
      type: 'text',
      admin: {
        description: 'Endereço do projeto no ar. Alimenta o botão "Visite".',
        placeholder: 'https://exemplo.com.br',
      },
      validate: (value: string | null | undefined) => {
        if (!value) return true
        try {
          new URL(value)
          return true
        } catch {
          return 'Informe a URL completa, começando com https://'
        }
      },
    },

    /* RESUMO (CARD DA HOME) */
    {
      name: 'excerpt',
      label: 'Resumo',
      type: 'textarea',
      required: true,
      maxLength: 220,
      admin: {
        description: 'Chamada curta do card no carrossel da home. Não aparece na página do case.',
      },
    },

    /* DESCRIÇÃO (PÁGINA DO CASE) */
    {
      name: 'description',
      label: 'Descrição',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Texto de abertura da página do case, ao lado da capa.',
      },
    },

    /* SERVIÇOS CONTRATADOS */
    {
      name: 'services',
      label: 'Serviços contratados',
      type: 'select',
      hasMany: true,
      required: true,
      options: [
        'Site',
        'Landing page',
        'E-commerce',
        'Sistema sob medida',
        'ERP',
        'Identidade visual',
        'Time alocado',
      ],
      admin: {
        description: 'Vira os badges do card. Para incluir um serviço novo, edite as opções em Cases.ts.',
      },
    },

    /* SEGMENTOS DE ATUAÇÃO */
    {
      name: 'segments',
      label: 'Segmento de atuação',
      type: 'text',
      required: true,
      admin: {
        description: 'Ramo em que o cliente atua.',
      },
    },

    /* CORPO DA PÁGINA */
    {
      name: 'sections',
      label: 'Seções',
      type: 'array',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Seção',
        plural: 'Seções',
      },
      admin: {
        initCollapsed: true,
        description: 'Blocos de conteúdo da página do case. A ordem aqui é a ordem do sumário lateral.',
      },
      fields: [
        {
          name: 'title',
          label: 'Título',
          type: 'text',
          required: true,
          admin: {
            description: 'Rótulo da seção no sumário lateral. Ex.: Empresa, Desafio, Solução.',
          },
        },
        {
          name: 'slug',
          label: 'Âncora',
          type: 'text',
          required: true,
          admin: {
            description: 'Âncora do link no sumário. Só minúsculas, números e hífen. Ex.: desafio',
            placeholder: 'desafio',
          },
          validate: (value: string | null | undefined) =>
            /^[a-z0-9-]+$/.test(value ?? '') ||
            'Use apenas letras minúsculas sem acento, números e hífens.',
        },
        {
          name: 'variant',
          label: 'Cabeçalho da seção',
          type: 'select',
          required: true,
          defaultValue: 'title',
          options: [
            { label: 'Mostrar o título', value: 'title' },
            { label: 'Mostrar a logo do cliente', value: 'logo' },
          ],
          admin: {
            description: 'Como o cabeçalho da seção aparece. O sumário usa o título nos dois casos.',
          },
        },
        {
          name: 'body',
          label: 'Conteúdo',
          type: 'richText',
          required: true,
        },
        {
          name: 'image',
          label: 'Imagem',
          type: 'upload',
          relationTo: 'media',
          filterOptions: { mimeType: { contains: 'image' } },
          admin: {
            description: 'Imagem que acompanha a seção. Opcional.',
          },
        },
      ],
    },
  ],
}
