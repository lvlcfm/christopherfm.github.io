import React from "react"
import '../styles/index.scss'
import Francotorium from '../images/francotoriumsvg_animated.svg'

export default class IndexPage extends React.Component {
render() {
        return (
            <div className="container">


                <h1 className="">FRANCO</h1>
<img className="large" src={Francotorium} />

                <h1 className="">FRANCO</h1>
<img src={Francotorium} />


            </div>
        );
    }
}
