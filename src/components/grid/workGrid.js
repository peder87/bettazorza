import React from "react"
import { ProjectGrid, Item } from "./index"
import { PageTitle, CopyWrapper, PageCopy, BzTitleProject } from "../typography"
import { Image, TestGImage } from "../image/image"
import { Video } from "../video"
import { SectionCenteredContent } from "../pageComponents/style"
import { HeroHeader } from "../hero/style"
import SEO from "../../components/seo"

export const WorkGrid = ({ data }) => {
  return (
    <ProjectGrid>
      {data.map(img => (
        <Item key={img.alt} full={img.fullWidth}>
          <TestGImage fluid={img.node.childImageSharp.fluid} />
        </Item>
      ))}
    </ProjectGrid>
  )
}
