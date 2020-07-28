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
        render={({allProjectsJson}) => {
          return (<Home data={allProjectsJson}/> )
        }}
      />
    </Layout>
  )
}

const query = graphql`
  query {
    allProjectsJson {
    nodes {
      id
      thumbnail
      thumbset
      url
      title
      order
    }
  }
  }
`