import React from "react"

import { Layout, Search } from "../components/modules"
import { SEO } from "../components/features"

const SearchPage = () => (
  <Layout>
    <SEO title="Search" />
    <Search/>
  </Layout>
)


export default SearchPage
