import React from "react"
import { Layout } from "../components/modules"

const IndexPage = () => (
  <Layout>
    { (window !== 'undefined') && (window.location = '/sobre-mim')}
  </Layout>
)

export default IndexPage
