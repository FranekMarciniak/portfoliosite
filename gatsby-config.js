module.exports = {
  siteMetadata: {
    title: `Franek Marciniak`,
    description: `Personal page with portfolio`,
    author: `Franciszek Marciniak`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Rubik\:700`, `Poppins\:400,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-compression-v2`,
      options: {
        asset: "[path].gz[query]",
        algorithm: "gzip",
      },
    },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "GitHub",
    //     fieldName: "github",
    //     url: "https://api.github.com/graphql",
    //     // HTTP headers
    //     headers: {
    //       // Learn about environment variables: https://gatsby.dev/env-vars
    //       Authorization: `Bearer ${process.env.API_KEY}`,
    //     },
    //     fetchOptions: {},
    //   },
    // },
  ],
}
