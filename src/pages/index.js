import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Home from './home'

export default (props) => {
  console.log('index props', props)
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