module.exports = {
  siteMetadata: {
    title: `Gee-UI`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'page',
        path: `${__dirname}/src/pages`,
      },
      // options: {
      //   path: `${__dirname}/src/pages`,
      //   name: 'images'
      // }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-use-dark-mode',
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
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              quality: 90,
              sizeByPixelDensity: true
            },
          },
        ],
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
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: ["/", { regex: "^/" }],
        excludePaths: [],
        height: 4,
        prependToBody: false,
        color: `#292F3A`
      }
    }
  ],
}