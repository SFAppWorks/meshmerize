import styled from 'styled-components'

export const BaseTransform = styled.div`
  overflow: hidden;
`

export const OpacityTransform = styled(BaseTransform)`
  opacity: ${Math.floor(Math.random() * 100) / 100};
`

export const RotateTransform = styled(BaseTransform)`
  transform: ${props => `rotate(${props.deg}deg)`}
`