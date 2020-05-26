import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { StuffGrid } from '../components/grid'
import _times from 'lodash.times'
import styled from 'styled-components'

const list = _times(9, 'hello')

export default () => (
  <Layout>
    <SEO title="Home" />
    <StuffGrid>
      {
        list.map((e,i) => <Box key={`${e}-${i}`}>{e}</Box>)
      }
    </StuffGrid>
  </Layout>
)


const Box = styled.div`
  border: 1px solid #fff;
  color: #fff;
`