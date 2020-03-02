import React, { Component } from 'react';
import Spinner from '../../Spinner/Spinner'

class ImageContainer extends Component {
  state = {
    loaded: false
  }

  handleLoad = () => {
    this.setState((prevState) => {
      if (!prevState.loaded) {
        return {
          loaded: true
        }
      }
    })
  }

  renderImageContext = () => {
    let loadingStyle = {
      display: !this.state.loaded ? 'block' : 'none'
    }
    if (this.state.loaded) {
      return (
        <img src={this.props.image.link} className={this.props.image.className}></img>
      )
    } else {
      return (
        <Spinner loadingStyle={loadingStyle}></Spinner>
      )
    }
  }

  render() {
    return (
      <>
        <img style={{display: 'none'}} onLoad={ this.handleLoad } src={this.props.image.link} className={this.props.image.className}></img>
        {this.renderImageContext()}
      </>
    );
  }
}

export default ImageContainer;