import React from 'react'
import styled from 'styled-components'

export const Thumbnail = (props) =>
  <div>
    <figure>
      <img src={props.img} />
      <span>{props.title}</span>
    </figure>
  </div>

const ThumbWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  padding: 0;

  & figure {
    width: 300px;
    height: 200px;
    margin: 0;
    padding: 0;
    background: #fff;
    overflow: hidden;
  }

  & figure:hover {
    cursor: pointer;
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
    color: #FFF;
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
