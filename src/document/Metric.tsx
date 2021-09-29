import React from "react";
import "./Metric.css";
import PropTypes from "prop-types";

export default class Metric extends React.Component<any, any>{
    static propTypes = {
        value: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string
    }
    static defaultProps = {
        color: "royalblue",
    }
    render() {
        return (
                <div className="metric-container">
                    <div className="metric-bar-container">
                        <div className="metric-bar" style={{backgroundColor:this.props.color, width:this.props.value + "%"}}/>
                    </div>

                    <div className="metric-span">
                        <span className="metric-name"> {this.props.name}: </span>
                        <span className="metric-value">{this.props.value} %</span>
                    </div>
                </div>)
    }
}