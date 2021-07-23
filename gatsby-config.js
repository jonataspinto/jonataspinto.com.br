require('dotenv').config();
const queries = require('./src/utils/algolia_queries');

module.exports = {
  siteMetadata: {
    title: 'Jonatas Pinto',
    description: 'Blog de um amante de tecnologia.',
    position: 'Front-end em Storm Group - Security and Defense | Estartando Devs',
    author: '@jonataspinto',
    aboutAuthor: `
    Olá, me chamo Jonatas Pinto Ferreira, sou do Rio de Janeiro e sou Desevolvedor Front-end. Tenho atuado na área de Tecnologia da Informação desde 2014(inicialmente com manutenção de equipamentos e suporte técnico) e sou formado em Análise e Desenvolvimento de Sistemas pela <a href="https://www.unopar.com.br/" target="_blank" rel="noopener noreferrer" aria-label="UNOPAR">UNOPAR</a>. Participo como instrutor do projeto social <a href="https://estartandodevs.com.br/" target="_blank" rel="noopener noreferrer" aria-label="estartando-devs">Estartando Devs</a> onde possibilitamos que jovens possam conhecer e iniciar o aprendizado nas areas de Desenvolvimento Web e Design UI/UX, Atualmente o projeto vem sendo realizado de modo virtual, o que tem possibilitado alcançar jovens de diferentes lugares, não só do Rio de Janeiro, mas do Brasil.
    `,
    siteUrl: 'https://jonataspinto.com.br',
  },
  plugins: [
    'gatsby-plugin-transition-link',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Ubuntu'],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/assets/img`,
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          'gatsby-remark-lazy-load',
          'gatsby-remark-prismjs',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'jonataspinto',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-algolia-search',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true, // default: false
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jonatas Pinto Blog',
        short_name: 'Jonatas Pinto',
        start_url: '/',
        background_color: '#26647A',
        theme_color: '#26647A',
        display: 'minimal-ui',
        icon: 'src/images/profile-peq.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
  ],
};
