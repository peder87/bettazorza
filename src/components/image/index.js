import React from 'react'

export const Image = (props) => {
  return (<picture>
      <source srcSet={props.srcset.join(', ')}/>
      <img src={props.src} alt={props.alt} />
    </picture>
  )
}
