import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { css } from '@emotion/core'
import SmolFrancogments from '../assets/smolfrancogments.svg'
import ProfilePicture from '../assets/profile.jpg'

export default ({ data }) => (
  <Layout>
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 70px;
          margin-bottom: 25px;
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
            B for bubble sort
            <span
              css={css`
                font-size: 1em;
                font-family: Chivo-italic;
              `}
            >
              ”
            </span>
          </div>
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
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 40px;
        `}
      >
        <img
          css={css`
            max-width: 40%;
            min-width: 400px;
          `}
          src={ProfilePicture}
          alt="Christopher Franco - author and creator of FranCogMents"
        />
        <a
          css={css`
            text-decoration: none;
            color: inherit;
            background: linear-gradient(180deg, transparent 65%, #e8ccda 65%);
            display: inline;
            margin-left: 10px;
          `}
          href="https://essiexu.com/about"
        >
          photography - Essie Xu
        </a>
      </div>

      <div
        css={css`
          display: flex;
          max-width: 40%;
          min-width: 400px;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div
          css={css`
            font-family: Chivo-bold;
            font-size: 1.5em;
            align-self: flex-start;
            margin-bottom: 15px;
          `}
        >
          About Me
        </div>
        <div
          css={css`
            font-family: Chivo-regular;
            font-size: 1em;
            color: #333333;
            display: flex;
            flex-direction: column;
          `}
        >
          <p>
            My name is Christopher Franco. I am a Full Stack Engineer, creative
            technologist and I’m in the process of finishing school at UC
            Berkeley were I am completing coursework in Rhetoric and Computer
            Science.
          </p>

          <p>
            My passion lies in helping craft software solutions for people and
            their communities — whether it be tools, products or systems.
          </p>
          <p>
            My journey as a Software Engineer has had me running a fashion tech
            startup, to working at medium and big sized companies such as
            Glassdoor and vmware to leading engineering efforts at BlitzIQ a YC
            backed startup.
          </p>
          <p>
            Outside of work and the classroom, alongside my friends, I’ve
            dedicated my time to building software solutions pro-bono for
            non-profits through Blueprint, providing web design services
            pro-bono for the student community through Innovative Design and
            teaching computer science and providing mentorship in under
            resourced communities around the Bay Area through ANova.
          </p>
          <p>
            Besides work and school, I’m passionate about Smart Cities, EdTech,
            FOSS, Music, Design, Writing, Photography, Cycling, Productivity,
            Photography, Books, Writing, Economics, Dancing and gaming.
          </p>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-end;
          margin-top: 70px;
          margin-bottom: 70px;
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
            max-width: 40%;
            min-width: 320px;
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
            Now I’m looking for my next adventure this fall! Feel free to
            contact me through my information posted below.
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
          flex-direction: row;
          justify-content: center;
          align-items: flex-end;
          margin-top: 70px;
          margin-bottom: 30px;
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
            max-width: 43%;
            min-width: 320px;
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
            Thank you for your time and energy! Feel free to reach out to me in
            any of the following mediums!
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

      {/* Contact Information */}
      <div
        css={css`
          width: 33%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        `}
      >
        <div
          css={css`
            font-family: Chivo-bold;
          `}
        >
          Contact Info
        </div>
        <ul
          css={css`
            font-family: Chivo-light;
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
            <a
              css={css`
                text-decoration: none;
                color: inherit;
                background: linear-gradient(
                  180deg,
                  transparent 65%,
                  #ee7e80 65%
                );
                display: inline;
              `}
              href="mailto: francogments@gmail.com"
            >
              Email
            </a>
          </li>
          <li
            css={css`
              margin: 0;
              padding: 0;
            `}
          >
            <a
              css={css`
                text-decoration: none;
                color: inherit;
                background: linear-gradient(
                  180deg,
                  transparent 65%,
                  #48d7c4 65%
                );
                display: inline;
              `}
              href="https://github.com/FranCogMents"
            >
              Github
            </a>
          </li>
          <li
            css={css`
              margin: 0;
              padding: 0;
            `}
          >
            <a
              css={css`
                text-decoration: none;
                color: inherit;
                background: linear-gradient(
                  180deg,
                  transparent 65%,
                  #64c9f9 65%
                );
                display: inline;
              `}
              href="https://www.linkedin.com/in/francogments"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
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
