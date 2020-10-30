import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import { Stack } from "./stack"

export default props => {
  const style = {
    bgcolor: "purple",
    color: "yellow",
  }
  return (
    <Layout pageConf={style}>
      <StaticQuery
        query={query}
        render={data => {
          return <Stack />
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
  }
`
