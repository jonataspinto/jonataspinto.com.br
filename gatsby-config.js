module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    aboutAuthor: `
    Olá<br>
    Me chamo Jônatas Pinto Ferreira, sou formado em Análise e desenvolvimento de sistema e estou na área de Tecnologia da Informação desde 2014.<br><br>

    Participo como instrutor do Estartando Devs- projeto social voltado para a área de desenvolvimento web e design UI/UX, que tem como intuito transformar a realidade dos jovens de Pedra de Guaratiba. Atualmente o projeto vem sendo realizado de modo virtual, o que tem possibilitado alcançar jovens de diferentes lugares, não só do Rio de Janeiro, mas do Brasil.<br><br>

    Quando não estou trabalhando curto aprender novas ferramentas de desenvolvimento, além de jogos de raciocínio lógico, cubo mágicos, ouvir músicas e correr.<br><br>

    Tenho como paixão o Open Source por permitir a troca de conhecimentos.
    `
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
