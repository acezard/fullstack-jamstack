module.exports = {
  siteMetadata: {
    title: 'Gatsby Landing Page',
    description: 'An example on how to use Gatsby with a headless CMS',
    siteUrl: 'https://nice-island-01456b003.azurestaticapps.net',
    titleTemplate: '',
    image: '',
    twitterUsername: '',
    lang: 'en',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-P7STY5MN05',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'synapse-assessment',
        accessToken:
          'MC5YOC1aOUJJQUFDTUFpQ09h.Bxt0bu-_ve-_vT_vv73vv73vv73vv70JRTkRAu-_ve-_vW03Ne-_vQLvv706FQ9y77-977-9Ku-_vQ',
        schemas: {
          main_menu: require('./src/schemas/main_menu.json'),
          landing_page: require('./src/schemas/landing_page.json'),
          footer_menu: require('./src/schemas/footer_menu.json'),
          footer_cta: require('./src/schemas/footer_cta.json'),
          footer_cgu: require('./src/schemas/footer_cgu.json'),
        },
      },
    },
  ],
}
