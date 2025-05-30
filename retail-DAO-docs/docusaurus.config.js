// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Retail DAO',
  tagline: 'Main Hub for Retail DAO Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RetailDAO', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/RetailDAO/Docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

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
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/RetailDAO',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site Map',
            items: [
              {
                label: 'Introduction',
                to: '/docs/Introduction',
              },
              {
                label: 'Tokenomics',
                to: '/docs/Token_Ecosystem',
              },
              {
                label: 'Governance',
                to: '/docs/governance',
              },
              {
                label: 'Community',
                to: '/docs/Community_and_Communication',
              },
               {
                label: 'Onboarding and Participation',
                to: '/docs/Onboarding_and_Participation',
              },
              {
                label: 'Treasury & Budget Management',
                to: '/docs/Treasury_and_Budget_Management',
              },
              {
                label: 'Updates & Changelog',
                to: '/docs/Updates_and_Changelog',
              },
              {
                label: 'Legal & Disclaimers',
                to: '/docs/Legal_and_Disclaimers',
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
