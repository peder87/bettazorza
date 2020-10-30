import React from "react"
import { Hero } from "../../components/hero"
import { About } from "../../components/about"
import { Portfolio } from "../../components/portfolio"
import { Form } from "../../components/form"
import { Bottom } from "../../components/bottom"

export const Stack = props => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Form />
      <Bottom />
    </>
  )
}
