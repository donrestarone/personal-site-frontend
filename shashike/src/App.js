import React, { Component } from 'react';
import './Animate.css'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {fetchClientIp} from './services/GetIP'
import {handleNewVisit} from './services/Visitor'
import {BrowserView,MobileView,isBrowser,isMobile} from "react-device-detect";
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import Aux from './components/HOC/Aux'
import Footer from './components/Footer/Footer'
import IntroductionSplash from './components/Containers/IntroductionSplash'
import Welcome from './components/Containers/Welcome/Welcome'


class App extends Component {
  state = {
    ipAddress: null,
    userAgent: null,
    platform: null,
    languages: null,
    showSplash: true,
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
        // send to redux store and/or sessionstorage in case the user refreshes the page
      })
    }
  }

  renderInterface = () => {

    return (
        <BrowserRouter>
          <Switch>
          <Aux>
            <NavBar></NavBar>
            <Route exact path='/' render={(props) => <Welcome /> }/>
            {/* <Footer></Footer> */}
          </Aux>
          </Switch>
      </BrowserRouter>
      
    )
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
