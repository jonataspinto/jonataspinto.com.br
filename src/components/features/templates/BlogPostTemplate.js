import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../../modules';
import { PostItemContainer } from '../../modules/Layout/Layout.styled';

function BlogPostTemplate({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <PostItemContainer>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}}></div>
      </PostItemContainer>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}){
      frontmatter {
        title
      }
      html
    }
  }
`

export default BlogPostTemplate
