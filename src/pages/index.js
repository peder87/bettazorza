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
    about: file(relativePath: { eq: "about/about.png" }) {
      id
      relativePath
      childImageSharp {
        fluid(maxWidth: 380) {
          aspectRatio
          src
          srcWebp
        }
      }
    }
    hero: file(relativePath: { eq: "hero/logo_bettazorza.png" }) {
      id
      relativePath
      childImageSharp {
        fluid(maxWidth: 708) {
          aspectRatio
          src
          srcWebp
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
    works: allWorksJson {
      nodes {
        id
        title
        srcset
      }
    }
  }
`
