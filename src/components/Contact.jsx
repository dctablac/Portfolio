import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            
            <div className="content-container contact-container">
                <img className="home-bg" src="images/losangeles.png" alt="Los Angeles" />
                <form className="contact-form">
                    <h1>Contact Me</h1>
                    <div className="contact-form-content">
                        <label>Name</label>
                        <input className="contact-name" type="text" />
                        <label>Email</label>
                        <input className="contact-email" type="email"/>
                        <label>Message</label>
                        <textarea className="contact-msg"></textarea>
                        <button className="btn-contact">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;