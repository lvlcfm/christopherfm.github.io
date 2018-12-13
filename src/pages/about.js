import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { css } from '@emotion/core'

export default ({ data }) => (
  <Layout>
    <div
      css={css`
        margin-top: 50px;
      `}
    >
      <h1>About</h1>
      <p>A place to share my projects, ideas and thoughts</p>
    </div>
  </Layout>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
