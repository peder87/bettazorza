import React from 'react'
import Layout from '../components/layout'
import { WorkGrid } from '../components/grid/workGrid'
import { Footer } from '../components/footer'

export default ({pageContext,...props}) => {
  const { navigationJson, projectsJson } = pageContext.pageData.data
  return (
    <Layout pageConf={navigationJson}>
      <WorkGrid data={projectsJson} />
      <Footer />
    </Layout>
  )
}
