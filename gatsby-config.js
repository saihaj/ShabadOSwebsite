/* eslint-disable global-require */
const resolveConfig = require( 'tailwindcss/resolveConfig' )
const tailwindConfig = require( './tailwind.config.js' )

const fullConfig = resolveConfig( tailwindConfig )

module.exports = {
  siteMetadata: {
    title: 'Shabad OS',
    description: 'Shabad Open Source',
    author: 'test',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Shabad Open Source',
        short_name: 'ShabadOS',
        start_url: '/',
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.pink[ '500' ],
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require( 'tailwindcss' )( tailwindConfig ),
          require( 'autoprefixer' ),
          ...( process.env.NODE_ENV === 'production'
            ? [ require( 'cssnano' ) ]
            : [] ),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
      },
    },
  ],
}
