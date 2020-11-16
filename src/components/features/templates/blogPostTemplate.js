import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../../modules';

function BlogPostTemplate({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}}></div>
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
