import React from "react"
import Layout from "../components/layout"
import { PageContainer } from "../components/pageComponents/style"
import { StuffGrid } from "../components/grid"
import { Card } from "../components/card"
import Brand from "../assets/workIcons/brand.png"
import Social from "../assets/workIcons/social.png"
import Ui from "../assets/workIcons/ui.png"
import Brochure from "../assets/workIcons/brochure.png"
import Packaging from "../assets/workIcons/packaging.png"
import Illustration from "../assets/workIcons/illustration.png"

const cards = [
  {
    img: Brand,
    title: "studio marchio",
  },
  {
    img: Social,
    title: "social",
  },
  {
    img: Ui,
    title: "ui",
  },
  {
    img: Brochure,
    title: "brochure",
  },
  {
    img: Packaging,
    title: "packaging",
  },
  {
    img: Illustration,
    title: "illustration",
  },
]

export default () => {
  return (
    <Layout>
      <PageContainer>
        <StuffGrid>
          {cards.map(cardProps => (
            <Card {...cardProps} />
          ))}
        </StuffGrid>
      </PageContainer>
    </Layout>
  )
}
