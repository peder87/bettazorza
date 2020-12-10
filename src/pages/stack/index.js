import React from "react"
import idx from "idx"
import has from "has"
import { Hero } from "../../components/hero"
import { About } from "../../components/about"
import { Portfolio } from "../../components/portfolio"
import { ServiceList } from "../../components/serviceList"
import { Bottom } from "../../components/bottom"
import { cleanOrder, getDictionaryById } from "../../utils/dataUtils"

export const Stack = ({ order, projects, works, about, hero }) => {
  const ord = has(order, "edges") ? order.edges : []
  const proj = has(projects, "edges") ? projects.edges : []
  const worksList = has(works, "nodes") ? works.nodes : []
  const aboutImg = idx(about, _ => _.childImageSharp.fluid)
  const heroImg = idx(hero, _ => _.childImageSharp.fluid)
  const list = cleanOrder(ord)
  const mapProjects = getDictionaryById(proj, "id")

  return (
    <div>
      <Hero />
      {aboutImg && <About img={aboutImg} />}
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
