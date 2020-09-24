import React from "react";
import "./NavBar.css"
    ;
function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
            <a href="/" className="navbar-brand">Employee Directory</a>
            <a href="https://github.com/BMccorm/Employee-Directory"> GitHub Repository
            </a>
        </nav>
    );
}

export default NavBar