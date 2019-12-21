import styled from "styled-components"
import { media, colors } from "../../style/constants"

export const MenuContainer = styled.div`
  margin: 0 auto;
  height: auto;
  min-height: 100%;
  ${media.xl`
    width: 75%;
    /* background-color: blue; */
  `}
  ${media.lg`
    width: 80%;
    /* background-color: green; */
  `}
  ${media.md`
    width: 80%;
    /* background-color: pink; */
  `}
  ${media.sm`
    width: 60%;
    /* background-color: red; */
  `}
`
