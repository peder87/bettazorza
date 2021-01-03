import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "../style/global"
import { colors } from "../style/constants"
import CookieConsent from "react-cookie-consent"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle id="GLOBAL-STYLE" />
      {children}
      <CookieConsent
        location="top"
        buttonText="Accetto"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: colors.purple }}
        overlay={true}
        buttonStyle={{
          backgrond: colors.yellow,
          color: colors.purple,
          fontSize: "13px",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
