import React from "react"
import Layout from "../components/layout"
import { WorkGrid } from "../components/grid/workGrid"
import { SectionCenteredContent } from "../components/pageComponents/style"
import { LogoHeader, WorkTitle } from "./style"
import { Bottom } from "../components/bottom"
import { navigate } from "gatsby"
import Seo from "../components/seo"
import Img from "gatsby-image"

const handleClick = () => {
  navigate("/")
}

export default ({ pageContext }) => {
  const { imageData } = pageContext
  const { navigationJson, projectsJson, hero } = pageContext.pageData.data
  const seoProps = {
    title: projectsJson.title,
    description: projectsJson.caption,
    meta: projectsJson.tags,
  }
  return (
    <Layout pageConf={navigationJson}>
      <Seo {...seoProps} />
      <SectionCenteredContent>
        <LogoHeader onClick={handleClick}>
          <Img fluid={hero.childImageSharp.fluid} alt="logo_bettazorza" />
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
