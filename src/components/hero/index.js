import React from "react"
import { GlobalContainer } from "../pageComponents/style"
import {
  HeroSection,
  HeroTitle,
  HeroContainer,
  HeroTitleBlock,
  HeroFooter,
  HeroHeader,
} from "./style"
import { scroller } from "react-scroll"
import { colors } from "../../style/constants"
import { BzButton } from "../bzButton"
import { BzCopy } from "../typography"
import Img from "gatsby-image"

export const Hero = props => {
  const goToAbout = e => {
    e.preventDefault()
    scroller.scrollTo("about", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOut",
    })
  }
  console.log(props)
  return (
    <HeroSection full bgcolor={colors.white} id="hero">
      <HeroContainer>
        <HeroHeader>
          <Img fluid={props.img} alt="logo_bettazorza" />
        </HeroHeader>
        <HeroTitleBlock>
          <HeroTitle noPadding color={colors.cyan}>
            Ciao, <span>sono Betta</span>
          </HeroTitle>
          <BzCopy>
            Sono una graphic designer, e ogni giorno collaboro con persone e
            aziende sviluppando soluzioni comunicative su misura.
          </BzCopy>
        </HeroTitleBlock>
        <HeroFooter>
          <div>
            <BzButton
              first={colors.white}
              second={colors.purple}
              text="scopri di più"
              click={goToAbout}
            />
          </div>
        </HeroFooter>
      </HeroContainer>
    </HeroSection>
  )
}
