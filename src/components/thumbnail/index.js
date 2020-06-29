import React from 'react'
import styled from 'styled-components'
import { colors } from '../../style/constants'

export const Thumbnail = (props) =>
  <ThumbWrapper onClick={() => props.callback(props.path)}>
    <figure>
      <img src={props.img} />
      <div>
        <span>{props.title}</span>
      </div>
    </figure>
  </ThumbWrapper>

const ThumbWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0;

  & figure {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  & figure:hover {
    cursor: pointer;
  }

  & figure img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    -webkit-filter: blur(0) saturate(1) brightness(1);
    filter: blur(0) saturate(1) brightness(1);
    -webkit-transition: .3s ease-in-out;
    transition: .3 ease-in-out;
  }

  & figure:hover img {
    filter: blur(3px) saturate(.45) brightness(.85);
    -webkit-filter: blur(3px) saturate(.45) brightness(.85);
  }

  & figure span {
    position: absolute;
    top: 40%;
    left: 0;
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    color: ${colors.yellow};
    font-weight: bold;
    font-size: 24px;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
    opacity: 0;
  }

  & figure:hover span {
    opacity: 1;
  }
`
