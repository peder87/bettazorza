import styled, { css } from "styled-components"
import { media } from "../../style/constants"

export const Wrapper = styled.div`
  display: flex;
  ${media.xl`
    padding: 45px;
    background-color: pink;
  `}
  ${media.lg`
    background-color: green;
  `}
  ${media.md`
    background-color: red;
  `}
  ${media.sm`
    background-color: violet;
  `}
`

export const MenuButton = styled.button`
  border: 1px solid black;
  width: 40px;
  height: 40px;
  background-color: red;
  ${media.sm`
    background-color: plum;
  `}
`
