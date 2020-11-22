import React from "react"
import { ProjectGrid, Item } from "./index"
import { PageTitle, CopyWrapper, PageCopy, BzTitleProject } from "../typography"
import { Image } from "../image/image"
import { Video } from "../video"
import { SectionCenteredContent } from "../pageComponents/style"
import SEO from "../../components/seo"

export const WorkGrid = ({ data }) => {
  const seoCat = {
    name: "categorie",
    content: data.tags.join(", "),
  }
  return (
    <SectionCenteredContent>
      <SEO title={data.title} description={data.caption} meta={[seoCat]} />
      <BzTitleProject bold>{data.title}</BzTitleProject>
      <BzTitleProject noPadding>{data.tags[0]}</BzTitleProject>
      {/* <CopyWrapper last>
        <PageCopy>{data.caption}</PageCopy>
      </CopyWrapper> */}
      {/* <CopyWrapper last>
          {data.tags.length > 0 &&
            data.tags.map((tag, i) => {
              const isLast = i === data.tags.length - 1
              return !isLast ? (
                <span className="tag" key={tag}>
                  {tag} -
                </span>
              ) : (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              )
            })}
        </CopyWrapper> */}
      <ProjectGrid>
        {data.imgs.map(img => (
          <Item key={img.alt} full={img.fullWidth}>
            {img.mediaType === "img" ? <Image {...img} /> : <Video {...img} />}
          </Item>
        ))}
      </ProjectGrid>
    </SectionCenteredContent>
  )
}
