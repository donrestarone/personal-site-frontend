import React, { Component } from 'react';
import './welcome.css'
import {Link} from 'react-router-dom'


class Welcome extends Component {
  render() {
    return (
      <div className="project-type-wrapper" ref={welcomeContainer => {this.welcomeContainer = welcomeContainer}} >
        <div className="professional-projects-wrapper">
          <Link to="/professional-projects" className="projects-gateway">Professional Projects</Link>
        </div>
        <div className="divider"></div>
        <div className="personal-projects-wrapper">
          <Link to="/personal-projects" className="projects-gateway">Personal Projects</Link> 
        </div>
      </div>
    );
  }
}

export default Welcome;