import styled from "styled-components"
import { colors, media } from "../../style/constants"
import { BzLink } from "../../components/typography"

export const FooterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  display: ${props => (props.menu ? "none" : "flex")};
  z-index: 9995;
  width: 100%;
  bottom: 0px;
  padding-bottom: ${props => (props.menu ? "2em" : 0)};
`

export const FooterText = styled.span`
  font-size: 0.85rem;
  color: ${props => props.color || colors.white};
  font-weight: 500;
  & a,
  & a:link,
  & a:visited {
    color: ${props => props.color || colors.white};
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
  }
  ${media.xxl`
    padding-top: 1.8em;
  `};
  ${media.xl`
    padding-top: 1.8em;
  `};
  ${media.lg`
    padding-top: 1.8em;
  `};
  ${media.md`
    padding-top: 1.8em;
  `};
  ${media.sm`
    padding-top: 1.8em;
  `};
  ${media.xs`
    padding-top: 1.8em;
  `};
`

export const FooterLink = styled(BzLink)`
  font-size: 1.2rem;
  text-decoration: none;
  margin-bottom: 0;
  display: inline-block;
  &::after {
    opacity: 0;
    width: 100%;
    transition: opacity 0.25s ease;
  }
  &:hover {
    cursor: pointer;
    color: ${props => props.color};
    border-color: ${colors.white};
    border-width: 1px;
    &::after {
      opacity: 1;
      border-color: ${colors.white};
      border-width: 1px;
    }
  }
  &:link,
  &:visited,
  &:focus {
    color: ${props => props.color};
    outline: none;
  }
`
