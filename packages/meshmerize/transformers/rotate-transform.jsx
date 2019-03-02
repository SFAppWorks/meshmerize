import React from 'react'

import { BaseTransform } from './base-transform'

export const RotateTransform = props => {
  const transform = `rotate(${props.deg(props.index)}deg)`
  return (
    <BaseTransform {...props} style={{ transform }}>
      {props.children}
    </BaseTransform>
  )
}