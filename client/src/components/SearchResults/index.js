import React from "react";
// import "./style.css";

function SearchResults(props) {
    return (
        <div className="container">{props.children}</div>
    );
}

export default SearchResults;