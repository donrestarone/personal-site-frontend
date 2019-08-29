import React from 'react';
import './PersonalProject.css'
const PersonalProject = (props) => {
  let project = props.project
  return (
    <div className="personal-project-wrapper">
      <div className="personal-project-heading-wrapper"><h1 className="personal-project-heading">{project.title}</h1></div>
      <div className="personal-project-description-wrapper">
        <p className="personal-project-description">{project.description}</p>
      </div>
      <div className="personal-project-link-wrapper">
        <a className="personal-project-link" rel="noreferrer" target="_blank" href={project.projectLink}>Live Site</a>
        <a className="personal-project-link" rel="noreferrer" target="_blank" href={project.githubLink}>Source Code</a>
      </div>
    </div>
  )
}

export default PersonalProject;