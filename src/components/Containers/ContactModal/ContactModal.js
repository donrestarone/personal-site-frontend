import React, { Component } from 'react';
import {createInquiry} from '../../../services/Inquiry'
import './ContactModal.css'
class ContactModal extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  nameChangeHandler = (e) => {
    let name = e.target.value
    this.setState({name})
  }

  emailChangeHandler = (e) => {
    let email = e.target.value
    this.setState({email})
  }

  messageChangeHandler = (e) => {
    let message = e.target.value
    this.setState({message})
  }

  inquiryClickHandler = () => {
    let name = this.state.name
    let email = this.state.email
    let message = this.state.message
    if (name && email && message) {
      createInquiry(name, email, message).then(response => response.json())
      .then(object => {
        if (object.code === 201) {
          // close modal 
          this.props.contactToggler()
          this.cleanUp()
          alert('your inquiry has been sent!')
        }
      })
    } else {
      alert('please fill out all 3 fields')
    }
  }

  cleanUp = () => {
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }
  render() {
    return (
    <div className="contact-modal-wrapper">
      <div className="close-wrapper">
        <button className="close-button" onClick={this.props.contactToggler}>&times;</button>
      </div>
      <div className="contact-details">
        <input className="contact-input-field" placeholder="Name" onChange={this.nameChangeHandler} value={this.state.name}/>
        <input className="contact-input-field" placeholder="Email Address" onChange={this.emailChangeHandler} value={this.state.email}/>
      </div>
      <div className="message-body-wrapper">
        <textarea className="contact-input-area" placeholder="message" onChange={this.messageChangeHandler} value={this.state.message}/>
      </div>
      <div className="contact-submit-button-wrapper">
        <button className="contact-button" onClick={this.inquiryClickHandler}>Submit</button>
      </div>
      <div className="contact-footer">
        <a href="https://github.com/donrestarone" className="contact-footer-link" rel="noreferrer" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/shashike-jayatunge/" className="contact-footer-link" rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
    </div>
    );
  }
}

export default ContactModal;