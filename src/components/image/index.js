import React from 'react'

export const Image = (props) => {
  const [isLoaded, setLoaded ] = React.useState(false)
  return (<picture>
      { !isLoaded && <p>loading</p> }
      <source srcSet={props.srcset.join(', ')}/>
      <img onLoad={() => setLoaded(true)} src={props.src} alt={props.alt} />
    </picture>
  )
}
