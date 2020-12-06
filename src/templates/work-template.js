import React from "react"
import Layout from "../components/layout"
import { WorkGrid } from "../components/grid/workGrid"
import { SectionCenteredContent } from "../components/pageComponents/style"
import { LogoHeader, WorkTitle } from "./style"
import { Bottom } from "../components/bottom"
import { navigate } from "gatsby"

const handleClick = () => {
  navigate("/")
}

export default ({ pageContext, ...props }) => {
  console.log(pageContext)
  const { imageData } = pageContext
  const { navigationJson, projectsJson } = pageContext.pageData.data
  console.log(projectsJson)
  console.log(imageData)
  return (
    <Layout pageConf={navigationJson}>
      <SectionCenteredContent>
        <LogoHeader>
          <img onClick={handleClick} src="/images/common/logo_betta.svg" />
        </LogoHeader>
        <WorkTitle bold last>
          {projectsJson.title}
        </WorkTitle>
        {/* <WorkTitle last>{projectsJson.tags[0]}</WorkTitle> */}
        {/* <WorkGrid data={projectsJson} /> */}
        <WorkGrid data={imageData} />
      </SectionCenteredContent>
      <Bottom />
    </Layout>
  )
}
