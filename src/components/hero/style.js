import styled from "styled-components"
import { Section } from "../pageComponents/style"
import { colors, fonts } from "../../style/constants"
import { GlobalContainer } from "../pageComponents/style"
import { PageTitle } from "../typography"

export const HeroSection = styled(Section)``

export const HeroContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex-direction: column;
  height: 100%;
  width: 100%auto;
  justify-content: space-between;
  & div:last-child {
  }
`
export const HeroHeader = styled.div`
  margin: 0 auto;
  & img {
    width: 25.125rem;
    padding-top: 6.25rem;
  }
`

export const HeroTitle = styled(PageTitle)`
  font-size: 6rem;
  font-family: ${fonts.sansSerif};
  font-weight: 700;
  color: ${props => props.color || colors.white};
  padding-left: 2rem;
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
  width: 65%;
  margin: 0 auto;
  & p {
    font-family: ${fonts.sansSerif};
    font-weight: 300;
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    color: ${colors.purple};
  }
`

export const HeroFooter = styled.div`
  text-align: center;
  padding-bottom: 6.25rem;
`
