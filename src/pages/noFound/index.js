import React from "react"
import { navigate } from "gatsby"
import {
  Container,
  CenteredChild,
  Payoff,
  Status,
  DontPanic,
  NoFoundPage,
} from "./style"
import { BzButton } from "../../components/bzButton"
import { Bottom } from "../../components/bottom"

export default props => {
  const goHome = () => {
    navigate("/")
  }
  return (
    <NoFoundPage>
      <Container>
        <CenteredChild>
          <img src={props.img} alt="noFound" />
          <Status> 404 not found</Status>
          <DontPanic>Don't Panic!</DontPanic>
          <Payoff>hai solo dimenticato l'asciugamano...</Payoff>
          <BzButton click={goHome} text="torna alla home" />
        </CenteredChild>
      </Container>
      <Bottom />
    </NoFoundPage>
  )
}
