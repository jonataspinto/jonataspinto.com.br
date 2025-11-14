import React from 'react';

import { Layout, Search } from '../components/modules';
import { SEO } from '../components/features';

const SearchPage = () => (
  <Layout>
    <Search />
  </Layout>
);

export default SearchPage;

export const Head = () => <SEO title="Search" />;
