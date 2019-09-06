import React from 'react';
import './ProfessionalProjects.css'
import ProjectListItem from '../../Project/ProjectListItem/ProjectListItem'
import {professionalProjects} from '../../../Constants/ProfessionalProjectsData'
const ProfessionalProjects = (props) => {
  const showProjects = () => {
    return professionalProjects.map((project, index) => {
      return <ProjectListItem project={project} key={index} fallback={'/professional-projects'}></ProjectListItem>
    })
  }

  return (
    <div className="animated fadeInUpBig professional-projects-container-wrapper">
      <div className="heading-wrapper"><h1 className="professional-heading">Professional Projects</h1></div>
      <div className="professional-projects-container">
        {showProjects()}
      </div>
    </div>
  )
}

export default ProfessionalProjects;