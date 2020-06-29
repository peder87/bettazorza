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
import { pageConfig } from "./pageConfig"
import { CopyWrapper, PageCopy } from "../components/typography"

const dummy =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque fringilla est, ac porttitor mi."


export default () => {
  const pageConf = pageConfig()
  console.log("pageConf", pageConf)
  return (
    <Layout>
      <PageContainer {...pageConf}>
      </PageContainer>
    </Layout>
  )
}
