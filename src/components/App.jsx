import React, { Component } from "react";

import NavBar from "./NavBar";
import Content from "./Content";

class App extends Component {
    render() {
        return (
            <div className="app">
                <NavBar />
                <Content />
            </div>
        )
    }
}

export default App;
