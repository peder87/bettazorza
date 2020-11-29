import React from "react"
import idx from "idx"
import has from "has"
import { Hero } from "../../components/hero"
import { About } from "../../components/about"
import { Portfolio } from "../../components/portfolio"
import { ServiceList } from "../../components/serviceList"
import { Bottom } from "../../components/bottom"
import { cleanOrder, getDictionaryById } from "../../utils/dataUtils"

export const Stack = ({ about, order, projects, works }) => {
  const ord = has(order, "edges") ? order.edges : []
  const proj = has(projects, "edges") ? projects.edges : []
  const worksList = has(works, "nodes") ? works.nodes : []

  const list = cleanOrder(ord)
  const mapProjects = getDictionaryById(proj, "id")

  return (
    <div>
      <Hero />
      <About data={about} />
      <Portfolio list={list} src={mapProjects} />
      <ServiceList list={worksList} />
      <Bottom />
    </div>
  )
}

Stack.defaultProps = {
  order: {},
  projects: {},
  works: {},
}

export default Stack
