import styled from "styled-components"
import { media } from "../../style/constants"

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  ${media.xxl`
    width: 20%;
  `}
  ${media.xl`
    width: 25%;
  `}
  ${media.lg`
    width: 35%;
  `}
  ${media.md`
    width: 40%;
  `}
  ${media.sm`
    width: 60%;
  `}
  ${media.xs`
    width: 60%;
  `}
  margin: 0 auto;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5em;
  margin: 0 auto;
  border-right: ${props => (props.last ? "none" : `1px solid`)};
  border-right-color: ${props => props.color};
`

export const getIconStyled = icon => {
  return styled(icon)`
    color: ${props => props.color};
    width: 1.6em;
    height: 1.6em;
    margin: 0 auto;
    opacity: 0.8;
    transition: opacity 0.25s linear;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  `
}
