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

export const Hero = props => {
  const goToAbout = e => {
    e.preventDefault()
    scroller.scrollTo("about", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOut",
    })
  }

  return (
    <HeroSection full bgcolor={colors.white} id="hero">
      <HeroContainer>
        <HeroHeader>
          <img src="/images/common/logo_betta.svg" />
        </HeroHeader>
        <HeroTitleBlock>
          <HeroTitle noPadding color={colors.cyan}>
            Ciao, <span>Sono Betta</span>
          </HeroTitle>
          <BzCopy>
            Sono una graphic designer, e ogni giorno collaboro con persone e
            aziende sviluppando soluzioni comunicative su misura.
          </BzCopy>
        </HeroTitleBlock>
        <HeroFooter>
          <BzButton text="scopri di più" click={goToAbout} />
        </HeroFooter>
      </HeroContainer>
    </HeroSection>
  )
}
