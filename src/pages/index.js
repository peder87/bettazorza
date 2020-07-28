import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Home from './home'
import { Footer } from '../components/footer'

export default (props) => {
  console.log('index props', props)
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
      <Footer />
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