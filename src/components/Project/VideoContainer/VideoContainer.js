import React, { Component } from 'react';

class VideoContainer extends Component {
  render() {
    return (
      <video className={this.props.media.className} src={this.props.media.link} autoPlay muted="" playsinline="" controls loop/>
    );
  }
}

export default VideoContainer;