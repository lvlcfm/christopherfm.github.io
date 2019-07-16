import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { css } from '@emotion/core'

export default ({ data }) => {
  console.log(data)
  const post = data.markdownRemark
  console.log(post)
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 50px;
        `}
      >
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
