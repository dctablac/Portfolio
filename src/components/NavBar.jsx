import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </div>
        );
    }
}

export default NavBar;