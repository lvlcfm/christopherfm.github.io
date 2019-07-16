import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { css } from '@emotion/core'
import Francogments from '../assets/mahMago.svg'

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
      ]}
    />
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin-top: 40px;
      `}
    >
      <div
        css={css`
          display: flex;
          max-width: 420px;
          flex-direction: column;
          align-items: flex-end;
        `}
      >
        <img
          css={css`
            width: 300px;
          `}
          src={Francogments}
          alt="Francogments SVG Animated Logo"
        />
      </div>

      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
        `}
      >
        <div
          css={css`
            font-size: 42px;
            font-family: Chivo-bold;
            margin-top: 20px;
          `}
        >
          Hi I'm
          <span
            css={css`
              background: linear-gradient(180deg, transparent 65%, #5dceb3 65%);
              display: inline;
            `}
          >
            Franco!
          </span>
        </div>
        <div
          css={css`
            font-size: 24px;
            font-family: Chivo-bold;
            margin-top: 25px;
          `}
        >
          I’m a full stack developer and product designer
        </div>
        <div
          css={css`
            font-size: 18px;
            font-family: Chivo-bold;
            margin-top: 25px;
          `}
        >
          I'm a student at UC Berkeley with a background in Computer Science &
          Rhetoric
        </div>
        <div
          css={css`
            font-size: 18px;
            font-family: Chivo-regular;
            margin-top: 10px;
            margin-bottom: 50px;
          `}
        >
          I love imagining new realities and experiences for people and systems.
        </div>
      </div>

      <div
        css={css`
          display: flex;
          flex-direction: row;
          max-width: 675px;
          align-items: flex-start;
          justify-content: space-between;
          margin-top: 55px;
          margin-bottom: 50px;
        `}
      >
        <div
          css={css`
            font-size: 24px;
            font-family: Chivo-bold;
            background: linear-gradient(180deg, transparent 65%, #64c9f9 65%);
            display: inline;
          `}
        >
          previously
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex-basis: 75%;
            font-size: 18px;
            font-family: Chivo-regular;
          `}
        >
          <div
            css={css`
              margin-bottom: 10px;
              margin-left: 0px;
              margin-right: 0px;
            `}
          >
            VMware, Open Source Program Office - UI Developer Intern
          </div>
          <div>Glassdoor, Content Team - Software Engineer Intern</div>
        </div>
      </div>

      <div
        css={css`
          display: flex;
          flex-direction: row;
          max-width: 675px;
          align-items: flex-start;
          justify-content: space-between;
          margin-top: 55px;
          margin-bottom: 50px;
        `}
      >
        <div
          css={css`
            font-size: 24px;
            font-family: Chivo-bold;
            background: linear-gradient(180deg, transparent 65%, #ee7e80 65%);
            display: inline;
          `}
        >
          looking
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex-basis: 75%;
            font-size: 18px;
            font-family: Chivo-regular;
            div {
              margin-bottom: 10px;
            }
          `}
        >
          <div>for a Fall 2019 software engineering internship</div>
          <div>for a freelance project or contract position right now</div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          max-width: 675px;
          align-items: flex-start;
          justify-content: space-between;
          margin-top: 55px;
          margin-bottom: 50px;
          font-size: 16px;
          font-family: Chivo-regular;
        `}
      >
        <a
          href="mailto:francogments@gmail.com"
          css={css`
            font-size: 24px;
            font-family: Chivo-bold;
            background: linear-gradient(180deg, transparent 65%, #ff6e49 65%);
            display: inline;
            text-decoration: none;
            color: black;
          `}
        >
          say hello
        </a>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex-basis: 75%;
            font-size: 18px;
            font-family: Chivo-regular;
          `}
        >
          <div>
            Smart Cities, EdTech, AI, Design, Coffee, Code - let’s chat!
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
