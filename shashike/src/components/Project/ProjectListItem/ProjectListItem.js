import React from 'react';
import './ProjectListItem.css'
import {Link} from 'react-router-dom'
const ProjectListItem = (props) => {
  let project = props.project
  return (
    <div className="project-list-item-wrapper">
      <div className="project-hero-image-wrapper">
        <video src={project.heroImage} autoPlay muted="" playsinline="" controls loop className="project-hero-image"/>
      </div>
      <div className="description-wrapper">
        <Link to={project.path} className="project-link">{project.title}</Link>
        <p className="project-description">{project.mainCaption}</p>
      </div>
    </div>
  )
}

export default ProjectListItem;