import React from "react"
import { ServiceWrapper } from "./style"

export const ServiceItem = props => {
  return (
    <ServiceWrapper>
      <div>
        <img src={props.srcset[0]} alt={props.title.replace(/\s+/g, "")} />
      </div>
      <span>{props.title}</span>
    </ServiceWrapper>
  )
}
