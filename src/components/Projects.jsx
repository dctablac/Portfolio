import React, { Component } from "react";

class Projects extends Component {
    render() {
        return (
            <div className="content-container">
                <div className="project">
                    <img className="project-image" src="images/mybrary-1.png" alt=""/>
                    <div className="project-info">
                        <h1>FabFlix</h1>
                        <p>
                           eCommerce web application that allows users to create an account, 
                           browse for movies, and modify their shopping cart to purchase quantities 
                           of select titles through Paypal.
                        </p>
                        <p className="project-info-skills">Java | MySQL | HTML | CSS | Node | React</p>
                    </div>
                </div>
                <div className="project">
                    <img className="project-image" src="images/golftracker-2.png" alt="mem"/>
                    <div className="project-info">
                        <h1>Golf Tracker</h1>
                        <p>
                            Single page web application that allows users to create an account and 
                            manage their digital records of golf scorecards.
                        </p>
                        <p className="project-info-skills">Java | Spring Boot | MySQL | HTML | CSS | Node | React</p>
                    </div>
                </div>
                <div className="project">
                    <img className="project-image" src="images/mybrary-1.png" alt="mem"/>
                    <div className="project-info">
                        <h1>Mybrary</h1>
                        <p>
                            Website that allows users to manage and view a public library of custom 
                            information pertaining to authors and books.
                        </p>
                        <p className="project-info-skills">HTML | CSS | Javascript | EJS | Node | Express | MongoDB</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;