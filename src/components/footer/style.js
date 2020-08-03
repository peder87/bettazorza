import styled from "styled-components"
import { media } from "../../style/constants"

export const FooterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.sm`
    flex-direction: column;
    display: ${props => (props.menu ? "none" : "flex")};
  `}
  z-index: 9995;
  width: 100%;
  bottom: 0px;
`

export const FooterText = styled.span`
  font-size: 1.125rem;
  color: ${props => props.color};
  ${media.sm`
    padding-top: 1.8em;
  `};
  ${media.xs`
    padding-top: 1.8em;
  `};
`

export const FooterLink = styled.a`
  font-size: 1.125rem;
  color: ${props => props.color};
  ${media.sm`
    padding-bottom: 1.8em;
  `};
  ${media.xs`
    padding-bottom: 1.8em;
  `};
  &:hover {
    color: ${props => props.color};
    cursor: pointer;
    text-decoration: underline;
  }
  &:focus {
    outline: none;
  }
`