import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { css } from '@emotion/core'
import Francogments from '../assets/francogments.svg'
import SmolFrancogments from '../assets/smolfrancogments.svg'
import BlitzIQ from '../assets/blitziq.svg'
import VMwareLogo from '../assets/vmware.svg'
import OSPOLogo from '../assets/OSPO.png'
import GlassdoorLogo from '../assets/glassdoor.svg'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Christopher Franco"
      keywords={[
        'Francogments',
        'open source',
        'free software',
        'EdTech',
        'Smart Cities',
        'Design',
        'Smart Urban Systems',
        'Full Stack Developer',
        'Full Stack Engineer',
        'Internet of Things',
        'I.O.T',
        'Free and Open Source Software',
        'Open Source Software',
        'FOSS',
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
      {/* START BLITZIQ PROJECT */}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 150px;
        `}
      >
        <img
          css={css``}
          src={BlitzIQ}
          alt="
        BlitzIQ Application on a Desktop Computer"
        />
        <div
          css={css`
            font-family: Chivo-light;
            margin: 0;
            margin-bottom: 20px;
          `}
        >
          illustration on BlitzIQ
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              font-family: Chivo-italic;
              font-size: 1em;
            `}
          >
            BlitzIQ
          </div>
          <div
            css={css`
              font-family: Chivo-bold;
              font-size: 2.5em;
              line-height: 0.9em;
              margin-top: 10px;
              margin-bottom: 3px;
            `}
          >
            BlitzIQ Application
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
            `}
          >
            <a
              css={css`
                font-family: Chivo-light;
                text-decoration: none;
                color: inherit;
                background: linear-gradient(
                  180deg,
                  transparent 65%,
                  #64c9fa 65%
                );
                display: inline;
              `}
              href="https://www.blitziq.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BlitzIQ Website
            </a>
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: 10px;
        `}
      >
        <div
          css={css`
            max-width: 500px;
            display: flex;
            flex-direction: column;
            font-family: Chivo-Light;
          `}
        >
          <div
            css={css`
              font-family: Chivo-bold;
              font-size: 1.2em;
              margin-bottom: 10px;
            `}
          >
            Overview
          </div>
          <div
            css={css`
              font-family: Chivo-regular;
              color: #333333;
            `}
          >
            <p>
              BlitzIQ is a collaborative note taking application that helps
              customer focused teams be more productive. They are a YC (W19)
              backed company, where I had the opportunity to join their team as
              a Full Stack Engineer where I got to help lead Engineering
              efforts, from System Design, DevOps and Product Engineering. Very
              grateful for this opportunity and the team that I got to work with
              - they allowed me to experience first hand what it means to play
              such a large engineering role during such a critical time in a
              startup.
            </p>
          </div>
        </div>
        {/* responsibilities column starts */}
        <div
          css={css`
            display: flex;
            flex-direction: row;
          `}
        >
          <div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                font-family: Chivo-Light;
                margin-right: 50px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-bold;
                  font-size: 1.2em;
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
                  Full Stack Engineer
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
                  AWS Solutions Architect
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* END BLITZIQ PROJECT */}

      {/* START VMWARE PROJECT */}
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          margin-top: 150px;
        `}
      >
        <img css={css``} src={VMwareLogo} alt="vmware logo" />
        <img
          css={css``}
          src={OSPOLogo}
          alt="vmware Open Source Program Office logo"
        />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              font-family: Chivo-italic;
              font-size: 1em;
            `}
          >
            vmware open source program office
          </div>
          <div
            css={css`
              font-family: Chivo-bold;
              font-size: 2.5em;
              line-height: 0.9em;
              margin-top: 10px;
              margin-bottom: 3px;
            `}
          >
            Open Source Tracking Tool
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
            `}
          >
            <a
              css={css`
                font-family: Chivo-light;
                text-decoration: none;
                color: inherit;
                background: linear-gradient(
                  180deg,
                  transparent 65%,
                  #64c9fa 65%
                );
                display: inline;
              `}
              href="https://www.vmware.com/opensource.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              VMware Open Source
            </a>
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: 10px;
        `}
      >
        <div
          css={css`
            max-width: 500px;
            display: flex;
            flex-direction: column;
            font-family: Chivo-Light;
          `}
        >
          <div
            css={css`
              font-family: Chivo-bold;
              font-size: 1.2em;
              margin-bottom: 10px;
            `}
          >
            Overview
          </div>
          <div
            css={css`
              font-family: Chivo-regular;
              color: #333333;
            `}
          >
            <p>
              I joined Vmware’s open source programming office as a UI developer
              intern in the summer of 2018.
            </p>
            <p>
              My project for the summer was to build a tool to track the use of
              3rd party open source projects in Vmware products. I was able to
              build an ETL pipeline to aggregate data from different API access
              points, transform it into meaningful data so that a dashboard
              could later be built on top of that data.
            </p>
            <p>
              I was blessed to have had such a great mentor, manager and team
              who I learned so much about not only open source software but also
              about life itself.
            </p>
          </div>
        </div>
        {/* responsibilities column starts */}
        <div
          css={css`
            display: flex;
            flex-direction: row;
          `}
        >
          <div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                font-family: Chivo-Light;
                margin-right: 50px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-bold;
                  font-size: 1.2em;
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
                  Full Stack Engineer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* END BLITZIQ PROJECT */}

      {/* START VMWARE PROJECT */}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 150px;
        `}
      >
        <img css={css``} src={GlassdoorLogo} alt="Glassdoor Logo" />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              font-family: Chivo-italic;
              font-size: 1em;
            `}
          >
            Glassdoor
          </div>
          <div
            css={css`
              font-family: Chivo-bold;
              font-size: 2.5em;
              line-height: 0.9em;
              margin-top: 10px;
              margin-bottom: 3px;
            `}
          >
            Content Flagging Experience
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
            `}
          >
            <a
              css={css`
                font-family: Chivo-light;
                text-decoration: none;
                color: inherit;
                background: linear-gradient(
                  180deg,
                  transparent 65%,
                  #64c9fa 65%
                );
                display: inline;
              `}
              href="https://www.glassdoor.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Glassdoor Website
            </a>
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: 10px;
        `}
      >
        <div
          css={css`
            max-width: 500px;
            display: flex;
            flex-direction: column;
            font-family: Chivo-Light;
          `}
        >
          <div
            css={css`
              font-family: Chivo-bold;
              font-size: 1.2em;
              margin-bottom: 10px;
            `}
          >
            Overview
          </div>
          <div
            css={css`
              font-family: Chivo-regular;
              color: #333333;
            `}
          >
            <p>
              I joined Glassdoor’s Product Engineering team as a Software
              Engineer Intern in the summer of 2017.
            </p>
            <p>
              My project focused on flagging content. This meant helping the
              moderation team both on the consumer facing side of flagging
              content, by implementing a redesigned flagging experience for
              users, that allows them to easily appy the right flagging label to
              a piece of content.
            </p>
            <p>
              On the intake side of tickets generated from flagged content, by
              implementing the feature of allowing the moderation team to sort
              their flagged content tickets by date, helping them reach their
              72hr responsive time window.
            </p>
            <p>
              My time at Glassdoor gave me a foundational understanding on what
              it means to be a Software Engineer and to have an awesome manager
              and supportive mentors all around.
            </p>
          </div>
        </div>
        {/* responsibilities column starts */}
        <div
          css={css`
            display: flex;
            flex-direction: row;
          `}
        >
          <div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                font-family: Chivo-Light;
                margin-right: 50px;
              `}
            >
              <div
                css={css`
                  font-family: Chivo-bold;
                  font-size: 1.2em;
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
                  Full Stack Engineer
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
              </ul>
            </div>
          </div>

          <div>
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
                  font-size: 1.2em;
                `}
              >
                Technology
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
                  React JS
                </li>
                <li
                  css={css`
                    margin: 0;
                    padding: 0;
                  `}
                >
                  Hibernate
                </li>
                <li
                  css={css`
                    margin: 0;
                    padding: 0;
                  `}
                >
                  Tomcat
                </li>
                <li
                  css={css`
                    margin: 0;
                    padding: 0;
                  `}
                >
                  Struts 2
                </li>
                <li
                  css={css`
                    margin: 0;
                    padding: 0;
                  `}
                >
                  JSP
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* END VMWARE PROJECT */}
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
