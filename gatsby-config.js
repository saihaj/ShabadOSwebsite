module.exports = {
  siteMetadata: {
    title: 'Shabad OS',
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
  ],
}
