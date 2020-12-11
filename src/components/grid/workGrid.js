import React from "react"
import { ProjectGrid, Item } from "./index"
import Img from "gatsby-image"

export const WorkGrid = ({ data }) => {
  return (
    <ProjectGrid>
      {data.map(img => (
        <Item key={img.alt} full={img.fullWidth}>
          <Img fluid={img.node.childImageSharp.fluid} alt={img.alt} />
        </Item>
      ))}
    </ProjectGrid>
  )
}
