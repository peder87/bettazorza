import React from "react"
import { Header, PageTitle } from "../typography"
import { pageConfig } from "../../pages/pageConfig"

export const PageHeader = ({ title }) => {
  return (
    <Header>
      <PageTitle>{title}</PageTitle>
    </Header>
  )
}
