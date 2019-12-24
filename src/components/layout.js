/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "../style/global"
import { media } from "../style/constants"
import Navigation from "./navigation"
import styled from "styled-components"
import { Footer } from "../components/footer"
import { pageConfig } from "../pages/pageConfig"
// import Header from "./header"

const Container = styled.div`
  /* min-height: 100vh;
  background-color: ${props => props.bgcolor};
  height: auto; */
  ${media.xl`
    padding: 3.5em;
  `}
  ${media.lg`
    padding: 3.0em;
  `}
  ${media.md`
    padding: 2.5em;
  `}
  ${media.sm`
    padding: 2.0em;
  `}
`

const Layout = ({ children, location }) => {
  const [status, setStatus] = useState(false)
  const page = pageConfig(window.location.pathname)

  const toggleMenu = () => {
    setStatus(!status)
  }

  return (
    <>
      <GlobalStyle {...page} />
      <Container {...page}>
        <Navigation isOpen={status} toggleMenu={toggleMenu} />
        {children}
        <Footer {...page} />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
