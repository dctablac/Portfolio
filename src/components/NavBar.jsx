import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {

    // Highlight active tab in navbar
    showActiveTab = (e) => {
        const navs = document.getElementsByClassName("nav-link");
        // Cast HTMLCollection as Array and loop through
        Array.from(navs).forEach(nav => {
            nav.style.textDecoration = "none";
            nav.style.color = "grey";
        })
        document.getElementById(e.target.id).style.textDecoration = "underline";
        document.getElementById(e.target.id).style.color = "white";
    }

    // On page load or refresh, highlight active tab using window.location.href
    componentDidMount() {
        const urlParts = window.location.href.split('/');
        const last = urlParts.length - 1;
        
        // If not on first home page load
        const pageInUrl = document.getElementById(urlParts[last]);
        if (pageInUrl != null) {
            pageInUrl.style.textDecoration = "underline";
            pageInUrl.style.color = "white";
        }
       
    }

    render() {
        return (
            <nav className="nav-bar">
                <NavLink id="home" className="nav-link" to="/home" onClick={this.showActiveTab}>Home</NavLink>
                <NavLink id="about" className="nav-link" to="/about" onClick={this.showActiveTab}>About</NavLink>
                <NavLink id="projects" className="nav-link" to="/projects" onClick={this.showActiveTab}>Projects</NavLink>
                <NavLink id="contact" className="nav-link" to="/contact" onClick={this.showActiveTab}>Contact</NavLink>
            </nav>
        );
    }
}

export default NavBar;