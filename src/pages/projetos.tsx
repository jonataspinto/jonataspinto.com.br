import React from 'react';

import { Layout } from '../components';
import { ProjectsBox } from '../components/modules';
import { SEO } from '../components/features';

export default function ProjectsPage() {
  return (
    <Layout>
      <ProjectsBox />
    </Layout>
  );
}

export const Head = () => <SEO title="Projetos" />;
