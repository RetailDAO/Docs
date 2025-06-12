// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Retail DAO',
  tagline: 'Main Hub for Retail DAO Documentation',
  favicon: 'img/favicon.ico',

  // Production URL and base URL for GitHub Pages
  url: 'https://retaildao.github.io',
  baseUrl: '/Docs/',

  // GitHub Pages deployment settings
  organizationName: 'RetailDAO',
  projectName: 'Docs',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Enable Mermaid for Markdown code blocks
  markdown: {
    mermaid: true,
  },

  // Themes array with only Mermaid (no search theme unless intended)
  themes: [
    '@docusaurus/theme-mermaid',
  ],

  // Internationalization settings
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'nl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/RetailDAO/Docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/RetailDAO/Docs/tree/main/blog/',
          onInlineTags: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Minimal webpack config
  webpack: {
    jsLoader: 'babel',
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'static/img/RD_social_card.png',
      navbar: {
        title: 'Retail DAO',
        logo: {
          alt: 'Retail DAO Logo',
          src: 'img/RD_logo_R_Ver_COLOR_GoldenBlack_variant.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/RetailDAO',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        // Removed 'style: undefined' as it's not needed (defaults to no specific style)
        links: [
          {
            title: 'Site Map',
            items: [
              { label: 'Introduction', to: '/docs/overview' },
              { label: 'Tokenomics', to: '/docs/category/token-ecosystem' },
              { label: 'Governance', to: '/docs/governance_structure' },
              { label: 'Community', to: '/docs/category/community-and-communication' },
              { label: 'Onboarding and Participation', to: '/docs/category/onboarding-and-participation' },
              { label: 'Treasury & Budget Management', to: '/docs/category/treasury-and-budget-management' },
              { label: 'Updates & Changelog', to: '/docs/category/updates-and-changelog' },
              { label: 'Legal & Disclaimers', to: '/docs/category/legal-and-disclaimers' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Snapshot', href: 'https://snapshot.box/#/s:retaildaobase.eth' },
              { label: 'Discord', href: 'https://discord.gg/mpABdUQXJC' },
              { label: 'X', href: 'https://x.com/retaildao' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/RetailDAO' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RetailDAO. Built by Triple Tres with ♥ using Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // Explicitly disable Algolia search if not intended (optional, remove if you plan to add search later)
      // algolia: undefined, // Not needed unless configuring Algolia
    }),
};

export default config;