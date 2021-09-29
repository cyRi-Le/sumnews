import React from "react";
import "./ButtonLink.css";

export default function ButtonLink(props:any){

    return (
        <div className="button-link-container">
            <a className="button-link" {...props}>{props.children}</a>
        </div>)
}