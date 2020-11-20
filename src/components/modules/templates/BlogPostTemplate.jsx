import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../Layout";
import { Comments, RecommendedPosts, SEO } from "../../features";

import * as S from "./PostStyled"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura.
        </S.PostDate>
        <S.PostTitle>
          {post.frontmatter.title}
        </S.PostTitle>
        <S.PostDescription>
          {post.frontmatter.description}
        </S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{__html: post.html}}></div>
      </S.MainContent>
      <RecommendedPosts
        next={pageContext.nextPost}
        previous={pageContext.previousPost}
      />
      {console.log(post.fields.slug)}
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
      }
      html
      timeToRead
    }
  }
`;

export default BlogPostTemplate;
