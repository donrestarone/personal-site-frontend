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
   showPersonalProjects()
  )
}

export default PersonalProjects;