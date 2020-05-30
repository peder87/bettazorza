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
    <SEO title="Home" />
    <GridContainer>
      {/* logo */}
      <StuffGrid>
        {
          list.map((e,i) => <Box key={`${e}-${i}`}>{e}</Box>)
        }
      </StuffGrid>
    </GridContainer>
  </Layout>
)


const Box = styled.div`
  border: 1px solid #fff;
  color: #fff;
`

const GridContainer = styled(PageCenterContent)`
  background-color: blue;
`