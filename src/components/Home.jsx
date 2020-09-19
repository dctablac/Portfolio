import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="content-container home-container">
                <img id="home-bg" src="images/losangeles.png" alt="Los Angeles" />
                <div id="home-text">
                    <h3 id="home-greeting">Hi. My name is</h3>
                    <h2 id="home-name">Dan Tablac.</h2>
                    <h3 id="home-statement">
                        I am a software developer that creates robust websites and web applications.
                    </h3>
                </div>
            </div>
        );
    }
}

export default Home;