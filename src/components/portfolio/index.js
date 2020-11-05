import React, { useState } from "react"
import { GlobalContainer } from "../pageComponents/style"
import { PortfolioSection } from "./style"
import { StuffGrid } from "../../components/grid"
import { Thumbnail } from "../../components/image/thumbnail"
import { colors } from "../../style/constants"
import { Link } from "react-scroll"
import { orderWorks } from "../../utils/dataUtils"
import Fade from "react-reveal/Fade"
import Button from "../button"
import { BzButton } from "../bzButton"
import { navigate } from "gatsby"

export const Portfolio = props => {
  const stateLimit = 4
  const animationDuration = 300
  const [limit, setLimit] = useState(stateLimit)
  const works = orderWorks(props.src, props.list)
  const move = p => {
    navigate(p)
  }

  const loadMore = () => {
    setLimit(state => state + stateLimit)
  }

  return (
    <PortfolioSection
      id="portfolio"
      bgcolor={colors.white}
      color={colors.darkGray}
    >
      <GlobalContainer>
        <StuffGrid>
          {works
            .filter((p, i) => i <= limit - 1)
            .map((project, index, a) => {
              const sec = ((index % stateLimit) + 1) * animationDuration
              return (
                <Fade
                  bottom={true}
                  duration={1000}
                  delay={sec}
                  disstance="30px"
                  key={project.id}
                >
                  <Thumbnail
                    key={project.id}
                    title={project.title}
                    img={project.thumbnail}
                    path={project.url}
                    srcset={project.thumbset}
                    callback={move}
                  />
                </Fade>
              )
            })}
        </StuffGrid>
        {/* </AnimateHeight> */}
        {limit <= works.length && (
          <BzButton click={loadMore} text="load more" />
        )}
      </GlobalContainer>
    </PortfolioSection>
  )
}
