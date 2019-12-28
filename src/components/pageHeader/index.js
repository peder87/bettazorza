import React from "react"
import { Header, PageTitle } from "../typography"

export const PageHeader = ({ title }) => {
  return (
    <Header>
      <PageTitle>{title}</PageTitle>
    </Header>
  )
}
