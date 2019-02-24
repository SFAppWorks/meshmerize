import styled from 'styled-components'

const Base = styled.div`
  overflow: hidden;
`

export const OpacityTransform = styled(Base)`
  opacity: ${Math.floor(Math.random() * 100) / 100};
`

export const RotateTransform = styled(Base)`
  transform: ${props => `rotate(${props.deg}deg)`}
`