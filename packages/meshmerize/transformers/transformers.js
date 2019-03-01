import React from 'react'
import styled from 'styled-components'

const verticalMap = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
}

const horizontalMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

const alignHorizontal = ({align = 'center center'}) => {
  const [_, horizontal] = align.split(' ')
  return horizontalMap[horizontal]
}

const alignVertical = ({align = 'center center'}) => {
  const [vertical, _] = align.split(' ')
  return verticalMap[vertical]
}

export const BaseTransform = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: ${alignHorizontal};
  align-items: ${alignVertical};
`

export const RotateTransform = props => {
  const transform = `rotate(${props.deg(props.index)}deg)`
  return (
    <BaseTransform {...props} style={{ transform }}>
      {props.children}
    </BaseTransform>
  )
}

export const ScaleTransform = props => {
  const transform = `scale(${props.size(props.index)})`
  return (
    <BaseTransform {...props} style={{ transform }}>
      {props.children}
    </BaseTransform>
  )
}

export const OpacityTransform = props => {
  const opacity = Math.floor(Math.random() * 100) / 100
  return (
    <BaseTransform {...props} style={{ opacity }}>
      {props.children}
    </BaseTransform>
  )
}
