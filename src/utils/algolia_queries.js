const postsQuery = `{
  posts: allMarkdownRemark(
    sort: {fields: frontmatter___date, order: DESC},
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          category
          description
          title
          date_timestamp: date
          date(locale: "pt-br", formatString: "D MMM, YYYY")
        }
        timeToRead
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const mapData = (data) => data.map(({ node: { frontmatter, ...rest } }) => ({
  ...frontmatter,
  date_timestamp: parseInt(
    (new Date(frontmatter.date_timestamp) /1000).toFixed(0)
  ),
  ...rest
}))

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => mapData(data.posts.edges), // optional
    indexName: 'posts', // overrides main index name, optional
    settings: { attributesToSnippet: [`excerpt:20`] }
  },
];

module.exports = queries;
