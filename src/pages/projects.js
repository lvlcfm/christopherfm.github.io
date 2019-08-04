import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SmolFrancogments from '../assets/smolfrancogments.svg'

export default ({ data }) => {
  return (
    <Layout>
      <div
        css={css`
          margin-top: 50px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 170px;
            margin-bottom: 100px;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
            `}
          >
            <div
              css={css`
                font-size: 4em;
                font-family: Chivo-light;
                margin-bottom: 40px;
                display: flex;
                line-height: 1;
              `}
            >
              <span
                css={css`
                  font-size: 1em;
                  font-family: Chivo-italic;
                  margin-right: 3px;
                `}
              >
                “
              </span>
              These don't pay the bills
              <span
                css={css`
                  font-size: 1em;
                  font-family: Chivo-italic;
                `}
              >
                ”
              </span>
            </div>
            {/* <div
              css={css`
                font-size: 5em;
                font-family: Chivo-light;
                margin-bottom: 70px;
              `}
            >
              pay the
            </div>
            <div
              css={css`
                font-size: 5em;
                font-family: Chivo-light;
              `}
            >
              bills”-
            </div> */}
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
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
            <img
              css={css`
                width: 50px;
                margin-top: 10px;
              `}
              src={SmolFrancogments}
              alt="Francogments SVG Animated Logo"
            />
          </div>
        </div>
        <div
          css={css`
            height: 480px;
            width: 100%;
            background-color: #333333;
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 37px;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              flex: 0.5;
              font-family: Chivo-Light;
            `}
          >
            <div
              css={css`
                display: flex;
                font-family: Chivo-bold;
                margin-bottom: 10px;
              `}
            >
              Overview
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
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
                display: flex;
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
            margin-top: 100px;
          `}
        />
        <div
          css={css`
            height: 480px;
            width: 100%;
            background-color: #333333;
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 37px;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              flex: 0.5;
              font-family: Chivo-Light;
            `}
          >
            <div
              css={css`
                display: flex;
                font-family: Chivo-bold;
                margin-bottom: 10px;
              `}
            >
              Overview
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
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
                display: flex;
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
            margin-top: 100px;
          `}
        />
        <div
          css={css`
            height: 480px;
            width: 100%;
            background-color: #333333;
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 37px;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              flex: 0.5;
              font-family: Chivo-Light;
            `}
          >
            <div
              css={css`
                display: flex;
                font-family: Chivo-bold;
                margin-bottom: 10px;
              `}
            >
              Overview
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
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
                display: flex;
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
      </div>
    </Layout>
  )
}
