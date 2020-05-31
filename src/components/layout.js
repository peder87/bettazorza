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
import styled, { css } from "styled-components"
// import { Footer } from "../components/footer"
import { pageConfig } from "../pages/pageConfig"
import { GlobalContainer, FooterContainer } from "./pageComponents/style"
// import { PageHeader } from "./pageHeader"
import { NavMenu } from '../components/newMenu'
// import Header from "./header"


const Layout = ({ children }) => {
  const [status, setStatus] = useState(false)
  const page = pageConfig(window.location.pathname)
  const toggleMenu = () => {
    setStatus(!status)
  }

  return (
    <>
      <GlobalStyle {...page} isOpen={status} id="GLOBAL-STYLE" />
      <GlobalContainer {...page} id="GLOBAL-CONTAINER" isOpen={status} >
        <NavMenu isOpen={status} toggleMenu={toggleMenu} {...page} />
        {children}
        {/* <FooterContainer>
          <Footer {...page} />
        </FooterContainer> */}
      </GlobalContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout