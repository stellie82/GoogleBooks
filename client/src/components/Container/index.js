// Required modules and files
import React from "react";
import "./style.css";

function Container({children}) {
    return (
        <div className="container-fluid">{children}</div>
    );
}

export default Container;

