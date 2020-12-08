import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import { Stack } from "./stack"
import Seo from "../components/seo"

export default props => {
  return (
    <Layout>
      <StaticQuery
        query={query}
        render={data => {
          console.log(data)
          const { siteMetadata } = data.allSite.nodes[0]
          return (
            <>
              <Seo {...siteMetadata} />
              <Stack {...data} />
            </>
          )
        }}
      />
    </Layout>
  )
}

const query = graphql`
  query MyQuery {
    allSite {
      nodes {
        siteMetadata {
          title
          description
        }
      }
    }
    projects: allProjectsJson {
      edges {
        project: node {
          id
          thumbnail
          thumbset
          tags
          url
          title
          order
        }
      }
    }
    order: allProjectsOrderJson {
      edges {
        node {
          workId
        }
      }
    }
    about: imagesJson(page: { eq: "about" }) {
      page
      img
    }
    works: allWorksJson {
      nodes {
        id
        title
        srcset
      }
    }
  }
`
