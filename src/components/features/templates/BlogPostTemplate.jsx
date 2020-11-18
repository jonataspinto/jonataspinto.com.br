import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../../modules";
import SEO from "../../seo";
import { PostItemContainer } from "../../modules/Layout/Layout.styled";

import * as S from "./PostStyled"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PostItemContainer>
        <S.PostHeader>
          <S.PostDate>
            {post.frontmatter.date} • {post.timeToRead} minutos de leitura.
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
      </PostItemContainer>
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}){
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
