module.exports = {
  siteMetadata: {
    title: `Куфическая Лавка`,
    description: `Как читать намаз. Руководство для начинающих.`,
    author: `@kuficstore`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Spectral, Arial"],
          urls: ["/src/fonts/fonts.css"],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Куфическая Лавка`,
        short_name: `Kufic.Store`,
        start_url: `/`,
        description: `Как читать намаз. Руководство для начинающих.`,
        lang: `ru`,
        background_color: `#FFFFFF`,
        theme_color: `#663399`,
        display: `Kufic.Store`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
