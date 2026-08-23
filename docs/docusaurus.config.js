const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'YukiCord Docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://yukicord.github.io',
  baseUrl: '/YukiCord/', 
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yukicord',
  projectName: 'YukiCord',

  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', 
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/YukiCord/yukicord/edit/main/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'YukiCord',
      logo: {
        alt: 'YukiCord Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          to: 'https://yukicord.github.io/YukiCord/app',
          label: 'App',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/yukicord/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} YukiCord Project. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};
