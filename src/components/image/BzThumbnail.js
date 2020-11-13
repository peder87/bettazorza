import React from "react"
import { Image } from "./image"
import styled from "styled-components"
import { colors } from "../../style/constants"

export const BzThumbnail = props => {
  return (
    <ThumbWrapper>
      <figure>
        <Image srcset={props.srcset} alt={props.title} src={props.img} />
        <span>{props.title}</span>
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
      width: 100%;
      max-width: 100%;
      max-height: 100%;
      display: block;
    }
  }
`
