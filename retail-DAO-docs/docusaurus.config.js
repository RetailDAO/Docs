// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Retail DAO',
  tagline: 'Main Hub for Retail DAO Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://retaildao.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RetailDAO', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Enable Mermaid for Markdown code blocks
  markdown: {
    mermaid: true, // Added to enable Mermaid parsing in Markdown
  },

  // Add themes including Mermaid and local search
  themes: [
    '@docusaurus/theme-mermaid', // Existing Mermaid theme
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // Configure indexing behavior
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        // Docs folder path (adjust if your docs are in a different folder)
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        // Search result limits
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        // Highlighting
        highlightSearchTermsOnTargetPage: true,
        // If you're using `noIndex: true` somewhere, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
        // For multilingual sites, add languages:
        language: ['en', 'es', 'pt', 'nl'],
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Point to the correct repo path for editing docs
          editUrl: 'https://github.com/RetailDAO/Docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Fix the edit URL to point to your repo's blog content
          editUrl: 'https://github.com/RetailDAO/Docs/tree/main/blog/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Minimal webpack config, avoiding unsupported fields
  webpack: {
    jsLoader: 'babel', // Default JS loader
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
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
        style: undefined, // Remove 'dark' style
        links: [
          {
            title: 'Site Map',
            items: [
              {
                label: 'Introduction',
                to: '/docs/overview',
              },
              {
                label: 'Tokenomics',
                to: '/docs/category/token-ecosystem',
              },
              {
                label: 'Governance',
                to: '/docs/governance_structure',
              },
              {
                label: 'Community',
                to: '/docs/category/community-and-communication',
              },
              {
                label: 'Onboarding and Participation',
                to: '/docs/category/onboarding-and-participation',
              },
              {
                label: 'Treasury & Budget Management',
                to: '/docs/category/treasury-and-budget-management',
              },
              {
                label: 'Updates & Changelog',
                to: '/docs/category/updates-and-changelog',
              },
              {
                label: 'Legal & Disclaimers',
                to: '/docs/category/legal-and-disclaimers',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Snapshot',
                href: 'https://snapshot.box/#/s:retaildaobase.eth',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/mpABdUQXJC',
              },
              {
                label: 'X',
                href: 'https://x.com/retaildao',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/RetailDAO',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RetailDAO. Built by Triple Tres with ♥ using Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;