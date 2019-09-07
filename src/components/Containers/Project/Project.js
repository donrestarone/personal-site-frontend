import React, { Component } from 'react';
import {professionalProjects} from '../../../Constants/ProfessionalProjectsData'
import {personalProjects} from '../../../Constants/PersonalProjectsData'
import {Link} from 'react-router-dom'
import './ProfessionalProject.css'
import Demo from '../../Project/Demo/Demo'
class ProfessionalProject extends Component {
  state = {
    project: null,
    chosenTopic: 'Features'
  }
  componentDidMount = () => {
    this.setProjectState()
  }

  showFeatures = () => {
    let project = this.readProject()
    if (project) {
      return project.features.map((feature, index) => {
        return (
          <li key={index} className="topic-list-item">{feature}</li>
        )
      })
    }
  }

  showImplementation = () => {
    let project = this.readProject()
    if (project) {
      return project.implementation.map((feature, index) => {
        return (
          <li key={index} className="topic-list-item">{feature}</li>
        )
      })
    }
  }

  showDemo = () => {
    let project = this.readProject()
    if (project) {
      return <Demo project={project}></Demo>
    }
  }

  showTopic = () => {
    let topicType = this.state.chosenTopic
    switch(topicType) {
      case 'Features':
        return (
          <ul>
            {this.showFeatures()}
          </ul>
        )
      case 'Implementation':
        return (
          <ul>
            {this.showImplementation()}
          </ul>
        )
      case 'Demo': 
        return (
          this.showDemo()
        )
    }
  }

  handleTopicClick = (type) => {
    this.setState({chosenTopic: type})
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

  showProjectName = () => {
    if (this.readProject()) {
      return this.readProject().title
    }
  }

  renderInterface = () => {
    return (
      <div className="topic-wrapper">
        <div className="topic-controls">
          <button ref={featuresButton => {this.featuresButton = featuresButton}} className="control-button" onClick={() => {this.handleTopicClick('Features')}}>Features</button>
          <button className="control-button" onClick={() => {this.handleTopicClick('Implementation')}}>Implementation</button>
          <button className="control-button" onClick={() => {this.handleTopicClick('Demo')}}>Demo</button>
        </div>
        <div className="topic-body-wrapper">
          <h1 className="chosen-topic-heading">{this.state.chosenTopic}</h1>
          {this.showTopic()}
        </div>
      </div>
    )
  }
  render() {
    let link = this.props.location.state.fallback
    return (
    <div className="show-professional-project-wrapper">
      <Link to={link} className="professional-projects-back-button">&#9756;</Link>
      <div><h1>{this.showProjectName()}</h1></div>
      {this.renderInterface()}
    </div>
    
    );
  }
}

export default ProfessionalProject;