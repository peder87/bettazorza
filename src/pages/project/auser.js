import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../../components/layout'
import { PageContainer } from "../../components/pageComponents/style"
import { pageConfig } from "../pageConfig"
import { WorkGrid } from '../../components/grid/workGrid' 

export default (props) => {
  const pageConf = pageConfig()
  return (
    <Layout>
      <PageContainer {...pageConf}>
        <StaticQuery
          query={page}
          render={data => <WorkGrid data={data.worksJson} />}
        />
      </PageContainer> 
    </Layout>
    )
}

const page = graphql`
  query page {
    worksJson(id: {eq: "auser"}) {
      id
      title
      caption
      tags
      imgs {
        src
        fullWidth
        alt
        srcset
      }
    }
  }
`