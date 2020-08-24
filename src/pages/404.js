import React from "react"
import { colors } from '../style/constants'
import NoFound from './noFound'
import Layout from "../components/layout"
// import SEO from "../components/seo"
import styled from 'styled-components'


const Ddd = styled.div`
  width: 300px;
  height: 200px;
  background-color:red;
`

const NotFoundPage = () => {
  const conf = {
    color: 'white',
    bgcolor: 'purple'
  }
  return (
  <Layout pageConf={conf}>
    <NoFound />
    {/* <SEO title="404: Not found" /> */}
  </Layout>
  )
}

export default NotFoundPage
