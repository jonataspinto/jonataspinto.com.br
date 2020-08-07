import React from "react"

import Layout from "../components/modules/Layout/Layout.jsx"
import SEO from "../components/seo"
import { ProjectsBox } from "../components/modules"

const ProjectsPage = () => {


  return (
    <Layout>
      <SEO title="Projetos" />
      <ProjectsBox />
    </Layout>
  )
}

export default ProjectsPage;
