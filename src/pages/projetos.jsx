import React from "react"

import { Layout, ProjectsBox } from "../components/modules"
import { SEO } from "../components/features"

const ProjectsPage = () => {


  return (
    <Layout>
      <SEO title="Projetos" />
      <ProjectsBox />
    </Layout>
  )
}

export default ProjectsPage;
