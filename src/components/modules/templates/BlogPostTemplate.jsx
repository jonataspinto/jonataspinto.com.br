import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../Layout';
import { Comments, RecommendedPosts, SEO } from '../../features';

import * as S from './PostStyled';

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image?.publicURL}
      />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date}
          {' '}
          •
          {' '}
          {post.timeToRead}
          {' '}
          min de leitura.
        </S.PostDate>
        <S.PostTitle>
          {post.frontmatter.title}
        </S.PostTitle>
        <S.PostDescription>
          {post.frontmatter.description}
        </S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.MainContent>
      <RecommendedPosts
        next={pageContext.nextPost}
        previous={pageContext.previousPost}
      />
      <Comments
        url={post.fields.slug}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}){
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "D MMM, YYYY")
        image{
          publicURL
        }
      }
      html
      timeToRead
    }
  }
`;

export default BlogPostTemplate;
