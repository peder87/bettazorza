import React, { useState } from "react"
import { GlobalContainer } from "../pageComponents/style"
import { PortfolioSection } from "./style"
import { colors } from "../../style/constants"
import { Link } from "react-scroll"
import { orderWorks } from "../../utils/dataUtils"

export const Portfolio = props => {
  const [prj, setPrj] = useState(() => orderWorks(props.src, props.list))
  console.log(prj)
  return (
    <PortfolioSection
      id="portfolio"
      bgcolor={colors.white}
      color={colors.darkGray}
    >
      <GlobalContainer></GlobalContainer>
    </PortfolioSection>
  )
}
