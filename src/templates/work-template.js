import React from "react"
import Layout from "../components/layout"
import { WorkGrid } from "../components/grid/workGrid"
import { SectionCenteredContent } from "../components/pageComponents/style"
import { LogoHeader, WorkTitle } from "./style"
import { Bottom } from "../components/bottom"
import { navigate } from "gatsby"
import Seo from "../components/seo"

const handleClick = () => {
  navigate("/")
}

export default ({ pageContext }) => {
  const { imageData } = pageContext
  const { navigationJson, projectsJson } = pageContext.pageData.data
  // console.log(pageContext)
  // console.log(projectsJson)
  // console.log(imageData)
  const seoProps = {
    title: projectsJson.title,
    description: projectsJson.caption,
    meta: projectsJson.tags,
  }
  return (
    <Layout pageConf={navigationJson}>
      <Seo {...seoProps} />
      <SectionCenteredContent>
        <LogoHeader>
          <img
            onClick={handleClick}
            src="/images/common/logo_betta.svg"
            alt="logo_bettazorza"
          />
        </LogoHeader>
        <WorkTitle bold last>
          {projectsJson.title}
        </WorkTitle>
        <WorkGrid data={imageData} />
      </SectionCenteredContent>
      <Bottom />
    </Layout>
  )
}
