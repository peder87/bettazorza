import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import { Stack } from "./stack"

export default props => {
  return (
    <Layout>
      <StaticQuery
        query={query}
        render={data => {
          return <Stack {...data} />
        }}
      />
    </Layout>
  )
}

const query = graphql`
  query MyQuery {
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
  }
`
