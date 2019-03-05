import React from 'react'
import styled from 'styled-components'

const Sidebar = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

export default styled(Sidebar)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 20%;
  background: #fff;
  z-index: 2;
`