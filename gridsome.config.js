// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
require('dotenv').config()

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful',
        routes: {
          'BlogPosts': '/posts/:id'
        }
      }
    }
  ]
}
