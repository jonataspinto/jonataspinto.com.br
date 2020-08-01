import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/modules/Layout/Layout.jsx"
import SEO from "../components/seo"
import { AboutMeBox } from "../components/modules"
import { UserArt } from "../components/elements"

const AboutMePage = () => {
  const {
    site: {
      siteMetadata: {
        aboutAuthor
      }
    }
  } = useStaticQuery(graphql`{
    site{
      siteMetadata{
        aboutAuthor
      }
    }
  }`)

  return (
    <Layout>
      <SEO title="Sobre mim" />
      <UserArt />
      <AboutMeBox data={aboutAuthor} />
    </Layout>
  )
}

export default AboutMePage
