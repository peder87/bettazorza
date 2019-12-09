import styled from "styled-components"
import { media } from "../../style/constants"

export const Wrapper = styled.div`
  padding-bottom: 40px;
`

export const NavigationWrapper = styled.div`
  position: relative;
  z-index: 9999;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  min-height: 52px;
  ${media.md`
    flex-direction: row-reverse;
  `}
  ${media.sm`
    flex-direction: row-reverse;
  `}
`
