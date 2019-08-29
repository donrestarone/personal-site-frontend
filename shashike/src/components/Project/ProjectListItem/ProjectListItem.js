import React from 'react';
import './ProjectListItem.css'
import {Link} from 'react-router-dom'
const ProjectListItem = (props) => {
  let project = props.project
  const showHeroAsset = () => {
    if (project.heroAssetType === 'video') {
      return (
        <video src={project.heroAsset} autoPlay muted="" playsinline="" controls loop className="project-hero-image"/>
      )
    } else {
      return (
        <img className="project-hero-image" src={project.heroAsset}/>
      )
    }
    
  }
  return (
    <div className="project-list-item-wrapper">
      <div className="project-hero-image-wrapper">
        {showHeroAsset()}
      </div>
      <div className="description-wrapper">
        <Link to={project.path} className="project-link">{project.title}</Link>
        <p className="project-description">{project.mainCaption}</p>
      </div>
    </div>
  )
}

export default ProjectListItem;