import React from "react"
import "./Header.css";
import { Link} from "react-router-dom";
export default class Header extends React.Component<any, any>{
    render() {
        return (<div className="header-container flex-container flex-container-vertical">
                <div id="logo-container">
                    <ul className="menu-nav">
                        <li className="content-padding-level3"><Link to="/sample">English results</Link></li>
                        <li className="content-padding-level3"><Link to="/example">French results</Link></li>
                        <li className="content-padding-level3"><Link to="/home">Home</Link></li>
                    </ul>
                </div>
                <div id="mid-top-wrapper" className="center-content content-padding-level2">
                    <h3>News Summarization using Transformers</h3>
                    <h5>EPFL computer science semester project</h5>
                </div>
            </div>);
    }
}