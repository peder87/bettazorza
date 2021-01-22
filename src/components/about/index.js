import React from "react"
import { AboutSection, BzAboutGrid, AboutFooter } from "./style"
import { colors } from "../../style/constants"
import { BzTitle, BzCopy } from "../typography"
import { BzButton } from "../bzButton"
import { SectionCenteredContent } from "../pageComponents/style"
import Img from "gatsby-image"

export const About = ({ img }) => {
  const click = () => {
    document.location.href = "mailto:bettazorza@gmail.com"
  }
  return (
    <AboutSection full id="about" bgcolor={colors.cyan} color={colors.white}>
      <SectionCenteredContent>
        <BzTitle color={colors.white}>About</BzTitle>
        <BzAboutGrid>
          <div className="imageWrapper">
            <Img fluid={img} alt="about_pic_betta" />
          </div>
          <div>
            <div className="copyWrapper">
              <BzCopy bold>
                Sono una freelance graphic designer e da oltre 10 anni lavoro
                nel mondo della comunicazione digitale.
              </BzCopy>
              <BzCopy italic>
                Mi occupo di comunicazione per piccole medie imprese. <br />I
                miei servizi spaziano dalla progettazione di immagine coordinata
                alla prototipazione di interfacce per prodotti digitali.
              </BzCopy>
              <BzCopy italic>
                Offro soluzioni creative su misura analizzando le esigenze dei
                miei clienti, attraverso un percorso condiviso passo passo.
              </BzCopy>
              <BzCopy italic>
                La comunicazione visiva è la mia passione, adoro tenermi
                aggiornata per quanto riguarda le ultime tencologie in campo
                grafico, quando non sto lavorando mi piace disegnare, leggere
                libri e guardare film e serie tv.
              </BzCopy>
            </div>
          </div>
        </BzAboutGrid>
        <AboutFooter>
          <BzButton
            text="bettazorza@gmail.com"
            first={colors.cyan}
            click={click}
          />
        </AboutFooter>
      </SectionCenteredContent>
    </AboutSection>
  )
}
