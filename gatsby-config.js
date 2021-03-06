const siteMetadata = {
  title: 'Graph Pod Gatsby'
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // This path is relative to the root of the site.
        icon: 'src/images/gatsby-icon.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `ONEGRAPH`,
        fieldName: `oneGraph`,
        // onegraph endpoint
        url: `https://serve.onegraph.com/dynamic?app_id=5c3f0589-a80f-4ade-93b1-da17412e24e3`
      }
    },
    `gatsby-plugin-styled-components`
  ]
}
