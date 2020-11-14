import React from "react"
import { Image } from "./image"
import styled from "styled-components"
import { colors, fonts } from "../../style/constants"

export const BzThumbnail = props => {
  return (
    <ThumbWrapper>
      <figure>
        <Image srcset={props.srcset} alt={props.title} src={props.img} />
        <strong>{props.title}</strong>
        <span>{props.tags[0]}</span>
      </figure>
    </ThumbWrapper>
  )
}

const ThumbWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0;

  & figure {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    & img {
      display: inline-block;
      position: relative;
      width: 100%;
      max-width: 100%;
      max-height: 100%;
      display: block;

      margin-bottom: 0.75rem;
      /* transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s; */
    }

    & strong {
      display: inline-block;
      position: relative;
      font-family: ${fonts.sansSerif};
      color: ${colors.darkGray};
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1;
      transition: color 0.5s ease;
      top: 0px;
      box-shadow:0px 3px 6px fade(black,20%);

      ::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        /* width: 0%; */
        height: 100%;
        transform-origin: left;
        /* transition: width 0.25s ease; */
        transition: opacity 0.5s ease;
        z-index: -1;
        /* border-bottom: 1px solid ${colors.purple}; */
      }
    }

    & span {
      display: block;
      &:first-letter {
        text-transform: uppercase;
      }
    }

    &:hover {
      & img {
        /* background: transparent;
        transform: translateY(-0.25rem);
        box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px,
          rgba(71, 63, 79, 0.16) 0px 8px 16px; */
      }

      cursor: pointer;
      & strong {
        color: ${colors.purple};
      }
      & strong::after {
        /* width: 100%; */
        opacity: 1;
        border-bottom: 1px solid ${colors.purple};
      }
    }
  }
`
