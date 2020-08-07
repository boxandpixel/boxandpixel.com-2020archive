/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// eslint-disable-next-line strict
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `{BOX & PIXEL}`,
    description: `A smart approach to modern website development`,
    author: `Brian Gunzenhauser`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-27682359-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Box & Pixel`,
        short_name: `boxandpixel`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.svg`
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
              linkImagesToOriginal: true,
              wrapperStyle: `display: inline; margin-left: 10px; margin-right: 10px;`


            }
          }
        ]
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inconsolata\:400`,
          `Open Sans\:300,400,800`
        ],
        display: 'swap'
      }
    },
  ],
}
