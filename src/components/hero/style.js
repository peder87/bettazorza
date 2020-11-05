import styled from "styled-components"
import { Section } from "../pageComponents/style"
import { colors } from "../../style/constants"
import { PageTitle } from "../typography"

export const HeroSection = styled(Section)`
  border: 1px solid hotpink;
  color: ${colors.yellow};
`

export const HeroTitle = styled(PageTitle)`
  font-size: 8rem;
  color: ${props => props.color || colors.white};
  padding-left: 2rem;
`

export const MonoWrapper = styled.div`
  width: 8rem;
  /* background-color: red; */
`

export const HeroTitleBlock = styled.div`
  display: flex;
`
