import React from "react";
import "./style.css";

function Results(props) {
    return (
        <div className="container-fluid border-top" id="results-container">{props.children}</div>
    );
}

export default Results;