import React from 'react';
import {isMobile, isTablet, isBrowser} from 'react-device-detect'
import MainBackgroundImageDesktop from '../../assets/main-background-desktop.png'
import MainBackgroundImageMobile from '../../assets/main-background-mobile.png'

const Aux = (props) => {

  const generateBackground = () => {
    let path = props.location.pathname
    switch(path) {
      case '/projects':
        return 'black'
      default: 
        return `url(${ isBrowser ? MainBackgroundImageDesktop : MainBackgroundImageMobile}) no-repeat center center fixed`
    }
  }

  const generateBackgroundSettings = () => {
    let path = props.location.pathname
    switch(path) {
      case '/projects':
        return null
      default: 
        return {
          backgroundSize: 'cover',
          height: '100vh',
        }
    } 
  }

  const generateBackgroundImageStyle = () => {
    let style = {
      background: generateBackground(),
      ...generateBackgroundSettings()
    }
    return style
  }

  const renderView = () => {
    generateBackground()
    return (
      <div style={generateBackgroundImageStyle()} className="animated pulse">
        {props.children}          
      </div>
    )
  }
  return (
    renderView()
  )
}

export default Aux;