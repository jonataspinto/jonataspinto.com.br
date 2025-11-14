import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AboutMeBox } from '../components/modules';
import { SEO } from '../components/features';
import { Layout } from '../components';

export default function IndexPage() {
  const {
    site: {
      siteMetadata: { aboutAuthor },
    },
  }: {
    site: { siteMetadata: { aboutAuthor: string } };
  } = useStaticQuery(graphql`
    query PostList {
      site {
        siteMetadata {
          aboutAuthor
        }
      }
    }
  `);

  return (
    <Layout>
      <AboutMeBox data={aboutAuthor} />
    </Layout>
  );
}

export const Head = () => <SEO title="Home" />;
