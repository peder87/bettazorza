import React from "react"
import { GlobalContainer } from "../pageComponents/style"
import { HeroSection, HeroTitle, MonoWrapper, HeroTitleBlock } from "./style"
import { colors } from "../../style/constants"
// import Logo from "./logo-mono.svg"

export const Hero = props => {
  return (
    <HeroSection
      className="pattern-cross-dots-xl"
      full
      bgcolor={colors.purple}
      color={colors.yellow}
      id="hero"
    >
      <GlobalContainer centred>
        <div>
          <HeroTitleBlock>
            {/* <MonoWrapper>
              <Logo />
            </MonoWrapper> */}
            <HeroTitle>hello bitch</HeroTitle>
          </HeroTitleBlock>
        </div>
      </GlobalContainer>
    </HeroSection>
  )
}
