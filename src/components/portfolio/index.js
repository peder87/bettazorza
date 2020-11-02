import React, { useState } from "react"
import { GlobalContainer } from "../pageComponents/style"
import { PortfolioSection } from "./style"
import { StuffGrid } from "../../components/grid"
import { Thumbnail } from "../../components/image/thumbnail"
import { colors } from "../../style/constants"
import { Link } from "react-scroll"
import { orderWorks } from "../../utils/dataUtils"
import Fade from "react-reveal/Fade"
import AnimatedButton from "../button"
import AnimateHeight from "react-animate-height"

export const Portfolio = props => {
  const stateLimit = 3
  const [limit, setLimit] = useState(stateLimit)
  const works = orderWorks(props.src, props.list)
  const move = p => {
    console.log(p)
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
        {/* <AnimateHeight duration={1500} height="auto"> */}
        <StuffGrid>
          {works
            .filter((p, i) => i <= limit - 1)
            .map((project, index, a) => {
              const sec = ((index % stateLimit) + 1) * 500
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
                    titke={project.title}
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
          <Button animated click={loadMore} text="load more" />
        )}
      </GlobalContainer>
    </PortfolioSection>
  )
}
