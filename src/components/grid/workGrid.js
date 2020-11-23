import React from "react"
import { ProjectGrid, Item } from "./index"
import { PageTitle, CopyWrapper, PageCopy, BzTitleProject } from "../typography"
import { Image } from "../image/image"
import { Video } from "../video"
import { SectionCenteredContent } from "../pageComponents/style"
import { HeroHeader } from "../hero/style"
import SEO from "../../components/seo"

export const WorkGrid = ({ data }) => {
  const seoCat = {
    name: "categorie",
    content: data.tags.join(", "),
  }
  return (
    <ProjectGrid>
      {data.imgs.map(img => (
        <Item key={img.alt} full={img.fullWidth}>
          {img.mediaType === "img" ? <Image {...img} /> : <Video {...img} />}
        </Item>
      ))}
    </ProjectGrid>
  )
}
