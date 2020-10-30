import React from "react"
import { GlobalContainer } from "../pageComponents/style"
import { BottomSection } from "./style"
import { colors } from "../../style/constants"
import { Link } from "react-scroll"

export const Bottom = props => {
  return (
    <BottomSection id="bottom" bgcolor={colors.darkGray} color={colors.white}>
      <GlobalContainer>bottom section</GlobalContainer>
    </BottomSection>
  )
}
