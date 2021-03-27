module.exports = {
  siteMetadata: {
    title: 'Shabad OS',
    description: 'Our mission is to learn about the Shabad and make it universally accessible to every person on the planet.',
    author: 'Shabad OS Team <team@shabados.com>',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
        fonts: [ 'Roboto:300,400,400i,700' ],
        display: 'swap',
      },
    },
  ],
}
