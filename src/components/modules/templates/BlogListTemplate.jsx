import React from 'react';
import { graphql } from 'gatsby';
import {
  string,
  number,
  shape,
  arrayOf,
} from 'prop-types';
import {
  Layout,
  PostItem,
} from '../index';
import {
  SEO,
  Pagination,
} from '../../features';

import * as S from './ListPostsStyled';

export const query = graphql`
  query PostListBlog ($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC},
      limit: $limit
      skip: $skip
    ) {
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
`;

const BlogListTemplate = ({ data, pageContext }) => {
  const postList = data.allMarkdownRemark.edges;

  const {
    currentPage,
    numPages,
  } = pageContext;

  const isFirst = (currentPage === 1);
  const isLast = (currentPage === numPages);
  const prevPage = (currentPage - 1 === 1 ? 'blog/' : `blog/page/${currentPage - 1}`);
  const nextPage = (`/blog/page/${currentPage + 1}`);

  return (
    <Layout>
      <SEO title="Blog" />
      <S.ListPosts>
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
      </S.ListPosts>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

BlogListTemplate.propTypes = {
  pageContext: shape({
    currentPage: number,
    numPages: number,
  }).isRequired,
  data: shape({
    allMarkdownRemark: shape({
      edges: arrayOf(shape({
        node: shape({
          fields: shape({
            slug: string,
          }),
          frontmatter: shape({
            title: string,
            background: string,
            category: string,
            description: string,
            date: string,
          }),
          timeToRead: number,
          id: string,
        }),
      })),
    }),
  }).isRequired,
};

export default BlogListTemplate;
