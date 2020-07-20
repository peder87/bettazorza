import React from 'react'
import styled from 'styled-components'
import { colors } from '../../style/constants'
import { Image } from '../image'

export const Thumbnail = (props) =>
  <ThumbWrapper onClick={() => props.callback(props.path)}>
    <figure>
      <Image
        srcset={props.srcset}
        alt={props.title}
        src={props.img}
      />
      <div className="background" />
      <div className="container">
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

  & figure div.background {
    position: absolute;
    top: 0;
    width: 100%;
    content: "";
    background: ${colors.yellow};
    min-height: 100%;
    height: auto;
    opacity: 0;
    -webkit-transition: .3s ease-in-out;
    transition: .3 ease-in-out;
  }

  & figure:hover div.background {
    opacity: 0.90;
  }


  & figure img {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    display: block;
    /* -webkit-filter: blur(0) saturate(1) brightness(1);
    filter: blur(0) saturate(1) brightness(1); */
    -webkit-transition: .3s ease-in-out;
    transition: .3 ease-in-out;
  }

  & figure:hover img {
    /* filter: blur(3px) saturate(.45) brightness(.85);
    -webkit-filter: blur(3px) saturate(.45) brightness(.85); */
  }

  & figure div.container {
    position: absolute;
    top: 40%;
    width: 100%;

  }

  & figure div.container span {
    width: 80%; 
    display: block;
    position: relative;
    top: 0;
    height: auto;
    margin: 0 auto;
    padding: 0;
    color: ${colors.purple};
    font-weight: bold;
    font-size: 24px;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
    opacity: 0;
  }

  & figure:hover div.container span {
    opacity: 1;
  }
`
