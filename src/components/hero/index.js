import React from "react"
import { GlobalContainer } from "../pageComponents/style"
import { HeroSection } from "./style"
import { colors } from "../../style/constants"
import { Link } from "react-scroll"

export const Hero = props => {
  return (
    <HeroSection
      className="pattern-cross-dots-xl"
      full
      bgcolor={colors.purple}
      color={colors.yellow}
      id="hero"
    >
      <GlobalContainer>
        <Link to="about" smooth duration={1000}>
          test
        </Link>
      </GlobalContainer>
    </HeroSection>
  )
}
