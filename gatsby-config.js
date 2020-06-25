module.exports = {
  siteMetadata: {
    title: `Patrick Shéron Moucle Portfolio`,
    description: `Patrick shéron moucle  développeur web et mobile,voici mon portfolio.`,
    author: `@PSMoucle`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
