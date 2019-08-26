import React from 'react';
import './welcome.css'

const Welcome = (props) => {
  return (
    <div className="project-type-wrapper">
      <div className="professional-projects-wrapper">
        <h1>Professional Projects</h1>
      </div>
      <div className="divider"></div>
      <div className="personal-projects-wrapper">
        <h1>Personal Projects</h1> 
      </div>
    </div>
  )
}

export default Welcome;