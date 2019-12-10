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
import { SocialMenu } from "./socialMenu"
// import Header from "./header"
import Menu from "../components/menu"

const Container = styled.div`
  ${media.xl`
    padding: 3.5em;
  `}
  ${media.lg`
    padding: 3.0em;
    /* background-color: green; */
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
  const toggleMenu = () => {
    setStatus(!status)
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        {/* <Navigation isOpen={status} toggleMenu={toggleMenu} /> */}
        {children}
        <SocialMenu />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
