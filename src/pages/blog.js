import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SmolFrancogments from '../assets/smolfrancogments.svg'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div
        css={css`
          margin-top: 100px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
          `}
        >
          <div
            css={css`
              font-size: 3.9em;
              font-family: Chivo-light;
              line-height: 1em;
            `}
          >
            Franco's Cognitive Experiments
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            margin-top: 100px;
            margin-bottom: 100px;
          `}
        >
          <img
            css={css`
              height: 57px;
            `}
            src={SmolFrancogments}
            alt="FranCogMents Logo"
          />

          <div
            css={css`
              font-size: 1em;
              font-family: Chivo-light;
              height: 57px;
              width: 600px;
            `}
          >
            <div
              css={css`
                display: flex;
              `}
            >
              <span
                css={css`
                  font-size: 2em;
                  font-family: Chivo-italic;
                  margin-left: 21px;
                  margin-right: 17px;
                `}
              >
                -
              </span>
              <span
                css={css`
                  font-size: 2em;
                  font-family: Chivo-italic;
                  margin-right: 4px;
                `}
              >
                “
              </span>
              <div
                css={css`
                  margin: 0;
                `}
              >
                This is my personal blog where I write about technical things,
                design things and not so very technical or design things.
                Usually about SMART Cities, Design, technical deep dives, case
                studies, tutorials, thought experiements and projects!!!!!
              </div>
              <span
                css={css`
                  font-size: 2em;
                  font-family: Chivo-italic;
                  align-self: flex-end;
                  margin: 0;
                `}
              >
                ”
              </span>
            </div>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
          `}
        >
          <div
            css={css`
              width: 600px;
              margin-top: 100px;
            `}
          >
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <Link
                  to={node.fields.slug}
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                >
                  <div
                    css={css`
                      font-family: Chivo-bold;
                      font-size: 1.8em;
                      margin-bottom: 5px;
                    `}
                  >
                    {node.frontmatter.title}{' '}
                  </div>
                  <div
                    css={css`
                      font-family: Chivo-light;
                      margin-bottom: 5px;
                    `}
                  >
                    {node.frontmatter.date}
                  </div>
                  <div
                    css={css`
                      font-family: Chivo-regular;
                      margin: 0;
                    `}
                  >
                    {node.excerpt}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "francogments" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
