import React from 'react';
import {isMobile, isTablet, isBrowser} from 'react-device-detect'
import MainBackgroundImageDesktop from '../../assets/main-background-desktop.png'
import MainBackgroundImageMobile from '../../assets/main-background-mobile.png'
import MainBackgroundImageTablet from '../../assets/main-background-tablet.png'

const Aux = (props) => {

  const generateBackground = () => {
    let path = props.location.pathname
    switch(path) {
      case '/':
        return selectBackgroundAssetType()
      case '/about/me':
        return selectBackgroundAssetType()
      default: 
        return 'black'
    }
  }

  const selectBackgroundAssetType = () => {
    if (isBrowser) {
      return `url(${MainBackgroundImageDesktop}) no-repeat center center fixed`
    }
    
    if (isTablet) {
      return `url(${MainBackgroundImageTablet}) no-repeat center center fixed`
    }
    
    if (isMobile) {
      return `url(${MainBackgroundImageMobile}) no-repeat center center fixed`
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