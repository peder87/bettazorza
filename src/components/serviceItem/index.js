import React from "react"
import { ServiceWrapper } from "./style"
import { Image } from "../image/image"
export const ServiceItem = props => {
  console.log(props)
  return (
    <ServiceWrapper>
      <Image srcset={props.srcset} />
      <span>{props.title}</span>
    </ServiceWrapper>
  )
}
