import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import Layout from "../components/layout"


export default (props) => {
  return (
    <StaticQuery 
      query={query}
      render={({pages}) => {
        const pageDictionary = pages.nodes.reduce((acc,page) => ({
          ...acc,
          [page.path] : page
        }), {})
        const pageConf = pageDictionary[props.location.pathname]
        console.log('contatti',pageConf)
        return (
          <Layout pageConf={pageConf}>
            <h2>contatti</h2>
          </Layout>
        )
      }}
    />
    
  )
}
const query = graphql`
  query Navigation {
    pages: allNavigationJson {
        nodes {
          path
          label
          bgcolor
          color
      }
    }
  }
`