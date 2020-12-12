import styled from "styled-components"
import { Section, GlobalContainer } from "../pageComponents/style"
import { media, mq } from "../../style/constants"
export const BottomSection = styled(Section)``

export const Container = styled(GlobalContainer)`
  ${media.xxl`
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  `}
  ${media.xl`
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  `}
  ${media.lg`
    padding-top: 2.0rem;
    padding-bottom: 2.0rem;
  `}
  ${media.md`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  `}
  ${media.sm`
    padding-top: 1.0rem;
    padding-bottom: 1.0rem;
  `}
  ${media.xs`
    padding-top: 1rem;
    padding-bottom: 1rem;
  `}
`
