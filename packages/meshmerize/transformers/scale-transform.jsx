import React from 'react'
import PropTypes from 'prop-types'

import { BaseTransform } from './base-transform'

export const ScaleTransform = props => {
  const transform = `scale(${props.size(props.index)})`
  return (
    <BaseTransform {...props} style={{ transform }}>
      {props.children}
    </BaseTransform>
  )
}

ScaleTransform.propTypes = {
  size: PropTypes.func.isRequired
}