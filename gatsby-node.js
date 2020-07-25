const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ({ node, getNode, actions, graphql}) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    console.log('SLUGGG', slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              workId
              pageType
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach( async ({ node }) => {
    const { slug } = node.fields
    const { workId, pageType } = node.frontmatter
    const pagePath = slug.length > 1 ? slug.substring(0,slug.length -1) : slug
    const isWorkPage = pageType === 'WORK'
    const pageData = await graphql(
      query(pageType),
      {
        ...(isWorkPage && {workId}),
        pagePath
      }
    )
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${isWorkPage ? 'work' : 'page'}-template.js`),
      context: {
        slug,
        ...(isWorkPage && {workId}),
        pagePath,
        pageData
      },
    })
  })
}

const query = (pageType) => pageType === 'WORK' ? `
  query($workId: String!, $pagePath: String!) {
    projectsJson(id: {eq: $workId }) {
      id
      title
      caption
      tags
      imgs {
        src
        fullWidth
        alt
        srcset
      }
    }
    navigationJson(path: { eq: $pagePath }) {
      bgcolor
      color
      label
      path
    }
  }
` : `
  query($pagePath: String!) {
    navigationJson(path: { eq: $pagePath }) {
      bgcolor
      color
      label
      path
    }
  }
`