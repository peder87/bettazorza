module.exports = {
  siteMetadata: {
    title: `BettaZorza.it`,
    description: `Ciao! 👋 Sono Elisabetta Zorza e sono una graphic designer.  Dal 2010 lavoro nel campo della comunicazione, ma la grafica e il design sono da sempre la mia più grande passione.`,
    author: `@peder87`,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "About me",
        link: "/about",
      },
      {
        name: "cosa faccio",
        link: "/work",
      },
      {
        name: "contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto:300,400,400i,500,600,800,900"],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F1CA01`,
        theme_color: `#F1CA01`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/",
}
