import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { css } from '@emotion/core'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
        `}
      >
        <div>
          <div
            css={css`
              font-family: Chivo-bold;
              font-size: 2em;
              line-height: 1em;
              margin-bottom: 15px;
            `}
          >
            {post.frontmatter.title}
          </div>
          <div
            css={css`
              font-family: Chivo-light;
              font-size: 1.2em;
              margin-bottom: 20px;
            `}
          >
            {post.frontmatter.date}
          </div>
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
        date(formatString: "DD MMMM, YYYY")
        category
      }
    }
  }
`
