import React, { Component } from 'react';
import './welcome.css'
import {Link} from 'react-router-dom'

class Welcome extends Component {
  render() {
    return (
      <div className="animated zoomIn wrapper" ref={welcomeContainer => {this.welcomeContainer = welcomeContainer}} >
        <div className="intro-text-wrapper">          
          <p className="intro-block-text"> <span className="intro-hi">Hi,</span> I'm <span className="intro-signature">Shashike Jayatunge</span> </p>
          <p className="intro-block-text">Full-stack <span className="intro-dev-text">developer</span> &amp; <span className="intro-hacker-text">hacker</span></p>
          <p className="intro-block-text-small">If you have an idea for an MVP, let me can bring it to life</p>
        </div>
      </div>
    );
  }
}

export default Welcome;