const { options } = require("preact");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://mouclepatrick.netlify.app",
    title: "Portfolio de Patrick Shéron Moucle Developpeur web et mobile",
    description:
      "Patrick shéron moucle  développeur web et mobile,voici mon portfolio.",
    author: "Moucle Patrick Shéron",
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-preact",
    "gatsby-plugin-netlify",
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
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "hero",
        path: `${__dirname}/content/hero/`,
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
      resolve: "gatsby-omni-font-loader",

      options: {
        mode: "async",

        enableListener: true,

        preconnect: ["https://fonts.gstatic.com"],

        web: [
          {
            name: "Merriweather",

            file: "https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap",
          },
          {
            name: "Merriweather Sans",
            file: "https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;700&display=swap",
          },
        ],
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
          transSupportBasicHtmlNodes: false,
          ns: [
            "home",
            "contactForm",
            "projectItem",
            "navigation",
            "slideShow",
            "projectDetails",
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
};
