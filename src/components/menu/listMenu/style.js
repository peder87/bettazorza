import styled from "styled-components"
import Link from "gatsby-link"
import { colors, media } from "../../../style/constants"

export const ListWrapper = styled.div`
  /* background-color: red; */
  /* width: 70%; */
  margin: 4.5em auto;
  ${media.sm`
    margin-top: 16em;
    width: 90%;
  `}
`

export const MenuItem = styled.div`
  margin-bottom: 2em;
  ${media.sm`
    text-align: center;
  `}
`

export const MenuLink = styled(Link)`
  color: ${colors.purple};
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  &:hover {
    text-decoration: underline;
    color: ${colors.purple};
  }
  &::first-letter {
    text-transform: uppercase;
  }
`
