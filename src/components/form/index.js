import React from "react"
import { GlobalContainer } from "../pageComponents/style"
import { FormSection } from "./style"
import { colors } from "../../style/constants"
import { Link } from "react-scroll"

export const Form = props => {
  return (
    <FormSection id="form" bgcolor={colors.darkGray} color={colors.white}>
      <GlobalContainer>form section</GlobalContainer>
    </FormSection>
  )
}
