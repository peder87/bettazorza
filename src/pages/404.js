import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import NoFound from './noFound'
import Layout from "../components/layout"


const NotFoundPage = () => {
  const conf = {
    color: 'white',
    bgcolor: 'purple'
  }
  return (
  <Layout pageConf={conf}>
    <StaticQuery 
      query={query}
      render={data => {
        console.log('data',data)
        return <NoFound img={data.imagesJson.img} />
      }} 
    />
    {/* <SEO title="404: Not found" /> */}
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