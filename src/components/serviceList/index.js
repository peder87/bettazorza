import React from "react"
import styled from "styled-components"
import { Section, SectionCenteredContent } from "../pageComponents/style"
import { colors, media, mediaChecker } from "../../style/constants"
import { paddingV2 } from "../../style/shared"
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
  ${media.xxl`
    padding-top: ${paddingV2.xxl};
    padding-bottom: ${paddingV2.xxl};
  `}
  ${media.xl`
    padding-top: ${paddingV2.xl};
    padding-bottom: ${paddingV2.xl};
  `}
  ${media.lg`
    padding-top: ${paddingV2.lg};
    padding-bottom: ${paddingV2.lg};
    font-size: 4.5rem;
  `}
  ${media.md`
    padding-top: ${paddingV2.md};
    padding-bottom: ${paddingV2.md};
    font-size: 4.5rem;
  `}
  ${media.sm`
    font-size: 3.3rem;
  `}
`
