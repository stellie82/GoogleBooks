import React from "react";
// import "./style.css";

function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="saved" href="/saved">Saved Books</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;