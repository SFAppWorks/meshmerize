import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    `repeat(${props.width || props.children.length}, 1fr)`};
`

const Meshmerize = props => {
  return (
    <StyledGrid {...props}>
      {Array.from(Array(props.width * props.height)).map((_, i) => {
        const currentChildIndex = i % (props.children.length - 1)
        const CurrentChild = props.children[currentChildIndex]
        return CurrentChild
      })}
    </StyledGrid>
  )
}

export default Meshmerize