import React, { Component } from 'react';
import {fetchClientIp} from './services/GetIP'
import {handleNewVisit} from './services/Visitor'
import {BrowserView,MobileView,isBrowser,isMobile} from "react-device-detect";
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import Aux from './components/HOC/Aux'
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

  renderInterface = () => {
    if (isBrowser) {
      return (
        <Aux>
          <NavBar></NavBar>
        </Aux>
        
      )
    } else {
      const style = {
        display: 'grid',
        gridTemplateColumns: '0.5fr 4.5fr',
        gridTemplateRows: '1fr',
        gridTemplateAreas: ". ."
      }
      return (
        <Aux isMobile>
          <div style={style}>
            <div>
              <SideBar></SideBar>
            </div>
            <div>
              rest of the stuff here
            </div>
          </div>
          
        </Aux>
      )
    }
  }
  render() {
    return (
      <div className="App">
        {this.renderInterface()}
      </div>
    );
  }
}

export default App;
