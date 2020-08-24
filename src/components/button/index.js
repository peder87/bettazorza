import React from 'react'
import { Button } from './style'

export default props => {
  return <Button onClick={props.click}>
    {props.text}
  </Button>
}