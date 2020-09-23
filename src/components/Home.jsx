import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div id="home-container" className="content-container">
                <img className="content-bg" src="images/losangeles.png" alt="Los Angeles" />
                <div id="home-text">
                    <h3 id="home-greeting">Hi. My name is</h3>
                    <h3 id="home-name">Dan Tablac.</h3>
                    <hr className="home-line"/>
                    <h3 id="home-statement">
                        I am a software developer looking to create websites and web applications.
                    </h3>
                </div>
            </div>
        );
    }
}

export default Home;