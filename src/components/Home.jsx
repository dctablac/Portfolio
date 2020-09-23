import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div id="home-container" className="content-container">
                <img className="content-bg" src="images/losangeles.png" alt="Los Angeles" />
                <div id="home-text">
                    <p id="home-name">DAN TABLAC</p>
                    <hr className="home-line"/>
                    <p id="home-statement">
                        Software developer looking to create websites and web applications
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;