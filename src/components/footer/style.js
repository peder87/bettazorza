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
  ${media.xs`
    flex-direction: column;
    display: ${props => (props.menu ? "none" : "flex")};
  `}
  z-index: 9995;
  width: 100%;
  bottom: 0px;
  padding-bottom: ${props => (props.menu ? "2em" : 0)};
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
    cursor: pointer;
    color: ${props => props.color};
    text-decoration: underline;
  }
  &:link,
  &:visited,
  &:focus {
    color: ${props => props.color};
    outline: none;
  }
`
