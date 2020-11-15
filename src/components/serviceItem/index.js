import React from "react"
import { ServiceWrapper } from "./style"
import { Image } from "../image/image"
export const ServiceItem = props => {
  console.log(props)
  return (
    <ServiceWrapper>
      <div>
        <img src={props.srcset[0]} />
      </div>
      <span>{props.title}</span>
    </ServiceWrapper>
  )
}
