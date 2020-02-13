import React, { Component } from 'react';

class VideoContainer extends Component {
  render() {
    return (
      <video className={this.props.media.className} src={this.props.media.link} controls />
    );
  }
}

export default VideoContainer;