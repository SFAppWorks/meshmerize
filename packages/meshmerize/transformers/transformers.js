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

export const OpacityTransform = styled(BaseTransform)`
  opacity: ${Math.floor(Math.random() * 100) / 100};
`

export const RotateTransform = styled(BaseTransform)`
  transform: ${props => `rotate(${props.deg}deg)`}
`