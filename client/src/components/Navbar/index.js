import React from "react";
// import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar sticky-top navbar-light bg-light nav-justified">
            <li className="nav-item">
                <a className="nav-link" href="/">Google Books</a>
            </li>
            <li className="nav-item">
                <p className="nav-link disabled" id="saved" href="/saved">Saved</p>
            </li>
        </nav>
    );
}

export default Navbar;  