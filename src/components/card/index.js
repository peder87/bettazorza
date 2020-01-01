import React from "react"
import { CardContainer, CardCaption, CardIcon, CardTitle } from "./style"

export const Card = props => {
  return (
    <CardContainer>
      {/* <CardIcon /> */}
      <CardTitle>Titolo</CardTitle>
      <CardCaption>Caption</CardCaption>
    </CardContainer>
  )
}
