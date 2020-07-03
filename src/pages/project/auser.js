import React from 'react'
import Layout from '../../components/layout'
import { PageContainer } from "../../components/pageComponents/style"
import { pageConfig } from "../pageConfig"
import { StuffGrid, Item } from '../../components/grid'

export default (props) => {
  const pageConf = pageConfig()
  return (
    <Layout>
      <PageContainer {...pageConf}>
        <StuffGrid>
          <Item full />
          <Item />
          <Item />
          <Item full />
        </StuffGrid>
      </PageContainer>
    </Layout>
    )
}