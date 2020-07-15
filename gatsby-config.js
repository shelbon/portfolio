
module.exports = {
  siteMetadata: {
    title: `Patrick Shéron Moucle Portfolio`,
    description: `Patrick shéron moucle  développeur web et mobile,voici mon portfolio.`,
    author: `@PSMoucle`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@arshad/gatsby-theme-portfolio-core`,
      options: {
        basePath: `/projects`,
      }
    },
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
        name: `content`,
        path: `${__dirname}/content/`,
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
    `gatsby-plugin-sharp`,{
    resolve: `gatsby-plugin-postcss`,
    options: {
      postCssPlugins: [
        require('postcss-preset-env')({
           autoprefixer: { grid: true },
           features: {
               'nesting-rules': true
           },
           browsers: [
               '> 1%',
               'last 2 versions',
               'Firefox ESR',
           ]
       })
    ]
    }
    }
  ],
}
