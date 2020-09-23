import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div className="content-container">
                <img className="content-bg" src="images/losangeles.png" alt="Los Angeles" />
                <div className="about-container">
                    <div className="about-text-container">
                        <img className="about-pic" src="images/headshot.jpeg" alt="Dan" />
                        <div className="social-media">
                            <a href="http://www.github.com/dctablac">
                                <img className="social-media-icon" src="images/github.png" alt="github" />
                            </a>
                            <a href="http://www.linkedin.com/in/dan-christopher-tablac-a7a26217a">
                                <img className="social-media-icon" src="images/linkedin.png" alt="linkedin" />
                            </a>
                        </div>
                        <a href="Resume.pdf" className="resume" target="_blank">RESUME</a>
                        <h1>About Me</h1>
                        <p>
                            Hello! My name is Dan Tablac, and I am a recent graduate from the University of 
                            California, Irvine. In June 2020, I finished my undergraduate degree with a B.S. in Computer 
                            Science, and from then on, my passion has cultivated into developing web applications and websites.
                        </p>
                        <h1>Skills</h1>
                        <p>
                            For backend development, I am proficient in Java and Python, but I am familiar with
                            C++ and C#, stemming from experience in coursework. I have experience 
                            with creating RESTful microservices as well, using MySQL for database access. 
                            For frontend development, I have proficiency with HTML, CSS, and Javascript, with a 
                            solid grasp of React.js to create single page applications.
                        </p>
                        <h1>Goal</h1>
                        <p>
                            My main goal in pursuing a career in web development is to become well versed in technology
                            to create helpful tools that entertain or suit the needs of any client.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;