import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SEO } from '../components/features';
import { Layout, AboutMeBox } from '../components/modules';

const AboutMePage = () => {
  const {
    site: {
      siteMetadata: {
        aboutAuthor,
      },
    },
  } = useStaticQuery(graphql`{
    site{
      siteMetadata{
        aboutAuthor
      }
    }
  }`);

  return (
    <Layout>
      <SEO title="Sobre mim" />
      <AboutMeBox data={aboutAuthor} />
    </Layout>
  );
};

export default AboutMePage;
