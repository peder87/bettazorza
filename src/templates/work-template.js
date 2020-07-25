import React from 'react'
import Layout from '../components/layout'
import { WorkGrid } from '../components/grid/workGrid'

export default ({pageContext,...props}) => {
  const { navigationJson, worksJson } = pageContext.pageData.data
  return (
    <Layout pageConf={navigationJson}>
      <WorkGrid data={worksJson} />
    </Layout>
  )
}
