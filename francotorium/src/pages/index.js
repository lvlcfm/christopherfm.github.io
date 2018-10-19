import React from "react"
import Franco from "../assets/francotoriumAnime.svg";
import indexStyles from "../styles/index.module.scss";

export default () => (
  <div>
  <div className={indexStyles.container__logo}>
      <img className={indexStyles.logo} src={Franco} alt="Francotorium Logo" />
  </div>
  <div className={indexStyles.container}>
      <div className={indexStyles.intro}>
        Hi I'm Franco!
      </div>
      <div className={indexStyles.intro__tag}>
        I’m a full stack developer and product designer
      </div>
      <div className={indexStyles.intro__desc__t}>
      I love imagining new realities and
      </div>
      <div className={indexStyles.intro__desc__b}>
      experiences for people and systems.
      </div>
     <div className={indexStyles.row}>
        <div className={indexStyles.category}>previously</div> 
        <div className={indexStyles.col}>
            <div>
                VMware, Open Source Program Office, OCTO - UI Developer Intern
            </div>
            <div>
                Glassdoor, Content Team, Software Engineer Intern 
            </div>
        </div>
     </div>
     <div className={indexStyles.row}>
        <div className={indexStyles.category}>looking for</div> 
        <div className={indexStyles.col}>
            <div>
                a summer 2019 software engineering internship
            </div>
            <div>
                a Winter 2018 software engineering internship 
            </div>
            <div>
                a freelance work or contract position right now 
            </div>

        </div>
     </div>
     <div className={indexStyles.row}>
        <div className={indexStyles.category}>say hello</div> <div>Smart Cities, Design, Coffee, Code - let’s chat!</div>
     </div>
  </div>
  </div>
)