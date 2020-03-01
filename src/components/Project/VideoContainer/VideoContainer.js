import React, { Component } from 'react';
import {isMobile} from 'react-device-detect'

class VideoContainer extends Component {
  renderContext = () => {
    if (isMobile) {
      return <video className={this.props.media.className} src={this.props.media.link} autoPlay controls />
    } else {
      return <video className={this.props.media.className} src={this.props.media.link} autoPlay muted="" playsinline="" controls loop/>
    }
  }
  render() {
    return (
      this.renderContext()
    );
  }
}

export default VideoContainer;