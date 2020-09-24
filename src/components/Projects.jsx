import React, { Component } from "react";

class Projects extends Component {

    state = {
        fabflix_index: 0,
        fabflix_media: ["https://www.youtube.com/watch?v=g9-I4du2Lfw", 
                        "fabflix-1.png", 
                        "fabflix-2.png", 
                        "fabflix-3.png", 
                        "fabflix-4.png", 
                        "fabflix-5.png"],
        fabflix_img: "https://www.youtube.com/watch?v=g9-I4du2Lfw",

        golftracker_index: 0,
        golftracker_media: ["golftracker-1.png", 
                            "golftracker-2.png",
                            "golftracker-3.png",
                            "golftracker-4.png",
                            "golftracker-5.png",
                            "golftracker-6.png"],
        golftracker_img: "golftracker-1.png"
        
    }

    prevPhoto = (e) => {
        const projectName = e.target.name;
        const { fabflix_index, fabflix_media, golftracker_index, golftracker_media } = this.state;
        let tempIndex;

        switch (projectName) {
            case "fabflix":
                if (fabflix_index > 0) {
                    tempIndex = fabflix_index - 1;
                    this.setState({
                        fabflix_index: tempIndex,
                        fabflix_img: fabflix_media[tempIndex]
                    })
                }
                break;
            case "golftracker":
                if (golftracker_index > 0) {
                    tempIndex = golftracker_index - 1;
                    this.setState({
                        golftracker_index: tempIndex,
                        golftracker_img: golftracker_media[tempIndex]
                    })
                }
                break;
            default:
                break;
        }
    }

    nextPhoto = (e) => {
        const projectName = e.target.name;
        const { fabflix_index, fabflix_media, golftracker_index, golftracker_media } = this.state;
        let tempIndex;

        switch (projectName) {
            case "fabflix":
                if (fabflix_index < fabflix_media.length - 1) {
                    tempIndex = fabflix_index + 1;
                    this.setState({
                        fabflix_index: tempIndex,
                        fabflix_img: fabflix_media[tempIndex]
                    })
                }
                break;
            case "golftracker":
                if (golftracker_index < golftracker_media.length - 1) {
                    tempIndex = golftracker_index + 1;
                    this.setState({
                        golftracker_index: tempIndex,
                        golftracker_img: golftracker_media[tempIndex]
                    })
                }
                break;
            default:
                break;
        }
    }

    /*
      projectName  : string
      projectTitle : string 
      description  : string
      skills       : string[]
    */
   projectCard = (projectName, projectTitle, description, skills) => {
        const { fabflix_img, fabflix_index, golftracker_img, golftracker_index } = this.state;
        let projectImage;
        let projectIndex;
        let projectUrl;

        switch (projectName) {
            case "fabflix":
                projectImage = fabflix_img;
                projectIndex = fabflix_index;
                break;
            case "golftracker":
                projectImage = golftracker_img;
                projectIndex = golftracker_index;
                projectUrl = "https://the-golf-tracker.herokuapp.com"
                break;
            default:
                break;
        }
        
        return (
            <div className="project">
                <div className="project-image-container">
                    <button className="proj-img-btn" name={projectName} onClick={this.prevPhoto}>&larr;</button>
                    {/* If project is fabflix, show video as first element */}
                    {(projectIndex === 0) && (projectName === "fabflix") &&
                        <iframe className="project-image" title="fabflix" width="760" height="315" src="https://www.youtube.com/embed/g9-I4du2Lfw" 
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe>
                    }
                    {/* If project is fabflix, and user has advanced the slideshow, show images */}
                    {(projectIndex > 0) && (projectName === "fabflix") &&
                        <img className="project-image" src={"images/"+projectImage} alt={projectName} />
                    }
                    {/* All other projects only render images */}
                    {(projectName !== "fabflix") && 
                        <img className="project-image" src={"images/"+projectImage} alt={projectName} />
                    }
                    <button className="proj-img-btn" name={projectName} onClick={this.nextPhoto}>&rarr;</button>
                </div>
                <div className="project-info">
                    <h1>{projectTitle}</h1>
                    <p>
                        {description}
                    </p>
                    {/* Show tags for technologies used in the project */}
                    <div className="project-info-skills">
                        {skills.map((skill, i) => {
                            return <div key={i} className="tech-tag">{skill}</div>
                        })}
                    </div>
                </div>
                <div className="repo-buttons">
                    <a className="btn-repo" href={"http://github.com/dctablac/"+projectTitle} target="_blank" rel="noopener noreferrer">VIEW CODE</a>
                    {(projectName !== "fabflix") &&
                        <a className="btn-repo" href={projectUrl} target="_blank" rel="noopener noreferrer">APP</a>
                    }
                </div>
            </div>
        )
}
zx  
    render() {
        return (
            <div className="content-container">
                <img className="content-bg" src="images/losangeles.png" alt="Los Angeles" />
                <div className="project-container">
                    {this.projectCard(
                        "fabflix", "FabFlix", 
                        "Single page eCommerce web application that allows users to create an account, " +
                        "browse for movies, and modify their shopping cart to \"purchase\" quantities " +
                        "of select titles through Paypal.", 
                        ["Java", "Jersey", "Jackson", "Grizzly", "Gradle", "REST", "HTML", "CSS", "Javascript", "React.js", "Node.js", "MySQL"]
                    )}
                    {this.projectCard(
                        "golftracker", "GolfTracker",
                        "Single page web application that allows users to create an account and " +
                        "manage their digital records of golf scorecards.",
                        ["Java", "Spring Boot", "REST", "HTML", "CSS", "Javascript", "React.js", "Node.js", "MySQL"]
                    )}
                </div>    
            </div>
        );
    }
}

export default Projects;