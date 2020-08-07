/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "../style/global"
import { StaticQuery, graphql } from 'gatsby'
import { media, colors } from "../style/constants"
import styled, { css } from "styled-components"
import { Footer } from "../components/footer"
import { GlobalContainer, PageContainer, FooterContainer, PageContainerFlex } from "./pageComponents/style"
import propTypes from 'prop-types'
// import { PageHeader } from "./pageHeader"
import { NavMenu } from '../components/newMenu'
// import Header from "./header"

const pt = {
  pageConf: PropTypes.shape({
    bgcolor: PropTypes.string,
    color: PropTypes.string
  })
}

const dp = {
  pageConf: {
    bgcolor: colors.purple,
    color: colors.yellow
  }
}

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
        <StaticQuery
          query={navigationQuery}
          render={data => <NavMenu isOpen={status} toggleMenu={toggleMenu} {...styleProps} navList={data.allNavigationJson.nodes}/>}
        />
        { !props.flex ? <PageContainer color={styleProps.color}>
          {children}
          <Footer />
        </PageContainer> : <PageContainerFlex ID="FLEXY" color={styleProps.color}>
            {children}
            <Footer />
        </PageContainerFlex>
        
      }
      </GlobalContainer>
    </>
  )
}

const navigationQuery = graphql`
  query QueryNav {
    allNavigationJson(filter: {inMenu: {eq: true}}) {
      nodes {
        id
        label
        path
      }
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  ...pt
}

Layout.defaultProps = dp

export default Layout