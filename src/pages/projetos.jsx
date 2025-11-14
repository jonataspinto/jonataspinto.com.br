import React from 'react';

import { Layout, ProjectsBox } from '../components/modules';
import { SEO } from '../components/features';

const ProjectsPage = () => (
  <Layout>
    <ProjectsBox />
  </Layout>
);

export default ProjectsPage;

export const Head = () => <SEO title="Projetos" />;
