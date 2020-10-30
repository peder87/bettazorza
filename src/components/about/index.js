import React from "react"
import { GlobalContainer } from "../pageComponents/style"
import { AboutSection } from "./style"
import { colors } from "../../style/constants"
import { Link } from "react-scroll"

export const About = props => {
  return (
    <AboutSection id="about" bgcolor={colors.cyan} color={colors.white}>
      <GlobalContainer>about section</GlobalContainer>
    </AboutSection>
  )
}
