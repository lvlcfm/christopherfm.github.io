import React from "react"
import '../styles/index.scss'
import Francotorium from '../images/francotoriumsvg_animated.svg'
import Github from '../images/github.svg'
import Twitter from '../images/twitter.svg'
import LinkedIn from '../images/linkedin.svg'
import Email from '../images/send.svg'

export default class IndexPage extends React.Component {
render() {
        return (
            <div className="container">
                <div className="col">
                  <div className="col__tagline">
                    <h1>Hello! I'm Franco!</h1>
                    <p>
                      I'm a developer and designer studying Rhetoric and Computer Science
                      at UC Berkeley.
                    </p>
                    <p>
                      I love imagining new realities for people and systems.
                    </p>
                    <div className="col__socialmedia">
                      <a href="http://www.github.com/francotorium" target="_blank">
                        <img className="" src={Github} />
                      </a>
                      <a href="http://www.twitter.com/francotorium" target="_blank">
                        <img className="" src={Twitter} />
                      </a>
                      <a href="http://www.linkedin.com/in/francotorium" target="_blank">
                        <img className="" src={LinkedIn} />
                      </a>
                      <a href="mailto:francotorium@gmail.com?Subject=Hello%20lets%20get%20coffee" target="_blank">
                        <img className="" src={Email} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="francotorium__col">
                  <img className="francotorium__svg" src={Francotorium} />
                </div>
            </div>
        );
    }
}
