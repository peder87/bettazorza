import React, { useState } from "react"
import { PortfolioSection, ButtonContainer } from "./style"
import { StuffGrid } from "../../components/grid"
import { BzThumbnail } from "../../components/image/BzThumbnail"
import { colors, mq } from "../../style/constants"
import { orderWorks } from "../../utils/dataUtils"
import Fade from "react-reveal/Fade"
import { BzButton } from "../bzButton"
import { BzTitle } from "../typography"
import { navigate } from "gatsby"
import { SectionCenteredContent } from "../pageComponents/style"
import { useMedia } from "../../utils/useMedia"

const mqList = Object.values(mq).map(item => `(max-width: ${item})`)
const values = [1, 1, 1, 3, 4, 5]

const getFormattedList = (arr, columns) => {
  const l = arr.length
  const mod = l % columns
  return arr.slice(0, l - mod)
}

export const Portfolio = props => {
  const columns = useMedia(mqList, values, 4)
  const isMobile = columns === 1
  const stateLimit = 3
  const animationDuration = 300
  const [limit, setLimit] = useState(stateLimit)
  const workList = isMobile ? props.list : getFormattedList(props.list, columns)
  const works = orderWorks(props.src, workList)

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
      <SectionCenteredContent>
        <BzTitle color={colors.purple}>Projects</BzTitle>
        <StuffGrid>
          {works
            .filter((p, i) => {
              if (!isMobile) return true
              return i <= limit - 1
            })
            .map((project, index, a) => {
              if (!isMobile) {
                return (
                  <BzThumbnail
                    key={project.id}
                    title={project.title}
                    tags={project.tags}
                    img={project.thumbnail}
                    path={project.url}
                    srcset={project.thumbset}
                    callback={move}
                  />
                )
              }
              const sec = ((index % stateLimit) + 1) * animationDuration
              return (
                <Fade
                  bottom={true}
                  duration={1000}
                  delay={sec}
                  disstance="30px"
                  key={project.id}
                >
                  <BzThumbnail
                    key={project.id}
                    title={project.title}
                    tags={project.tags}
                    img={project.thumbnail}
                    path={project.url}
                    srcset={project.thumbset}
                    callback={move}
                  />
                </Fade>
              )
            })}
        </StuffGrid>
        <ButtonContainer>
          {limit <= works.length && isMobile && (
            <BzButton
              click={loadMore}
              text="load more"
              first={colors.white}
              second={colors.purple}
            />
          )}
        </ButtonContainer>
      </SectionCenteredContent>
    </PortfolioSection>
  )
}
