import React from "react"
import { PageContainer, PageCenterContent } from '../components/pageComponents/style'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StuffGrid } from '../components/grid'
import _times from 'lodash.times'
import styled from 'styled-components'

const list = _times(9, 'hello')

export default () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <PageContainer>
    <GridContainer>
      {/* logo */}
      <StuffGrid>
        {
          list.map((e,i) => <Box key={`${e}-${i}`}>{e}</Box>)
        }
      </StuffGrid>
    </GridContainer>
    </PageContainer>
  </Layout>
)


const Box = styled.div`
  border: 1px solid #fff;
  color: #fff;
`

const GridContainer = styled.div`
  background-color: blue;
`