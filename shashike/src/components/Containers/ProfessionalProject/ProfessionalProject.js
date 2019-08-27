import React, { Component } from 'react';
import {professionalProjects} from '../../../Constants/ProfessionalProjectsData'
import {Link} from 'react-router-dom'
import './ProfessionalProject.css'
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
      return project.media.map((asset, index) => {
        if (asset.type === 'video') {
          return (
            <div className="video-demo">
              <video className="video-column" src={asset.link} autoPlay muted="" playsinline="" controls loop/>
              <p>{asset.caption}</p>
            </div>
          )
        } else {
          return (
            <div className="picture-demo">
              <img className="picture-column" src={asset.link}></img>
              <p>{asset.caption}</p>
            </div>
          )
        }
      })
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
    let project = professionalProjects.filter(project => project.id === projectId)[0]
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
    return (
    <div className="show-professional-project-wrapper">
      <Link to="/professional-projects" className="professional-projects-back-button">&#9756;</Link>
      <div><h1>{this.showProjectName()}</h1></div>
      {this.renderInterface()}
    </div>
    
    );
  }
}

export default ProfessionalProject;