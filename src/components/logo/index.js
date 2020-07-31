import React from 'react'
import { colors } from '../../style/constants'

export const Logo = ({ inMenu, clickCallback }) => {
  return (
    <div onClick={clickCallback}>
      <svg viewBox="0 0 21.5 27.5">
        <path
          d="M21.4 18.6L12.2 23.1 12.2 0.1 12.1 0 0 6 0.1 8.9 0.1 9.1 9.1 4.7 9.1 27.6 9.1 27.8 21.5 21.7 21.5 18.7 21.4 18.6Z" 
          fill={!inMenu ? colors.yellow : colors.purple}
        />
      </svg>
    </div>
  )
}