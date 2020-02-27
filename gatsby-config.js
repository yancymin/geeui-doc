module.exports = {
  siteMetadata: {
    title: `Gee-UI`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
      // options: {
      //   name: `images`,
      //   path: path.join(__dirname, `src`, `images`),
      // },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["absolute/path/a", "absolute/path/b"],
      }
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              markdownCaptions: true,
              loading: 'lazy',
            },
          },
        ],
        plugins: [`gatsby-remark-autolink-headers`],
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `black`,
        // Disable the loading spinner.
        showSpinner: false,
        trickle: false,
        minimum: 0.5,
      },
    },
  ],
}