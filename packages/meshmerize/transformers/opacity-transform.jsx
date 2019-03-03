import React from 'react'
import PropTypes from 'prop-types'

import { BaseTransform } from './base-transform'

export const OpacityTransform = ({ index, children, ...otherProps }) => {
  const opacity = Math.floor(Math.random() * 100) / 100
  return (
    <BaseTransform {...otherProps} style={{ opacity }}>
      {children}
    </BaseTransform>
  )
}