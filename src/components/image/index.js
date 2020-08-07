import React from 'react'

export const Image = (props) => {
  return (<picture>
      <source srcSet={props.srcset.join(', ')}/>
      <img onLoad={() => setLoaded(true)} src={props.src} alt={props.alt} />
    </picture>
  )
}
