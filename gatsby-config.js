module.exports = {
  siteMetadata: {
    title: `Jonatas Pinto`,
    description: `Web site de jonatas pinto`,
    author: `@jonataspinto`,
    aboutAuthor: `
    Olá, me chamo Jonatas Pinto Ferreira, sou do Rio de Janeiro e sou Desevolvedor Front-end. Tenho atuado na área de Tecnologia da Informação desde 2014(inicialmente com manutenção de equipamentos e suporte técnico) e sou formado em Análise e Desenvolvimento de Sistemas pela <a href="https://www.unopar.com.br/" target="_blank" rel="noopener noreferrer" aria-label="UNOPAR">UNOPAR</a>. Participo como instrutor do projeto social <a href="https://estartandodevs.com.br/" target="_blank" rel="noopener noreferrer" aria-label="estartando-devs">Estartando Devs</a> onde possibilitamos que jovens possam conhecer e iniciar o aprendizado nas areas de Desenvolvimento Web e Design UI/UX, Atualmente o projeto vem sendo realizado de modo virtual, o que tem possibilitado alcançar jovens de diferentes lugares, não só do Rio de Janeiro, mas do Brasil.
    `,
    siteUrl: `https://jonataspinto.com.br`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jonatas Pinto`,
        short_name: `Jonatas Pinto`,
        start_url: `/sobre-sobre-mim/mim/`,
        background_color: `#26647A`,
        theme_color: `#26647A`,
        display: `minimal-ui`,
        icon: `src/images/profile-peq.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Ubuntu`,
            variants: [`400`, `700`]
          }
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
