import styled, { css } from "styled-components"
import { media } from "../../style/constants"

export const Wrapper = styled.div`
  padding: 45px;
  ${media.xl`
    background-color: pink;
  `}
  ${media.lg`
    background-color: green;
  `}
  ${media.md`
    background-color: red;
  `}
  ${media.xs`
    background-color: blue;
  `}
`
