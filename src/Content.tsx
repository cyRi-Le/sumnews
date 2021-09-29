import React from "react";
import "./Content.css";

export default class Content extends React.Component<any, any>{
    render() {
        return (
            <div className="content-container">
                {this.props.children}
            </div>
        );
    }
}