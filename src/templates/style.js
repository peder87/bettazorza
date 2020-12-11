import styled from "styled-components"
import { media, mediaChecker } from "../style/constants"
import { paddingV, paddingV2 } from "../style/shared"
import { BzTitle } from "../components/typography"
import { HeroHeader } from "../components/hero/style"

export const LogoHeader = styled(HeroHeader)`
  margin: 0 auto;
  ${media.md`
    padding-top: ${paddingV2.md};
  `}
  ${media.sm`
    padding-top: ${paddingV2.sm};
  `}
  ${media.xs`
    padding-top: ${paddingV2.xs};
  `}
  &:hover {
    cursor: pointer;
  }
`

export const WorkTitle = styled(BzTitle)`
/* ${mediaChecker}; */
  font-weight: ${props => (props.bold ? 700 : 300)};
  ${media.xxl`
    font-size: 3.2rem;
    padding-bottom: ${paddingV2.xxl};
  `}
  ${media.xl`
    font-size: 3rem;
    padding-bottom: ${paddingV2.xl};
  `}
  ${media.lg`
    font-size: 3rem;
    padding-bottom: ${paddingV2.lg};
  `}
  ${media.md`
    font-size: 2rem;
    padding-top: ${paddingV2.md};
    padding-bottom: 2.25rem;
  `}
  ${media.sm`
    font-size: 2rem;
    padding-top: ${paddingV2.sm};
    padding-bottom: 2.25rem;
  `}
  ${media.xs`
    font-size: 2rem;
    padding-top: ${paddingV2.xs};
    padding-bottom: 2.25rem;
  `}
`
