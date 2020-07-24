// Gatsby supports TypeScript natively!
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/modules/Layout/Layout.jsx"
import SEO from "../components/seo"
import { AboutMeBox } from "../components/modules"
import { UserArt } from "../components/elements"

const SecondPage = () => {
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
      <SEO title="Page two" />
      <UserArt />
      <AboutMeBox data={aboutAuthor} />
    </Layout>
  )
}

export default SecondPage
