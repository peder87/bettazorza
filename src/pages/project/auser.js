import React from 'react'
import Layout from '../../components/layout'
import { PageContainer } from "../../components/pageComponents/style"
import { pageConfig } from "../pageConfig"

export default (props) => {
  const pageConf = pageConfig()
  return (
    <Layout>
      <PageContainer {...pageConf}>

      </PageContainer>
    </Layout>
    )
}