import React from "react"
import Layout from "../../components/layout"
import { PageContainer } from "../../components/pageComponents/style"
import { StuffGrid } from "../../components/grid"
import { Card } from "../../components/card"
import { pageConfig } from "../pageConfig"
import { CopyWrapper, PageCopy } from "../../components/typography"
import { Router } from '@reach/router'


export default props => {
  return (
    <Layout>
      <Router basepath='/project'>
        <Page path="/test"/>
      </Router>
    </Layout>
  )
}

// export default (props) => {
//   console.log('project props',props)
//   const pageConf = pageConfig()
//   console.log("pageConf", pageConf)
//   return (
//     <Layout>
//       <PageContainer {...pageConf}>
//       </PageContainer>
//     </Layout>
//   )
// }

const Page = (props) => {
  console.log(props)
  return <div>test page</div>
}