module.exports = {
  siteMetadata: {
    title: 'Shabad OS',
    description: 'Our mission is to learn about the Shabad and make it universally accessible to every person on the planet.',
    author: 'Shabad OS Team <team@shabados.com>',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-jss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Shabad OS',
        short_name: 'ShabadOS',
        start_url: '/',
        display: 'standalone',
        icon: 'static/logo.png',
      },
    },
    'gatsby-plugin-typegen',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [ 'Noto Sans:300,400,400i,700' ],
        display: 'swap',
      },
    },
    'gatsby-plugin-no-sourcemaps',
  ],
}
