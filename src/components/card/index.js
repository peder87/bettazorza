import React from "react"
import { CardContainer, CardCaption, CardIcon, CardTitle } from "./style"

export const Card = ({ img, title }) => {
  return (
    <div>
      <CardContainer>
        <CardIcon img={img} />
        <CardTitle>{title}</CardTitle>
        <CardCaption>Caption</CardCaption>
      </CardContainer>
    </div>
  )
}
