import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import NoFound from './noFound'
import Layout from "../components/layout"
import SEO from '../components/seo'


const NotFoundPage = () => {
  const conf = {
    color: 'white',
    bgcolor: 'purple'
  }
  return (
  <Layout pageConf={conf}>
    <SEO title="404: Not found" />
    <StaticQuery 
      query={query}
      render={data => {
        return <NoFound img={data.imagesJson.img} />
      }} 
    />
  </Layout>
  )
}

export default NotFoundPage

const query = graphql`
  query PageNotFound {
    imagesJson(page: {eq: "404"}) {
      page
      img
    }
  }
`