import React from 'react';
import {isMobile, isTablet, isBrowser} from 'react-device-detect'
import MainBackgroundImageDesktop from '../../assets/main-background-desktop.png'
import MainBackgroundImageMobile from '../../assets/main-background-mobile.png'

const Aux = (props) => {

  const generateBackgroundImageStyle = () => {
    let style
    if (isBrowser) {
      return style = {
        background: `url(${MainBackgroundImageDesktop}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        height: '100vh',
      }
    }

    if (isMobile) {
      return style = {
        background: `url(${MainBackgroundImageMobile}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        height: '100vh',
      }
    }
  }

  const renderView = () => {
    console.log(props.location.pathname)
    return (
      <div style={generateBackgroundImageStyle()} className="animated zoomIn">
        {props.children}          
      </div>
    )
  }
  return (
    renderView()
  )
}

export default Aux;