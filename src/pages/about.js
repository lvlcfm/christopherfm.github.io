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
          target="_blank"
          rel="noopener noreferrer"
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
      {/* Work*/}
      <div
        css={css`
          width: 50%;
          min-width: 400px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
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
            Work
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
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                BlitzIQ (YC W19)
              </div>
              <div
                css={css`
                  font-family: Chivo-italic;
                `}
              >
                Full-Stack Engineer
              </div>
              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                December 2018 - June 2019
              </div>
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                vmware, Open Source Program Office
              </div>
              <div
                css={css`
                  font-family: Chivo-italic;
                `}
              >
                UI Developer intern
              </div>
              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                June 2018 - Sept 2018
              </div>
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                Glassdoor
              </div>
              <div
                css={css`
                  font-family: Chivo-italic;
                `}
              >
                Software Engineer Intern
              </div>
              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                June 2017 - August 2017
              </div>
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                Reify
              </div>
              <div
                css={css`
                  font-family: Chivo-italic;
                `}
              >
                Chief Design Officer
              </div>
              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                June 2016 - July 2016
              </div>
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                Hemmingway
              </div>
              <div
                css={css`
                  font-family: Chivo-italic;
                `}
              >
                Front-End Engineer
              </div>
              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                March 2016 - June 2016
              </div>
            </li>
          </ul>
        </div>

        {/* Pro-bono Free or Open Source Software*/}
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
            Fun
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
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                Blueprint, Technology for NonProfits
              </div>
              <div
                css={css`
                  font-family: Chivo-italic;
                `}
              >
                Project Developer
              </div>
              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                January 2018 - Present
              </div>
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                Free Software Foundation
              </div>
              <div
                css={css`
                  font-family: Chivo-italic;
                `}
              >
                Project Developer
              </div>
              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                September 2018 - May 2019
              </div>
            </li>

            <li
              css={css`
                margin: 0;
                padding: 0;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                ANova
              </div>
              <div
                css={css`
                  font-family: Chivo-italic;
                `}
              >
                Technology Officer
              </div>
              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                January 2018 - January 2019
              </div>
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                Innovative Design
              </div>
              <div
                css={css`
                  font-family: Chivo-italic;
                `}
              >
                Project Developer
              </div>
              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                September 2017 - December 2018
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div
        css={css`
          width: 50%;
          min-width: 400px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
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
            Projects
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
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                <a
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                  href="https://github.com/ANovaBerkeley/anovalabs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ANova Labs
                </a>
              </div>

              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                ANova
              </div>
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                <a
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                  href="https://github.com/ANovaBerkeley/checkout-system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hackathon Management System
                </a>
              </div>
              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                ANova
              </div>
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                <a
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                  href="https://github.com/ANovaBerkeley/ANovaBerkeley.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ANova Hacks Website
                </a>
              </div>
              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                ANova
              </div>
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                <a
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                  href="https://github.com/calblueprint/fsf-backend/tree/master/rails"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FSF Mobile Application
                </a>
              </div>
              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                Free Software Foundation
              </div>
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                <a
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                  href="https://github.com/KitchenPantryRO/pantryBot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PantryBot
                </a>
              </div>
              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                Discord Bot
              </div>
            </li>
            <li
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-regular;
                `}
              >
                <a
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                  href="https://github.com/rails-decal/Rails-Decal-Portal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rails Decal Portal
                </a>
              </div>
              <div
                css={css`
                  font-family: Chivo-light;
                `}
              >
                Blueprint
              </div>
            </li>
          </ul>
        </div>

        {/* Recognition */}
        <div
          css={css`
            display: flex;
            flex-direction: column;
            font-family: Chivo-Light;
          `}
        >
          <div>
            <div
              css={css`
                font-family: Chivo-bold;
                margin-bottom: 10px;
              `}
            >
              Recognition
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
                  margin-bottom: 10px;
                `}
              >
                <div
                  css={css`
                    font-family: Chivo-regular;
                  `}
                >
                  Borathon, vmware Internal Hackathon
                </div>
                <div>2nd Place</div>
              </li>
              <li
                css={css`
                  margin: 0;
                  padding: 0;
                  margin-bottom: 10px;
                `}
              >
                <div
                  css={css`
                    font-family: Chivo-regular;
                  `}
                >
                  Bit Bay Hackathon,
                </div>
                <div>AWS Winner</div>
              </li>
            </ul>
          </div>
          <div>
            <div
              css={css`
                font-family: Chivo-bold;
                margin-bottom: 10px;
              `}
            >
              Volunteering
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
                  margin-bottom: 10px;
                `}
              >
                <div
                  css={css`
                    font-family: Chivo-regular;
                  `}
                >
                  <a
                    css={css`
                      text-decoration: none;
                      color: inherit;
                    `}
                    href="http://anovahacks.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ANova Hacks
                  </a>
                </div>
                <div>ANova</div>
              </li>
            </ul>
          </div>
          <div>
            <div
              css={css`
                font-family: Chivo-bold;
                margin-bottom: 10px;
              `}
            >
              Talks | Workshops
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
                  margin-bottom: 10px;
                `}
              >
                <div>Libre Planet Talk</div>
              </li>
              <li
                css={css`
                  margin: 0;
                  padding: 0;
                  margin-bottom: 10px;
                `}
              >
                <div>Responsive Web Design HEX Workshop</div>
              </li>
            </ul>
          </div>
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
          width: 700px;
          margin-top: 50px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        `}
      >
        <ul
          css={css`
            width: 500px;
            font-family: Chivo-light;
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
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
              rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
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
