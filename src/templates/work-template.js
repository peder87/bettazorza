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
  const { navigationJson, projectsJson } = pageContext.pageData.data
  return (
    <Layout pageConf={navigationJson}>
      <SectionCenteredContent>
        <LogoHeader>
          <img onClick={handleClick} src="/images/common/logo_betta.svg" />
        </LogoHeader>
        <WorkTitle bold>{projectsJson.title}</WorkTitle>
        <WorkTitle>{projectsJson.tags[0]}</WorkTitle>
        <WorkGrid data={projectsJson} />
      </SectionCenteredContent>
      <Bottom />
    </Layout>
  )
}
