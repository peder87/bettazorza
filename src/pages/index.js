import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { StuffGrid } from '../components/grid'
import faker from 'faker'
import _times from 'lodash.times'
import styled from 'styled-components'


export default () => (
  <Layout>
    <SEO title="Home" />
    <StuffGrid>
    </StuffGrid>
  </Layout>
)


const Box = styled.div`
  border: 1px solid #fff;
  color: #fff;
`