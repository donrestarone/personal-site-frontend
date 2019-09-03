import React, { Component } from 'react';
import './ContactModal.css'
class ContactModal extends Component {

  render() {
    return (
    <div className="contact-modal-wrapper">
      <div className="close-wrapper">
        <button className="close-button" onClick={this.props.contactToggler}>&times;</button>
      </div>
      <div className="contact-details">
        <input className="contact-input-field" placeholder="Name"/>
        <input className="contact-input-field" placeholder="Email Address"/>
      </div>
      <div className="message-body-wrapper">
        <textarea className="contact-input-area" placeholder="message"/>
      </div>
      <div className="contact-submit-button-wrapper">
        <button className="contact-button">Submit</button>
      </div>
      <p>This is still under construction, please contact me on LinkedIn!</p>
      <div className="contact-footer">
        <a href="https://github.com/donrestarone" className="contact-footer-link" rel="noreferrer" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/shashike-jayatunge/" className="contact-footer-link" rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
    </div>
    );
  }
}

export default ContactModal;