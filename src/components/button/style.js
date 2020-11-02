import styled from "styled-components"
import { colors, media } from "../../style/constants"

export const Button = styled.button`
  text-transform: uppercase;
  background-color: ${props => props.bgcolor || colors.purple};
  color: ${props => props.color || colors.white};
  outline:none;
  border: none;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 3rem;
  margin: 0 auto;
  width: 50%;
  ${media.lg`
    width: 90%;
  `}
  ${media.md`
    width: 90%;
    font-size: 1.3rem;
  `}
  ${media.sm`
    font-size: 1.1rem;
  `}
  ${media.xs`
    font-size: 2rem;
  `}
  transition: background-color .15s ease;
  &:hover {
    cursor: pointer;
    background-color: ${colors.yellow};
  }
`
export const AnimatedButton = styled(Button)`
  background-size: 2rem 2rem;
  &:hover {
    background-color: none;
    background-image: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.1) 75%,
      transparent 75%,
      transparent
    );
    animation: animation 2.8s linear 0s normal none running LOADING-ANIMATION;
  }

  @keyframes LOADING-ANIMATION {
    0% {
      background-position: 0px 0px;
    }
    100% {
      background-position: 2rem 4rem;
    }
  }
`
