import React from "react"
import { Header, PageTitle } from "../typography"

export const PageHeader = ({ title, ...props }) => {
  return (
    <Header>
      <PageTitle {...props}>{title}</PageTitle>
    </Header>
  )
}
