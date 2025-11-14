/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

// eslint-disable-next-line object-curly-newline
export const SEO = ({ description, lang, title, image, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const url = site.siteMetadata.siteUrl;

  const ogImage = `${url}${image}`;

  return (
    <>
      <html lang={lang} />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />
      <meta
        property="og:title"
        content={`${title} | ${site.siteMetadata.title}`}
      />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content={ogImage} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  );
};

SEO.defaultProps = {
  lang: 'pt-BR',
  description: '',
  image: '/assets/img/cover.jpg',
  children: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  children: PropTypes.node,
};
