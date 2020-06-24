const configs = require("./config");

module.exports = {
  title: "30 Seconds of Typescript- Inspired by 30-seconds-of-code",
  tagline:
    "30 Seconds of Typescript, Code Snippets in Typescript to increase productivity[WIP]",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/30-seconds-of-typescript/",
  favicon: "img/favicon.ico",
  organizationName: "deepakshrma", // Usually your GitHub org/user name.
  projectName: "30-seconds-of-typescript", // Usually your repo name.
  ...configs,
  themeConfig: {
    ...configs.themeConfig,
    navbar: {
      title: "30 Seconds of Typescript",
      logo: {
        alt: "30 Seconds of Typescript Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/deepakshrma/30-seconds-of-typescript",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "accumulate",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/deepakshrma/30-seconds-of-typescript/edit/master",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};