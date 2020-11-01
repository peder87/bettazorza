import React from "react"
import { Hero } from "../../components/hero"
import { About } from "../../components/about"
import { Portfolio } from "../../components/portfolio"
import { Form } from "../../components/form"
import { Bottom } from "../../components/bottom"
import { cleanOrder, getDictionaryById } from "../../utils/dataUtils"

export const Stack = ({ about, order, projects }) => {
  const list = cleanOrder(order.edges)
  const mapProjects = getDictionaryById(projects.edges, "id")
  return (
    <>
      <Hero />
      <About data={about} />
      <Portfolio list={list} src={mapProjects} />
      {/* <Form /> */}
      <Bottom />
    </>
  )
}
