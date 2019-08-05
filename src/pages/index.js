import React from 'react'
import { Link } from 'gatsby'
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
              line-height: 1em;
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
                line-height: 1em;
                margin-top: 57px;
              `}
            >
              I’m a Fullstack engineer,
            </div>
            <div
              css={css`
                font-size: 2.3em;
                font-family: Chivo-black;
                line-height: 1em;
                margin-top: 10px;
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
                line-height: 1em;
                margin-top: 53px;
              `}
            >
              and I’m always running for Mayor
            </div>
            <div
              css={css`
                font-size: 2.3em;
                font-family: Chivo-bold;
                line-height: 1em;
                margin-top: 10px;
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
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-end;
          font-size: 3em;
          margin-top: 50px;
          flex-flow: wrap;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            font-size: 3em;
          `}
        >
          <h1
            css={css`
              margin: 0;
              font-size: 1em;
              font-family: Chivo-bold;
            `}
          >
            WORK
          </h1>
          <h1
            css={css`
              margin: 0;
              font-size: 1em;
              font-family: Chivo-bold;
            `}
          >
            WORK
          </h1>
          <h1
            css={css`
              margin: 0;
              font-size: 1em;
              font-family: Chivo-bold;
            `}
          >
            WORK
          </h1>
        </div>
        <div
          css={css`
            width: 20px;
            background-color: #555;
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            font-size: 3em;
          `}
        >
          <h1
            css={css`
              margin: 0;
              font-size: 1em;
              font-family: Chivo-bold;
            `}
          >
            WORK
          </h1>
          <h1
            css={css`
              margin: 0;
              font-size: 1em;
              font-family: Chivo-bold;
            `}
          >
            WORK
          </h1>
          <h1
            css={css`
              margin: 0;
              font-size: 1em;
              font-family: Chivo-bold;
            `}
          >
            WORK
          </h1>
        </div>
      </div>
      <div
        css={css`
          height: 480px;
          width: 100%;
          margin-top: 100px;
          background-color: #333333;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          margin-top: 37px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            font-family: Chivo-Light;
          `}
        >
          <div
            css={css`
              font-family: Chivo-bold;
              margin-bottom: 10px;
            `}
          >
            Overview
          </div>
          <div
            css={css`
              width: 480px;
            `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.{' '}
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            font-family: Chivo-Light;
          `}
        >
          <div
            css={css`
              font-family: Chivo-bold;
              margin-bottom: 10px;
            `}
          >
            Responsibilities
          </div>
          <ul
            css={css`
              list-style-type: none;
              margin: 0;
              padding: 0;
            `}
          >
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              Fullstack Engineer
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              Front-end Engineer
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              Back-end Engineer
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              Software Architect
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              DevOps Engineer
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              AWS Solution Architect
            </li>
          </ul>
        </div>
      </div>
      <div
        css={css`
          height: 480px;
          width: 100%;
          margin-top: 100px;
          background-color: #333333;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          margin-top: 37px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            font-family: Chivo-Light;
          `}
        >
          <div
            css={css`
              font-family: Chivo-bold;
              margin-bottom: 10px;
            `}
          >
            Overview
          </div>
          <div
            css={css`
              width: 480px;
            `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.{' '}
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            font-family: Chivo-Light;
          `}
        >
          <div
            css={css`
              font-family: Chivo-bold;
              margin-bottom: 10px;
            `}
          >
            Responsibilities
          </div>
          <ul
            css={css`
              list-style-type: none;
              margin: 0;
              padding: 0;
            `}
          >
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              Fullstack Engineer
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              Front-end Engineer
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              Back-end Engineer
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              Software Architect
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              DevOps Engineer
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              AWS Solution Architect
            </li>
          </ul>
        </div>
      </div>
      <div
        css={css`
          height: 480px;
          width: 100%;
          margin-top: 100px;
          background-color: #333333;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          margin-top: 37px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            font-family: Chivo-Light;
          `}
        >
          <div
            css={css`
              font-family: Chivo-bold;
              margin-bottom: 10px;
            `}
          >
            Overview
          </div>
          <div
            css={css`
              width: 480px;
            `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.{' '}
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            font-family: Chivo-Light;
          `}
        >
          <div
            css={css`
              font-family: Chivo-bold;
              margin-bottom: 10px;
            `}
          >
            Responsibilities
          </div>
          <ul
            css={css`
              list-style-type: none;
              margin: 0;
              padding: 0;
            `}
          >
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              Fullstack Engineer
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              Front-end Engineer
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              Back-end Engineer
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              Software Architect
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              DevOps Engineer
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              AWS Solution Architect
            </li>
          </ul>
        </div>
      </div>

      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          margin-top: 100px;
        `}
      >
        <div>
          <Link
            to="/#home"
            style={{
              color: 'Black',
              textDecoration: 'none',
              margin: 0,
            }}
          >
            <img
              css={css`
                width: 50px;
                margin: 0;
                margin-left: 20px;
              `}
              src={SmolFrancogments}
              alt="Francogments SVG Animated Logo"
            />
            <div
              css={css`
                margin-right: 10px;
              `}
            >
              Back To Top
            </div>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
