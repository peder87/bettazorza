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
        Questo sito o gli strumenti terzi da questo utilizzati si avvalgono di
        cookie necessari al funzionamento
      </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
