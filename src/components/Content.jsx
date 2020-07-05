import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";


class Content extends Component {
    render() {
        return (
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
            </Switch>
        );
    }
}

export default Content;