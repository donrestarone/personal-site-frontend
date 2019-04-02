import React, { Component } from 'react';
import './Animate.css'
import {fetchClientIp} from './services/GetIP'
import {handleNewVisit} from './services/Visitor'
import {BrowserView,MobileView,isBrowser,isMobile} from "react-device-detect";
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import Aux from './components/HOC/Aux'
import Footer from './components/Footer/Footer'
import IntroductionSplash from './components/Containers/IntroductionSplash'



class App extends Component {
  state = {
    ipAddress: null,
    userAgent: null,
    platform: null,
    languages: null,
    showSplash: true
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
    if (this.state.showSplash) {
      // to prevent spamming the database when the component updates.
      this.postUserInfoToApi()
    }
  }

  postUserInfoToApi = () => {
    let ip = this.state.ipAddress
    let user = this.state.userAgent
    let platform = this.state.platform
    let languages = this.state.languages
    if (ip && user && platform && languages) {
      handleNewVisit(ip, 'location undefined', user, languages, platform)
      .then(response => response.json()).then(object => {
        console.log(object)
        // send to redux store
      })
    }
  }

  renderInterface = () => {
    if (isBrowser) {
      return (
        <Aux>
          <NavBar></NavBar>
          <Footer></Footer>
        </Aux>
        
      )
    } else {
      const style = {
        display: 'grid',
        gridTemplateColumns: '0.1fr 4.5fr',
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
              <Footer isMobile></Footer>
            </div>
          </div>
        </Aux>
      )
    }
  }

  timeOutAnimation = () => {
    // set how long we show the splash screen
    setTimeout(() => {
      this.setState({showSplash: false})
    }, 4350);
  }

  renderApp = () => {
    let showSplash = this.state.showSplash
    this.timeOutAnimation()
    if (showSplash) {
      return (
        <IntroductionSplash></IntroductionSplash>
      )
    } else {
      return this.renderInterface() 
    }
  }
  render() {
    return (
      <div className="App">
        {this.renderApp()}
      </div>
    );
  }
}

export default App;
