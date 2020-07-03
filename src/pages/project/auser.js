import React from 'react'
import Layout from '../../components/layout'
import { PageContainer } from "../../components/pageComponents/style"
import { pageConfig } from "../pageConfig"
import { StuffGrid } from '../../components/grid'
import { full } from '../../components/grid/stuffGrid'
import styled from 'styled-components'
import { media } from '../../style/constants'

const Full = styled.div`
  height: 200px;
  background: red;
  /* grid-column: 1/3;
  ${media.sm`
    grid-column: 1/2;
  `}
  ${media.xs`
    grid-column: 1/2;
  `} */
  ${full}
`
const Full2 = styled.div`
  height: 200px;
  background: blue;
`


export default (props) => {
  const pageConf = pageConfig()
  return (
    <Layout>
      <PageContainer {...pageConf}>
        <StuffGrid>
          <Full />
          <Full2 />
          <Full2 />
          <Full />
        </StuffGrid>
      </PageContainer>
    </Layout>
    )
}