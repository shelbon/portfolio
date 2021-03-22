const { options } = require("preact")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://mouclepatrick.netlify.app",
    title: "Portfolio de Patrick Shéron Moucle Developpeur informatique",
    description:
      "Patrick shéron moucle  développeur web et mobile,voici mon portfolio.",
    author: "@PSMoucle",
  },
  flags: {
    FAST_DEV: true,
    FAST_REFRESH: true,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-preact",
    "gatsby-plugin-netlify",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: `${__dirname}/content/projects/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/logo.svg`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `fr`,
        locales: process.env.LOCALES || `fr en`,
        prefixDefault: true,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: `./i18n/react-i18next`,
        i18nextOptions: {
          detection: { order: ["navigator"] },
          lng: "fr",
          fallbackLng: "en",
          preload: ["fr", "en"],
          keySeparator: false,
          lowerCaseLng: true,
          prefixDefault: true,
          transSupportBasicHtmlNodes: true,
          ns: [
            "home",
            "contactForm",
            "projectItem",
            "navigation",
            "slideShow",
            "404",
            "seo",
          ],
          interpolation: {
            escapeValue: false,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["PASS_PHRASE"],
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("postcss-preset-env")({
            autoprefixer: { grid: true },
            features: {
              "nesting-rules": true,
            },
            browsers: ["> 1%", "last 2 versions", "Firefox ESR"],
          }),
        ],
      },
    },
  ],
}
