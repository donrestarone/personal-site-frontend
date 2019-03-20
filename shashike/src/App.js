import React, { Component } from 'react';
import {fetchClientIp} from './services/GetIP'
import {handleNewVisit} from './services/Visitor'

class App extends Component {
  state = {
    ipAddress: null,
    userAgent: null,
    platform: null,
    languages: null
  }

  initializeUserDetails = () => {
    let userAgent = `${window.navigator.vendor} ${window.navigator.userAgent}`
    let platform = `${window.navigator.platform}`
    let languages = `${window.navigator.language} ${window.navigator.languages.toString()}`
    this.setState({
      userAgent, 
      platform, 
      languages
    })
    fetchClientIp().then(response => response.json())
    .then(object => {
      if (object.ip) {
        let ipAddress = object.ip
        this.setState({ipAddress})
      }
    })

  }
  
  componentDidMount = () => {
    this.initializeUserDetails()
  }

  componentDidUpdate = () => {
    this.postUserInfoToApi()
  }

  postUserInfoToApi = () => {
    let ip = this.state.ipAddress
    let user = this.state.userAgent
    let platform = this.state.platform
    let languages = this.state.languages
    if (ip && user && platform && languages) {
      handleNewVisit(ip, 'location undefined', user, languages, platform)
    }
  }
  render() {
    
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
