import React from "react"
import { CardContainer, CardCaption, CardIcon, CardTitle } from "./style"

export const Card = ({ img, title, caption }) => {
  return (
    <div>
      <CardContainer>
        <CardIcon img={img} />
        <CardTitle>{title}</CardTitle>
        <CardCaption>{caption}</CardCaption>
      </CardContainer>
    </div>
  )
}
