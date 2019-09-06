import React from 'react';
import PersonalProject from './PersonalProject/PersonalProject'
import {personalProjects} from '../../../Constants/PersonalProjectsData'
import ProjectListItem from '../../Project/ProjectListItem/ProjectListItem'
const PersonalProjects = (props) => {
  const showPersonalProjects = () => {
    return personalProjects.map((project, index) => {
      return (
        <ProjectListItem project={project} key={index}></ProjectListItem>
      )
    })
  }
  return (
    <div className="animated fadeInUpBig professional-projects-container-wrapper">
      <div className="heading-wrapper"><h1 className="professional-heading">Personal Projects</h1></div>
      <div className="professional-projects-container">
        {showPersonalProjects()}
      </div>
    </div>
  )
}

export default PersonalProjects;