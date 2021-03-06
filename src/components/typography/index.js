import styled, { css } from "styled-components"
import { media, fonts, colors, mediaChecker } from "../../style/constants"
import { paddingV, paddingV2 } from "../../style/shared"
import { HeaderContainer } from "../pageComponents/style"

export const Header = styled(HeaderContainer)``

export const PageTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  color: ${props => props.color};
  ${media.sm`
    font-size: 1.2rem;
  `};
  ${media.sm`
    font-size: 1.2rem;
  `};
  padding-bottom: 2rem;
  &::first-letter {
    text-transform: uppercase;
  }
`

export const CopyWrapper = styled.div`
  padding-bottom: 3rem;
  ${media.md`
    padding-bottom: 2rem;
  `}
`

export const PageCopy = styled.p`
  padding: 0;
  margin: 0;
  ${media.sm`
    text-align: center;
    font-size: 1.125rem;
    font-style: normal; 
    line-height: 1.1;
  `}
  font-size: 1.5rem;
  line-height: 1.1;
  font-weight: ${props => (props.bold ? 500 : 400)};

  & span.bold {
    font-weight: 600;
    font-style: bold;
  }
`

export const BzTitle = styled.h2`
/* ${mediaChecker}; */
  font-size: 6.25rem;
  line-height: 1;
  font-family: ${fonts.sansSerif};
  font-weight: 700;
  text-align: center;
  color: ${props => props.color || colors.purple};
  padding-top: ${props => (props.noPadding ? 0 : "6.25rem")};
  ${media.xxl`
    font-size: 6rem;
    padding-top: ${paddingV.xxl};
    padding-bottom: ${paddingV2.xxl};
  `}
  ${media.xl`
    font-size: 6rem;
    padding-top: ${paddingV.xl};
    padding-bottom: ${paddingV2.xl};
  `}
  ${media.lg`
    font-size: 6rem;
    padding-top: 3.25rem;
    padding-bottom: 3.25rem;
    padding-top: ${paddingV.lg};
    padding-bottom: ${paddingV2.lg};
  `}
  ${media.md`
    font-size: 6rem;
    padding-top: 2.25rem;
    padding-bottom: 2.25rem;
    /* padding-top: ${paddingV.md};
    padding-bottom: ${paddingV.md}; */
  `}
  ${media.sm`
    font-size: 3rem;
    padding-top: 2.25rem;
    padding-bottom: 2.25rem;
    /* padding-top: ${paddingV.sm};
    padding-bottom: ${paddingV.sm}; */
  `}
  ${media.xs`
    font-size: 2.8rem;
    padding-top: 2.25rem;
    padding-bottom: 2.25rem;
    /* padding-top: ${paddingV.xs};
    padding-bottom: ${paddingV.xs}; */
  `}
  ${props =>
    props.noPadding &&
    css`
      padding-top: 0;
    `}
`

export const BzTitleProject = styled(BzTitle)`
  font-weight: ${props => (props.bold ? 700 : 300)};
  ${media.xxl`
    font-size: 3rem;
  `}
  ${media.xl`
    font-size: 3rem;
  `}
  ${media.lg`
    font-size: 3rem;
  `}
  ${media.md`
    font-size: 3rem;
  `}
  ${media.sm`
    font-size: 3rem;
  `}
  ${media.xs`
    font-size: 2.8rem;
  `}
  padding:0;
`

export const BzCopy = styled.p`
  font-size: 1.5rem;
  padding-bottom: 1rem;
  line-height: 1;
    text-align: center;
  ${media.xl`
    font-size: 1.5rem;
    text-align: center;
  `}
  ${media.lg`
    font-size: 1.5rem;
    text-align: center;
  `}
  ${media.md`
    text-align: center;
  `}
  ${media.sm`
    text-align: center;
  `}
  ${media.xs`
    text-align: center;
  `}
  ${props =>
    props.bold &&
    css`
      font-weight: 700;
    `}
`

export const BzLink = styled.a`
  display: inline-block;
  position: relative;
  font-weight: ${fonts.sansSerif};
  font-size: 1.2rem;
  line-height: 1;
  color: ${colors.darkGray};
  transition: color 0.25s ease;
  margin: 1em;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    transform-origin: left;
    transition: width 0.25s ease;
    z-index: -1;
    border-bottom: 2px solid ${colors.purple};
  }
  &:hover::after {
    width: 100%;
    border-bottom: 2px solid ${colors.purple};
  }
  &:hover {
    cursor: pointer;
    color: ${colors.purple};
  }
`
