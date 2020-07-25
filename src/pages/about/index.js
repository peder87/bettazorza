import React from "react"
import { PageCopy } from "../../components/typography"
import Layout from "../../components/layout"
import AboutGrid from "./style"

export default () => {
  return (
    <AboutGrid>
      <div></div>
      <div>
        <PageCopy>
          <span className="bold">Ciao!&nbsp;</span> Sono Elisabetta Zorza e
          sono una
          <span className="bold">&nbsp;graphic designer.&nbsp;</span> Dal
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