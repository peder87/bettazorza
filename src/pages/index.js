import React from "react"
import { PageContainer, PageCenterContent } from '../components/pageComponents/style'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StuffGrid } from '../components/grid'
import styled from 'styled-components'
import Home from './home'

export default (props) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
  )
}



const Box = styled.div`
  border: 1px solid #fff;
  color: #fff;
`

const GridContainer = styled.div`
  background-color: blue;
`