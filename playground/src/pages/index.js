import React from 'react'
import Meshmerize from 'meshmerize'

import SEO from '../components/seo'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Meshmerize columns="5" rows="5">
      <svg>
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="#ccc"
        />
      </svg>
    </Meshmerize>
  </>
)

export default IndexPage
