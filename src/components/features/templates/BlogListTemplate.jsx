import React from "react";
import { graphql } from "gatsby";
import { Layout, PostItem } from "../../modules";
import { PostItemContainer } from "../../modules/Layout/Layout.styled";
import SEO from "../../seo";
import Pagination from "../Pagination/Pagination";

const BlogListTemplate = (props) => {
  const postList = props.data.allMarkdownRemark.edges;

  const {
    currentPage,
    numPages,
  } = props.pageContext;

  const isFirst = (currentPage === 1);
  const isLast = (currentPage === numPages);
  const prevPage = (currentPage - 1 === 1 ? 'blog/' : `blog/page/${currentPage - 1}`);
  const nextPage = (`/blog/page/${currentPage + 1}`);

  return (
    <Layout>
      <SEO title="Blog" />
      <PostItemContainer>
        {
          postList.map(({ node: { fields, frontmatter, timeToRead, id } }) => {
            console.log(fields.slug);
            return(
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
          )})
        }
      </PostItemContainer>
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

export default BlogListTemplate;
