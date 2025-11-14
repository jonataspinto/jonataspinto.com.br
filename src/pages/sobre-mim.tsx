import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../components';
import { SEO } from '../components/features';
import { AboutMeBox } from '../components/modules';

export default function AboutMePage() {
  const {
    site: {
      siteMetadata: { aboutAuthor },
    },
  } = useStaticQuery(graphql`
    {
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

export const Head = () => <SEO title="Sobre mim" />;
