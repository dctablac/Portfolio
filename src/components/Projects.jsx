import React, { Component } from "react";

class Projects extends Component {

    state = {
        fabflix_img: "fabflix-1.png",
        golftracker_img: "golftracker-2.png"
    }

    render() {

        const { fabflix_img, golftracker_img } = this.state;

        return (
            <div className="content-container">
                <h1>Projects</h1>
                <div className="project">
                    <div className="project-image-container">
                        <img className="project-image" src={"images/"+fabflix_img} alt="fabflix" />
                    </div>
                    <div className="project-info">
                        <h1>FabFlix</h1>
                        <p>
                           Single page eCommerce web application that allows users to create an account, 
                           browse for movies, and modify their shopping cart to "purchase" quantities 
                           of select titles through Paypal.
                        </p>
                        <p className="project-info-skills">Java | MySQL | HTML | CSS | Node | React</p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image-container">
                        <img className="project-image" src={"images/"+golftracker_img} alt="golftracker"/>
                    </div>
                    <div className="project-info">
                        <h1>Golf Tracker</h1>
                        <p>
                            Single page web application that allows users to create an account and 
                            manage their digital records of golf scorecards.
                        </p>
                        <p className="project-info-skills">Java | Spring Boot | MySQL | HTML | CSS | Node | React</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;