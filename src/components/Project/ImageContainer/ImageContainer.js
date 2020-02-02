import React, { Component } from 'react';
import Spinner from '../../Spinner/Spinner'

class ImageContainer extends Component {
  state = {
    loaded: false
  }

  handleLoad = () => {
    this.setState({
      loaded: true
    })
  }

  renderImageContext = () => {
    let loadedStyle = {
      display: this.state.loaded ? 'block' : 'none'
    }
    let loadingStyle = {
      display: !this.state.loaded ? 'block' : 'none'
    }

    return (
      <>
      <Spinner loadingStyle={loadingStyle}></Spinner>
      <div style={loadedStyle}>
        <img onLoad={ this.handleLoad } src={this.props.image.link} className={this.props.image.className}></img>
      </div>
      </>
    )
  }

  render() {
    return (
      this.renderImageContext()
    );
  }
}

export default ImageContainer;