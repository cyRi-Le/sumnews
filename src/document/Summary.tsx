import React from "react";
import "./Summary.css";
interface SummaryProps {
    type: string,
    content: string
}

export default function Summary(props:SummaryProps){
    return (
        <div className="summary-container">
            <h5 className="summary-type">{props.type}</h5>
            <span className="summary-content" dangerouslySetInnerHTML={{__html:props.content}}>
            </span>
        </div>)
}