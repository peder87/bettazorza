import styled from "styled-components"
import { Section } from "../pageComponents/style"
import { colors, fonts, media } from "../../style/constants"
import { paddingTop } from "../../style/shared"
import { BzTitle } from "../typography"
import { SectionCenteredContent } from "../pageComponents/style"

export const HeroSection = styled(Section)``

export const HeroContainer = styled(SectionCenteredContent)`
  /* display: flex;
  flex-flow: column;
  flex-direction: column; */
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  padding-top: 0;
  padding-bottom: 0;
`

export const HeroHeader = styled.div`
  margin: 0 auto;
  /* border:1px solid red; */
  & img {
      width: 25.125rem;
    ${media.md`
      width: 34.2;
    `}
    ${media.sm`
      width: 22rem;
    `}
    ${media.xs`
      width: 22rem;
    `}
    ${paddingTop};
  }
`

export const HeroTitle = styled(BzTitle)`
  color: ${props => props.color || colors.white};
  padding-left: 1rem;
  text-align: center;
  padding: 0;
  font-size: 8rem;
  ${media.xxl`
    font-size: 8rem;
  `}
  ${media.xl`
    font-size: 8rem;
  `}
  ${media.lg`
    font-size: 5.8rem;
  `}
  ${media.md`
    font-size: 5.3rem;
  `}
  ${media.sm`
    font-size: 3rem;
  `}
  ${media.xs`
    font-size: 2.8rem;
  `}
  & span {
    font-family: ${fonts.sansSerif};
    color: ${colors.purple};
    font-weight: 700;
  }
`

export const HeroTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  & p {
    font-family: ${fonts.sansSerif};
    font-weight: 300;
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    color: ${colors.purple};
    margin: 0 auto;
    ${media.xxl`
    `}
    ${media.xl`
    `}
    ${media.lg`
    `}
    ${media.md`
      font-size: 1.8rem;
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
`
