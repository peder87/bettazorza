import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Home from './home'

export default (props) => {
  return (
    <StaticQuery 
      query={query}
      render={({allProjectsJson}) => {
        const style = { 
          bgcolor: 'purple',
          color: 'yellow'
        }
        return (<Layout pageConf={style}>
          <Home data={allProjectsJson}/>
        </Layout>)
      }}
    />
  )
}

const query = graphql`
  query {
    allProjectsJson {
    nodes {
      caption
      thumbnail
      thumbset
      url
      title
      tags
      order
    }
  }
  }
`