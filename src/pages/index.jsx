import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout, PostItem } from '../components/modules';

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              background
              category
              description
              title
              date(locale: "pt-br", formatString: "D MMM, YYYY")
            }
            fields {
              slug
            },
            timeToRead,
            id
          }
        }
      }
    }
  `);

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      {
      postList.map(({
        node: {
          fields, frontmatter, timeToRead, id,
        },
      }) => (
        <PostItem
          key={id}
          slug={fields.slug}
          title={frontmatter.title}
          background={frontmatter.background}
          category={frontmatter.category}
          description={frontmatter.description}
          date={frontmatter.date}
          timeToRead={timeToRead}
        />
      ))
    }
    </Layout>
  );
};

export default IndexPage;