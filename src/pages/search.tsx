import React from 'react';

import { Layout } from '../components';
import { Search } from '../components/modules';
import { SEO } from '../components/features';

export default function SearchPage() {
  return (
    <Layout>
      <Search />
    </Layout>
  );
}

export const Head = () => <SEO title="Search" />;
