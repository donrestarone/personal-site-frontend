import React, { Component } from 'react';
import {professionalProjects} from '../../../Constants/ProfessionalProjectsData'
import {personalProjects} from '../../../Constants/PersonalProjectsData'
import {Link} from 'react-router-dom'
import backButton from '../../../assets/back-button.png'
import ImageContainer from '../../Project/ImageContainer/ImageContainer'
import './Project.css'
import Demo from '../../Project/Demo/Demo'


class Project extends Component {
  state = {
    project: null,
  }

  componentDidMount = () => {
    this.setProjectState()
  }

  readProject = () => {
    return this.state.project
  }

  setProjectState = () => {
    let projectId = this.props.match.params.id
    let projects = professionalProjects.concat(personalProjects)
    let project = projects.filter(project => project.id === projectId)[0]
    this.setState({project})
  }

  renderProjectTitle = () => {
    let project = this.readProject()
    if (project) {
      return <h1 className="project-heading">{project.title}</h1>
    }
  }

  renderFeatures = () => {
    let project = this.readProject()
    if (project) {
      return project.features.map((f, i) => {
      return <li className="project-feature-list-item">{f}</li>
      })
    }
  }

  renderTechnologies = () => {
    let project = this.readProject()
    if (project) {
      return project.technologies.map((t, i) => {
        let image = {
          link: t,
          className: 'project-technology-image'
        }
        return <ImageContainer image={image}></ImageContainer>
      })
    }
  }

  renderImplementation = () => {
    let project = this.readProject()
    if (project) {
      return project.implementation.map((f, i) => {
      return <li className="project-feature-list-item">{f}</li>
      })
    }
  }


  render() {
    let link = this.props.location.state.fallback
    let backButtonStyle = {
      background: `url(${backButton}) no-repeat center`,
      backgroundSize: '300px',
      width: '50%',
      height: '50%',
      display: 'block'
    }
    return (
    <div className="show-professional-project-wrapper animated fadeIn">
      <div className="project-heading-wrapper">
        <Link to={link} className="professional-projects-back-button-wrapper">
          <img src={backButton} className="professional-projects-back-button">
          </img>
        </Link>
        {this.renderProjectTitle()}
      </div>
      <div className="project-info-wrapper">
        <div className="project-features-wrapper">
          <h1 className="project-features-heading">Features</h1>
          <ul className="project-features-list">
            {this.renderFeatures()}
          </ul>
        </div>
        <div className="project-features-wrapper">
          <h1 className="project-features-heading">Implementation</h1>
          <div className="project-features-technologies-wrapper">
            {this.renderTechnologies()}
          </div>
          <ul className="project-features-list">
            {this.renderImplementation()}
          </ul>
        </div>
      </div>
    </div>
    );
  }
}

export default Project;