const path = require(`path`)
const idx = require("idx")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ({ node, getNode, actions, graphql }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
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
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(async ({ node }) => {
    const { slug } = node.fields
    const { workId } = node.frontmatter
    const pagePath = slug.length > 1 ? slug.substring(0, slug.length - 1) : slug
    const pageData = await graphql(query, {
      workId,
      pagePath,
    })

    const newData = await getSharpImgs(graphql, pageData.data)
    const imageData = cleanImgSharp(newData)
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/work-template.js`),
      context: {
        slug,
        workId,
        pagePath,
        pageData,
        imageData,
      },
    })
  })
}

const getSharpImgs = async (graphql, { projectsJson }) => {
  const imagePromise = projectsJson.imgs.map(async imgItem => {
    const imagePath = imgItem.filePath
    const sharpImg = await graphql(imgQuery, { imagePath })
    return sharpImg
  })
  const resolivingImgs = await Promise.all(imagePromise)
  return resolivingImgs
}

const cleanImgSharp = src => {
  return src.map(item => {
    const a = item.data.allFile.edges[0]
    return a
  })
}

const query = `
  query($workId: String!, $pagePath: String!) {
    projectsJson(id: {eq: $workId }) {
      id
      title
      caption
      tags
      imgs {
        filePath
        mediaType
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
`

const imgQuery = `
  query($imagePath: String!) {
    allFile(filter: {relativePath: { eq: $imagePath}}) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            id
          }
        }
      }
    }
  }
`
