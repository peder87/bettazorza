import styled from "styled-components"
import { media } from "../../../style/constants"

export const MenuIcon = styled.div`
  width: 40px;
  height: 40px;
  background: black;
  ${media.sm`
    align-self: flex-end;
  `}
`

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
  border: 1px solid black;
`
