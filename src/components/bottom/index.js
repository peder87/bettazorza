import React from "react"
import { GlobalContainer } from "../pageComponents/style"
import { BottomSection } from "./style"
import { colors } from "../../style/constants"
import { Footer } from "../footer"

export const Bottom = props => {
  return (
    <BottomSection id="bottom" bgcolor={colors.purple} color={colors.white}>
      <GlobalContainer>
        <Footer color={colors.white} />
      </GlobalContainer>
    </BottomSection>
  )
}
