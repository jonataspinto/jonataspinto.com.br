// Gatsby supports TypeScript natively!
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/modules/Layout/Layout.jsx"
import SEO from "../components/seo"
import { AboutMeBox } from "../components/modules"

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
      <AboutMeBox data={aboutAuthor} />
    </Layout>
  )
}

export default SecondPage
