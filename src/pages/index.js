import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Home from './home'

export default (props) => {
  const style = { 
    bgcolor: 'purple',
    color: 'yellow'
  }
  return (
    <Layout pageConf={style}>
      <StaticQuery 
        query={query}
        render={(data) => {
        return <Home pages={data} />
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