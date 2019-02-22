import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    `repeat(${props.columns || props.children.length}, 1fr)`};
`

const Meshmerize = props => {
  return (
    <StyledGrid {...props}>
      {Array.from(Array(props.rows * props.columns)).map(() => {
        const OpacityTransform = styled.div`
          opacity: ${Math.floor(Math.random() * 100) / 100};
        `
        return <OpacityTransform>{props.children}</OpacityTransform>
      })}
    </StyledGrid>
  )
}

export default Meshmerize
