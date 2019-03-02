import React from 'react'

import { BaseTransform } from './base-transform'

export const OpacityTransform = props => {
  const opacity = Math.floor(Math.random() * 100) / 100
  return (
    <BaseTransform {...props} style={{ opacity }}>
      {props.children}
    </BaseTransform>
  )
}