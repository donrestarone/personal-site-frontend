import React from 'react';
import PersonalProject from './PersonalProject/PersonalProject'
import {personalProjects} from '../../../Constants/PersonalProjectsData'
const PersonalProjects = (props) => {
  const showPersonalProjects = () => {
    return personalProjects.map((project, index) => {
      return (
        <PersonalProject project={project} key={index}></PersonalProject>
      )
    })
  }
  return (
   showPersonalProjects()
  )
}

export default PersonalProjects;