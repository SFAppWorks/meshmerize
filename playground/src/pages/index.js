import React, { useState } from 'react'
import styled from 'styled-components'

import {
  Meshmerize,
  OpacityTransform,
  RotateTransform,
  ScaleTransform,
} from 'meshmerize'
import Sidebar from '../components/sidebar'

const Arrow = () => (
  <svg viewBox="0 0 492 492">
    <path d="M464.344 207.418l.768.168H135.888l103.496-103.724c5.068-5.064 7.848-11.924 7.848-19.124 0-7.2-2.78-14.012-7.848-19.088L223.28 49.538c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844L7.844 226.914C2.76 231.998-.02 238.77 0 245.974c-.02 7.244 2.76 14.02 7.844 19.096l177.412 177.412c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652L134.72 284.406h329.992c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"/>
  </svg>
)
const Circle = () => (
  <svg>
    <circle cx="50" cy="50" r="40" fill="#ccc" />
  </svg>
)

const DomLine = styled.div`
  width: 25px;
  height: 5px;
  border-radius: 5px;
  background: #f92;
`

const DomCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: #ccc;
`

const SampleChildren = {
  DomLine,
  DomCircle,
  Arrow,
}

const IndexPage = () => {
  const [columns, setColumns] = useState(8)
  const [rows, setRows] = useState(5)
  const [cellWidth, setCellWidth] = useState(80)
  const [cellHeight, setCellHeight] = useState(80)
  const [cellPadding, setCellPadding] = useState(10)
  const [selectedChild, setSelectedChild] = useState('DomLine')
  const SelectedChild = SampleChildren[selectedChild]

  return (
    <>
      <Sidebar>
        <p>
          <select
            name="selected-child"
            value={selectedChild}
            onChange={e => setSelectedChild(e.target.value)}>
            {Object.keys(SampleChildren).map(sampleChild =>
              <option key={sampleChild}>{sampleChild}</option>)}
          </select>
        </p>
        <p>
          <label htmlFor="columns">{columns} columns</label>
          <input
            name="columns"
            type="range"
            value={columns}
            min="5"
            max="20"
            onChange={(e) => setColumns(e.target.value)} />
        </p>
        <p>
          <label htmlFor="columns">{rows} rows</label>
          <input
            name="rows"
            type="range"
            value={rows}
            min="5"
            max="20"
            onChange={(e) => setRows(e.target.value)} />
        </p>
        <p>
          <label htmlFor="columns">Cell Width: {cellWidth}</label>
          <input
            name="cellWidth"
            type="range"
            value={cellWidth}
            min="20"
            max="200"
            step="10"
            onChange={(e) => setCellWidth(e.target.value)} />
        </p>
        <p>
          <label htmlFor="columns">Cell Height: {cellHeight}</label>
          <input
            name="cellHeight"
            type="range"
            value={cellHeight}
            min="20"
            max="200"
            step="10"
            onChange={(e) => setCellHeight(e.target.value)} />
        </p>
        <p>
          <label htmlFor="columns">Cell Padding: {cellPadding}</label>
          <input
            name="cellPadding"
            type="range"
            value={cellPadding}
            min="0"
            max="40"
            step="5"
            onChange={(e) => setCellPadding(e.target.value)} />
        </p>
      </Sidebar>

      <Meshmerize
        columns={columns}
        rows={rows}
        cellWidth={`${cellWidth}px`}
        cellHeight={`${cellHeight}px`}
        cellPadding={`${cellPadding}px`}>

        <RotateTransform deg={i => 25 * i}>
          <OpacityTransform>
            <SelectedChild />
          </OpacityTransform>
        </RotateTransform>

      </Meshmerize>

      {/* <Meshmerize
        columns="40"
        rows="10"
        cellWidth="30px"
        cellHeight="30px">

        <OpacityTransform>
          <ScaleTransform size={i => Math.random().toFixed(2)}>
            <DomCircle />
          </ScaleTransform>
        </OpacityTransform>

      </Meshmerize>

      <Meshmerize
        columns="8"
        rows="8"
        cellWidth="80px"
        cellHeight="80px"
        cellPadding="10px">

        <OpacityTransform align="bottom right">
          <DomLine />
        </OpacityTransform>

        <OpacityTransform align="bottom left">
          <DomLine />
        </OpacityTransform>

      </Meshmerize> */}
    </>
  )
}

export default IndexPage
