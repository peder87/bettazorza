import React from "react"
import { Section, SectionCenteredContent } from "../pageComponents/style"
import { colors } from "../../style/constants"
import { BzTitle } from "../typography"
import { Carusel } from "../carusel"

export const ServiceList = ({ list }) => {
  console.log("list", list)
  return (
    <Section id="serviceList" bgcolor={colors.white} color={colors.purple}>
      <SectionCenteredContent>
        <BzTitle color={colors.purple}>Come posso aiutarti?</BzTitle>
        <Carusel list={list.map(x => x.node)} />
      </SectionCenteredContent>
    </Section>
  )
}
