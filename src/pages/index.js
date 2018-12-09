import React from "react";
import Franco from "../assets/francotoriumAnime.svg";
import indexStyles from "../styles/index.module.scss";
import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    height: 100%;
    width: 100%;
    background-color: #F2EFEA;
    margin-top: 30px;
    margin-bottom: 50px;
  }
`
export default () => (
  <div>
    <div className={indexStyles.container__logo}>
      <img className={indexStyles.logo} src={Franco} alt="Francotorium Logo" />
    </div>
    <div className={indexStyles.container__intro}>
      <div className={indexStyles.intro}>
        Hi I'm <span className={indexStyles.intro__name}>Franco!</span>
      </div>
      <div className={indexStyles.intro__tag}>
        I’m a full stack developer and product designer
      </div>
      <div className={indexStyles.intro__desc__t}>
      I'm a student at UC Berkeley with a background in Computer Science & Rhetoric
      </div>
      <div className={indexStyles.intro__desc__b}>
        I love imagining new realities and experiences for people and systems.
      </div>
    </div>

    {/* here */}
    <div className={indexStyles.container__infoPrev}>
      <div className={indexStyles.info__categoryPrev}>previously</div>
      <div className={indexStyles.info__itemsPrev}>
        <div>
          VMware, Open Source Program Office - UI Developer Intern
        </div>
        <div>Glassdoor, Content Team - Software Engineer Intern</div>
      </div>
    </div>
    {/* here */}
    <div className={indexStyles.container__infoLook}>
      <div className={indexStyles.info__categoryLook}>looking</div>
      <div className={indexStyles.info__itemsLook}>
        <div>for a summer 2019 software engineering internship</div>
        <div>for a Winter 2018 software engineering internship</div>
        <div>for a freelance project or contract position right now</div>
      </div>
    </div>
   {/* here */}
    <div className={indexStyles.container__infoHello}>
        <a href="mailto:himahmago@gmail.com" className={indexStyles.info__categoryHello}>say hello</a>
      <div className={indexStyles.info__itemsHello}>
        <div>Smart Cities, EdTech, AI, Design, Coffee, Code - let’s chat!</div>
      </div>
    </div>
  </div>
);
