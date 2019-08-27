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
    </div>
    );
  }
}

export default ContactModal;