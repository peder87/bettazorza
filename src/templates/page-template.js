import React from 'react'
import Layout from '../components/layout'
import Home from '../pages/home'
import About from '../pages/about'
import Work from '../pages/work'
import Contatti from '../pages/contatti'

export default ({pageContext,...props}) => {
  const { navigationJson } = pageContext.pageData.data
  return (
    <Layout pageConf={navigationJson}>
      {getPageContent(props.location.pathname)}
    </Layout>
  )
}

const getPageContent = (location) => {
  switch(location) {
    case '/':
      return <Home />
    case '/about':
      return <About />
    case '/work':
      return <Work />
    case '/contatti':
      return <Contatti />
    default:
      return <div />
  }
}