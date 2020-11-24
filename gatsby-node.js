const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `blog`,
    })

    createNodeField({
      node,
      name: `slug`,
      value: `/blog/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const BlogPost = path.resolve('./src/components/modules/templates/BlogPostTemplate.jsx');
  const BlogList = path.resolve('./src/components/modules/templates/BlogListTemplate.jsx');

  return graphql(`
    {
      allMarkdownRemark(
        sort: {
          fields: frontmatter___date,
          order: DESC
        }
      ) {
        edges {
          node {
            frontmatter {
              background
              category
              description
              title
              date(locale: "pt-br", formatString: "D MMM[,] YYYY")
            }
            fields {
              slug
            },
            timeToRead,
            id
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    const posts = data.allMarkdownRemark.edges;

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: BlogPost,
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        },
      })
    })

    const postsPerPage = 8;
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/blog/' : `/blog/page/${index + 1}`,
        component: BlogList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1
        },
      })
    })
  })

}
