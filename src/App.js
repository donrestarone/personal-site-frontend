import React, { Component } from 'react';
import './Animate.css'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {fetchClientIp} from './services/GetIP'
import {handleNewVisit} from './services/Visitor'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import Aux from './components/HOC/Aux'
import Footer from './components/Footer/Footer'
import IntroductionSplash from './components/Containers/IntroductionSplash'
import Welcome from './components/Containers/Welcome/Welcome'
import ProfessionalProjects from './components/Containers/ProfessionalProjects/ProfessionalProjects'
import PersonalProjects from './components/Containers/PersonalProjects/PersonalProjects'
import Project from './components/Containers/Project/Project'
import ContactModal from './components/Containers/ContactModal/ContactModal'
import Blog from './components/Containers/Blog/Blog'
import AboutMe from './components/Containers/AboutMe/AboutMe'
class App extends Component {
  state = {
    ipAddress: null,
    userAgent: null,
    platform: null,
    languages: null,
    showSplash: true,
    showContact: false,
  }

  contactToggler = () => {
    this.setState(prevState => ({
      showContact: !prevState.showContact
    }))
  }

  closeContactModal = () => {
    this.setState({
      showContact: false
    })
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

  showContactModal = () => {
    let showContactModal = this.state.showContact
    if (showContactModal) {
      return (
        <ContactModal contactToggler={this.contactToggler}></ContactModal>
      )
    }
  }

  renderInterface = () => {

    return (
        <BrowserRouter>
          <Switch>
          <Aux>
            <NavBar contactToggler={this.contactToggler} closeContactModal={this.closeContactModal}></NavBar>
            {this.showContactModal()}
            <Route exact path='/' render={(props) => <Welcome /> }/>
            <Route exact path='/professional-projects' render={(props) => <ProfessionalProjects /> }/>
            <Route exact path='/personal-projects' render={(props) => <PersonalProjects /> }/>
            <Route exact path='/professional-projects/:id' component={Project}/>
            <Route exact path='/personal-projects/:id' component={Project}/>
            <Route exact path='/about/me' component={AboutMe}/>
            <Route exact path='/blog' component={Blog}/>
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
    if (false) {
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
