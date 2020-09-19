import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="content-container">
                <div id="home-text">
                    <h3 id="home-greeting">Hi. My name is</h3>
                    <h1 id="home-name">Dan Tablac</h1>
                    <h3 id="home-statement">I am a software developer looking to construct robust websites and applications.</h3>
                </div>
            </div>
        );
    }
}

export default Home;