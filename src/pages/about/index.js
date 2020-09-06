import React from "react"
import { PageCopy } from "../../components/typography"
import Layout from "../../components/layout"
import AboutGrid from "./style"
import { graphql, StaticQuery } from 'gatsby'
import SEO from '../../components/seo'

export default () => {
  const style = {
    color: 'white',
    bgcolor: 'cyan'
  }
  return (
    <Layout flex pageConf={style}>
    <SEO title="Chi sono" />
    <StaticQuery query={query} render={
      ({imagesJson}) => {
        return (
          <AboutGrid img={imagesJson.img}>
            <div></div>
            <div>
              <PageCopy>
                <span className="bold" role="img" aria-label="hello!">Ciao! 👋</span> Sono Elisabetta Zorza e
                sono una
                <span className="bold">&nbsp;graphic designer.&nbsp;</span> Dalx
                2010 lavoro nel campo della comunicazione, ma la grafica e il
                design sono da sempre la mia più grande passione.
              </PageCopy>
              <PageCopy>
                Ogni progetto che mi viene affidato, viene realizzato con
                <span className="bold">
                  &nbsp;metodo e professionalità,&nbsp;
                </span>
                grazie agli studi universitari, il costante aggiornamento e
                all’esperienza sviluppata in questi anni, che mi hanno insegnato a
                saper utilizzare le strategie corrette per ottenere i risultati
                migliori.
              </PageCopy>
            </div>
          </AboutGrid>
        )
      }
    } />
    </Layout>
  )
}

const query = graphql`
  query About {
    imagesJson(page: {eq: "about"}) {
      page,
      img
    }
  }
`