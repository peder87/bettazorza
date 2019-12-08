import styled from "styled-components"
// import { media } from "../../../style/constants"
import { Menu } from "styled-icons/feather/Menu"
import { Close } from "styled-icons/evil/Close"

export const MenuIcon = styled.div`
  width: 40px;
  height: 40px;
`

export const MenuClosed = styled(Menu)`
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`

export const MenuOpen = styled(Close)`
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`
