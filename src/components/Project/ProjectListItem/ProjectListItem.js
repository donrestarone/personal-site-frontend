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

  const showLinkToSourceCode = () => {
    if (project.hasSource) {
      return <a target="_blank" className="extra-link" rel="noopener noreferrer" href={project.sourceLink}>Source Code</a>
    }
  }

  const linkToLiveSite = () => {
    if (project.hasLiveSite) {
      return <a target="_blank" className="extra-link" rel="noopener noreferrer" href={project.liveSite}>Live Site</a>
    }
  }

  const link = {pathname: project.path, state: {fallback: props.fallback}}
  return (
    <div className="project-list-item-wrapper">
      <div className="project-hero-image-wrapper">
        {showHeroAsset()}
      </div>
      <div className="description-wrapper">
        <Link to={link} className="project-link">{project.title}</Link>
        <p className="project-description">{project.mainCaption}</p>
        {showLinkToSourceCode()}
        {linkToLiveSite()}
      </div>
    </div>
  )
}

export default ProjectListItem;