import React from "react"
import styled from "styled-components"
import { Section, SectionCenteredContent } from "../pageComponents/style"
import { colors } from "../../style/constants"
import { BzTitle } from "../typography"
import { Carusel } from "../carusel"

export const ServiceList = ({ list }) => {
  return (
    <ServiceSection
      id="serviceList"
      bgcolor={colors.white}
      color={colors.purple}
    >
      <SectionCenteredContent>
        <BzTitle color={colors.purple}>Come posso aiutarti?</BzTitle>
        <Carusel list={list} />
      </SectionCenteredContent>
    </ServiceSection>
  )
}

const ServiceSection = styled(Section)`
  background-color: rgba(196, 196, 196, 10%);
`
