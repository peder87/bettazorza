import React from "react"
import Layout from "../components/layout"
import { PageContainer } from "../components/pageComponents/style"
import { StuffGrid } from "../components/grid"

export default () => {
  return (
    <Layout>
      <PageContainer>
        <StuffGrid>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </StuffGrid>
      </PageContainer>
    </Layout>
  )
}
