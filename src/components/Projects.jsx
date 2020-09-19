import React, { Component } from "react";

class Projects extends Component {

    state = {
        fabflix_img: "fabflix-1.png",
        fabflix_img_max: 5,
        golftracker_img: "golftracker-2.png",
        golftracker_img_max: 2
    }

    prevPhoto = (projectImage, projectName) => {
        let projectImageNumber; // Temp store the image tag number
        let newProjectImage;

        // Parse state image name for current project image number
        projectImageNumber = parseInt(projectImage.split("-")[1][0]);
        // If not the first one already, go back one image
        if (projectImageNumber > 1) {
            projectImageNumber--;
            newProjectImage = `${projectName}-${projectImageNumber}.png`;
            this.setState({
                [projectName+"_img"]: newProjectImage
            });
        }
    }

    nextPhoto = (projectImage, projectName) => {
        let projectImageNumber; // Temp store the image tag number
        let projectImageLimit;
        let newProjectImage;

        // Parse state image name for current project image number
        projectImageNumber = parseInt(projectImage.split("-")[1][0]);
        // Get image limit for project
        projectImageLimit = this.state[projectName+"_img_max"];
        // If not the max one already, go up one image
        if (projectImageNumber < projectImageLimit) {
            projectImageNumber++;
            newProjectImage = `${projectName}-${projectImageNumber}.png`;
            this.setState({
                [projectName+"_img"]: newProjectImage
            });
        }
    }


    changePhoto = (event) => {
        const buttonName = event.target.name.split("-");
        const projectName = buttonName[0]; // Get project name from button name
        const operation = buttonName[1]; // Which way to change slideshow
        
        const { fabflix_img, golftracker_img } = this.state;
        
        if (operation === "prev") {
            switch (projectName) {
                case "fabflix":
                    this.prevPhoto(fabflix_img, projectName);
                    break;
                case "golftracker":
                    this.prevPhoto(golftracker_img, projectName);
                    break;
                default:
                    break;
            }
        }
        else if (operation === "next") {
            switch (projectName) {
                case "fabflix":
                    this.nextPhoto(fabflix_img, projectName);
                    break;
                case "golftracker":
                    this.nextPhoto(golftracker_img, projectName);
                    break;
                default:
                    break;
            }
        }
    }

    render() {

        const { fabflix_img, golftracker_img } = this.state;

        return (
            <div className="content-container">
                <h1>Projects</h1>
                <div className="project">
                    <div className="project-image-container">
                        <button className="btn" name="fabflix-prev" onClick={this.changePhoto}>&larr;</button>
                        <img className="project-image" src={"images/"+fabflix_img} alt="fabflix" />
                        <button className="btn" name="fabflix-next" onClick={this.changePhoto}>&rarr;</button>
                    </div>
                    <div className="project-info">
                        <h1>FabFlix</h1>
                        <p>
                           Single page eCommerce web application that allows users to create an account, 
                           browse for movies, and modify their shopping cart to "purchase" quantities 
                           of select titles through Paypal.
                        </p>
                        <div className="project-info-skills">
                            <div className="tech-tag">Java</div>
                            <div className="tech-tag">Jersey</div>
                            <div className="tech-tag">Jackson</div>
                            <div className="tech-tag">Grizzly</div>
                            <div className="tech-tag">Gradle</div>
                            <div className="tech-tag">HTML</div>
                            <div className="tech-tag">CSS</div>
                            <div className="tech-tag">React.js</div>
                            <div className="tech-tag">Node.js</div>
                            <div className="tech-tag">MySQL</div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image-container">
                        <button className="btn" name="golftracker-prev" onClick={this.changePhoto}>&larr;</button>
                        <img className="project-image" src={"images/"+golftracker_img} alt="golftracker"/>
                        <button className="btn" name="golftracker-next" onClick={this.changePhoto}>&rarr;</button>
                    </div>
                    <div className="project-info">
                        <h1>Golf Tracker</h1>
                        <p>
                            Single page web application that allows users to create an account and 
                            manage their digital records of golf scorecards.
                        </p>
                        <div className="project-info-skills">
                            <div className="tech-tag">Java</div>
                            <div className="tech-tag">Spring Boot</div>
                            <div className="tech-tag">HTML</div>
                            <div className="tech-tag">CSS</div>
                            <div className="tech-tag">React.js</div>
                            <div className="tech-tag">Node.js</div>
                            <div className="tech-tag">MySQL</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;