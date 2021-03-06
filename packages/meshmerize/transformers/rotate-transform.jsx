import React from 'react'
import PropTypes from 'prop-types'

import { BaseTransform } from './base-transform'

export const RotateTransform = ({ index, deg, children, ...otherProps }) => {
  const transform = `rotate(${deg(index)}deg)`
  return (
    <BaseTransform {...otherProps} style={{ transform }}>
      {children}
    </BaseTransform>
  )
}