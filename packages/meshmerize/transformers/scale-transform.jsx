import React from 'react'
import PropTypes from 'prop-types'

import { BaseTransform } from './base-transform'

export const ScaleTransform = ({ index, size, children, ...otherProps }) => {
  const transform = `scale(${size(index)})`
  return (
    <BaseTransform {...otherProps} style={{ transform }}>
      {children}
    </BaseTransform>
  )
}