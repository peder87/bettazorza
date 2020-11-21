import React from "react"
import { Hero } from "../../components/hero"
import { About } from "../../components/about"
import { Portfolio } from "../../components/portfolio"
import { Form } from "../../components/form"
import { ServiceList } from "../../components/serviceList"
import { Bottom } from "../../components/bottom"
import { cleanOrder, getDictionaryById } from "../../utils/dataUtils"

export const Stack = ({ about, order, projects, works }) => {
  const list = cleanOrder(order.edges)
  const mapProjects = getDictionaryById(projects.edges, "id")
  return (
    <div>
      <Hero />
      <About data={about} />
      <Portfolio list={list} src={mapProjects} />
      <ServiceList list={works.nodes} />
      <Bottom />
    </div>
  )
}

export default Stack
