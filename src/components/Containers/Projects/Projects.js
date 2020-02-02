import React, { Component } from 'react';
import ProfessionalProjects from '../ProfessionalProjects/ProfessionalProjects'
import PersonalProjects from '../PersonalProjects/PersonalProjects'
import './Projects.css'

class Projects extends Component {

  render() {
    return (
      <div className="projects-wrapper">
        <ProfessionalProjects></ProfessionalProjects>
        <PersonalProjects></PersonalProjects>
      </div>
    );
  }
}

export default Projects;
