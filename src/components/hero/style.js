import styled from "styled-components"
import { Section } from "../pageComponents/style"
import { colors, fonts, media } from "../../style/constants"
import { BzTitle } from "../typography"
import { SectionCenteredContent } from "../pageComponents/style"

export const HeroSection = styled(Section)``

export const HeroContainer = styled(SectionCenteredContent)`
  display: flex;
  flex-flow: column;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`
export const HeroHeader = styled.div`
  margin: 0 auto;
  & img {
    width: 25.125rem;
    padding-top: 6.25rem;
    ${media.md`
    padding-top: 4.25rem;
    width: 22rem;
    `}
    ${media.sm`
    width: 22rem;
    padding-top: 4.25rem;
    `}
    ${media.xs`
    width: 22rem;
    padding-top: 4.25rem;
    `}
  }
`

export const HeroTitle = styled(BzTitle)`
  color: ${props => props.color || colors.white};
  padding-left: 1rem;
  text-align: center;
  padding: 0;
  & span {
    font-family: ${fonts.sansSerif};
    color: ${colors.purple};
    font-weight: 700;
  }
`

export const HeroTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  & p {
    font-family: ${fonts.sansSerif};
    font-weight: 300;
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    color: ${colors.purple};
    ${media.md`
      font-size: 1.5rem;
      line-height: 2rem;
    `}
    ${media.sm`
      font-size: 1.5rem;
      line-height: 2rem;
    `}
    ${media.xs`
      font-size: 1.5rem;
      line-height: 2rem;
    `}
  }
`

export const HeroFooter = styled.div`
  text-align: center;
  padding-bottom: 6.25rem;
`
