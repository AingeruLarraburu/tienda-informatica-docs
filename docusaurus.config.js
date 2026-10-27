// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TiendaTech - Documentación',
  tagline: 'Documentación de la web de gestión de tienda de informática',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://AingeruLarraburu.github.io',
  baseUrl: '/tienda-informatica-docs/',

  organizationName: 'AingeruLarraburu',
  projectName: 'tienda-informatica-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/AingeruLarraburu/tienda-informatica-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'TiendaTech',
        logo: {
          alt: 'TiendaTech Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://github.com/AingeruLarraburu/tienda-informatica-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {label: 'Introducción', to: '/'},
              {label: 'Módulos', to: '/modulos/inventario'},
              {label: 'API', to: '/api/introduccion'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TiendaTech. Construido con Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'sql'],
      },
    }),
};

export default config;
