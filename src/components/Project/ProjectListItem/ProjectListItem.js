import React from 'react';
import './ProjectListItem.css'
import {Link} from 'react-router-dom'
import ImageContainer from '../ImageContainer/ImageContainer'

const ProjectListItem = (props) => {
  let project = props.project
  const showHeroAsset = () => {
    if (project.heroAssetType === 'video') {
      return (
        <video src={project.heroAsset} autoPlay muted="" playsinline="" controls loop className="project-hero-image"/>
      )
    } else {
      let image = {
        link: project.heroAsset,
        className: 'project-hero-image'
      }
      return (
        <ImageContainer className="project-hero-image" image={image}/>
      )
    }
  }

  const showLinkToSourceCode = () => {
    if (project.hasSource) {
      return <a target="_blank" className="extra-link" rel="noopener noreferrer" href={project.sourceLink} onClick={(e) => {e.stopPropagation()}}>Source Code</a>
    }
  }

  const linkToLiveSite = () => {
    if (project.hasLiveSite) {
      return <a target="_blank" className="extra-link" rel="noopener noreferrer" href={project.liveSite} onClick={(e) => {e.stopPropagation()}}>Live Site</a>
    }
  }

  const link = {pathname: project.path, state: {fallback: props.fallback}}
  return (
    <Link to={link} style={{textDecoration: 'none'}} className="project-list-item-wrapper">
      <div className="project-hero-image-wrapper">
        {showHeroAsset()}
      </div>
      <div className="description-wrapper">
        <Link to={link} className="project-link">{project.title}</Link>
        <p className="project-description">{project.mainCaption}</p>
        {showLinkToSourceCode()}
        {linkToLiveSite()}
      </div>
    </Link>
  )
}

export default ProjectListItem;