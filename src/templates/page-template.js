import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { pageConfig } from "../pages/pageConfig"
import { PageContainer } from "../components/pageComponents/style"
import { WorkGrid } from '../components/grid/workGrid' 
export default (props) => {
  console.log(props)
  const pageConf = pageConfig()
  return (
    <Layout>
      <PageContainer {...pageConf}>
        <WorkGrid data={props.data.worksJson} />
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $workId: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    worksJson(id: {eq: $workId}) {
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