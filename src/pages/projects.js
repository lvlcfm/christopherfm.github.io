import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SmolFrancogments from '../assets/smolfrancogments.svg'
import CalBlueprint from '../assets/blueprint.svg'
import FSFmobile from '../assets/freesoftwarefoundation.svg'
import FSFlogo from '../assets/FSFlogo.svg'
import ANovaLabs from '../assets/anovalabs.svg'
import DiscordLogo from '../assets/discord.png'

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 170px;
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
        {/* START FSF PROJECT */}
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
            src={FSFmobile}
            alt="4 Mobile Devices showing different parts of the FSF Newsfeed portion of the FSF Mobile Application"
          />
          <div
            css={css`
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
            `}
          >
            <img
              css={css`
                margin-right: 30px;
              `}
              src={CalBlueprint}
              alt="CAL Blueprint SVG Logo"
            />
            <img
              css={css`
                width: 200px;
              `}
              src={FSFlogo}
              alt="Free Software Foundation SVG Logo"
            />
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
              <a
                css={css`
                  font-family: Chivo-italic;
                  font-size: 1em;
                  text-decoration: none;
                  color: inherit;
                `}
                href="https://www.fsf.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Free Software Foundation
              </a>
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
              FSF Mobile Application
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
                  margin-right: 10px;
                `}
                href="https://github.com/calblueprint/fsf-mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mobile Application
              </a>
              <a
                css={css`
                  font-family: Chivo-light;
                  text-decoration: none;
                  color: inherit;
                  background: linear-gradient(
                    180deg,
                    transparent 65%,
                    #ee7e80 65%
                  );
                  display: inline;
                `}
                href="https://github.com/calblueprint/fsf-backend/tree/master/rails"
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend Application
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
                I joined a team of Project Developers through Blueprint to
                create a FOSS Mobile Application for our NPO - the Free Software
                Foundation. We were tasked to focus on 3 primary goals - to keep
                users informed about digital rights issues, to simplify the
                process of donating to the cause and to encourage members to
                take action through petitions and actions.{' '}
              </p>
              <p>
                In the first portion of the project I took on the role as
                product designer where I crafted the UI/UX for the newsfeed,
                donation process and action alerts. In the second half of the
                project I would focus more on my role as a Full Stack developer
                where I would implement the newsfeed designs in React Native and
                implement a Rails backend that would serve as an API access
                point for serving up content from both FSF’s RSS news feed and
                from their GNU social account.
              </p>
              <p>
                Other project developers took charge of many integral parts of
                the project. These parts include architecting an API gateway to
                facilitate CAS authentication with CiviCRM, donations through
                Trustcommerce and ensuring our project could be built as a FOSS
                project and eventually eligible to be deployed to F-Droid. This
                project had many moving parts, I’m thankful for our NPO contacts
                for their time and energy on this project and I’m grateful to
                have been able to work alongside my talented, passionate and
                caring group of friends at Blueprint.
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
                    Product Designer
                  </li>
                </ul>
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
                    font-size: 1.2em;
                    margin-top: 15px;
                  `}
                >
                  Team
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
                      margin-top: 7px;
                      padding: 0;
                      font-family: Chivo-regular;
                    `}
                  >
                    Project Leaders
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Justin Mi
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Tony Yang
                  </li>
                </ul>
                <ul
                  css={css`
                    list-style-type: none;
                    margin: 0;
                    margin-top: 7px;
                    padding: 0;
                  `}
                >
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                      font-family: Chivo-regular;
                    `}
                  >
                    Project Developers
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Annie Ro
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Aivant Goyal
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Asli Akalin
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Christopher Franco
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Fang Shuo Deng
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Jason Bao
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Mukil Loganathan
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
                    React Native
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Ruby on Rails
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Go
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    CiviCRM
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    TrustCommerce
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    GNU Social
                  </li>
                </ul>
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
                    font-size: 1.2em;
                    margin-top: 15px;
                  `}
                >
                  Features
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
                    FSF Newsfeed
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    FSF GNU Social feed
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Donations
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Action Alerts
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Admin Dashboard
                  </li>
                </ul>
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
                    font-size: 1.2em;
                    margin-top: 15px;
                  `}
                >
                  Special Thanks
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
                    Vanessa Ng
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Grant Kalasky
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Pamela Hu
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Rachel He
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Free Software Foundation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* END FSF PROJECT */}
        {/* START ANOVA PROJECT */}
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
            src={ANovaLabs}
            alt="Mockup of ANova Labs, the mockup contains a log-in screen for a username and password -- fake credentials are used for the login screen. mentor@email.com as the email and all stars as the password "
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
              <a
                css={css`
                  font-family: Chivo-italic;
                  font-size: 1em;
                  text-decoration: none;
                  color: inherit;
                `}
                href="https://www.berkeleyanova.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ANova
              </a>
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
              ANova Labs
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
                    #48d7c5 65%
                  );
                  display: inline;
                  margin-right: 10px;
                `}
                href="https://github.com/ANovaBerkeley/anovalabs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web Application
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
                As the former Technology Officer for ANova, I started Anova
                Labs, an open source Ed Tech platform project, to support
                Anova’s mission of mentorship and improving computer science
                education in under resourced communities across the Bay Area.
                The project’s goal is to serve as a hub for our educational
                material for both mentors and students and to develop tools that
                can help us mentor and teach more effectively. The project is
                currently under development and has been spearheaded by other
                ANova Technology Officers - Julie Deng and Johnathan Zhou,
                alongside previous ANova Tech Committee members.
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
                    Project Leader
                  </li>
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
                    Product Designer
                  </li>
                </ul>
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
                    font-size: 1.2em;
                    margin-top: 15px;
                  `}
                >
                  Team
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
                      margin-top: 7px;
                      padding: 0;
                      font-family: Chivo-regular;
                    `}
                  >
                    Project Leaders
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Julie Deng
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Johnathan Zhou
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Christopher Franco
                  </li>
                </ul>
                <ul
                  css={css`
                    list-style-type: none;
                    margin: 0;
                    margin-top: 7px;
                    padding: 0;
                  `}
                >
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                      font-family: Chivo-regular;
                    `}
                  >
                    Project Developers
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Melody Wei
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Kevin Pham
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Christopher Cheung
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Jinsu Elhance
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
                    ReactJS
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    ExpressJS
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    KnexJS
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    PostgreSQL
                  </li>
                </ul>
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
                    font-size: 1.2em;
                    margin-top: 15px;
                  `}
                >
                  Features
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
                    Account Creation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* END ANOVA PROJECT */}
        {/* START PANTRYBOT PROJECT */}
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 150px;
          `}
        >
          <img css={css``} src={DiscordLogo} alt="Discord Logo" />
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
              Discord Bot
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
              PantryBot
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
                    #e8ccda 65%
                  );
                  display: inline;
                `}
                href="https://github.com/FranCogMents/pantryBot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord Bot Application
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
                I created a discord bot to help KitchenPantry, a guild from the
                mobile game Ragnarok Online: Eternal Love, manage its activities
                and tasks.
              </p>
              <p>
                I created the command parser from scratch, which would serve as
                the foundation for building future commands. I also provided
                documentation to allow future guildmates contribute and build
                their own commands.
              </p>
              <p>
                The first feature allowed guildmates to self-assign themselves
                roles on the discord server using $set and $unset commands.
              </p>
              <p>
                The second feature was an attendance and team query command
                where guildmates would take attendance through the $woe command
                that would post through the google sheets api. After the guild
                leader has created teams, guildmates would later be able to use
                the $woe myteam command that would show on discord a guildmate’s
                team name, their team object and list teammates.
              </p>
              <p>
                The third feature was the $et command which provided an
                interactive menu of MVP bosses per floor and per channel. Data
                for the menu was sourced from a website parsed using CheerioJS.
                Guildmates would use emoji reacts as a means to navigate between
                different options of the menu.
              </p>
              <p>
                The last feature was PantryPoints, the $pp command would allow
                guildmates to give shoutouts to other fellow guildmates by
                giving them PantryPoints which would be stored in MongoDB.
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
                    Product Designer
                  </li>
                </ul>
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
                    font-size: 1.2em;
                    margin-top: 15px;
                  `}
                >
                  Features
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
                    Command Parser
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    ET Lookup
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    WoE Attendance
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    PantryPoints
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
                    DiscordJS
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Node JS
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Cheerio JS
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    MongoDB
                  </li>
                  <li
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    Google Sheets API
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* END PANTRYBOT PROJECT */}
      </div>
    </Layout>
  )
}
