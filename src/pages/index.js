import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { css } from '@emotion/core'
import Francogments from '../assets/francogments.svg'
import SmolFrancogments from '../assets/smolfrancogments.svg'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        'Francogments',
        'open source',
        'EdTech',
        'Smart Cities',
        'Design',
        'Smart Urban Systems',
        'Full Stack Developer',
      ]}
    />
    <div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          margin-top: 40px;
          justify-content: center;
          flex-wrap: wrap;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            height: 100%;
          `}
        >
          <img
            css={css`
              height: 415px;
            `}
            src={Francogments}
            alt="Francogments SVG Animated Logo"
          />
        </div>

        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 50px;
          `}
        >
          <div
            css={css`
              font-size: 2.3em;
              font-family: Chivo-black;
              margin-top: 66px;
            `}
          >
            Hello, my name is
            <span
              css={css`
                background: linear-gradient(
                  180deg,
                  transparent 65%,
                  #5dceb3 65%
                );
                display: inline;
                margin-left: 10px;
              `}
            >
              Christopher Franco —
            </span>
          </div>
          <div>
            <div
              css={css`
                font-size: 2.3em;
                font-family: Chivo-black;
                margin-top: 57px;
              `}
            >
              I’m a Fullstack engineer,
            </div>
            <div
              css={css`
                font-size: 2.3em;
                font-family: Chivo-black;
                margin-top: 25px;
              `}
            >
              creative technologist
            </div>
          </div>
          <div>
            <div
              css={css`
                font-size: 2.3em;
                font-family: Chivo-bold;
                margin-top: 53px;
              `}
            >
              and I’m always running for Mayor
            </div>
            <div
              css={css`
                font-size: 2.3em;
                font-family: Chivo-bold;
                margin-top: 25px;
              `}
            >
              in the city of I.O.T
            </div>
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-end;
          margin-top: 50px;
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
            Scroll down to check out my work
            <span
              css={css`
                font-size: 2em;
                font-family: Chivo-italic;
              `}
            >
              ”
            </span>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
