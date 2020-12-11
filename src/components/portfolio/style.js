import styled from "styled-components"
import { Section } from "../pageComponents/style"
import { paddingBottom, media } from "../../style/constants"
export const PortfolioSection = styled(Section)``

export const ButtonContainer = styled.div`
  ${paddingBottom};
  text-align: center;
  ${media.xxl`
    display: none;
  `}
  ${media.xl`
    display: none;
  `}
  ${media.lg`
    display: none;
  `}
  ${media.md`
    display: block;
  `}
  ${media.sm`
    display: block;
  `}
  ${media.xs`
    display: block;
  `}
`
