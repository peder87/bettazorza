import React from "react"
import styled from "styled-components"
import { Section, SectionCenteredContent } from "../pageComponents/style"
import { colors, media, mediaChecker } from "../../style/constants"
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
        <ServiceTitle color={colors.purple}>Come posso aiutarti?</ServiceTitle>
        <Carusel list={list} />
      </SectionCenteredContent>
    </ServiceSection>
  )
}

const ServiceSection = styled(Section)`
  background-color: rgba(196, 196, 196, 30%);
`

const ServiceTitle = styled(BzTitle)`
  /* ${mediaChecker}; */
  ${media.lg`
    font-size: 4.5rem;
  `}
  ${media.sm`
    font-size: 3.3rem;
  `}
`
