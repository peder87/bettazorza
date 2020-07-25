/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "../style/global"
import { media, colors } from "../style/constants"
import styled, { css } from "styled-components"
// import { Footer } from "../components/footer"
import { GlobalContainer, PageContainer, FooterContainer } from "./pageComponents/style"
// import { PageHeader } from "./pageHeader"
import { NavMenu } from '../components/newMenu'
// import Header from "./header"


const Layout = ({ children, ...props }) => {
  const [status, setStatus] = useState(false)
  const styleProps = {
    bgcolor: colors[props.pageConf.bgcolor],
    color: colors[props.pageConf.color]
  }
  const toggleMenu = () => {
    setStatus(!status)
  }
  return (
    <>
      <GlobalStyle  {...styleProps} isOpen={status} id="GLOBAL-STYLE" />
      <GlobalContainer {...styleProps} id="GLOBAL-CONTAINER" isOpen={status} >
        <NavMenu isOpen={status} toggleMenu={toggleMenu} {...styleProps} />
        <PageContainer color={styleProps.color}>
          {children}
        </PageContainer>
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