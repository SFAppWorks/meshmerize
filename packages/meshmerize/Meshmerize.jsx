import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Meshmerize = props => {
  const allCells = Array.from(Array(props.columns * props.rows))
  const childrenCount = React.Children.count(props.children)

  return (
    <div className={props.className}>
      {allCells.map((_, index) => {
        const extraProps = {
          index,
          key: `item${index}`
        }
        if (childrenCount === 1) {
          return React.cloneElement(
            props.children,
            extraProps
          )
        }
        const currentChildIndex = index % childrenCount
        const CurrentChild = props.children[currentChildIndex]
        return React.cloneElement(
          CurrentChild,
          extraProps
        )
      })}
    </div>
  )
}

const StyledMeshmerize = styled(Meshmerize)`
  display: grid;
  grid-template-columns: ${props =>
    `repeat(${props.columns || props.children.length}, ${props.cellWidth || props.cellHeight || '1fr'})`};
  > * {
    width: ${props => props.cellWidth || props.cellHeight};
    height: ${props => props.cellHeight || props.cellWidth};
    padding: ${props => props.cellPadding};
    display: flex;
    box-sizing: border-box;
  }
`

Meshmerize.propTypes = {
  columns: PropTypes.string,
  rows: PropTypes.string,
  cellWidth: PropTypes.string,
  cellHeight: PropTypes.string,
  cellPadding: PropTypes.string,
}

export default StyledMeshmerize