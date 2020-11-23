import styled from "styled-components"
import { media, mediaChecker } from "../style/constants"
import { BzTitle } from "../components/typography"
import { HeroHeader } from "../components/hero/style"

export const LogoHeader = styled(HeroHeader)`
  /* ${mediaChecker}; */
  & img {
    margin: 0 auto;
    &:hover {
      cursor: pointer;
    }
  ${media.xxl`
    width: 18em;
  `}
  ${media.xl`
    width: 16.5em;
  `}
  ${media.lg`
  `}
  ${media.md`
  `}
  ${media.sm`
  `}
  ${media.xs`
  `}
  }
`

export const WorkTitle = styled(BzTitle)`
  font-weight: ${props => (props.bold ? 700 : 300)};
  ${media.xxl`
    padding-bottom: 0;
    font-size: 3.2rem;
    & + h2 {
      padding-top: 0;
      text-transform: capitalize;
    }
  `}
  ${media.xl`
    padding-bottom: 0;
  font-size: 3rem;
    & + h2 {
      padding-top: 0;
      text-transform: capitalize;
    }
  `}
  ${media.lg`
  font-size: 3rem;
    & + h2 {
      padding-top: 0;
      text-transform: capitalize;
    }
  `}
  ${media.md`
    padding-bottom: 0;
    & + h2 {
      padding-top: 0;
      text-transform: capitalize;
    }
  `}
  ${media.sm`
    padding-bottom: 0;
    & + h2 {
      padding-top: 0;
      text-transform: capitalize;
    }
  `}
  ${media.xs`
    padding-bottom: 0;
    & + h2 {
      padding-top: 0;
    }
  `}
`
