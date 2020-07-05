import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    flipArrow = () => {
        let arrow = document.getElementById("arrow");
        if (arrow.getAttribute("class") === "arrow-inactive") {
            arrow.setAttribute("class","arrow-active");
        }
        else {
            arrow.setAttribute("class","arrow-inactive");
        }
    }

    render() {
        return (
            <div className="nav-bar">
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/projects">Projects</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </div>
        );
    }
}

export default NavBar;