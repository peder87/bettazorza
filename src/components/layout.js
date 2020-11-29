import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "../style/global"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle id="GLOBAL-STYLE" />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
