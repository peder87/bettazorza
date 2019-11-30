import styled from "styled-components"
import { media } from "../../style/constants"

export const Wrapper = styled.div`
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: flex-start;
	align-content: center;
  ${media.xl`
    padding: 45px;
    background-color: pink;
  `}
  ${media.lg`
    background-color: green;
  `}
  ${media.md`
    background-color: red;
    flex-direction: row-reverse;
  `}
  ${media.sm`
    background-color: violet;
    flex-direction: row-reverse;
  `}
`
