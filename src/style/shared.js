import styled, { css } from "styled-components"
import { media, colors } from "./constants"

export const ContentWrapper = styled.div`
  max-width: 68rem;
  width: calc(100% - 9.25rem * 2);
  margin: 11rem auto 5rem;
  ${media.lg`
    margin: 8rem auto 3rem;
    width: calc(100% - 11rem * 2);
  `}
  
  ${media.md`
    width: 100%;
    margin: 4rem auto 0;
    padding: 0 3rem 6rem;
  `}
  
  ${media.sm`
    margin: 2rem auto 0;
    padding: 0 2rem 6rem;
  `}

  ${media.xs`
    margin: 1rem auto 0;
    padding: 0 1rem 2rem;
  `}
`

export const ListItem = styled.li`
  font-size: 1rem;
  color: ${colors.darkGray};
  padding: 0.3rem 0;
  line-height: 1.6em;
`

export const Loader = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #1b242f;
  z-index: 2;
  ${props =>
    props.isLoaded
      ? css`
          transform: scale(1.05);
          opacity: 0;
        `
      : css`
          transform: scale(1);
          opacity: 1;
        `}
  transition: .6s cubic-bezier(.45, 0, .07, 1) transform, .6s cubic-bezier(.45, 0, .07, 1) opacity;
  will-change: transform;
`

export const paddingV = {
  xxl: "8.25rem",
  xl: "8.25rem",
  lg: "8.25rem",
  md: "8.25rem",
  sm: "8.25rem",
  xs: "8.25rem",
}
export const paddingV2 = {
  xxl: "4.125rem",
  xl: "4.125rem",
  lg: "4.125rem",
  md: "4.125rem",
  sm: "4.125rem",
  xs: "4.125rem",
}

export const paddingTop = css`
  ${media.xxl`
    padding-top: ${paddingV.xxl};
  `}
  ${media.xl`
    padding-top: ${paddingV.xl};
  `}
  ${media.lg`
    padding-top: ${paddingV.lg};
  `}
  ${media.md`
    padding-top: ${paddingV.md};
  `}
  ${media.sm`
    padding-top: ${paddingV.sm};
  `}
  ${media.xs`
    padding-top: ${paddingV.xs};
  `}
}`
