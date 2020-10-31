import React from "react"
import { GlobalContainer } from "../pageComponents/style"
import { AboutSection, AboutGrid } from "./style"
import { colors } from "../../style/constants"
import { PageCopy } from "../typography"
import Fade from "react-reveal/Fade"

export const About = ({ data }) => {
  const isDesktop = window.innerWidth > 769
  return (
    <AboutSection id="about" bgcolor={colors.cyan} color={colors.white}>
      <GlobalContainer>
        <AboutGrid img={data.img}>
          <Fade
            left={isDesktop}
            bottom={!isDesktop}
            duration={isDesktop ? 500 : 1500}
            delay={500}
            disstance="30px"
          >
            <div />
          </Fade>
          <Fade
            left={isDesktop}
            bottom={!isDesktop}
            duration={isDesktop ? 500 : 1000}
            delay={1000}
            disstance="30px"
          >
            <div>
              <PageCopy>
                <span className="bold" role="img" aria-label="hello!">
                  Ciao! 👋
                </span>{" "}
                Sono Elisabetta Zorza e sono una
                <span className="bold">&nbsp;graphic designer.&nbsp;</span>
                Dal 2010 lavoro nel campo della comunicazione, in particolare mi
                occupudo di graphic design e progettazione creativa.
              </PageCopy>
              <PageCopy>
                Ogni progetto che mi viene affidato, viene realizzato con
                <span className="bold">
                  &nbsp;metodo e professionalità,&nbsp;
                </span>
                grazie agli studi universitari, il costante aggiornamento e
                all’esperienza sviluppata in questi anni, che mi hanno insegnato
                a saper utilizzare le strategie corrette per ottenere i
                risultati migliori.
              </PageCopy>
            </div>
          </Fade>
        </AboutGrid>
      </GlobalContainer>
    </AboutSection>
  )
}
