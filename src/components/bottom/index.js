import React from "react"
import { BottomSection, Container } from "./style"
import { colors } from "../../style/constants"
import { Footer } from "../footer"

export const Bottom = props => {
  return (
    <BottomSection id="bottom" bgcolor={colors.purple} color={colors.white}>
      <Container>
        <Footer color={colors.white} />
      </Container>
    </BottomSection>
  )
}
