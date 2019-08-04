import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div
        css={css`
          margin-top: 50px;
        `}
      >
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          These don't pay the bills
        </h1>
        <h4>
          My personal blog where I write about SMART Cities, Smart Urban
          Systems, Design, technical deep dives, case studies, my experiements
          and projects.
        </h4>
      </div>
    </Layout>
  )
}
