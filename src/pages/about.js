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
            width: 650px;
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
          width: 650px;
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
            Music, Design, Writing, Photography, Cycling, Productivity,
            Photography, Books, Writing, Economics, Dancing and gaming.
          </p>
          <p>
            Now I’m looking for my next adventure this fall! Feel free to
            contact me through my information posted below
          </p>
        </div>
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
