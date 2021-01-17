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
        containerClasses="bzBannerContainer"
        buttonClasses="bzBannerButton"
        overlay={true}
        expires={150}
      >
        Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito.
        Chiudendo questo banner acconsenti all'uso dei cookie.
      </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
