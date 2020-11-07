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
import { colors } from "../../style/constants"
import { BzButton } from "../bzButton"

export const Hero = props => {
  return (
    <HeroSection full bgcolor={colors.white} id="hero">
      <HeroContainer>
        <HeroHeader>
          <img src="/images/common/logo_betta.svg" />
        </HeroHeader>
        <HeroTitleBlock>
          <HeroTitle color={colors.cyan}>
            Ciao, <span>Sono Betta</span>
          </HeroTitle>
          <p>
            Sono una graphic designer, e ogni giorno collaboro con persone e
            aziende sviluppando soluzioni comunicative su misura.
          </p>
        </HeroTitleBlock>
        <HeroFooter>
          <BzButton text="scopri di più" click={() => console.log("hello")} />
        </HeroFooter>
      </HeroContainer>
    </HeroSection>
  )
}
