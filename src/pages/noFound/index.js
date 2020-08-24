import React from 'react'
import { navigate } from 'gatsby'
import { Container, CenteredChild, Payoff, Status, DontPanic } from './style'
import Button from '../../components/button'
export default () => {
  const goHome = () => {
    navigate('/')
  }
  return (
    <Container>
      <div>img</div>
      <CenteredChild> 
        <Status> 404 not found</Status>
        <DontPanic>Don't Panic!</DontPanic>
        <Payoff>hai dimenticato l'asciugamano</Payoff>
      </CenteredChild>
      <Button click={goHome} text="torna alla home" />
    </Container>
  )
}