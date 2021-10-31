import React from "react";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact section" id="contact">
      <div className="circle contact_circleOne"></div>
      <div className="circle contact_circleThree"></div>

      <h2 className="section_title">Contact Me</h2>

      <div className="contact_container bd_grid">
        <form className="contact_form">
          <input
            type="text"
            placeholder="Name"
            required
            id="nameField"
            className="contact_input"
          />
          <input
            type="email"
            placeholder="Name"
            required
            id="emailField"
            className="contact_input"
          />
          <textarea
            rows="10"
            cols="0"
            id="messageField"
            className="contact_input"
          ></textarea>

          <input type="submit" value="Send" className="button contact_button" />
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
