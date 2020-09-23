import React, { Component } from "react";
import emailjs from "emailjs-com";

class Contact extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        
        // ('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target, 'e.target [which is the contact form]', 'YOUR_USER_ID');
        emailjs.sendForm('portfolio_contact','template_ihdbzgv', event.target, 'user_GNrc0SHLDknNHqWemrH1y')
          .then(res => {
              console.log(res);
              document.getElementsByTagName("h1")[0].style.display = "none";
              document.getElementsByClassName("contact-body")[0]
              .innerHTML = "<h1>Thanks for the message! We'll be in touch soon!</h1>";
              document.getElementsByClassName("contact-body")[0].style.backgroundColor = "rgb(229, 226, 226)";
          })
          .catch(err => alert(err));
    }

    render() {
        return (
            
            <div className="content-container contact-container">
                <img className="content-bg" src="images/losangeles.png" alt="Los Angeles" />
                <form className="contact-form" onSubmit={this.handleSubmit}>
                    <h1>Contact Me</h1>
                        <div className="contact-body">
                            <div className="contact-form-content">
                                <label className="contact-name-label">NAME</label>
                                <input className="contact-name" name="name" type="text" required/>

                                <label className="contact-email-label">EMAIL</label>
                                <input className="contact-email" name="email" type="email" required/>

                                <label className="contact-phone-label">PHONE</label>
                                <input className="contact-phone" name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>

                                <label className="contact-msg-label">MESSAGE</label>
                                <textarea className="contact-msg" name="message" required></textarea>

                                <button className="btn-contact">SEND</button>
                            </div>
                            <div className="contact-info">
                                <label>EMAIL</label>
                                <p>dctablac@gmail.com</p>
                                <label>PHONE</label>
                                <p>909-763-9475</p>
                            </div>
                        </div>  
                </form>
            </div>
        );
    }
}

export default Contact;