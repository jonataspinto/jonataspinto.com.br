import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AboutMeBox, Layout } from '../components/modules';
import { SEO } from '../components/features';

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
