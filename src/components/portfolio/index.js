import React from "react"
import { GlobalContainer } from "../pageComponents/style"
import { PortfolioSection } from "./style"
import { colors } from "../../style/constants"
import { Link } from "react-scroll"

export const Portfolio = props => {
  return (
    <PortfolioSection
      id="portfolio"
      bgcolor={colors.white}
      color={colors.darkGray}
    >
      <GlobalContainer>portfolio section</GlobalContainer>
    </PortfolioSection>
  )
}
