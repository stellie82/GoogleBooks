import React from "react";
import "./style.css";

function Results(props) {
    return (
        <div className="container-fluid" id="results-container">{props.children}</div>
    );
}

export default Results;